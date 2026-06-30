import { skillGroups } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          path="skills.json"
          title="Tools I build with"
          description="A working toolkit spanning frontend, backend, databases, and the platforms I use to ship reliable software."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <Reveal key={group.id} delay={(i % 3) * 0.08}>
              <div className="group relative h-full rounded-[1.75rem] section-panel p-7 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/0 group-hover:bg-primary/10 blur-2xl transition-all duration-500" />
                <h3 className="font-display font-medium text-xl mb-5 relative">{group.title}</h3>
                <ul className="flex flex-wrap gap-3 relative">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs font-mono px-2.5 py-1.5 rounded-md bg-surface-2 border border-border text-muted group-hover:text-text transition-colors duration-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
