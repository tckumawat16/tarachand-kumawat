import { experience } from "../data/resumeData";
import { useReveal } from "../hooks/useReveal";
import "./Experience.css";

function ExperienceItem({ item }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="timeline-item reveal">
      <div className="timeline-rail">
        <span className="timeline-dot" />
      </div>
      <div className="timeline-content">
        <span className="timeline-period">{item.period}</span>
        <h3 className="timeline-role">{item.role}</h3>
        <p className="timeline-company">{item.company}</p>
        <ul className="timeline-points">
          {item.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <div className="skill-chips">
          {item.stack.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const headRef = useReveal();

  return (
    <section id="experience" className="section section-bg-alt">
      <div className="container">
        <div ref={headRef} className="reveal section-head">
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">Where I've Built Things</h2>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <ExperienceItem key={item.company} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
