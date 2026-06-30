/**
 * Section eyebrow styled like a file path / import line — reinforces the
 * developer-portfolio identity instead of generic numbered markers.
 */
export default function Eyebrow({ path, className = "" }) {
  return (
    <div className={`flex items-center gap-2 font-mono text-xs text-primary ${className}`}>
      <span aria-hidden="true" className="text-secondary">~/</span>
      <span className="tracking-wide text-muted">{path}</span>
    </div>
  );
}
