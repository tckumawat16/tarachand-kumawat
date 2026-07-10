import { GraduationCap } from "lucide-react";
import { education } from "../data/resumeData";
import { useReveal } from "../hooks/useReveal";
import "./Education.css";

export default function Education() {
  const ref = useReveal();

  return (
    <section id="education" className="section">
      <div className="container">
        <div ref={ref} className="reveal">
          <div className="section-head">
            <span className="eyebrow">Education</span>
            <h2 className="section-title">Academic Background</h2>
          </div>

          <div className="edu-grid">
            {education.map((e) => (
              <div key={e.degree} className="card edu-card">
                <GraduationCap size={22} className="edu-icon" />
                <div>
                  <h3 className="edu-degree">{e.degree}</h3>
                  <p className="edu-school">
                    {e.school} &middot; {e.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
