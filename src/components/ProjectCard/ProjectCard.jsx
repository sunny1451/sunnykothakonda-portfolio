import React, { useState } from 'react';
import { ExternalLink, Github, Terminal, ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  const [showTerminal, setShowTerminal] = useState(false);

  return (
    <article className="cyber-card project-card-component" style={{ borderColor: project.borderColor }}>
      {/* Top Bar with Number & Category */}
      <div className="card-top-row">
        <div className="card-number-tag" style={{ color: project.accentColor }}>
          #{project.number}
        </div>
        <div className="card-badge-pill" style={{ borderColor: project.borderColor, color: project.accentColor }}>
          {project.badge}
        </div>
      </div>

      {/* Visual Header / Banner */}
      <div className="project-banner-visual" style={{ background: project.gradient, borderColor: project.borderColor }}>
        <span className="visual-category">{project.category}</span>
        <h3 className="visual-title">{project.name}</h3>
        {project.role && (
          <span className="visual-role-tag">Role: {project.role}</span>
        )}
      </div>

      {/* Description */}
      <div className="project-content-block">
        <p className="project-desc">{project.shortDescription}</p>

        {/* Notice for Lab if present */}
        {project.notice && (
          <div className="project-lab-notice">
            <AlertTriangle size={14} className="notice-icon" />
            <span>{project.notice}</span>
          </div>
        )}

        {/* Feature Highlights */}
        <ul className="project-features-list">
          {project.features.slice(0, 3).map((feat, idx) => (
            <li key={idx}>
              <span className="feature-arrow" style={{ color: project.accentColor }}>▸</span>
              {feat}
            </li>
          ))}
        </ul>

        {/* Terminal Toggle Button */}
        {project.terminalSnippet && (
          <button
            className="terminal-toggle-btn"
            onClick={() => setShowTerminal(!showTerminal)}
            aria-expanded={showTerminal}
          >
            <Terminal size={14} style={{ color: project.accentColor }} />
            <span>{showTerminal ? 'Hide Terminal Execution' : 'View Terminal Execution'}</span>
            {showTerminal ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        )}

        {/* Terminal Drawer */}
        {showTerminal && project.terminalSnippet && (
          <div className="terminal-drawer">
            <div className="term-drawer-header">
              <span className="drawer-dot red" />
              <span className="drawer-dot yellow" />
              <span className="drawer-dot green" />
              <span className="drawer-cmd-name">cli_audit.log</span>
            </div>
            <div className="term-drawer-body">
              <div className="term-cmd-line">
                <span className="cmd-prompt">$</span> {project.terminalSnippet.command}
              </div>
              {project.terminalSnippet.output.map((out, oIdx) => (
                <div key={oIdx} className="term-out-line">{out}</div>
              ))}
            </div>
          </div>
        )}

        {/* Technology Tags */}
        <div className="project-tech-tags">
          {project.technologies.map((tech, tIdx) => (
            <span key={tIdx} className="tech-tag-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="project-card-footer">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm project-github-btn"
        >
          <Github size={15} />
          <span>GitHub Repo</span>
        </a>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            <ExternalLink size={14} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </article>
  );
}
