import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { educationData } from '../../data/certificates';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Academic Foundation</span>
          <h2 className="section-title">Education &amp; Core Training</h2>
          <p className="section-subtitle">
            Formal undergraduate degree specializing in Computer Science and Cybersecurity principles, operating systems, and networking.
          </p>
        </div>

        <div className="education-timeline-container">
          {educationData.map((edu, idx) => (
            <div key={idx} className="cyber-card edu-card">
              <div className="edu-card-header">
                <div className="edu-icon-badge">
                  <GraduationCap size={24} />
                </div>
                <div className="edu-header-text">
                  <h3 className="edu-institution">{edu.institution}</h3>
                  <h4 className="edu-degree">{edu.degree}</h4>
                </div>
                <div className="edu-status-pill">
                  {edu.status}
                </div>
              </div>

              <div className="edu-discipline-bar">
                <span className="edu-location-tag">
                  <MapPin size={13} />
                  {edu.location}
                </span>
                <span className="edu-duration">
                  <Calendar size={13} />
                  {edu.duration}
                </span>
              </div>

              <p className="edu-description-text">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
