import { skillGroups, competencies } from "../data/resumeData";
import { useReveal } from "../hooks/useReveal";
import "./Skills.css";

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="section">
      <div className="container">
        <div ref={ref} className="reveal">
          <div className="section-head">
            <span className="eyebrow">Stack</span>
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-desc">
              The tools and platforms behind 15+ ERP implementations and modern backend systems.
            </p>
          </div>

          <div className="skills-grid">
            {skillGroups.map((g) => (
              <div key={g.group} className="card skill-card">
                <h3 className="skill-group-title">{g.group}</h3>
                <div className="skill-chips">
                  {g.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="competencies-block">
            <h3 className="skill-group-title">Core Competencies</h3>
            <div className="skill-chips">
              {competencies.map((item) => (
                <span key={item} className="chip chip-accent">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
