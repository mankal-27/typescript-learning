export interface CodeExample {
  title: string;
  code: string;
}

export interface Section {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  example?: CodeExample;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export type Level = "Beginner" | "Intermediate" | "Advanced";

export interface Module {
  slug: string;
  order: number;
  title: string;
  level: Level;
  summary: string;
  icon: string;
  sections: Section[];
  quiz: QuizQuestion[];
}
