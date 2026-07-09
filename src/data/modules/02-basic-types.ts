import type { Module } from "../../types";

const mod: Module = {
  slug: "basic-types",
  order: 2,
  title: "Basic Types",
  level: "Beginner",
  icon: "Type",
  summary:
    "The building blocks: string, number, boolean, arrays, tuples, and TypeScript's special types.",
  sections: [
    {
      heading: "Primitives",
      paragraphs: [
        "TypeScript's basic types mirror JavaScript's runtime types. You annotate a variable with a colon followed by the type.",
      ],
      example: {
        title: "Primitive type annotations",
        code: `let username: string = "manju_r";\nlet age: number = 28;\nlet isMaster: boolean = false;\n\n// TypeScript infers types even without annotations,\n// so this works too:\nlet inferred = "TypeScript figured this out"; // string\n\nconsole.log(username, age, isMaster, inferred);\n`,
      },
    },
    {
      heading: "Arrays and tuples",
      paragraphs: [
        "Arrays are typed as Type[] (or Array<Type>). Tuples are fixed-length arrays where each position has a known, specific type — useful for things like coordinate pairs or [key, value] entries.",
      ],
      example: {
        title: "Arrays vs. tuples",
        code: `let scores: number[] = [95, 88, 72];\nlet names: Array<string> = ["Alice", "Bob"];\n\n// A tuple: exactly two elements, string then number\nlet entry: [string, number] = ["level", 3];\n\nscores.push(100);\n// entry.push("nope"); // tuples still guard element types\n\nconsole.log(scores, names, entry);\n`,
      },
    },
    {
      heading: "any, unknown, never, and void",
      paragraphs: [
        "These four special types trip up beginners the most. any opts out of type checking entirely — use it sparingly. unknown is the type-safe alternative: you must narrow it before using it. void marks a function that returns nothing meaningful. never marks a value or return type that can't logically occur (like a function that always throws).",
      ],
      bullets: [
        "any — disables checking. Avoid unless migrating legacy JS.",
        "unknown — safe 'any'; forces you to check the type before using the value.",
        "void — a function's return value is intentionally ignored.",
        "never — a value that can never happen (an infinite loop, a thrown error).",
      ],
      example: {
        title: "unknown forces a check",
        code: `function process(value: unknown) {\n  // value.toUpperCase(); // Error: value is 'unknown'\n\n  if (typeof value === "string") {\n    // Inside this block, TypeScript knows value is a string\n    console.log(value.toUpperCase());\n  } else {\n    console.log("Not a string:", value);\n  }\n}\n\nprocess("typescript");\nprocess(42);\n`,
      },
    },
    {
      heading: "null, undefined, and strictNullChecks",
      paragraphs: [
        "With strict mode on (recommended), null and undefined are distinct types that must be handled explicitly — a huge source of TypeScript's bug-catching power, since 'cannot read property of undefined' is one of JavaScript's most common runtime errors.",
      ],
      example: {
        title: "Handling possibly-missing values",
        code: `function getLength(text: string | undefined): number {\n  // text might be undefined, so guard first\n  if (text === undefined) {\n    return 0;\n  }\n  return text.length;\n}\n\nconsole.log(getLength("hello"));\nconsole.log(getLength(undefined));\n`,
      },
    },
  ],
  quiz: [
    {
      question: "Which type should you prefer over 'any' when a value's type is not yet known?",
      options: ["never", "void", "unknown", "null"],
      correctIndex: 2,
      explanation:
        "unknown is type-safe: you must narrow it (e.g. with typeof) before you can use it, unlike any.",
    },
    {
      question: "What is a tuple in TypeScript?",
      options: [
        "A type-safe key-value map",
        "A fixed-length array with a known type for each position",
        "A synonym for 'any[]'",
        "A class that implements an interface",
      ],
      correctIndex: 1,
      explanation:
        "Tuples like [string, number] describe an array of fixed length where each slot has its own type.",
    },
  ],
};

export default mod;
