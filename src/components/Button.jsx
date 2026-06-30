import { motion } from "framer-motion";

const base =
  "relative inline-flex items-center justify-center gap-2 font-medium rounded-full transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-primary";

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-soft shadow-[0_0_0_1px_rgba(110,86,248,0.4),0_8px_30px_-8px_rgba(110,86,248,0.65)]",
  ghost:
    "glass text-text hover:border-primary/60 hover:text-primary",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

/**
 * Button / anchor with a subtle magnetic hover lift.
 * Renders an <a> when `href` is provided, otherwise a <button>.
 */
export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  icon: Icon,
  ...rest
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={classes}
      {...rest}
    >
      {children}
      {Icon && <Icon size={16} strokeWidth={2.25} aria-hidden="true" />}
    </Tag>
  );
}
