import type { Module } from "../../types";

const mod: Module = {
  slug: "real-world",
  order: 12,
  title: "Real-World TypeScript",
  level: "Advanced",
  icon: "Trophy",
  summary:
    "Strictness settings, working with untyped JS libraries, and where to go next on your path to mastery.",
  sections: [
    {
      heading: "Turn strict mode on — and keep it on",
      paragraphs: [
        "The single highest-leverage setting in any TypeScript project is \"strict\": true in tsconfig.json. It bundles together strictNullChecks, noImplicitAny, strictFunctionTypes, and more. Projects that start strict stay far more maintainable than projects that try to add strictness later.",
      ],
      example: {
        title: "noImplicitAny catches missing types",
        code: `// With "noImplicitAny": true, a parameter with no\n// annotation and no inferable type is an error:\n//\n// function double(x) {   // Error: x implicitly has an 'any' type\n//   return x * 2;\n// }\n\nfunction double(x: number): number {\n  return x * 2;\n}\n\nconsole.log(double(21));\n`,
      },
    },
    {
      heading: "Working with JavaScript libraries",
      paragraphs: [
        "Most popular JS libraries ship type declarations (.d.ts files), either bundled or via the community-maintained @types packages (e.g. npm install -D @types/lodash). Declaration files describe a library's shape without containing any implementation — letting TypeScript type-check code that calls into plain JavaScript.",
      ],
      example: {
        title: "A minimal hand-written declaration file (conceptual)",
        code: `// Normally this would live in a separate "my-lib.d.ts" file\ndeclare module "my-lib" {\n  export function greet(name: string): string;\n}\n\n// Elsewhere in your app, after "import { greet } from 'my-lib'":\n// TypeScript now knows greet's signature even though\n// my-lib itself is plain, untyped JavaScript.\n\ninterface Greeter {\n  greet(name: string): string;\n}\nconst fakeLib: Greeter = { greet: (n) => \`Hi \${n}\` };\nconsole.log(fakeLib.greet("world"));\n`,
      },
    },
    {
      heading: "Type assertions — use sparingly",
      paragraphs: [
        "Sometimes you know more about a value's type than TypeScript can infer. The 'as' keyword asserts a type without changing runtime behavior — but it bypasses safety checks, so prefer narrowing (typeof/in/instanceof) whenever possible.",
      ],
      example: {
        title: "as, and the safer alternative",
        code: `const input = document.createElement("input"); // HTMLInputElement\nconst el = input as HTMLElement; // widening assertion, always safe\n\n// Risky: asserting something the compiler can't verify\nconst value = "42" as unknown as number; // avoid this pattern!\n\n// Prefer parsing/checking instead:\nconst safeValue = Number("42");\nconsole.log(el.tagName, safeValue);\n`,
      },
    },
    {
      heading: "You've covered the fundamentals — where next?",
      paragraphs: [
        "You now know the full arc: basic types, functions, interfaces, unions, classes, generics, and the advanced type system. From here, the fastest way to actually master TypeScript is to use it — convert a small JavaScript project, turn on strict mode, and let the compiler guide you. The official Playground and Handbook (linked below) are excellent for exploring anything this course didn't cover in depth.",
      ],
      bullets: [
        "TypeScript Handbook — the canonical, in-depth reference: typescriptlang.org/docs/handbook/intro.html",
        "TypeScript Playground — experiment with any snippet, share links: typescriptlang.org/play",
        "Try converting one real JS file in a personal project to .ts this week.",
      ],
    },
  ],
  quiz: [
    {
      question: "What is the recommended setting to enable in tsconfig.json for new projects?",
      options: ["\"loose\": true", "\"strict\": true", "\"any\": true", "\"legacy\": true"],
      correctIndex: 1,
      explanation:
        "\"strict\": true enables the full family of strict type-checking flags and is recommended for all new TypeScript projects.",
    },
    {
      question: "What do .d.ts declaration files contain?",
      options: [
        "Compiled JavaScript output",
        "Type information describing a library's shape, without implementation",
        "Test cases for a library",
        "CSS styles",
      ],
      correctIndex: 1,
      explanation:
        "Declaration files describe types only — no runtime code — so TypeScript can check code that uses a plain-JS library.",
    },
  ],
};

export default mod;
