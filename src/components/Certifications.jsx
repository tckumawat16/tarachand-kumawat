import { useEffect, useState } from "react";
import { X, Download, ZoomIn } from "lucide-react";
import { certifications } from "../data/resumeData";
import { useReveal } from "../hooks/useReveal";
import ToptalBadge from "./ToptalBadge.jsx";
import "./Certifications.css";

function CertModal({ cert, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="cert-modal-backdrop" onClick={onClose}>
      <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
        <button className="cert-modal-close" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>
        <img
          src={`${import.meta.env.BASE_URL}${cert.image}`}
          alt={`${cert.title} certificate awarded by ${cert.issuer}`}
        />
        <div className="cert-modal-footer">
          <div>
            <strong>{cert.title}</strong>
            <span className="cert-modal-meta">{cert.issuer} &middot; {cert.date}</span>
          </div>
          <a
            className="btn btn-outline"
            href={`${import.meta.env.BASE_URL}${cert.pdf}`}
            download
          >
            <Download size={16} /> Download PDF
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  const ref = useReveal();
  const [openCert, setOpenCert] = useState(null);

  return (
    <section id="certifications" className="section section-bg-alt">
      <div className="container">
        <div ref={ref} className="reveal">
          <div className="section-head">
            <span className="eyebrow">Certifications</span>
            <h2 className="section-title">Continuous Learning</h2>
          </div>

          <div className="toptal-credential">
            <ToptalBadge />
            <div className="toptal-credential-text">
              <h3 className="cert-title">Toptal &mdash; Verified Expert</h3>
              <p className="cert-meta">Screened &amp; ranked in the top 3% of applicants</p>
              <p className="cert-desc">
                Toptal accepts a small fraction of applicants through a rigorous, multi-stage screening covering technical skills, communication, and problem-solving. Verified profile available at{" "}
                <a href="https://www.toptal.com/developers/resume/tarachand-kumawat" target="_blank" rel="noreferrer">
                  toptal.com/developers/resume/tarachand-kumawat
                </a>
                .
              </p>
            </div>
          </div>

          <div className="cert-grid">
            {certifications.map((cert) => (
              <div key={cert.title} className="cert-card">
                <button
                  className="cert-thumb"
                  onClick={() => setOpenCert(cert)}
                  aria-label={`View ${cert.title} certificate full size`}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}${cert.image}`}
                    alt={`${cert.title} certificate awarded by ${cert.issuer}`}
                    loading="lazy"
                    width="1200"
                    height="800"
                  />
                  <span className="cert-thumb-overlay">
                    <ZoomIn size={20} />
                  </span>
                </button>
                <div className="cert-info">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-meta">
                    {cert.issuer} &middot; {cert.date}
                  </p>
                  <p className="cert-desc">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {openCert && (
        <CertModal cert={openCert} onClose={() => setOpenCert(null)} />
      )}
    </section>
  );
}
