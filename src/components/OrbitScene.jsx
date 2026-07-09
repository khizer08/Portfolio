import { motion } from "framer-motion";

export default function OrbitScene() {
  return (
    <div className="relative mx-auto w-full h-full overflow-visible">
      <div className="h-full w-full grid justify-items-center items-start">
        <div className="w-full max-w-[34rem] h-[32rem] sm:h-[34rem] lg:h-[36rem] px-0 py-0">
          <div className="orbit-scene w-full h-full">
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
      </div>
    </div>
  );
}
