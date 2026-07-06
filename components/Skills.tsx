import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const skillCategories = [
  { title: "Frontend", skills: ["React", "React Native", "Vue", "Redux", "Saga", "Gatsby"] },
  { title: "Languages", skills: ["JavaScript", "TypeScript", "HTML", "CSS"] },
  { title: "Tools & Platforms", skills: ["Git", "Figma", "Storyblok", "Selenium", "Zapier"] },
  { title: "Practices", skills: ["Design Systems", "Performance", "Accessibility", "SEO", "CI/CD"] },
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
