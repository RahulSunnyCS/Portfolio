"use client";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";

export default function Hero() {
  const [typed, done] = useTypingEffect("Building performant, accessible web experiences.", 55, 900);

  return (
    <section id="hero" className="hero hero--asym">
      <div className="hero__glow"></div>
      <div className="hero__grid-bg"></div>

      <div className="hero__content">
        <div className="hero__text">
          <Reveal delay={0}>
            <p className="hero__greeting">Hey there, I&apos;m</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="hero__name">
              Rahul Sunny<span className="gradient-text"> C S</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="hero__role">Senior Software Design Engineer</p>
          </Reveal>
          <div className="hero__typed-wrap">
            <span className="hero__typed">{typed}</span>
            <span className={`hero__cursor ${done ? "hero__cursor--blink" : ""}`}>|</span>
          </div>
          <Reveal delay={400}>
            <div className="hero__ctas">
              <MagneticButton href="#projects">View My Work</MagneticButton>
              <MagneticButton href="#contact" variant="outline">Get In Touch</MagneticButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={300} direction="right" className="hero__visual">
          <div className="code-block">
            <div className="code-block__dots">
              <span style={{ background: "#ff5f57" }}></span>
              <span style={{ background: "#febc2e" }}></span>
              <span style={{ background: "#28c840" }}></span>
            </div>
            <pre className="code-block__code">
              <code>{`const Rahul = {
  role: 'Frontend Engineer',
  experience: '5+ years',
  stack: ['React', 'TypeScript',
          'Vue', 'React Native'],
  passion: 'Pixel-perfect UI'
};`}</code>
            </pre>
          </div>
        </Reveal>
      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-line"></div>
        <span className="hero__scroll-text">scroll</span>
      </div>
    </section>
  );
}
