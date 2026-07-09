import type { Module } from "../../types";

const mod: Module = {
  slug: "functions",
  order: 3,
  title: "Functions",
  level: "Beginner",
  icon: "FunctionSquare",
  summary:
    "Typing parameters and return values, optional and default parameters, rest params, and function types.",
  sections: [
    {
      heading: "Typed parameters and return values",
      paragraphs: [
        "You can annotate each parameter and the return type. TypeScript will usually infer the return type for you, but writing it explicitly documents intent and catches mistakes if the function body changes.",
      ],
      example: {
        title: "A fully typed function",
        code: `function add(a: number, b: number): number {\n  return a + b;\n}\n\n// Arrow function equivalent\nconst multiply = (a: number, b: number): number => a * b;\n\nconsole.log(add(2, 3), multiply(2, 3));\n`,
      },
    },
    {
      heading: "Optional and default parameters",
      paragraphs: [
        "Add a ? to make a parameter optional. Give a parameter a default value and TypeScript infers its type and makes it optional automatically. Optional and default parameters must come after required ones.",
      ],
      example: {
        title: "Optional vs default parameters",
        code: `function greet(name: string, title?: string): string {\n  return title ? \`Hello, \${title} \${name}\` : \`Hello, \${name}\`;\n}\n\nfunction power(base: number, exponent: number = 2): number {\n  return base ** exponent;\n}\n\nconsole.log(greet("Rao"));\nconsole.log(greet("Rao", "Dr."));\nconsole.log(power(3));\nconsole.log(power(3, 3));\n`,
      },
    },
    {
      heading: "Rest parameters",
      paragraphs: [
        "Use ...name: Type[] to accept an arbitrary number of arguments of the same type.",
      ],
      example: {
        title: "Summing any number of values",
        code: `function sum(...numbers: number[]): number {\n  return numbers.reduce((total, n) => total + n, 0);\n}\n\nconsole.log(sum(1, 2, 3));\nconsole.log(sum(10, 20, 30, 40));\n`,
      },
    },
    {
      heading: "Function types",
      paragraphs: [
        "You can describe the *shape* of a function — its parameters and return type — as its own type, which is handy for callbacks and higher-order functions.",
      ],
      example: {
        title: "A callback with a function type",
        code: `type MathOperation = (a: number, b: number) => number;\n\nfunction calculate(a: number, b: number, op: MathOperation): number {\n  return op(a, b);\n}\n\nconst subtract: MathOperation = (a, b) => a - b;\n\nconsole.log(calculate(10, 4, subtract));\nconsole.log(calculate(10, 4, (a, b) => a + b));\n`,
      },
    },
  ],
  quiz: [
    {
      question: "Where must optional parameters appear in a function's parameter list?",
      options: [
        "Anywhere, order doesn't matter",
        "Before all required parameters",
        "After all required parameters",
        "TypeScript doesn't support optional parameters",
      ],
      correctIndex: 2,
      explanation:
        "Required parameters must come first; optional (?) and default-valued parameters follow them.",
    },
    {
      question: "What does '...numbers: number[]' represent in a function signature?",
      options: [
        "An array parameter that must be named 'numbers'",
        "A rest parameter collecting any number of number arguments",
        "A tuple of exactly two numbers",
        "An optional single number",
      ],
      correctIndex: 1,
      explanation:
        "The rest syntax (...) gathers all remaining arguments into an array of the given type.",
    },
  ],
};

export default mod;
