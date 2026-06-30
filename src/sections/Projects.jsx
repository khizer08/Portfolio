import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "../components/BrandIcons";
import { projects } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";

const accentMap = {
  primary: {
    glow: "group-hover:bg-primary/10",
    text: "text-primary",
    border: "hover:border-primary/50",
  },
  secondary: {
    glow: "group-hover:bg-secondary/10",
    text: "text-secondary",
    border: "hover:border-secondary/50",
  },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          path="projects/"
          title="Selected work"
          description="A few production-ready projects with marketplaces, mobile tools, and career support systems built for people who actually use them."
        />

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {projects.map((project, i) => {
            const accent = accentMap[project.accent] ?? accentMap.primary;
            return (
              <Reveal key={project.id} delay={(i % 2) * 0.1} className="h-full">
                <TiltCard className={`group relative h-full min-h-[30rem] rounded-[2rem] section-panel p-7 sm:p-9 overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${accent.border}`}>
                  <div className={`absolute -top-16 -right-16 w-64 h-64 rounded-full bg-transparent ${accent.glow} blur-3xl transition-all duration-500`} />

                  <div className="relative flex flex-col h-full">
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-6">
                      <div>
                        <p className={`font-mono text-xs ${accent.text} mb-2`}>{project.tag}</p>
                        <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
                          {project.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.name} live demo`}
                            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-primary/60 hover:text-primary transition-colors"
                          >
                            <ArrowUpRight size={17} />
                          </a>
                        )}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.name} GitHub repository`}
                          className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-primary/60 hover:text-primary transition-colors"
                        >
                          <GithubIcon size={17} />
                        </a>
                      </div>
                    </div>

                    <p className="text-muted text-base leading-8 mb-6">{project.description}</p>

                    <ul className="space-y-3 mb-7 text-sm">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex gap-2.5 text-muted">
                          <span className={`mt-2 w-1 h-1 rounded-full ${accent.text} bg-current shrink-0`} />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2.5 py-1 rounded-md bg-surface-2 border border-border text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
