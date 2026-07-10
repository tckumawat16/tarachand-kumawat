import { profile } from "../data/resumeData";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>&copy; {year} {profile.name}</span>
        <span className="footer-note">Built with React &middot; Deployed on GitHub Pages</span>
      </div>
    </footer>
  );
}
