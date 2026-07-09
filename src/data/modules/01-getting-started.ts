import type { Module } from "../../types";

const mod: Module = {
  slug: "getting-started",
  order: 1,
  title: "Getting Started",
  level: "Beginner",
  icon: "Rocket",
  summary:
    "What TypeScript is, why it exists, and how the compiler turns your types into plain JavaScript.",
  sections: [
    {
      heading: "What is TypeScript?",
      paragraphs: [
        "TypeScript is JavaScript with an extra layer: a type system. It's a superset of JavaScript, meaning every valid JavaScript file is already valid TypeScript. You add type annotations on top, and the TypeScript compiler (tsc) checks your code for mistakes before it ever runs.",
        "Browsers and Node.js don't understand TypeScript directly. The compiler strips away the types and produces plain JavaScript that runs anywhere JavaScript runs.",
      ],
      example: {
        title: "TypeScript in, JavaScript out",
        code: `// TypeScript catches this mistake while you type,\n// long before you run the code.\nfunction greet(name: string) {\n  return "Hello, " + name.toUpperCase();\n}\n\nconsole.log(greet("Manjunath"));\n\n// Try uncommenting the next line — the editor\n// (and Run) will flag a type error immediately:\n// console.log(greet(42));\n`,
      },
    },
    {
      heading: "Why add types to JavaScript?",
      paragraphs: [
        "JavaScript is dynamically typed — a variable can hold a string today and a number tomorrow, and you only find out about a mistake when the buggy line actually executes. TypeScript adds static typing: your editor and the compiler check types while you write code.",
      ],
      bullets: [
        "Catches bugs early — typos, wrong argument types, missing properties — right in your editor.",
        "Gives you real autocomplete, because the tool knows the exact shape of your data.",
        "Makes refactoring safer: rename or restructure something and TypeScript shows every place that breaks.",
        "Acts as living documentation — types describe what a function expects and returns.",
      ],
    },
    {
      heading: "The compiler and tsconfig.json",
      paragraphs: [
        "The TypeScript compiler is configured with a tsconfig.json file at the root of a project. It controls things like which JavaScript version to target, how strict type checking should be, and which files to include.",
      ],
      example: {
        title: "A typical tsconfig.json",
        code: `{\n  "compilerOptions": {\n    "target": "ES2020",\n    "module": "ESNext",\n    "strict": true,\n    "outDir": "dist"\n  },\n  "include": ["src"]\n}\n\n// This isn't runnable TS/JS — it's the config file\n// that tells "tsc" how to compile your project.\n// "strict": true turns on the full family of strict\n// type-checking flags, which is recommended for\n// every new project.\nconsole.log("Config files use JSON, not TS syntax.");\n`,
      },
    },
  ],
  quiz: [
    {
      question: "What does the TypeScript compiler (tsc) ultimately produce?",
      options: [
        "A binary executable",
        "Plain JavaScript",
        "WebAssembly",
        "A browser extension",
      ],
      correctIndex: 1,
      explanation:
        "tsc strips out type annotations and emits plain JavaScript that any JS runtime can execute.",
    },
    {
      question: "Which statement about TypeScript is true?",
      options: [
        "Every valid JavaScript file is also valid TypeScript",
        "TypeScript and JavaScript are unrelated languages",
        "TypeScript replaces JavaScript at runtime",
        "You must rewrite all your JS to use TypeScript",
      ],
      correctIndex: 0,
      explanation:
        "TypeScript is a strict superset of JavaScript — .js code is already valid .ts code.",
    },
  ],
};

export default mod;
