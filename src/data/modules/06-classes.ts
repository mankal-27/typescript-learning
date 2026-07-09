import type { Module } from "../../types";

const mod: Module = {
  slug: "classes",
  order: 6,
  title: "Classes & OOP",
  level: "Intermediate",
  icon: "Box",
  summary:
    "Properties, constructors, access modifiers, readonly fields, abstract classes, and interfaces with classes.",
  sections: [
    {
      heading: "Classes with typed properties",
      paragraphs: [
        "TypeScript classes look like JavaScript classes, but every property gets a type. The shorthand of declaring and assigning constructor parameters together is one of TypeScript's most-loved features.",
      ],
      example: {
        title: "A typed class with constructor shorthand",
        code: `class Player {\n  // public/private/readonly here declares AND assigns\n  // the property in one step\n  constructor(\n    public name: string,\n    public level: number = 1,\n  ) {}\n\n  levelUp() {\n    this.level += 1;\n  }\n}\n\nconst hero = new Player("Ada");\nhero.levelUp();\nhero.levelUp();\nconsole.log(\`\${hero.name} is level \${hero.level}\`);\n`,
      },
    },
    {
      heading: "Access modifiers: public, private, protected",
      paragraphs: [
        "public (the default) is accessible anywhere. private is only accessible inside the class itself. protected is accessible inside the class and its subclasses. These are compile-time checks — for true runtime privacy, use JavaScript's native #field syntax.",
      ],
      example: {
        title: "Encapsulating state",
        code: `class BankAccount {\n  private balance: number;\n\n  constructor(startingBalance: number) {\n    this.balance = startingBalance;\n  }\n\n  deposit(amount: number) {\n    this.balance += amount;\n  }\n\n  getBalance(): number {\n    return this.balance;\n  }\n}\n\nconst acc = new BankAccount(100);\nacc.deposit(50);\n// acc.balance; // Error: 'balance' is private\nconsole.log(acc.getBalance());\n`,
      },
    },
    {
      heading: "Implementing interfaces & abstract classes",
      paragraphs: [
        "A class can implement an interface, guaranteeing it provides certain methods/properties. An abstract class can't be instantiated directly — it's a base class that defines some behavior and leaves the rest (abstract methods) for subclasses to implement.",
      ],
      example: {
        title: "Abstract base class",
        code: `abstract class Animal {\n  constructor(public name: string) {}\n\n  abstract makeSound(): string;\n\n  describe(): string {\n    return \`\${this.name} says \${this.makeSound()}\`;\n  }\n}\n\nclass Dog extends Animal {\n  makeSound(): string {\n    return "Woof!";\n  }\n}\n\n// const a = new Animal("?"); // Error: cannot instantiate abstract class\nconst dog = new Dog("Rex");\nconsole.log(dog.describe());\n`,
      },
    },
  ],
  quiz: [
    {
      question: "What does marking a class property 'private' do?",
      options: [
        "Hides it from the compiler entirely",
        "Prevents access from outside the class at compile time",
        "Makes the property readonly",
        "Removes it from the compiled JavaScript",
      ],
      correctIndex: 1,
      explanation:
        "private is a compile-time visibility check enforced by TypeScript; it's still present in the emitted JS unless you use native #private fields.",
    },
    {
      question: "Can you create an instance of an abstract class directly (new AbstractClass())?",
      options: [
        "Yes, always",
        "No — abstract classes must be subclassed and their abstract members implemented",
        "Only if it has no constructor",
        "Only in strict mode",
      ],
      correctIndex: 1,
      explanation:
        "Abstract classes exist to be extended. TypeScript raises a compile error if you try to instantiate one directly.",
    },
  ],
};

export default mod;
