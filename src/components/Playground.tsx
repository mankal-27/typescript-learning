import { useRef, useState } from "react";
import Editor, { type OnMount } from "@monaco-editor/react";
import type * as TS from "typescript";

interface PlaygroundProps {
  title: string;
  code: string;
}

interface RunResult {
  logs: string[];
  error: string | null;
}

function formatArg(arg: unknown): string {
  if (typeof arg === "string") return arg;
  if (arg instanceof Error) return `${arg.name}: ${arg.message}`;
  try {
    return JSON.stringify(arg, null, 2) ?? String(arg);
  } catch {
    return String(arg);
  }
}

function runJs(code: string): RunResult {
  const logs: string[] = [];
  const original = { log: console.log, error: console.error, warn: console.warn };
  console.log = (...args: unknown[]) => logs.push(args.map(formatArg).join(" "));
  console.error = (...args: unknown[]) => logs.push("✕ " + args.map(formatArg).join(" "));
  console.warn = (...args: unknown[]) => logs.push("⚠ " + args.map(formatArg).join(" "));

  let error: string | null = null;
  try {
    // eslint-disable-next-line no-new-func
    const runner = new Function(code);
    runner();
  } catch (e) {
    error = e instanceof Error ? `${e.name}: ${e.message}` : String(e);
  } finally {
    console.log = original.log;
    console.error = original.error;
    console.warn = original.warn;
  }
  return { logs, error };
}

let playgroundInstance = 0;
let tsModulePromise: Promise<typeof TS> | null = null;
function loadTs(): Promise<typeof TS> {
  if (!tsModulePromise) {
    tsModulePromise = import("typescript");
  }
  return tsModulePromise;
}

export default function Playground({ title, code }: PlaygroundProps) {
  const [source, setSource] = useState(code);
  const [output, setOutput] = useState<string[]>([]);
  const [runError, setRunError] = useState<string | null>(null);
  const [hasRun, setHasRun] = useState(false);
  const [running, setRunning] = useState(false);
  const idRef = useRef(`playground-${playgroundInstance++}`);

  const handleMount: OnMount = (editor) => {
    editor.updateOptions({ minimap: { enabled: false } });
  };

  async function handleRun() {
    setHasRun(true);
    setRunning(true);
    try {
      const ts = await loadTs();
      const transpiled = ts.transpileModule(source, {
        compilerOptions: {
          target: ts.ScriptTarget.ES2022,
          module: ts.ModuleKind.None,
          jsx: ts.JsxEmit.None,
        },
        reportDiagnostics: false,
      });
      const result = runJs(transpiled.outputText);
      setOutput(result.logs);
      setRunError(result.error);
    } catch (e) {
      setOutput([]);
      setRunError(e instanceof Error ? e.message : String(e));
    } finally {
      setRunning(false);
    }
  }

  function handleReset() {
    setSource(code);
    setOutput([]);
    setRunError(null);
    setHasRun(false);
  }

  return (
    <div className="playground" id={idRef.current}>
      <div className="playground-header">
        <span className="playground-title">{title}</span>
        <div className="playground-actions">
          <button type="button" className="btn btn-ghost" onClick={handleReset}>
            Reset
          </button>
          <button type="button" className="btn btn-primary" onClick={handleRun} disabled={running}>
            {running ? "Running…" : "▶ Run"}
          </button>
        </div>
      </div>
      <div className="playground-editor">
        <Editor
          height="260px"
          defaultLanguage="typescript"
          value={source}
          theme="vs-dark"
          onChange={(value) => setSource(value ?? "")}
          onMount={handleMount}
          options={{
            fontSize: 13,
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 2,
            padding: { top: 12 },
          }}
        />
      </div>
      {hasRun && (
        <div className="playground-output">
          <div className="playground-output-label">Console output</div>
          {runError && <div className="output-line output-error">✕ {runError}</div>}
          {!runError && output.length === 0 && (
            <div className="output-line output-muted">(no console output)</div>
          )}
          {output.map((line, i) => (
            <div className="output-line" key={i}>
              {line}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
