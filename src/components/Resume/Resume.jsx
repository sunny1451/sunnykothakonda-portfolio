import React, { useState } from 'react';
import { FileText, Download, ExternalLink, Eye, ShieldCheck, Check, Info } from 'lucide-react';
import './Resume.css';

export default function Resume() {
  const [copied, setCopied] = useState(false);
  const resumeUrl = "/resume/Kothakonda_Sunny_Resume.pdf";

  const handleCopyPath = () => {
    navigator.clipboard.writeText("public/resume/Kothakonda_Sunny_Resume.pdf");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Verified Curriculum Vitae</span>
          <h2 className="section-title">Professional Resume &amp; Profile</h2>
          <p className="section-subtitle">
            Access the complete offensive security credentials, vulnerability assessment experience, and academic record for Kothakonda Sunny.
          </p>
        </div>

        <div className="cyber-card resume-main-card">
          <div className="resume-grid">
            {/* Left Info Panel */}
            <div className="resume-info-panel">
              <div className="resume-identity-header">
                <span className="resume-tag">CANDIDATE DOSSIER</span>
                <h3 className="candidate-name">KOTHAKONDA SUNNY</h3>
                <div className="candidate-role">Penetration Tester</div>
                <div className="candidate-domains">
                  Cybersecurity <span className="dot">•</span> VAPT <span className="dot">•</span> Web Application Security
                </div>
              </div>

              <div className="resume-highlights-box">
                <div className="r-highlight-item">
                  <ShieldCheck size={18} className="r-check" />
                  <div>
                    <strong>Practical VAPT Experience:</strong>
                    <p>Web application vulnerability assessment (OWASP Top 10) &amp; isolated lab simulations.</p>
                  </div>
                </div>

                <div className="r-highlight-item">
                  <ShieldCheck size={18} className="r-check" />
                  <div>
                    <strong>Security Automation:</strong>
                    <p>Custom Python network scanners, entropy analyzers, and structured report engines.</p>
                  </div>
                </div>

                <div className="r-highlight-item">
                  <ShieldCheck size={18} className="r-check" />
                  <div>
                    <strong>Hackathon Technical Leadership:</strong>
                    <p>Team Leader at Smart India Hackathon (SIH) for SecureWipe AI.</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons: View Resume and Download Resume */}
              <div className="resume-action-buttons">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  id="view-resume-main-btn"
                >
                  <Eye size={18} />
                  <span>View Resume</span>
                  <ExternalLink size={14} className="ext-icon" />
                </a>

                <a
                  href={resumeUrl}
                  download="Kothakonda_Sunny_Resume.pdf"
                  className="btn btn-outline"
                  id="download-resume-main-btn"
                >
                  <Download size={18} />
                  <span>Download Resume</span>
                </a>
              </div>

              <div className="resume-pdf-note">
                <Info size={14} className="info-icon" />
                <span>Opens full high-resolution PDF document in clean browser viewer.</span>
              </div>
            </div>

            {/* Right: PDF Quick Preview Card */}
            <div className="resume-preview-panel">
              <div className="preview-terminal-window">
                <div className="preview-top-bar">
                  <span className="p-dot red" />
                  <span className="p-dot yellow" />
                  <span className="p-dot green" />
                  <span className="preview-filename">Kothakonda_Sunny_Resume.pdf</span>
                </div>

                <div className="preview-paper-surface">
                  <div className="paper-header">
                    <div className="paper-name">KOTHAKONDA SUNNY</div>
                    <div className="paper-sub">PENETRATION TESTER &amp; OFFENSIVE SECURITY</div>
                    <div className="paper-meta">Hyderabad, Telangana | sunnykothakonda4@gmail.com</div>
                  </div>

                  <div className="paper-divider" />

                  <div className="paper-section-block">
                    <div className="paper-sec-title">CORE COMPETENCIES</div>
                    <div className="paper-sec-text">
                      Web Application VAPT • OWASP Top 10 • Network Vulnerability Assessment • Python Security Tooling • Burp Suite • Nmap • OpenVAS • Linux / Kali
                    </div>
                  </div>

                  <div className="paper-section-block">
                    <div className="paper-sec-title">KEY SECURITY PROJECTS</div>
                    <div className="paper-sec-bullets">
                      <div>▸ Password Strength &amp; Entropy Tester (Python CLI)</div>
                      <div>▸ Python Automated VAPT Scanner (Nmap Engine)</div>
                      <div>▸ Custom VAPT Lab (Flask, Burp Suite, OpenVAS)</div>
                      <div>▸ SecureWipe AI (Smart India Hackathon, Team Leader)</div>
                    </div>
                  </div>

                  <div className="paper-section-block">
                    <div className="paper-sec-title">EDUCATION</div>
                    <div className="paper-sec-text">
                      B.Tech in Computer Science — Avanthi Institute of Technology (3rd Year Ongoing)
                    </div>
                  </div>

                  <div className="paper-overlay-cta">
                    <a
                      href={resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      <FileText size={15} />
                      Open Full Document
                    </a>
                  </div>
                </div>
              </div>

              {/* Maintenance Location Guidance Banner */}
              <div className="pdf-location-guide">
                <span className="guide-title">PDF Asset File Path:</span>
                <div className="guide-path-box">
                  <code>public/resume/Kothakonda_Sunny_Resume.pdf</code>
                  <button
                    className="guide-copy-btn"
                    onClick={handleCopyPath}
                    title="Copy relative file path"
                  >
                    {copied ? <Check size={14} color="#2ed573" /> : "Copy"}
                  </button>
                </div>
                <p className="guide-hint">
                  Replace this file anytime to instantly update your portfolio's active resume.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
