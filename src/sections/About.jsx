import { GraduationCap, MapPin } from "lucide-react";
import { profile, education } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          path="about.jsx"
          title="A bit about me"
        />

        <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 md:gap-16 items-start">
          <div className="space-y-7">
            {profile.bio.map((para, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-muted text-base sm:text-lg md:text-xl leading-8">{para}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="section-panel rounded-[1.75rem] p-6 sm:p-8 space-y-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                  <GraduationCap size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-mono text-faint mb-1">education</p>
                  <p className="font-medium leading-snug">{education.degree}</p>
                  <p className="text-sm text-muted mt-1">{education.school}</p>
                  <p className="text-sm text-muted">{education.period} · {education.gpa}</p>
                </div>
              </div>

              <div className="h-px bg-border" />

              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-9 h-9 rounded-lg bg-secondary/15 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-mono text-faint mb-1">based in</p>
                  <p className="font-medium leading-snug">{profile.location}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
