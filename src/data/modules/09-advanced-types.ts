import type { Module } from "../../types";

const mod: Module = {
  slug: "advanced-types",
  order: 9,
  title: "Advanced Types",
  level: "Advanced",
  icon: "Sparkles",
  summary:
    "Utility types, mapped types, and conditional types — the tools TypeScript power users reach for daily.",
  sections: [
    {
      heading: "Built-in utility types",
      paragraphs: [
        "TypeScript ships a set of generic 'utility types' that transform other types. They're used constantly in real codebases, so knowing them well pays off immediately.",
      ],
      bullets: [
        "Partial<T> — makes every property optional",
        "Required<T> — makes every property required",
        "Readonly<T> — makes every property readonly",
        "Pick<T, Keys> — keeps only the listed properties",
        "Omit<T, Keys> — removes the listed properties",
        "Record<Keys, Value> — builds an object type from a set of keys to a value type",
      ],
      example: {
        title: "Utility types in action",
        code: `interface Todo {\n  id: number;\n  title: string;\n  done: boolean;\n}\n\n// Only title/done are editable\ntype TodoEdit = Partial<Pick<Todo, "title" | "done">>;\n\nfunction updateTodo(todo: Todo, edits: TodoEdit): Todo {\n  return { ...todo, ...edits };\n}\n\nconst todo: Todo = { id: 1, title: "Learn TS", done: false };\nconst updated = updateTodo(todo, { done: true });\n\nconsole.log(updated);\n\ntype Roles = "admin" | "editor" | "viewer";\nconst permissions: Record<Roles, string[]> = {\n  admin: ["read", "write", "delete"],\n  editor: ["read", "write"],\n  viewer: ["read"],\n};\nconsole.log(permissions.editor);\n`,
      },
    },
    {
      heading: "Mapped types",
      paragraphs: [
        "A mapped type builds a new type by transforming every property of an existing type. This is exactly how Partial<T> and Readonly<T> are implemented under the hood — and you can write your own.",
      ],
      example: {
        title: "Writing your own mapped type",
        code: `interface Flags {\n  darkMode: boolean;\n  betaFeatures: boolean;\n}\n\n// A custom mapped type: turn every boolean flag into a\n// function that toggles it\ntype Toggles<T> = {\n  [K in keyof T]: () => void;\n};\n\nconst toggles: Toggles<Flags> = {\n  darkMode: () => console.log("toggled dark mode"),\n  betaFeatures: () => console.log("toggled beta features"),\n};\n\ntoggles.darkMode();\n`,
      },
    },
    {
      heading: "Conditional types & infer",
      paragraphs: [
        "A conditional type picks between two types based on a condition, using syntax that mirrors a ternary: T extends U ? X : Y. Combined with infer, you can extract a type from inside another type — this is how utilities like ReturnType<T> work.",
      ],
      example: {
        title: "Extracting a function's return type",
        code: `type MyReturnType<T> = T extends (...args: any[]) => infer R\n  ? R\n  : never;\n\nfunction createUser() {\n  return { id: 1, name: "Ada" };\n}\n\n// Equivalent to the built-in ReturnType<typeof createUser>\ntype User = MyReturnType<typeof createUser>;\n\nconst u: User = { id: 2, name: "Grace" };\nconsole.log(u);\n`,
      },
    },
  ],
  quiz: [
    {
      question: "What does Pick<Todo, \"title\" | \"done\"> produce?",
      options: [
        "A type with only the title and done properties from Todo",
        "A type with every property except title and done",
        "An array of Todo objects",
        "A type where title and done are optional",
      ],
      correctIndex: 0,
      explanation:
        "Pick<T, Keys> selects a subset of properties from T, keeping only the ones listed.",
    },
    {
      question: "What does the 'infer' keyword do inside a conditional type?",
      options: [
        "Marks a property as inferred (optional)",
        "Declares a new type variable to capture part of a matched type",
        "Disables type checking for that branch",
        "Converts a type to 'any'",
      ],
      correctIndex: 1,
      explanation:
        "infer introduces a placeholder type variable that TypeScript fills in based on what actually matches in the conditional type.",
    },
  ],
};

export default mod;
