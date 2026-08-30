import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  target?: string;
  ariaLabel?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  target,
  ariaLabel,
}: ButtonProps) {
  const base =
    "focus-gold group relative inline-flex items-center justify-center gap-2 rounded-full font-body font-semibold transition-all duration-300 ease-out";

  const sizes = {
    md: "px-7 py-3.5 text-sm",
    lg: "px-9 py-4.5 text-base",
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-gold-deep via-gold to-gold-light text-obsidian-950 shadow-gold hover:shadow-[0_0_50px_rgba(184,150,75,0.35)] hover:-translate-y-0.5",
    secondary:
      "border border-gold/50 text-ivory hover:border-gold hover:bg-gold/10 hover:-translate-y-0.5",
    ghost: "text-ivory/80 hover:text-gold-light",
  };

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
