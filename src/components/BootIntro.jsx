import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "../data/portfolio";

const BOOT_LOG = [
  "Initializing kernel...",
  "Mounting React 19 runtime...",
  "Loading Vite build pipeline...",
  "Compiling Tailwind CSS v4 tokens...",
  "Starting Framer Motion engine...",
  "Booting Three.js / WebGL context...",
  "Linking Node.js + Express services...",
  "Syncing MongoDB data layer...",
  "Optimizing render pipeline...",
  "All systems nominal.",
];

const SESSION_KEY = "khizer-portfolio-intro-seen";

export default function BootIntro({ reducedMotion }) {
  const alreadySeen =
    typeof window !== "undefined" &&
    window.sessionStorage.getItem(SESSION_KEY) === "1";

  const [stage, setStage] = useState(
    alreadySeen || reducedMotion ? "done" : "idle"
  );
  const [lines, setLines] = useState([]);
  const [progress, setProgress] = useState(0);
  const audioCtxRef = useRef(null);

  // Lock page scroll while the intro is active.
  useEffect(() => {
    document.body.style.overflow = stage === "done" ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [stage]);

  function playBeep() {
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      if (!audioCtxRef.current) audioCtxRef.current = new Ctx();
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(180, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(720, ctx.currentTime + 0.35);
      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4);
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } catch {
      // Ignore audio errors (autoplay restrictions, unsupported browsers).
    }
  }

  function finish() {
    window.sessionStorage.setItem(SESSION_KEY, "1");
    setStage("done");
  }

  function handlePress() {
    if (stage !== "idle") return;
    playBeep();
    setStage("pressed");
    setTimeout(() => setStage("booting"), 550);
  }

  // Type out the boot log line by line.
  useEffect(() => {
    if (stage !== "booting") return;
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setLines((prev) => [...prev, BOOT_LOG[i - 1]]);
      setProgress(Math.round((i / BOOT_LOG.length) * 100));
      if (i >= BOOT_LOG.length) {
        clearInterval(interval);
        setTimeout(() => setStage("reveal"), 450);
      }
    }, 260);
    return () => clearInterval(interval);
  }, [stage]);

  // Hold on the name reveal, then exit.
  useEffect(() => {
    if (stage !== "reveal") return;
    const t = setTimeout(() => setStage("exiting"), 1900);
    return () => clearTimeout(t);
  }, [stage]);

  useEffect(() => {
    if (stage !== "exiting") return;
    const t = setTimeout(finish, 700);
    return () => clearTimeout(t);
  }, [stage]);

  if (stage === "done") return null;

  return (
    <AnimatePresence>
      <motion.div
        key="boot-intro"
        className="fixed inset-0 z-[200] flex items-center justify-center bg-base overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="hero-stars absolute inset-0" />

        {/* Skip intro removed - intro now plays without the skip control */}

        {(stage === "idle" || stage === "pressed") && (
          <button
            onClick={handlePress}
            aria-label="Press to power on"
            className="relative z-10 flex flex-col items-center gap-6 outline-none group"
          >
            <svg width="180" height="120" viewBox="0 0 180 120" fill="none">
              {/* screen */}
              <rect x="20" y="10" width="140" height="88" rx="8" fill="#15171f" stroke="#23252f" strokeWidth="2" />
              <rect x="30" y="20" width="120" height="68" rx="3" fill="#0b0c11" />
              {/* base */}
              <path d="M8 106 L172 106 L160 98 L20 98 Z" fill="#101218" stroke="#23252f" strokeWidth="2" />
              {/* power button */}
              <motion.circle
                cx="90"
                cy="54"
                r="14"
                fill="#e5484d"
                animate={
                  stage === "pressed"
                    ? { scale: [1, 0.8, 1.15, 1] }
                    : { scale: [1, 1.06, 1] }
                }
                transition={
                  stage === "pressed"
                    ? { duration: 0.5 }
                    : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
                }
                style={{ filter: "drop-shadow(0 0 10px rgba(229,72,77,0.65))" }}
              />
              <path
                d="M90 46 v8 M85 49 a8 8 0 1 0 10 0"
                stroke="#08090d"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-mono text-xs tracking-[0.3em] text-white">
              PRESS TO BOOT
            </span>
          </button>
        )}

        {stage === "booting" && (
          <div className="relative z-10 w-[min(520px,86vw)] font-mono text-sm text-muted">
            <div className="mb-4 h-1 w-full overflow-hidden rounded-full bg-surface-2">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-secondary"
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            <div className="space-y-1.5">
              {lines.map((line, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-secondary">$</span>
                  <span>{line}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {(stage === "reveal" || stage === "exiting") && (
          <motion.div
            className="relative z-10 px-6 text-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-3 font-mono text-xs tracking-[0.35em] text-secondary">
              SYSTEM READY
            </p>
            <h1 className="font-display text-5xl sm:text-6xl font-semibold tracking-tight bg-gradient-to-r from-text via-primary-soft to-secondary bg-clip-text text-transparent">
              {profile.name}
            </h1>
            <p className="mt-3 text-muted">{profile.role}</p>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
