import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="section">
      <SectionTitle number="01" title="About Me" />
      <div className="about__grid">
        <Reveal delay={100} className="about__text">
          <p>
            I&apos;m a results-oriented Senior Frontend Engineer with <strong>7 years</strong> of
            experience building high-performance React + TypeScript applications at scale. I thrive
            in agile environments, owning features end-to-end — from API integration to release.
          </p>
          <p>
            My strengths lie in <strong>React</strong>, Core Web Vitals optimisation, component
            architecture, and AI-augmented frontend systems — LLM streaming, SSE, and RAG. I&apos;m
            passionate about performance, accessibility, and creating interfaces that feel effortless
            to use.
          </p>
          <p>
            Currently at <strong>Winwire Technologies</strong> (client: Tekion Corp) in Bengaluru, I
            design shared AI streaming infrastructure and lead frontend architecture decisions that
            help teams ship faster through reusable component patterns.
          </p>
          <div className="about__stats">
            <div className="about__stat">
              <span className="about__stat-num">7</span>
              <span className="about__stat-label">Years Experience</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-num">3</span>
              <span className="about__stat-label">Companies</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-num">B.Tech</span>
              <span className="about__stat-label">Engineering</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={250} direction="right" className="about__visual">
          <div className="about__card-stack">
            <div className="about__info-card">
              <div className="about__info-icon">📍</div>
              <div>
                <div className="about__info-title">Based in</div>
                <div className="about__info-value">Bengaluru, India</div>
                <div className="about__info-sub">Relocating to Dubai, UAE</div>
              </div>
            </div>
            <div className="about__info-card">
              <div className="about__info-icon">🎓</div>
              <div>
                <div className="about__info-title">Education</div>
                <div className="about__info-value">B.Tech — CET Trivandrum</div>
                <div className="about__info-sub">CGPA 8.98</div>
              </div>
            </div>
            <div className="about__info-card">
              <div className="about__info-icon">🏆</div>
              <div>
                <div className="about__info-title">Award</div>
                <div className="about__info-value">Envathon 2020 — Runner Up</div>
                <div className="about__info-sub">Innovation Category</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
