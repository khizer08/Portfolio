import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col items-center gap-2 text-center font-mono text-sm text-faint">
        <p>© {new Date().getFullYear()} {profile.name}.</p>
        <p>Built with React & Tailwind.</p>
      </div>
    </footer>
  );
}
