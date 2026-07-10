import { useMemo, useState } from "react";
import { projects, projectCategories } from "../data/resumeData";
import { useReveal } from "../hooks/useReveal";
import "./Projects.css";

function ProjectCard({ project }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="card project-card reveal">
      <div className="project-card-head">
        <h3 className="project-name">{project.name}</h3>
        {project.region && <span className="chip">{project.region}</span>}
      </div>
      <p className="project-domain">{project.domain}</p>
      <ul className="project-points">
        {project.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <div className="skill-chips">
        {project.stack.map((s) => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const headRef = useReveal();
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  );

  return (
    <section id="projects" className="section">
      <div className="container">
        <div ref={headRef} className="reveal section-head">
          <span className="eyebrow">Selected Work</span>
          <h2 className="section-title">Key Projects</h2>
          <p className="section-desc">
            15+ ERP implementations and platforms delivered for clients across the USA, UK, Saudi Arabia, Australia, and the Middle East.
          </p>
        </div>

        <div className="project-filters">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-chip ${active === cat ? "is-active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filtered.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
