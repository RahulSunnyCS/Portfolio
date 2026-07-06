import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const experienceData = [
  {
    company: "Winwire Technologies",
    role: "Senior Software Design Engineer",
    period: "Feb 2024 — Present",
    location: "Bengaluru",
    highlights: [
      "Expanded analytics platform to two new brands by extracting duplicated brand logic into reusable modules",
      "Led config-driven migration of email templates to reusable component architecture",
      "Delivered module-level code splitting, lifting PageSpeed by +10 points",
      "Co-owned pre-checkout feature maintenance — triaged defects, coordinated fixes, kept releases on track",
    ],
  },
  {
    company: "Springboard",
    role: "Frontend Engineer II",
    period: "Apr 2022 — Jan 2024",
    location: "Bengaluru",
    highlights: [
      "Drove conversion rate improvement via page-performance optimization and SEO enhancements",
      "Migrated HubSpot forms to in-house solution — +5 Lighthouse performance score",
      "Optimised page-data.json reducing TBT by up to 6 seconds",
      "Orchestrated end-to-end B2U rebranding with seamless UI transition",
      "Automated critical flows with Selenium for early bug detection",
    ],
  },
  {
    company: "Envestnet",
    role: "Senior Engineer",
    period: "Jul 2019 — Mar 2022",
    location: "Trivandrum",
    highlights: [
      "Built enterprise SPAs for multiple projects using React.js",
      "Maintained a React Native app — development, upgrades, App Store & Play Store deployment",
      "Resolved application security issues and performed regular maintenance",
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
