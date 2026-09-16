import React from 'react';
import { Shield, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-cyber">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-badge">
              <Shield size={18} />
            </div>
            <div>
              <span className="f-name">KOTHAKONDA SUNNY</span>
              <span className="f-role">OFFENSIVE SECURITY / PENETRATION TESTER</span>
            </div>
          </div>

          <div className="footer-socials">
            <a
              href="https://github.com/sunny1451"
              target="_blank"
              rel="noopener noreferrer"
              className="f-social-btn"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/sunny-kothakonda-13616a281"
              target="_blank"
              rel="noopener noreferrer"
              className="f-social-btn"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:sunnykothakonda4@gmail.com"
              className="f-social-btn"
              aria-label="Email Address"
            >
              <Mail size={18} />
            </a>
            <button
              onClick={scrollToTop}
              className="f-social-btn back-to-top"
              aria-label="Scroll back to top"
              title="Back to Top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Kothakonda Sunny. Engineered with an offensive mindset &amp; defensive rigor.
          </p>
          <div className="footer-notice">
            <span>SEC_CLEARANCE: AUTHORIZED PRACTICE ONLY</span>
            <span className="sep">•</span>
            <span>HYDERABAD, IN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
