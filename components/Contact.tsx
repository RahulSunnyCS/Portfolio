import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="section section--contact">
      <SectionTitle number="05" title="Get In Touch" />
      <Reveal delay={100}>
        <p className="contact__intro">
          I&apos;m relocating to Dubai, UAE and available to interview immediately for Senior
          Frontend roles. Whether you have an opportunity, a project idea, or just want to connect —
          my inbox is open.
        </p>
      </Reveal>

      <Reveal delay={200}>
        <div className="contact__links">
          <a href="mailto:rahulsunny13@gmail.com" className="contact__item">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>rahulsunny13@gmail.com</span>
          </a>
          <a href="tel:+918606054888" className="contact__item">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.67 2.36a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.76.31 1.55.54 2.36.67A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>+91 8606054888</span>
          </a>
          <a href="https://www.linkedin.com/in/rahul-sunny-c-s" target="_blank" rel="noopener noreferrer" className="contact__item">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/RahulSunnyCS" target="_blank" rel="noopener noreferrer" className="contact__item">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </Reveal>

      <Reveal delay={350}>
        <MagneticButton href="https://www.linkedin.com/in/rahul-sunny-c-s" className="contact__resume-btn">
          Let&apos;s Connect
        </MagneticButton>
      </Reveal>
    </section>
  );
}
