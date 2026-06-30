import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";
import { useScrollSpy, useScrolled } from "../hooks/useScrollUtils";

export default function Navbar() {
  const scrolled = useScrolled();
  const activeId = useScrollSpy(navLinks.map((l) => l.id));
  const [open, setOpen] = useState(false);

  const handleNav = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-300`}
      >
        <nav
          className={`flex items-center justify-between rounded-[1.5rem] px-4 sm:px-5 py-3 transition-all duration-300 ${
            scrolled ? "glass shadow-[0_20px_80px_-40px_rgba(0,0,0,0.45)]" : "bg-transparent"
          }`}
        >
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-display font-semibold text-lg tracking-tight"
          >
            {profile.initials}
            <span className="text-primary">.</span>
          </a>

          <ul className="hidden md:flex items-center gap-3 font-mono text-sm">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNav(link.id)}
                  className={`relative px-4 py-2 rounded-full transition-colors duration-200 ${
                    activeId === link.id ? "text-text" : "text-muted hover:text-text"
                  }`}
                >
                  {activeId === link.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-surface-2 border border-border"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">~/{link.label}</span>
                </button>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNav("contact");
            }}
            className="hidden md:inline-flex items-center text-sm font-mono px-5 py-2.5 rounded-full border border-border hover:border-primary hover:text-primary transition-colors duration-200"
          >
            let's talk
          </a>

          <button
            className="md:hidden p-2 text-text"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden glass mt-2 rounded-2xl p-4 flex flex-col gap-1 font-mono text-sm"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`text-left px-3 py-2.5 rounded-lg transition-colors ${
                  activeId === link.id ? "text-text bg-surface-2" : "text-muted hover:text-text"
                }`}
              >
                ~/{link.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </header>
  );
}
