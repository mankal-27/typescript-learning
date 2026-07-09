import type { Module } from "../../types";

const mod: Module = {
  slug: "enums-literals",
  order: 7,
  title: "Enums & Literal Types",
  level: "Intermediate",
  icon: "ListOrdered",
  summary:
    "Named sets of constants with enums, and precise 'only these exact values' typing with literals.",
  sections: [
    {
      heading: "String and numeric enums",
      paragraphs: [
        "An enum defines a named set of constants. Numeric enums auto-increment from 0 by default; string enums require each member to have an explicit string value and are usually easier to debug, since logging a value shows the label instead of a number.",
      ],
      example: {
        title: "Numeric vs string enums",
        code: `enum Direction {\n  Up,    // 0\n  Down,  // 1\n  Left,  // 2\n  Right, // 3\n}\n\nenum Status {\n  Active = "ACTIVE",\n  Paused = "PAUSED",\n  Done = "DONE",\n}\n\nfunction move(dir: Direction) {\n  console.log("Moving:", Direction[dir]);\n}\n\nmove(Direction.Up);\nconsole.log(Status.Active);\n`,
      },
    },
    {
      heading: "Literal types",
      paragraphs: [
        "A literal type narrows a primitive down to one exact value. Combined with unions, literal types give you a lightweight, zero-runtime-cost alternative to enums — this is an extremely common pattern in real-world TypeScript.",
      ],
      example: {
        title: "Literal unions instead of an enum",
        code: `type Direction = "up" | "down" | "left" | "right";\n\nfunction move(dir: Direction) {\n  console.log("Moving:", dir);\n}\n\nmove("up");\n// move("north"); // Error: not assignable to type 'Direction'\n\ntype HttpMethod = "GET" | "POST" | "PUT" | "DELETE";\nfunction request(url: string, method: HttpMethod = "GET") {\n  console.log(\`\${method} \${url}\`);\n}\nrequest("/users", "POST");\n`,
      },
    },
    {
      heading: "Template literal types",
      paragraphs: [
        "TypeScript can build literal types out of string templates, letting you describe patterns like CSS units or event names precisely.",
      ],
      example: {
        title: "Pattern-shaped string types",
        code: `type Size = "small" | "medium" | "large";\ntype CSSClass = \`btn-\${Size}\`;\n\nconst valid: CSSClass = "btn-medium";\n// const invalid: CSSClass = "btn-huge"; // Error\n\ntype EventName = \`on\${Capitalize<"click" | "hover">}\`;\n// EventName is "onClick" | "onHover"\nconst handler: EventName = "onClick";\n\nconsole.log(valid, handler);\n`,
      },
    },
  ],
  quiz: [
    {
      question: "By default, what value does the first member of a numeric enum get?",
      options: ["1", "0", "undefined", "It must be set explicitly"],
      correctIndex: 1,
      explanation:
        "Numeric enums start at 0 by default and auto-increment for each subsequent member, unless you assign values explicitly.",
    },
    {
      question: "What is a common lightweight alternative to enums in modern TypeScript?",
      options: [
        "Abstract classes",
        "A union of string literal types",
        "The 'any' type",
        "Namespaces",
      ],
      correctIndex: 1,
      explanation:
        "A union like \"up\" | \"down\" | \"left\" | \"right\" gives similar safety to an enum with zero runtime overhead.",
    },
  ],
};

export default mod;
