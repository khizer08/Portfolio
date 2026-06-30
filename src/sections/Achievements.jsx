import { Award, ExternalLink, FileBadge } from "lucide-react";
import { achievements, certifications } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading path="achievements.md" title="Milestones & credentials" />

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <Reveal>
              <h3 className="font-mono text-sm text-faint mb-5 uppercase tracking-[0.32em]">Achievements</h3>
            </Reveal>
            <ul className="space-y-4">
              {achievements.map((a, i) => (
                <Reveal key={a.id} delay={i * 0.08}>
                  <li className="flex items-start gap-4 rounded-[1.75rem] section-panel p-6 hover:-translate-y-1 transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                      <Award size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{a.title}</p>
                      <p className="text-sm text-muted mt-0.5">{a.detail}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <Reveal>
              <h3 className="font-mono text-sm text-faint mb-5 uppercase tracking-[0.32em]">Certifications</h3>
            </Reveal>
            <ul className="space-y-4">
              {certifications.map((c, i) => (
                <Reveal key={c.id} delay={i * 0.08}>
                  <li>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 rounded-[1.75rem] section-panel p-5 hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center shrink-0">
                        <FileBadge size={18} className="text-secondary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{c.title}</p>
                        <p className="text-sm text-muted mt-0.5">{c.issuer}</p>
                      </div>
                      <ExternalLink size={15} className="text-faint group-hover:text-secondary transition-colors mt-1 shrink-0" />
                    </a>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
