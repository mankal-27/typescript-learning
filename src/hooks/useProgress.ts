import { useCallback, useEffect, useState } from "react";
import { allModules } from "../data/modules";

const STORAGE_KEY = "ts-master:completed-modules";

function readCompleted(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const arr = JSON.parse(raw) as string[];
    return new Set(arr);
  } catch {
    return new Set();
  }
}

function writeCompleted(set: Set<string>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(set)));
  } catch {
    // localStorage unavailable (private mode etc.) — fail silently
  }
}

export function useProgress() {
  const [completed, setCompleted] = useState<Set<string>>(() => readCompleted());

  useEffect(() => {
    writeCompleted(completed);
  }, [completed]);

  const markComplete = useCallback((slug: string) => {
    setCompleted((prev) => {
      if (prev.has(slug)) return prev;
      const next = new Set(prev);
      next.add(slug);
      return next;
    });
  }, []);

  const toggleComplete = useCallback((slug: string) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }
      return next;
    });
  }, []);

  const isComplete = useCallback((slug: string) => completed.has(slug), [completed]);

  const percent = Math.round((completed.size / allModules.length) * 100);

  return { completed, markComplete, toggleComplete, isComplete, percent };
}
