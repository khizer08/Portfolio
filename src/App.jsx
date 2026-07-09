import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BootIntro from "./components/BootIntro";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import { usePrefersReducedMotion } from "./hooks/useScrollUtils";

export default function App() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="relative bg-base text-text min-h-screen">
      <BootIntro reducedMotion={reducedMotion} />
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary focus:text-white"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero reducedMotion={reducedMotion} />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
