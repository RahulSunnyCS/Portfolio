"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}

export default function Reveal({ children, className = "", delay = 0, direction = "up" }: RevealProps) {
  const [ref, visible] = useScrollReveal();
  const cls = `reveal reveal--${direction} ${visible ? "reveal--visible" : ""} ${className}`;
  return (
    <div ref={ref} className={cls} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
