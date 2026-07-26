import { Terminal, Bot, MousePointer2, Sparkles } from "lucide-react";
import { aiTools } from "../data/resumeData";
import { useReveal } from "../hooks/useReveal";
import "./AiTools.css";

const ICONS = {
  terminal: Terminal,
  bot: Bot,
  "mouse-pointer": MousePointer2,
  sparkles: Sparkles,
};

export default function AiTools() {
  const ref = useReveal();

  return (
    <section id="ai-tools" className="section section-bg-alt">
      <div className="container">
        <div ref={ref} className="reveal">
          <div className="section-head">
            <span className="eyebrow">Workflow</span>
            <h2 className="section-title">AI-Assisted Development</h2>
            <p className="section-desc">
              Tools I use daily to move faster without cutting corners on code quality.
            </p>
          </div>

          <div className="ai-tools-grid">
            {aiTools.map((tool) => {
              const Icon = ICONS[tool.icon];
              return (
                <div key={tool.id} className="card ai-tool-card">
                  <div className="ai-tool-icon">
                    <Icon size={20} />
                  </div>
                  <h3 className="ai-tool-name">{tool.name}</h3>
                  <p className="ai-tool-desc">{tool.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
