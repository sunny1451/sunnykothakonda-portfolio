import React, { useState } from 'react';
import { Shield, Code, Layers } from 'lucide-react';
import { projectsData } from '../../data/projects';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css';

const TABS = [
  { id: 'all', label: 'All Projects', icon: Layers, count: 6 },
  { id: 'cyber', label: 'Cybersecurity & VAPT', icon: Shield, count: 4 },
  { id: 'software', label: 'Software & AI', icon: Code, count: 2 }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = projectsData.filter((project) => {
    if (activeTab === 'cyber') {
      return (
        project.category.includes('Cybersecurity') ||
        project.category.includes('VAPT') ||
        project.category.includes('Penetration Testing')
      );
    }
    if (activeTab === 'software') {
      return (
        project.category.includes('Software') ||
        project.category.includes('AI')
      );
    }
    return true;
  });

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Offensive Security &amp; Systems Portfolio</span>
          <h2 className="section-title">Selected Projects &amp; Security Tools</h2>
          <p className="section-subtitle">
            A comprehensive showcase of automated Python security tooling, isolated VAPT laboratory environments, national hackathon solutions, and software systems engineered by Kothakonda Sunny.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="projects-filter-bar">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                className={`filter-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
                <span className="tab-counter">{tab.count}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="projects-cards-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Security Lab Testing Statement */}
        <div className="cyber-card lab-disclaimer-box">
          <div className="disclaimer-header">
            <Shield size={18} className="disclaimer-icon" />
            <h4>Authorized Testing &amp; Ethical Conduct Policy</h4>
          </div>
          <p>
            All penetration testing utilities, scanning engines, and exploit proof-of-concepts developed by Kothakonda Sunny are performed exclusively against owned, isolated virtual environments or targets with explicit authorized assessment consent. Tools are engineered to empower defensive security teams and elevate software resilience.
          </p>
        </div>
      </div>
    </section>
  );
}
