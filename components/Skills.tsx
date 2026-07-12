import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const skillCategories = [
  { title: "Frontend", skills: ["React", "TypeScript", "JavaScript (ES2023)", "Next.js", "Redux Toolkit", "React Native", "Vue", "GatsbyJS", "HTML", "CSS"] },
  { title: "AI Engineering", skills: ["LLM Streaming (SSE)", "RAG Pipelines", "Prompt Engineering", "Claude/OpenAI APIs", "MCP"] },
  { title: "Backend (Working Knowledge)", skills: ["Java", "Spring Boot", "REST APIs", "PostgreSQL"] },
  { title: "Performance", skills: ["Core Web Vitals (LCP/TBT/CLS)", "Lighthouse", "Code Splitting", "Bundle Optimisation"] },
  { title: "Testing & Tooling", skills: ["Jest", "React Testing Library", "Selenium", "Git", "CI/CD"] },
  { title: "CMS & Design", skills: ["Storyblok", "Figma"] },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle number="03" title="Skills" />
      <div className="skills__grid">
        {skillCategories.map((cat, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="skills__category">
              <h3 className="skills__cat-title">{cat.title}</h3>
              <div className="skills__chips">
                {cat.skills.map((s, j) => (
                  <span key={j} className="skill-chip" style={{ animationDelay: `${j * 60}ms` }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
