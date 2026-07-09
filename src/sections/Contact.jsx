import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";
import { profile } from "../data/portfolio";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";

const links = [
  { label: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "GitHub", href: profile.github, icon: GithubIcon },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedinIcon },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-24 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_40%,transparent_100%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] bg-primary/10 rounded-full blur-[160px]" />
      <div className="section-ring" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <Reveal>
          <Eyebrow path="contact.send()" className="justify-center mb-6" />
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-display font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl max-w-2xl mx-auto">
            Let's build something <span className="text-gradient">worth shipping.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 text-muted text-base sm:text-lg max-w-lg mx-auto">
            I enjoy building useful web apps with clean interfaces and thoughtful motion. If you want something that looks sharp and works smoothly, let's connect.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-9 inline-flex rounded-[2rem] overflow-hidden border border-white/10 bg-[rgba(16,18,29,0.85)] shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
            <Button href={`mailto:${profile.email}`} icon={Mail} size="lg">
              Say hello
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            {links.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-3 font-mono text-sm sm:text-base px-5 py-3 rounded-full border border-white/15 bg-white/5 text-white shadow-[0_22px_50px_rgba(110,86,248,0.18)] backdrop-blur-sm hover:bg-white/10 hover:border-primary/40 transition-all duration-200"
              >
                <Icon size={15} className="text-primary" />
                <span className="text-white font-semibold">{label}</span>
                <ArrowUpRight size={13} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
