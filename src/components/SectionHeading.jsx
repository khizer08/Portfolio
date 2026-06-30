import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function SectionHeading({ path, title, description, align = "left" }) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-4 ${alignment} max-w-3xl mb-14 md:mb-20`}>
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="inline-block h-0.5 w-12 rounded-full bg-primary" />
          <Eyebrow path={path} />
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="text-muted text-base sm:text-lg md:text-xl leading-8">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
