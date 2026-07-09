import { Link, useOutletContext } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { allModules } from "../data/modules";
import ModuleIcon from "../components/ModuleIcon";
import type { useProgress } from "../hooks/useProgress";

export default function Home() {
  const progress = useOutletContext<ReturnType<typeof useProgress>>();
  const firstIncomplete = allModules.find((m) => !progress.isComplete(m.slug));
  const ctaTarget = firstIncomplete ?? allModules[0];

  return (
    <div className="page-content">
      <section className="hero">
        <p className="hero-eyebrow">Zero to master, one module at a time</p>
        <h1 className="hero-title">
          Learn <span className="hero-accent">TypeScript</span> by actually writing it.
        </h1>
        <p className="hero-subtitle">
          Twelve bite-sized modules covering everything from your first type
          annotation to conditional types and decorators — every concept
          paired with a live, editable playground so you learn by doing, not
          just reading.
        </p>
        <div className="hero-actions">
          <Link to={`/module/${ctaTarget.slug}`} className="btn btn-primary btn-lg">
            {progress.percent > 0 ? "Continue learning" : "Start learning"}
            <ArrowRight size={18} />
          </Link>
          <a
            href="https://www.typescriptlang.org/play"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost btn-lg"
          >
            Official Playground ↗
          </a>
        </div>
        {progress.percent > 0 && (
          <div className="hero-progress">
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${progress.percent}%` }} />
            </div>
            <span>{progress.percent}% complete</span>
          </div>
        )}
      </section>

      <section>
        <h2 className="section-heading">Course modules</h2>
        <div className="module-grid">
          {allModules.map((mod) => {
            const done = progress.isComplete(mod.slug);
            return (
              <Link to={`/module/${mod.slug}`} className="module-card" key={mod.slug}>
                <div className="module-card-top">
                  <span className={`module-card-icon level-${mod.level.toLowerCase()}`}>
                    <ModuleIcon name={mod.icon} size={20} />
                  </span>
                  {done && (
                    <span className="module-card-done">
                      <Check size={14} /> Done
                    </span>
                  )}
                </div>
                <div className="module-card-number">Module {mod.order}</div>
                <h3 className="module-card-title">{mod.title}</h3>
                <p className="module-card-summary">{mod.summary}</p>
                <span className={`level-badge level-badge-${mod.level.toLowerCase()}`}>
                  {mod.level}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="about-strip">
        <p>
          Inspired by{" "}
          <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
            typescriptlang.org
          </a>{" "}
          — TypeScript is JavaScript with syntax for types, built and
          maintained by Microsoft. This site is an independent, open-source
          study companion with hands-on playgrounds for every topic.
        </p>
      </section>
    </div>
  );
}
