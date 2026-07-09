import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

export default function Orbit() {
  return (
    <section id="orbit" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(circle_at_top,_rgba(110,86,248,0.18),transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-8 w-24 h-24 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          path="launchpad.jsx"
          title="Mission Control"
          description="A motion-driven dashboard for the stages behind each build."
        />

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div className="grid gap-5">
            <Reveal>
              <div className="section-panel rounded-[2rem] p-7 sm:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-faint mb-3">System</p>
                <p className="font-display text-2xl">Design</p>
                <p className="mt-3 text-muted leading-7">Clean interfaces, strong layouts, and a clear visual system.</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="section-panel rounded-[2rem] p-7 sm:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-faint mb-3">System</p>
                <p className="font-display text-2xl">Build</p>
                <p className="mt-3 text-muted leading-7">Reliable APIs, smooth data flow, and a backend you can trust.</p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="section-panel rounded-[2rem] p-7 sm:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-faint mb-3">System</p>
                <p className="font-display text-2xl">Launch</p>
                <p className="mt-3 text-muted leading-7">Fast deployments, polished transitions, and a live-ready finish.</p>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="relative mx-auto w-full max-w-[28rem] md:max-w-xl aspect-square overflow-hidden">
              <div className="orbit-scene">
                <div className="orbit-center glass">
                  <p className="text-faint text-sm uppercase tracking-[0.4em] mb-2">launch</p>
                  <p className="font-display text-3xl sm:text-4xl">Live</p>
                </div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 24 }}
                  className="orbit-wrapper orbit-wrapper-1"
                >
                  <div className="orbit-ring orbit-ring-1" />
                  <div className="orbit-satellite bg-primary/20 border-primary/35 text-primary">Design</div>
                </motion.div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
                  className="orbit-wrapper orbit-wrapper-2"
                >
                  <div className="orbit-ring orbit-ring-2" />
                  <div className="orbit-satellite bg-secondary/20 border-secondary/35 text-secondary">Build</div>
                </motion.div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                  className="orbit-wrapper orbit-wrapper-3"
                >
                  <div className="orbit-ring orbit-ring-3" />
                  <div className="orbit-satellite bg-white/10 border-white/20 text-text">Deploy</div>
                </motion.div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
                  className="orbit-wrapper orbit-wrapper-4"
                >
                  <div className="orbit-ring orbit-ring-4" />
                  <div className="orbit-satellite bg-gradient-to-br from-primary to-secondary border-white/10 text-text">Scale</div>
                </motion.div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
