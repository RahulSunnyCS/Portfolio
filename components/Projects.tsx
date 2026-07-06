import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import TiltCard from "./TiltCard";

const projectsData = [
  {
    title: "SentryFront",
    description:
      "Frontend-first security platform for detecting BOLA, exposed secrets, and broken access control in single-page applications. Scans client-side code and network patterns to surface vulnerabilities before they reach production.",
    tags: ["React", "Security", "SPA Analysis"],
    github: "https://github.com/RahulSunnyCS/sentryfront",
    color: "var(--primary)",
  },
  {
    title: "Trade Analytics",
    description:
      "Automated trade data pipeline — parses broker contract notes from email, extracts P&L and charges data, and syncs multi-account analytics to Google Sheets. Supports Finvasia and AngelOne brokers.",
    tags: ["Node.js", "Automation", "Google Sheets API"],
    github: "https://github.com/RahulSunnyCS/trade-analytics",
    color: "var(--secondary)",
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
