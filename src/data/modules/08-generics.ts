import type { Module } from "../../types";

const mod: Module = {
  slug: "generics",
  order: 8,
  title: "Generics",
  level: "Advanced",
  icon: "Boxes",
  summary:
    "Write reusable, type-safe functions, interfaces, and classes that work over many types instead of just one.",
  sections: [
    {
      heading: "Why generics?",
      paragraphs: [
        "Without generics, you'd either write one function per type, or use 'any' and lose type safety. Generics let a function, interface, or class declare a placeholder type — filled in each time it's used — while preserving full type checking.",
      ],
      example: {
        title: "A generic identity function",
        code: `function firstElement<T>(arr: T[]): T {\n  return arr[0];\n}\n\n// T is inferred from the argument each time\nconst num = firstElement([1, 2, 3]); // T = number\nconst str = firstElement(["a", "b"]); // T = string\n\nconsole.log(num, str);\n`,
      },
    },
    {
      heading: "Generic interfaces and classes",
      paragraphs: [
        "Interfaces and classes can also be generic, which is how collection types like Array<T> and Map<K, V> are defined in TypeScript's own standard library.",
      ],
      example: {
        title: "A generic Box container",
        code: `interface Box<T> {\n  value: T;\n}\n\nclass Stack<T> {\n  private items: T[] = [];\n\n  push(item: T) {\n    this.items.push(item);\n  }\n\n  pop(): T | undefined {\n    return this.items.pop();\n  }\n}\n\nconst numberBox: Box<number> = { value: 42 };\nconst stack = new Stack<string>();\nstack.push("first");\nstack.push("second");\n\nconsole.log(numberBox.value, stack.pop());\n`,
      },
    },
    {
      heading: "Constraints with extends",
      paragraphs: [
        "Sometimes a generic type needs to guarantee it has certain properties. Use extends to constrain it — the function can then safely access anything guaranteed by the constraint.",
      ],
      example: {
        title: "Constraining a generic type",
        code: `interface HasLength {\n  length: number;\n}\n\nfunction logLength<T extends HasLength>(item: T): T {\n  console.log("Length:", item.length);\n  return item;\n}\n\nlogLength("hello");        // strings have .length\nlogLength([1, 2, 3]);      // arrays have .length\n// logLength(42);           // Error: number has no .length\n`,
      },
    },
    {
      heading: "Default type parameters",
      paragraphs: [
        "Like default function parameters, a generic can have a default type, used when the caller doesn't specify one explicitly.",
      ],
      example: {
        title: "Default generic parameter",
        code: `interface ApiResponse<T = unknown> {\n  data: T;\n  status: number;\n}\n\nconst response: ApiResponse<{ id: number }> = {\n  data: { id: 1 },\n  status: 200,\n};\n\nconsole.log(response.data.id, response.status);\n`,
      },
    },
  ],
  quiz: [
    {
      question: "What problem do generics solve compared to using 'any'?",
      options: [
        "They make code run faster at runtime",
        "They preserve type safety while still supporting many different types",
        "They remove the need for interfaces",
        "They are required for all functions",
      ],
      correctIndex: 1,
      explanation:
        "Generics let you write flexible, reusable code without giving up compile-time type checking, unlike 'any'.",
    },
    {
      question: "What does 'function f<T extends HasLength>(x: T)' mean?",
      options: [
        "T must be exactly the HasLength type",
        "T can be any type, HasLength is ignored",
        "T can be any type that includes at least the members of HasLength",
        "This is invalid TypeScript syntax",
      ],
      correctIndex: 2,
      explanation:
        "'extends' as a generic constraint means T must be a type that is compatible with (has at least the shape of) HasLength.",
    },
  ],
};

export default mod;
