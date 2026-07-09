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

          <ul className="hidden md:flex items-center gap-4 font-mono text-base">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNav(link.id)}
                  className={`relative px-5 py-3 rounded-full transition-all duration-200 font-semibold ${
                    activeId === link.id
                      ? "text-text"
                      : "text-muted hover:text-text hover:bg-white/5"
                  }`}
                >
                  {activeId === link.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/5 border border-primary/20"
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
            className="hidden md:inline-flex items-center text-base font-semibold font-mono px-6 py-3 rounded-full bg-primary text-white border border-primary/20 hover:bg-primary-soft hover:text-white transition-colors duration-200"
          >
            let's talk
          </a>

          <button
            className="md:hidden p-2 text-text"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-slate-950/35 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="fixed inset-x-4 top-[5.5rem] z-50 glass rounded-[2rem] p-4 flex flex-col gap-3 font-mono text-base shadow-[0_40px_120px_rgba(0,0,0,0.3)] md:hidden"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-text transition hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`text-left px-4 py-3 rounded-2xl transition-all duration-200 font-semibold ${
                    activeId === link.id
                      ? "text-text bg-white/10"
                      : "text-muted hover:text-text hover:bg-white/5"
                  }`}
                >
                  ~/{link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav("contact")}
                className="mt-2 w-full rounded-2xl bg-primary px-4 py-3 text-base font-semibold text-white transition hover:bg-primary-soft"
              >
                let's talk
              </button>
            </motion.div>
          </>
        )}
      </div>
    </header>
  );
}
