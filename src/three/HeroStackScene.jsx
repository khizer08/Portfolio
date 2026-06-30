import { Suspense, Component, lazy } from "react";
const HeroStack = lazy(() => import("./HeroStack"));

class CanvasErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

/** Static CSS layered-glass fallback when WebGL is unavailable or motion is reduced. */
function StaticStackFallback() {
  const layers = [
    { w: "w-64", color: "from-primary/40 to-primary/5", y: "translate-y-0" },
    { w: "w-52", color: "from-primary-soft/35 to-primary-soft/5", y: "translate-y-2" },
    { w: "w-40", color: "from-secondary/35 to-secondary/5", y: "translate-y-4" },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-full">
      {layers.map((l, i) => (
        <div
          key={i}
          className={`${l.w} ${l.y} h-16 rounded-2xl bg-gradient-to-br ${l.color} border border-border backdrop-blur-md animate-float`}
          style={{ animationDelay: `${i * 0.4}s` }}
        />
      ))}
    </div>
  );
}

export default function HeroStackScene({ reducedMotion, className }) {
  if (reducedMotion) {
    return (
      <div className={`${className} bg-surface/95`}>
        <StaticStackFallback />
      </div>
    );
  }

  return (
    <CanvasErrorBoundary fallback={<div className={`${className} bg-surface/95`}><StaticStackFallback /></div>}>
      <Suspense fallback={<div className={`${className} bg-surface/95`}><StaticStackFallback /></div>}>
        <HeroStack className={className} />
      </Suspense>
    </CanvasErrorBoundary>
  );
}
