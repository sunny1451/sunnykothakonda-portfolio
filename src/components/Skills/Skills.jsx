import React from 'react';
import { ShieldCheck, Crosshair, Terminal, Wrench, Shield, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../../data/skills';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Offensive Arsenal &amp; Capabilities</span>
          <h2 className="section-title">Technical Competencies &amp; VAPT Flow</h2>
          <p className="section-subtitle">
            Core cybersecurity skills and tools applied across web application security, network scanning, service enumeration, and laboratory vulnerability testing.
          </p>
        </div>

        {/* Primary Security Tools Grid */}
        <div className="skills-tools-grid">
          {skillsData.primaryTools.map((tool, idx) => (
            <div key={idx} className="cyber-card tool-card">
              <div className="tool-card-top">
                <span className="tool-category-badge">{tool.category}</span>
                <span className="tool-level-badge">{tool.level}</span>
              </div>
              <h3 className="tool-name">{tool.name}</h3>
              <div className="tool-indicator-bar">
                <div className="tool-indicator-progress" />
              </div>
            </div>
          ))}
        </div>

        {/* Categorized Skills per Resume vs Methodology */}
        <div className="skills-split-layout">
          {/* Left Column: Categorized Groups from Resume */}
          <div className="skills-domains-col">
            <div className="cyber-card resume-skills-card">
              <div className="card-sub-header">
                <ShieldCheck size={20} className="card-sub-icon" />
                <h3>Verified Skill Categories</h3>
              </div>
              <p className="domains-desc">
                Documented proficiencies organized by offensive security and technical domain:
              </p>

              <div className="resume-skill-categories">
                {skillsData.resumeCategorized.map((cat, idx) => (
                  <div key={idx} className="skill-cat-group">
                    <span className="cat-group-title">{cat.category}</span>
                    <div className="cat-group-pills">
                      {cat.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="pill pill-primary">
                          <CheckCircle2 size={12} className="pill-dot-icon" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 6-Step VAPT Methodology Flow */}
          <div className="skills-methodology-col">
            <div className="cyber-card methodology-card">
              <div className="card-sub-header">
                <Terminal size={20} className="card-sub-icon" />
                <h3>VAPT Operational Lifecycle</h3>
              </div>
              <p className="methodology-intro">
                Systematic, phased execution process implemented on authorized penetration tests:
              </p>

              <div className="methodology-timeline">
                {skillsData.methodology.map((m) => (
                  <div key={m.step} className="timeline-item">
                    <div className="timeline-step-badge">{m.step}</div>
                    <div className="timeline-content">
                      <h4 className="timeline-title">{m.title}</h4>
                      <p className="timeline-desc">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
