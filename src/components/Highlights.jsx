import { highlights } from "../data/resumeData";
import { useReveal } from "../hooks/useReveal";
import "./Highlights.css";

export default function Highlights() {
  const ref = useReveal();

  return (
    <section id="highlights" className="section section-bg-alt">
      <div className="container">
        <div ref={ref} className="reveal">
          <div className="section-head">
            <span className="eyebrow">Career Highlights</span>
            <h2 className="section-title">What 11.5 years looks like</h2>
          </div>

          <ul className="highlight-log">
            {highlights.map((item) => (
              <li key={item}>
                <span className="log-marker">&gt;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
