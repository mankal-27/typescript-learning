import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";
import { useProgress } from "../hooks/useProgress";

export default function Layout() {
  const progress = useProgress();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="app-shell">
      <button
        type="button"
        className="mobile-menu-btn"
        onClick={() => setMobileOpen((v) => !v)}
        aria-label="Toggle navigation"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div className={`sidebar-wrap ${mobileOpen ? "sidebar-wrap-open" : ""}`}>
        <Sidebar progress={progress} onNavigate={() => setMobileOpen(false)} />
      </div>

      <main className="main-content">
        <Outlet context={progress} />
      </main>
    </div>
  );
}
