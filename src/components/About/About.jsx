import React from 'react';
import { Target, Search, ShieldAlert, Cpu, Briefcase, Trophy, Terminal } from 'lucide-react';
import { experienceData, achievementsData } from '../../data/experience';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Identity &amp; Professional Summary</span>
          <h2 className="section-title">Offensive Mindset, Defensive Fortification</h2>
          <p className="section-subtitle">
            Cyber Security undergraduate focused on penetration testing, vulnerability assessment, and web application security. Hands-on experience building security labs and Python-based security tools, with practical exposure in controlled laboratory environments.
          </p>
        </div>

        {/* Experience & Achievements Spotlight */}
        <div className="about-experience-grid">
          {/* CRAW Hyderabad Experience */}
          {experienceData.map((exp) => (
            <div key={exp.id} className="cyber-card exp-card">
              <div className="exp-card-header">
                <div className="exp-icon-wrap">
                  <Briefcase size={22} />
                </div>
                <div className="exp-meta-block">
                  <div className="exp-status-tag">{exp.status}</div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <div className="exp-org">{exp.organization} — {exp.location}</div>
                  <div className="exp-duration">{exp.duration}</div>
                </div>
              </div>
              <ul className="exp-bullets">
                {exp.highlights.map((h, hIdx) => (
                  <li key={hIdx}>
                    <span className="bullet-arrow">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* SIH 1st Prize Achievement */}
          {achievementsData.map((ach) => (
            <div key={ach.id} className="cyber-card exp-card achievement-card">
              <div className="exp-card-header">
                <div className="exp-icon-wrap trophy-icon">
                  <Trophy size={22} />
                </div>
                <div className="exp-meta-block">
                  <div className="exp-status-tag prize-tag">COMPETITION HONORS</div>
                  <h3 className="exp-role">{ach.title}</h3>
                  <div className="exp-org">{ach.role} — {ach.organization}</div>
                </div>
              </div>
              <ul className="exp-bullets">
                {ach.highlights.map((h, hIdx) => (
                  <li key={hIdx}>
                    <span className="bullet-arrow">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 3 Core Security Pillars */}
        <div className="about-grid">
          {/* Column 1: Reconnaissance */}
          <div className="cyber-card about-card">
            <div className="about-card-icon">
              <Search size={22} />
            </div>
            <h3 className="about-card-title">Network Recon &amp; Enumeration</h3>
            <p className="about-card-text">
              Target discovery, port scanning, service identification, and protocol analysis using Nmap and Linux-based security tooling across authorized subnet ranges.
            </p>
            <div className="about-card-tags">
              <span className="pill pill-primary">Nmap Scanning</span>
              <span className="pill">Service Fingerprinting</span>
              <span className="pill">Port Enumeration</span>
            </div>
          </div>

          {/* Column 2: Web App Security */}
          <div className="cyber-card about-card highlighted-about-card">
            <div className="about-card-icon">
              <ShieldAlert size={22} />
            </div>
            <h3 className="about-card-title">Web Application VAPT</h3>
            <p className="about-card-text">
              Hands-on vulnerability testing against the OWASP Top 10 using Burp Suite, testing for SQL Injection, Cross-Site Scripting (XSS), and broken access controls.
            </p>
            <div className="about-card-tags">
              <span className="pill pill-primary">Burp Suite</span>
              <span className="pill">OWASP Top 10</span>
              <span className="pill">SQLi &amp; XSS</span>
            </div>
          </div>

          {/* Column 3: Security Tooling */}
          <div className="cyber-card about-card">
            <div className="about-card-icon">
              <Cpu size={22} />
            </div>
            <h3 className="about-card-title">Automated Security Tooling</h3>
            <p className="about-card-text">
              Developing custom Python security assessment tools, automated scanning scripts, Shannon entropy calculators, and structured security reporting pipelines.
            </p>
            <div className="about-card-tags">
              <span className="pill pill-primary">Python Scripting</span>
              <span className="pill">Entropy Analysis</span>
              <span className="pill">HTML Reports</span>
            </div>
          </div>
        </div>

        {/* Signature Statement Banner */}
        <div className="cyber-card quote-banner">
          <div className="quote-left">
            <span className="big-quote">“</span>
            <p className="quote-body">
              Finding vulnerabilities before adversaries do is the true foundation of <span className="highlight-red">digital defense</span>.
            </p>
            <div className="quote-signature">Sunny</div>
            <div className="quote-creed">
              OFFENSIVE MINDSET <span className="slash">/</span> PROACTIVE DEFENSE <span className="slash">/</span> CONTINUOUS LEARNING
            </div>
          </div>

          <div className="quote-right">
            <span className="interests-label">PRIMARY OPERATING SYSTEMS &amp; DEV</span>
            <div className="interests-list">
              <span className="pill pill-primary">Linux / Kali</span>
              <span className="pill pill-primary">VirtualBox Labs</span>
              <span className="pill">Git &amp; GitHub</span>
              <span className="pill">Cisco Packet Tracer</span>
              <span className="pill">Wireshark</span>
              <span className="pill">OpenVAS / Greenbone</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
