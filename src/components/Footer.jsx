import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-sm text-faint">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React, Tailwind & intention.</p>
        <p>designed & developed by {profile.name.toLowerCase().replace(" ", "_")}</p>
      </div>
    </footer>
  );
}
