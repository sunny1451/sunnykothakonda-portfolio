import React, { useState, useEffect } from 'react';
import { Award, ExternalLink, X, ShieldCheck, Eye } from 'lucide-react';
import { certificatesData } from '../../data/certificates';
import './Certificates.css';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedCert) {
        setSelectedCert(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert]);

  // Prevent background scrolling when modal is active
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  return (
    <section id="certificates" className="section certificates-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Verified Credentials</span>
          <h2 className="section-title">Certifications &amp; Accreditations</h2>
          <p className="section-subtitle">
            Authentic industry certifications in LLM Security, Ethical Hacking, and Python programming. Click any credential card to inspect the full certificate.
          </p>
        </div>

        {/* Certificate Gallery Grid - Exactly 3 Clean Columns */}
        <div className="certificates-gallery-grid">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className="cyber-card cert-gallery-card"
              onClick={() => setSelectedCert(cert)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedCert(cert)}
              aria-label={`View full certificate: ${cert.name}`}
            >
              {/* Image Thumbnail Container */}
              <div className="cert-thumbnail-wrapper">
                <img
                  src={cert.image}
                  alt={`${cert.name} Certificate`}
                  className="cert-thumbnail-img"
                  loading="lazy"
                />
                <div className="cert-hover-overlay">
                  <div className="cert-preview-pill">
                    <Eye size={15} />
                    <span>Inspect Certificate</span>
                  </div>
                </div>
                <div className="cert-badge-floating">{cert.badge}</div>
              </div>

              {/* Card Meta Content */}
              <div className="cert-card-body">
                <div className="cert-issuer-line">
                  <span className="cert-issuer-name">{cert.issuer}</span>
                  <span className="cert-date-text">{cert.date}</span>
                </div>

                <h3 className="cert-card-title">{cert.name}</h3>

                {cert.certId && (
                  <div className="cert-id-tag">
                    <span>ID:</span> <code>{cert.certId}</code>
                  </div>
                )}

                <div className="cert-skills-cloud">
                  {cert.skillsCovered.map((skill, sIdx) => (
                    <span key={sIdx} className="pill pill-primary">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Preview Dialog */}
      {selectedCert && (
        <div
          className="cert-modal-backdrop"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-cert-title"
        >
          <div
            className="cert-modal-dialog cyber-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="cert-modal-header">
              <div>
                <div className="modal-issuer-label">{selectedCert.issuer}</div>
                <h3 id="modal-cert-title" className="modal-cert-name">
                  {selectedCert.name}
                </h3>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setSelectedCert(null)}
                aria-label="Close certificate preview"
                autoFocus
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Image Body (Un-distorted, crisp aspect ratio) */}
            <div className="cert-modal-image-wrap">
              <img
                src={selectedCert.image}
                alt={`${selectedCert.name} Certificate Full Preview`}
                className="cert-modal-full-img"
              />
            </div>

            {/* Modal Footer with Verification Link & Details */}
            <div className="cert-modal-footer">
              <div className="modal-meta-left">
                <div className="modal-instructor">
                  <strong>Issued by:</strong> {selectedCert.instructor}
                </div>
                {selectedCert.certId && (
                  <div className="modal-cert-id">
                    <strong>Certificate ID:</strong> <code>{selectedCert.certId}</code>
                  </div>
                )}
              </div>

              <div className="modal-actions-right">
                {selectedCert.verifyUrl && (
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <ExternalLink size={14} />
                    <span>Verify Credential</span>
                  </a>
                )}
                <button
                  className="btn btn-outline btn-sm"
                  onClick={() => setSelectedCert(null)}
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
