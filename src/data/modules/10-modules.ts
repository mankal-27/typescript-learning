import type { Module } from "../../types";

const mod: Module = {
  slug: "modules",
  order: 10,
  title: "Modules & Organizing Code",
  level: "Advanced",
  icon: "FolderTree",
  summary:
    "import/export syntax, default vs. named exports, and how TypeScript projects are typically organized.",
  sections: [
    {
      heading: "Named and default exports",
      paragraphs: [
        "Any file with a top-level import or export is treated as a module — its variables aren't global. Named exports let you export multiple things per file; a default export marks one 'main' thing.",
      ],
      example: {
        title: "Exporting from a module (conceptual — normally split across files)",
        code: `// --- math.ts ---\nexport function add(a: number, b: number) {\n  return a + b;\n}\nexport const PI = 3.14159;\n\nexport default class Calculator {\n  history: number[] = [];\n  compute(a: number, b: number) {\n    const result = add(a, b);\n    this.history.push(result);\n    return result;\n  }\n}\n\n// --- app.ts ---\n// import Calculator, { add, PI } from "./math";\n\nconst calc = new Calculator();\nconsole.log(calc.compute(2, 3));\nconsole.log(add(PI, 1));\n`,
      },
    },
    {
      heading: "Type-only imports and exports",
      paragraphs: [
        "When you're importing something purely for its type (not its runtime value), TypeScript lets you mark that explicitly with 'import type'. This helps bundlers strip type-only imports cleanly and makes intent obvious.",
      ],
      example: {
        title: "import type",
        code: `interface Config {\n  apiUrl: string;\n  retries: number;\n}\n\n// import type { Config } from "./config";\n// (shown inline here since this playground is a single file)\n\nfunction loadConfig(): Config {\n  return { apiUrl: "https://api.example.com", retries: 3 };\n}\n\nconsole.log(loadConfig());\n`,
      },
    },
    {
      heading: "Organizing a real project",
      paragraphs: [
        "Most TypeScript projects group code by feature: types.ts for shared interfaces, one file per component/module, and an index.ts that re-exports the public surface of a folder. Keeping types close to where they're used (and sharing only what needs to be shared) keeps large codebases navigable.",
      ],
    },
  ],
  quiz: [
    {
      question: "How many default exports can a single module have?",
      options: ["Unlimited", "Exactly one", "Zero, only named exports are allowed", "Two"],
      correctIndex: 1,
      explanation:
        "A module can have at most one default export, but as many named exports as you like.",
    },
    {
      question: "What is 'import type' used for?",
      options: [
        "Importing a value at runtime",
        "Importing something purely for its type, with no runtime footprint",
        "Importing a whole npm package",
        "It's not valid TypeScript syntax",
      ],
      correctIndex: 1,
      explanation:
        "import type signals that the import is type-only and can be safely erased when compiling to JavaScript.",
    },
  ],
};

export default mod;
