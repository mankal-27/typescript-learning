import { useState } from "react";
import type { QuizQuestion } from "../types";

interface QuizProps {
  questions: QuizQuestion[];
  onPass: () => void;
}

export default function Quiz({ questions, onPass }: QuizProps) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = questions.every((_, i) => answers[i] !== undefined);
  const correctCount = questions.filter((q, i) => answers[i] === q.correctIndex).length;
  const passed = submitted && correctCount === questions.length;

  function selectAnswer(qIndex: number, optIndex: number) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qIndex]: optIndex }));
  }

  function handleSubmit() {
    setSubmitted(true);
    if (correctCount === questions.length) {
      onPass();
    }
  }

  return (
    <div className="quiz">
      <h3 className="quiz-title">Check your understanding</h3>
      {questions.map((q, qIndex) => {
        const selected = answers[qIndex];
        return (
          <div className="quiz-question" key={qIndex}>
            <p className="quiz-question-text">
              {qIndex + 1}. {q.question}
            </p>
            <div className="quiz-options">
              {q.options.map((opt, optIndex) => {
                const isSelected = selected === optIndex;
                const isCorrect = optIndex === q.correctIndex;
                let stateClass = "";
                if (submitted && isSelected && isCorrect) stateClass = "quiz-option-correct";
                else if (submitted && isSelected && !isCorrect) stateClass = "quiz-option-wrong";
                else if (submitted && isCorrect) stateClass = "quiz-option-correct-muted";
                return (
                  <button
                    key={optIndex}
                    type="button"
                    className={`quiz-option ${isSelected ? "quiz-option-selected" : ""} ${stateClass}`}
                    onClick={() => selectAnswer(qIndex, optIndex)}
                    disabled={submitted}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            {submitted && (
              <p className="quiz-explanation">{q.explanation}</p>
            )}
          </div>
        );
      })}
      {!submitted && (
        <button
          type="button"
          className="btn btn-primary"
          disabled={!allAnswered}
          onClick={handleSubmit}
        >
          Submit answers
        </button>
      )}
      {submitted && (
        <div className={`quiz-result ${passed ? "quiz-result-pass" : "quiz-result-fail"}`}>
          {passed
            ? `Nice work — ${correctCount}/${questions.length} correct. Module marked complete!`
            : `You got ${correctCount}/${questions.length}. Review the explanations above, then try the next module — you can always revisit this one.`}
        </div>
      )}
    </div>
  );
}
