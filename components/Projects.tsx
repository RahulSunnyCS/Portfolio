import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import TiltCard from "./TiltCard";

const projectsData = [
  {
    title: "VibeSafe",
    description:
      "Web quality platform for security, performance, a11y, and SEO. Scans with 18 security modules and 6 GDPR/CCPA/WCAG 2.2 compliance-signal detectors; reconciles Lighthouse lab data with real-user CrUX field data. Integrates Claude for AI remediation, feature-flagged and fault-isolated from the deterministic scan.",
    tags: ["Next.js 14", "TypeScript", "Prisma", "Claude API"],
    github: "https://github.com/RahulSunnyCS/vibesafe",
    color: "var(--primary)",
  },
  {
    title: "knowdiff",
    description:
      "Local-first knowledge extraction and claim-verification engine. End-to-end RAG pipeline: local transcription → propositional chunking → hybrid dense+sparse retrieval fused via Reciprocal Rank Fusion, with every output cited to source video and timestamp. Claim classification via a local DeBERTa NLI model.",
    tags: ["Python", "RAG", "faster-whisper", "Claude API"],
    github: "https://github.com/RahulSunnyCS/knowdiff",
    color: "var(--secondary)",
  },
  {
    title: "Multi-Agent Evaluation Harness",
    description:
      "Policy comparison under distribution shift — runs 10 policy variants in parallel against a shared signal distribution to measure generalisation across regime shifts. Five-stage gating per agent with an end-of-day retrospection loop driving parameter evolution; applied to NSE/BSE index options, paper-trading only.",
    tags: ["TypeScript", "PostgreSQL", "TimescaleDB"],
    github: "https://github.com/RahulSunnyCS/ai-trading-agent",
    color: "var(--primary)",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle number="04" title="Projects" />
      <div className="projects__grid">
        {projectsData.map((p, i) => (
          <Reveal key={i} delay={i * 150}>
            <TiltCard className="project-card project-card--glass">
              <div className="project-card__accent" style={{ background: p.color }}></div>
              <div className="project-card__body">
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.description}</p>
                <div className="project-card__tags">
                  {p.tags.map((t, j) => (
                    <span key={j} className="project-card__tag">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link"
                >
                  View on GitHub
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
