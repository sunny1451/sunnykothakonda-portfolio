import React from 'react';
import { MapPin, Shield, Terminal, ArrowRight, FileText, Download, CheckCircle2 } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const targetPos = el.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({
        top: targetPos,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Core Identity */}
        <div className="hero-left">
          <div className="hero-status-pill">
            <span className="status-indicator-dot" />
            <span className="status-indicator-text">AVAILABLE FOR OFFENSIVE SECURITY ROLES / INTERNSHIP</span>
          </div>

          <p className="hero-greeting">Hello, I'm</p>

          <h1 className="hero-name">
            KOTHAKONDA SUNNY
            <span className="hero-role">PENETRATION TESTER</span>
          </h1>

          <p className="hero-specialties">
            Cybersecurity <span className="sep">•</span> VAPT <span className="sep">•</span> Web Application Security
          </p>

          <p className="hero-bio">
            Offensive Security and Penetration Testing practitioner focused on identifying critical attack surfaces before adversaries do. Hands-on experience across Web Application VAPT (OWASP Top 10), Network Vulnerability Assessment, and Python security automation engineered inside authorized laboratory environments.
          </p>

          <div className="hero-location">
            <MapPin size={16} className="loc-icon" />
            <span>HYDERABAD, TELANGANA, INDIA</span>
          </div>

          {/* Action CTAs: View Resume, Download Resume, Explore Projects */}
          <div className="hero-actions">
            <a
              href="/resume/Kothakonda_Sunny_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              id="hero-view-resume-btn"
            >
              <FileText size={18} />
              View Resume
            </a>

            <a
              href="/resume/Kothakonda_Sunny_Resume.pdf"
              download="Kothakonda_Sunny_Resume.pdf"
              className="btn btn-outline"
              id="hero-download-resume-btn"
            >
              <Download size={18} />
              Download Resume
            </a>

            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className="btn btn-outline"
            >
              Security Projects
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Right Column: Mission Card & Core Vectors */}
        <div className="hero-right">
          <div className="mission-card cyber-card">
            <div className="mission-header">
              <div className="mission-shield-icon">
                <Shield size={24} />
              </div>
              <div className="mission-title-box">
                <span className="mission-label">OFFENSIVE PHILOSOPHY</span>
                <h3>Adversarial Fortification</h3>
              </div>
            </div>

            <p className="mission-quote">
              “Finding vulnerabilities before adversaries do to fortify digital defense.”
            </p>

            <div className="hero-feature-list">
              <div className="hero-feature-item">
                <CheckCircle2 size={16} className="feature-icon" />
                <span>Web Application VAPT &amp; OWASP Top 10</span>
              </div>
              <div className="hero-feature-item">
                <CheckCircle2 size={16} className="feature-icon" />
                <span>Network Vulnerability Assessment &amp; Recon</span>
              </div>
              <div className="hero-feature-item">
                <CheckCircle2 size={16} className="feature-icon" />
                <span>Automated Security Tooling in Python</span>
              </div>
            </div>

            <div className="terminal-quick-status">
              <div className="term-bar">
                <span className="t-dot red" />
                <span className="t-dot yellow" />
                <span className="t-dot green" />
                <span className="term-filename">sec_status.sh</span>
              </div>
              <div className="term-body">
                <code>
                  <span className="term-prompt">sunny@kali:~$</span> vapt-audit --status<br />
                  <span className="term-green">[+] Labs: Authorized &amp; Isolated</span><br />
                  <span className="term-cyan">[+] Tooling: Burp Suite, Nmap, OpenVAS</span><br />
                  <span className="term-dim">[*] Ready for deployment</span>
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
