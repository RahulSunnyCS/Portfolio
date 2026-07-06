"use client";
import { useEffect, useRef } from "react";

export function useMagnetic(strength = 0.25) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };
    const onLeave = () => {
      el.style.transform = "translate(0,0)";
      el.style.transition = "transform 0.5s cubic-bezier(0.16,1,0.3,1)";
    };
    const onEnter = () => {
      el.style.transition = "transform 0.12s ease-out";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("mouseenter", onEnter);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("mouseenter", onEnter);
    };
  }, [strength]);

  return ref;
}
