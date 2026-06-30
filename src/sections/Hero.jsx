import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { profile } from "../data/portfolio";
import Button from "../components/Button";
import HeroStackScene from "../three/HeroStackScene";

export default function Hero({ reducedMotion }) {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 hero-stars" />
      <div className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(circle_at_top,_rgba(110,86,248,0.28),transparent_55%)] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/2 w-[36rem] h-[36rem] bg-secondary/10 rounded-full blur-[120px] -translate-x-1/2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <div className="hero-content rounded-[2rem] border border-white/10 p-8 sm:p-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="font-mono text-[0.82rem] sm:text-sm uppercase tracking-[0.32em] text-secondary mb-6"
          >
            launch control online
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="font-display font-semibold tracking-[-0.03em] text-5xl sm:text-6xl md:text-[5rem] leading-[0.94]"
          >
            I build useful web experiences
            <br /> that feel solid and responsive.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.22 }}
            className="mt-8 text-base sm:text-lg md:text-xl text-muted max-w-2xl leading-9"
          >
            {profile.tagline} I make sure the interface is clear, the flow is fast, and the project delivers real value instead of flashy effects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.34 }}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Button href={profile.resumeUrl} icon={Download} size="lg">
              Download résumé
            </Button>
            <Button href="#contact" variant="ghost" icon={Mail} size="lg">
              Let's talk
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.72, delay: 0.48 }}
            className="mt-14 grid gap-4 sm:grid-cols-3"
          >
            <div className="section-panel rounded-3xl px-5 py-5 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-faint mb-1">Projects shipped</p>
              <p className="text-2xl sm:text-3xl font-semibold">3+</p>
            </div>
            <div className="section-panel rounded-3xl px-5 py-5 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-faint mb-1">Experience</p>
              <p className="text-2xl sm:text-3xl font-semibold">Frontend + Full-stack</p>
            </div>
            <div className="section-panel rounded-3xl px-5 py-5 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-faint mb-1">Design focus</p>
              <p className="text-2xl sm:text-3xl font-semibold">Polished motion</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.72, delay: 0.62 }}
            className="mt-14 flex items-center gap-3 font-mono text-sm text-faint"
          >
            <span className="h-px w-12 bg-border" />
            scroll to explore
            <ArrowDown size={16} className="animate-bounce" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[32rem] sm:h-[38rem] lg:h-[45rem] rounded-[2rem] overflow-hidden border border-white/10 bg-surface shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
        >
          <HeroStackScene reducedMotion={reducedMotion} className="w-full h-full" />
        </motion.div>
      </div>
    </section>
  );
}
