import type { Module } from "../../types";

const mod: Module = {
  slug: "union-narrowing",
  order: 5,
  title: "Unions, Intersections & Narrowing",
  level: "Intermediate",
  icon: "GitBranch",
  summary:
    "Combine types with | and &, then use narrowing to safely work with each possibility.",
  sections: [
    {
      heading: "Union types",
      paragraphs: [
        "A union type (A | B) means a value can be one of several types. Unions are everywhere in real code: a function might accept a string or a number, or a variable might be a specific set of string literals.",
      ],
      example: {
        title: "A value that can be one of several types",
        code: `function formatId(id: string | number): string {\n  return \`ID-\${id}\`;\n}\n\nconsole.log(formatId(42));\nconsole.log(formatId("abc123"));\n`,
      },
    },
    {
      heading: "Narrowing with typeof and in",
      paragraphs: [
        "Once a variable has a union type, TypeScript won't let you call type-specific methods until you 'narrow' the type — proving to the compiler which branch you're in, usually with typeof, in, or instanceof checks.",
      ],
      example: {
        title: "Narrowing a union safely",
        code: `function describe(value: string | number | string[]) {\n  if (typeof value === "string") {\n    return \`text of length \${value.length}\`;\n  }\n  if (typeof value === "number") {\n    return \`a number: \${value.toFixed(2)}\`;\n  }\n  // TypeScript now knows value is string[]\n  return \`a list with \${value.length} items\`;\n}\n\nconsole.log(describe("hello"));\nconsole.log(describe(3.14159));\nconsole.log(describe(["a", "b", "c"]));\n`,
      },
    },
    {
      heading: "Discriminated unions",
      paragraphs: [
        "A powerful pattern: give every variant of a union a shared literal property (a 'discriminant', often called kind or type). Switching on that property lets TypeScript narrow perfectly, with no casts.",
      ],
      example: {
        title: "Discriminated union for shapes",
        code: `interface Circle {\n  kind: "circle";\n  radius: number;\n}\ninterface Rectangle {\n  kind: "rectangle";\n  width: number;\n  height: number;\n}\ntype Shape = Circle | Rectangle;\n\nfunction area(shape: Shape): number {\n  switch (shape.kind) {\n    case "circle":\n      return Math.PI * shape.radius ** 2;\n    case "rectangle":\n      return shape.width * shape.height;\n  }\n}\n\nconsole.log(area({ kind: "circle", radius: 2 }).toFixed(2));\nconsole.log(area({ kind: "rectangle", width: 3, height: 4 }));\n`,
      },
    },
    {
      heading: "Intersection types",
      paragraphs: [
        "An intersection type (A & B) combines multiple types into one — the result has every member of every type combined. Common for mixing in shared fields like metadata or timestamps.",
      ],
      example: {
        title: "Combining types with &",
        code: `interface Timestamped {\n  createdAt: Date;\n}\ninterface Named {\n  name: string;\n}\n\ntype Event = Timestamped & Named & { id: number };\n\nconst launch: Event = {\n  id: 1,\n  name: "Product Launch",\n  createdAt: new Date(),\n};\n\nconsole.log(launch.name, launch.id);\n`,
      },
    },
  ],
  quiz: [
    {
      question: "What is a 'discriminated union'?",
      options: [
        "A union type with only two members",
        "A union where each member shares a common literal property used to distinguish variants",
        "A type that cannot be narrowed",
        "Another name for an intersection type",
      ],
      correctIndex: 1,
      explanation:
        "A shared literal 'discriminant' property (like kind: 'circle') lets TypeScript narrow a union precisely via switch/if checks.",
    },
    {
      question: "What does the intersection type 'A & B' represent?",
      options: [
        "A value that is either A or B",
        "A value that has all the members of both A and B",
        "A generic constraint",
        "An array of A and B",
      ],
      correctIndex: 1,
      explanation:
        "Intersections merge types together — the resulting type must satisfy every combined type at once.",
    },
  ],
};

export default mod;
