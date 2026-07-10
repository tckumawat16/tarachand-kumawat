import { CheckCircle2 } from "lucide-react";
import { profile, leadership } from "../data/resumeData";
import { useReveal } from "../hooks/useReveal";
import "./About.css";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="section">
      <div className="container">
        <div ref={ref} className="reveal">
          <div className="section-head">
            <span className="eyebrow">About</span>
            <h2 className="section-title">Executive Summary</h2>
          </div>

          <div className="about-grid">
            <p className="about-summary">{profile.summary}</p>

            <div className="about-leadership">
              <h3 className="about-subtitle">Leadership &amp; Architecture</h3>
              <ul className="leadership-list">
                {leadership.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={16} className="leadership-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
