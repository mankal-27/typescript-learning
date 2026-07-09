import type { Module } from "../../types";

const mod: Module = {
  slug: "decorators",
  order: 11,
  title: "Decorators",
  level: "Advanced",
  icon: "Wand2",
  summary:
    "Annotate and modify classes and their members declaratively — the pattern behind Angular, NestJS, and more.",
  sections: [
    {
      heading: "What decorators are",
      paragraphs: [
        "A decorator is a function that can observe, modify, or replace a class, method, accessor, property, or parameter. They're written with an @ prefix directly above the thing they decorate. TypeScript 5 implements the new, now-standardized (Stage 3) ECMAScript decorators proposal.",
      ],
      example: {
        title: "A simple logging method decorator",
        code: `function logCall(target: any, context: ClassMethodDecoratorContext) {\n  const methodName = String(context.name);\n  return function (this: any, ...args: any[]) {\n    console.log(\`Calling \${methodName} with\`, args);\n    return target.apply(this, args);\n  };\n}\n\nclass Calculator {\n  @logCall\n  add(a: number, b: number) {\n    return a + b;\n  }\n}\n\nconst calc = new Calculator();\nconsole.log("Result:", calc.add(2, 3));\n`,
      },
    },
    {
      heading: "Class decorators",
      paragraphs: [
        "A class decorator receives the class itself and can add behavior or even return a new class. Frameworks like Angular use class decorators (@Component, @Injectable) to attach metadata that their runtime reads later.",
      ],
      example: {
        title: "Adding metadata with a class decorator",
        code: `function Entity(tableName: string) {\n  return function <T extends { new (...args: any[]): {} }>(target: T) {\n    return class extends target {\n      tableName = tableName;\n    };\n  };\n}\n\n@Entity("users")\nclass User {\n  constructor(public name: string) {}\n}\n\nconst u = new User("Ada") as User & { tableName: string };\nconsole.log(u.name, u.tableName);\n`,
      },
    },
    {
      heading: "When you'll actually use decorators",
      paragraphs: [
        "Most application code doesn't write custom decorators day to day — but frameworks like Angular, NestJS, and TypeORM rely on them heavily for dependency injection, routing, and ORM mapping. Understanding how they work helps you read those frameworks' internals, and enable them in tsconfig.json with the 'experimentalDecorators' setting for the older, widely-deployed decorator syntax if a library requires it.",
      ],
    },
  ],
  quiz: [
    {
      question: "What is a decorator used for in TypeScript?",
      options: [
        "Adding CSS styles to a component",
        "Observing, modifying, or replacing a class or its members declaratively with an @ syntax",
        "Declaring a variable's type",
        "Importing a module",
      ],
      correctIndex: 1,
      explanation:
        "Decorators are functions applied with @ syntax that can add behavior or metadata to classes, methods, and other class members.",
    },
    {
      question: "Which popular frameworks make heavy use of decorators?",
      options: [
        "jQuery and Lodash",
        "Angular and NestJS",
        "Webpack and Babel",
        "ESLint and Prettier",
      ],
      correctIndex: 1,
      explanation:
        "Angular and NestJS use decorators extensively for dependency injection, routing, and component/module metadata.",
    },
  ],
};

export default mod;
