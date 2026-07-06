"use client";
import { useEffect, useState } from "react";

export function useTypingEffect(text: string, speed = 60, delay = 800) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.substring(0, i + 1));
          i++;
        } else {
          setDone(true);
          clearInterval(interval);
        }
      }, speed);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return [displayed, done] as const;
}
