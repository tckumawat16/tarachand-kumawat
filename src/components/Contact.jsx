import { Mail, Phone, Linkedin, Github, Trophy, Download } from "lucide-react";
import { profile } from "../data/resumeData";
import { useReveal } from "../hooks/useReveal";
import "./Contact.css";

const LINKS = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "tara-chand-kumawat",
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "tckumawat16",
    href: profile.github,
    icon: Github,
  },
  {
    label: "HackerRank",
    value: "tckumawat16",
    href: profile.hackerrank,
    icon: Trophy,
  },
];

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="section section-bg-alt">
      <div className="container">
        <div ref={ref} className="reveal contact-inner">
          <div className="section-head">
            <span className="eyebrow">Contact</span>
            <h2 className="section-title">Let's Work Together</h2>
            <p className="section-desc">
              Currently looking for Senior Full Stack Python Developer opportunities — open to remote and hybrid roles. Reach out directly or connect below.
            </p>
          </div>

          <div className="contact-grid">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                className="card contact-card"
              >
                <l.icon size={20} className="contact-icon" />
                <div>
                  <span className="contact-label">{l.label}</span>
                  <span className="contact-value">{l.value}</span>
                </div>
              </a>
            ))}
          </div>

          <a
            className="btn btn-primary contact-resume-btn"
            href={`${import.meta.env.BASE_URL}${profile.resumeFile}`}
            download
          >
            <Download size={16} /> Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
}
