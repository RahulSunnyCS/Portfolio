import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const experienceData = [
  {
    company: "Winwire Technologies (Client: Tekion Corp)",
    role: "Senior Software Design Engineer",
    period: "Feb 2024 — Present",
    location: "Bengaluru",
    highlights: [
      "Designed and built a shared AI streaming infrastructure layer — SSE-based streaming service, LRU cache with TTL eviction, and a useAIStream hook — cutting per-feature AI integration from ~80 lines to 3",
      "Expanded the analytics platform to two new brands by taking over an orphaned project and extracting duplicated brand logic into reusable modules",
      "Led a config-driven migration of email templates to a reusable component architecture, improving cross-brand consistency",
      "Delivered module-level code splitting as part of a tech-debt cleanup, lifting PageSpeed (lab) by +10 for that module",
      "Co-owned the pre-checkout module — triaged priority production defects and coordinated frontend fixes across teams",
    ],
  },
  {
    company: "Springboard",
    role: "Frontend Engineer II",
    period: "Apr 2022 — Jan 2024",
    location: "Bengaluru",
    highlights: [
      "Improved pre-enrollment conversion by migrating HubSpot forms to an in-house form system, improving Lighthouse performance score by ~5 points on average",
      "Owned the B2U vertical end-to-end — built new components, integrated HubSpot and Storyblok (headless CMS)",
      "Built an internal redirect-configuration app, eliminating broken links and improving SEO crawlability",
      "Led frontend delivery of the B2U rebranding with zero-downtime transition during the site overhaul",
      "Automated critical user flows with Selenium (Python) and drove the accessibility (a11y) migration",
    ],
  },
  {
    company: "Envestnet Asset Management",
    role: "Senior Engineer",
    period: "Jul 2019 — Mar 2022",
    location: "Trivandrum",
    highlights: [
      "Solely owned a production React Native app for 2 years — feature development, RN version upgrades, and App Store / Play Store releases",
      "Developed enterprise React SPAs for wealth-management clients across multiple projects",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionTitle number="02" title="Experience" />
      <div className="timeline">
        <div className="timeline__line"></div>
        {experienceData.map((exp, i) => (
          <Reveal key={i} delay={i * 150} direction={i % 2 === 0 ? "left" : "right"}>
            <div className="timeline__item">
              <div className="timeline__dot"></div>
              <div className="timeline__card">
                <div className="timeline__period">{exp.period}</div>
                <h3 className="timeline__company">{exp.company}</h3>
                <p className="timeline__role">{exp.role}</p>
                <span className="timeline__location">{exp.location}</span>
                <ul className="timeline__list">
                  {exp.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
