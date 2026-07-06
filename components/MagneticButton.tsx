"use client";
import { useMagnetic } from "@/hooks/useMagnetic";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  className?: string;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: MagneticButtonProps) {
  const mRef = useMagnetic(0.2);

  if (href) {
    return (
      <a
        ref={mRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={`mag-btn mag-btn--${variant} ${className}`}
      >
        <span className="mag-btn__label">{children}</span>
      </a>
    );
  }

  return (
    <button
      ref={mRef as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      className={`mag-btn mag-btn--${variant} ${className}`}
    >
      <span className="mag-btn__label">{children}</span>
    </button>
  );
}
