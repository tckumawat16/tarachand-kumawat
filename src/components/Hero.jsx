import { ArrowDown, Download, Mail, BadgeCheck } from "lucide-react";
import { profile, nodeStats } from "../data/resumeData";
import { useReveal } from "../hooks/useReveal";
import "./Hero.css";

export default function Hero() {
  const textRef = useReveal();
  const diagramRef = useReveal();

  return (
    <section id="home" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-inner">
        <div ref={textRef} className="hero-text reveal">
          <div className="hero-badges">
            <span className="status-tag">
              <span className="status-dot" />
              AVAILABLE &middot; OPEN TO NEW OPPORTUNITIES
            </span>
            <a
              className="toptal-badge"
              href={profile.toptal}
              target="_blank"
              rel="noreferrer"
            >
              <BadgeCheck size={14} /> Toptal Verified Expert
            </a>
          </div>

          <h1 className="hero-name">{profile.name}</h1>

          <p className="hero-titles">
            {profile.titles.join("  /  ")}
          </p>

          <p className="hero-summary">{profile.tagline}</p>

          <div className="hero-meta">
            <span>{profile.location}</span>
            <span className="meta-sep">&bull;</span>
            <span>{profile.availability}</span>
          </div>

          <div className="hero-cta">
            <a
              className="btn btn-primary"
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Download size={16} /> Download Resume
            </a>
            <a className="btn btn-outline" href="#contact">
              <Mail size={16} /> Get in Touch
            </a>
          </div>
        </div>

        <div ref={diagramRef} className="hero-diagram reveal" role="img" aria-label="Career overview diagram showing key stats">
          <div className="diagram-visual">
            <svg viewBox="0 0 420 420" className="diagram-svg">
              <g className="diagram-lines">
                <line x1="210" y1="210" x2="210" y2="70" />
                <line x1="210" y1="210" x2="350" y2="150" />
                <line x1="210" y1="210" x2="350" y2="290" />
                <line x1="210" y1="210" x2="70" y2="290" />
              </g>

              <g className="diagram-core">
                <circle cx="210" cy="210" r="56" className="core-circle" />
              </g>

              {[
                { x: 210, y: 70, i: 0 },
                { x: 350, y: 150, i: 1 },
                { x: 350, y: 290, i: 2 },
                { x: 70, y: 290, i: 3 },
              ].map((pos) => (
                <g key={pos.i} className="diagram-node" style={{ "--delay": `${pos.i * 0.4}s` }}>
                  <circle cx={pos.x} cy={pos.y} r="8" className="node-dot" />
                  <circle cx={pos.x} cy={pos.y} r="8" className="node-pulse" />
                </g>
              ))}
            </svg>

            <img
              className="core-photo"
              src={`${import.meta.env.BASE_URL}images/profile.webp`}
              alt={profile.name}
              width="240"
              height="240"
            />
          </div>

          <div className="diagram-labels">
            {nodeStats.map((s) => (
              <div key={s.id} className={`diagram-label label-${s.id}`}>
                <span className="label-value">{s.label}</span>
                <span className="label-sub">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to About section">
        <ArrowDown size={16} />
      </a>
    </section>
  );
}
