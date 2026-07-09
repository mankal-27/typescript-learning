import type { Module } from "../../types";

const mod: Module = {
  slug: "interfaces-types",
  order: 4,
  title: "Interfaces & Type Aliases",
  level: "Beginner",
  icon: "Layout",
  summary:
    "Describe the shape of objects with interfaces and type aliases — readonly and optional props, extending, and when to use which.",
  sections: [
    {
      heading: "Describing object shapes",
      paragraphs: [
        "An interface declares the shape an object must have: which properties, and their types. Any object matching that shape satisfies the interface — TypeScript uses structural typing, not names.",
      ],
      example: {
        title: "Your first interface",
        code: `interface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\nfunction printUser(user: User) {\n  console.log(\`#\${user.id} \${user.name} <\${user.email}>\`);\n}\n\nprintUser({ id: 1, name: "Angela Davis", email: "a@example.com" });\n`,
      },
    },
    {
      heading: "Optional and readonly properties",
      paragraphs: [
        "Mark a property optional with ? and immutable with readonly. readonly only prevents reassignment after the object is created — it's a compile-time guarantee, not a runtime freeze.",
      ],
      example: {
        title: "Optional & readonly in action",
        code: `interface Account {\n  readonly id: number;\n  displayName: string;\n  nickname?: string;\n}\n\nconst acc: Account = { id: 1, displayName: "Manju" };\nacc.displayName = "Manjunath"; // fine\n// acc.id = 2; // Error: id is readonly\n\nconsole.log(acc.nickname ?? "no nickname set");\n`,
      },
    },
    {
      heading: "Type aliases",
      paragraphs: [
        "A type alias (type Name = ...) can describe an object shape just like an interface, but it can also name any other type: unions, tuples, primitives. Interfaces can be re-opened and extended; type aliases cannot be re-opened, but they're more flexible for non-object types.",
      ],
      example: {
        title: "type vs interface",
        code: `type Point = { x: number; y: number };\ntype ID = string | number; // type aliases can name unions too\n\ninterface Shape {\n  area(): number;\n}\n\ninterface Circle extends Shape {\n  radius: number;\n}\n\nconst c: Circle = {\n  radius: 4,\n  area() {\n    return Math.PI * this.radius ** 2;\n  },\n};\n\nconsole.log(c.area().toFixed(2));\nconst id: ID = "user_42";\nconsole.log(id);\n`,
      },
    },
    {
      heading: "Which one should you use?",
      paragraphs: [
        "In practice: reach for interface when describing an object or class shape (especially in public APIs, since they can be extended by consumers). Reach for type when you need unions, tuples, mapped types, or other constructs interfaces can't express. Many teams default to interface for objects and type for everything else.",
      ],
    },
  ],
  quiz: [
    {
      question: "How does TypeScript decide if an object satisfies an interface?",
      options: [
        "By checking the object's class name",
        "By structural typing — matching the shape of properties",
        "By checking a special __interface__ property",
        "Interfaces cannot be satisfied by plain objects",
      ],
      correctIndex: 1,
      explanation:
        "TypeScript uses structural typing: if an object has the required properties with compatible types, it satisfies the interface, regardless of name.",
    },
    {
      question: "Which of these can ONLY be done with a type alias, not an interface?",
      options: [
        "Describing an object with a 'name: string' property",
        "Naming a union type like 'string | number'",
        "Making a property optional",
        "Making a property readonly",
      ],
      correctIndex: 1,
      explanation:
        "type aliases can name unions, tuples, and other non-object types; interfaces are limited to object-like shapes.",
    },
  ],
};

export default mod;
