import { useEffect } from "react";
import { Link, Navigate, useOutletContext, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { getAdjacentModules, getModuleBySlug } from "../data/modules";
import Playground from "../components/Playground";
import Quiz from "../components/Quiz";
import ModuleIcon from "../components/ModuleIcon";
import type { useProgress } from "../hooks/useProgress";

export default function ModulePage() {
  const { slug } = useParams<{ slug: string }>();
  const progress = useOutletContext<ReturnType<typeof useProgress>>();
  const mod = slug ? getModuleBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!mod) {
    return <Navigate to="/" replace />;
  }

  const { prev, next } = getAdjacentModules(mod.slug);
  const done = progress.isComplete(mod.slug);

  return (
    <div className="page-content module-page">
      <div className="module-header">
        <span className={`module-card-icon level-${mod.level.toLowerCase()}`}>
          <ModuleIcon name={mod.icon} size={22} />
        </span>
        <div>
          <div className="module-header-meta">
            <span className={`level-badge level-badge-${mod.level.toLowerCase()}`}>
              {mod.level}
            </span>
            <span className="module-header-order">Module {mod.order} of 12</span>
          </div>
          <h1 className="module-header-title">{mod.title}</h1>
          <p className="module-header-summary">{mod.summary}</p>
        </div>
        <button
          type="button"
          className={`btn ${done ? "btn-done" : "btn-ghost"} mark-complete-btn`}
          onClick={() => progress.toggleComplete(mod.slug)}
        >
          <Check size={16} />
          {done ? "Completed" : "Mark as complete"}
        </button>
      </div>

      {mod.sections.map((section, i) => (
        <section className="lesson-section" key={i}>
          <h2 className="lesson-heading">{section.heading}</h2>
          {section.paragraphs.map((p, pi) => (
            <p className="lesson-paragraph" key={pi}>
              {p}
            </p>
          ))}
          {section.bullets && (
            <ul className="lesson-bullets">
              {section.bullets.map((b, bi) => (
                <li key={bi}>{b}</li>
              ))}
            </ul>
          )}
          {section.example && (
            <Playground title={section.example.title} code={section.example.code} />
          )}
        </section>
      ))}

      <section className="lesson-section">
        <Quiz questions={mod.quiz} onPass={() => progress.markComplete(mod.slug)} />
      </section>

      <nav className="module-pager">
        {prev ? (
          <Link to={`/module/${prev.slug}`} className="pager-link pager-prev">
            <ArrowLeft size={16} />
            <span>
              <span className="pager-label">Previous</span>
              <span className="pager-title">{prev.title}</span>
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/module/${next.slug}`} className="pager-link pager-next">
            <span>
              <span className="pager-label">Next</span>
              <span className="pager-title">{next.title}</span>
            </span>
            <ArrowRight size={16} />
          </Link>
        ) : (
          <Link to="/" className="pager-link pager-next">
            <span>
              <span className="pager-label">Finished!</span>
              <span className="pager-title">Back to overview</span>
            </span>
            <ArrowRight size={16} />
          </Link>
        )}
      </nav>
    </div>
  );
}
