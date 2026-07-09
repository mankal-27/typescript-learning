import { NavLink } from "react-router-dom";
import { Check, Home } from "lucide-react";
import { allModules } from "../data/modules";
import ModuleIcon from "./ModuleIcon";
import type { useProgress } from "../hooks/useProgress";

interface SidebarProps {
  progress: ReturnType<typeof useProgress>;
  onNavigate?: () => void;
}

export default function Sidebar({ progress, onNavigate }: SidebarProps) {
  return (
    <nav className="sidebar" aria-label="Course modules">
      <NavLink to="/" className="sidebar-brand" onClick={onNavigate} end>
        <span className="sidebar-brand-badge">TS</span>
        <span>TS Master</span>
      </NavLink>

      <div className="sidebar-progress">
        <div className="sidebar-progress-label">
          <span>Your progress</span>
          <span>{progress.percent}%</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progress.percent}%` }} />
        </div>
      </div>

      <NavLink to="/" className="sidebar-link" onClick={onNavigate} end>
        <Home size={16} />
        <span>Home</span>
      </NavLink>

      <div className="sidebar-section-label">Modules</div>
      <ul className="sidebar-list">
        {allModules.map((mod) => (
          <li key={mod.slug}>
            <NavLink
              to={`/module/${mod.slug}`}
              onClick={onNavigate}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "sidebar-link-active" : ""}`
              }
            >
              <ModuleIcon name={mod.icon} size={16} />
              <span className="sidebar-link-text">
                {mod.order}. {mod.title}
              </span>
              {progress.isComplete(mod.slug) && (
                <Check size={14} className="sidebar-check" aria-label="Completed" />
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      <a
        className="sidebar-footer-link"
        href="https://www.typescriptlang.org/play"
        target="_blank"
        rel="noreferrer"
      >
        Open the official Playground ↗
      </a>
    </nav>
  );
}
