import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Globe, Send, CheckCircle2, AlertCircle, ArrowUpRight, Shield, Loader2 } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // { type: 'success' | 'info' | 'error', message: string }

  // Formspree endpoint from environment variable
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) {
      errors.subject = 'Please specify a subject';
    } else if (formData.subject.trim().length > 150) {
      errors.subject = 'Subject cannot exceed 150 characters';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    } else if (formData.message.trim().length > 3000) {
      errors.message = 'Message cannot exceed 3000 characters';
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // If Formspree endpoint is not configured, gracefully trigger mailto
      if (!formspreeEndpoint || !formspreeEndpoint.startsWith('http') || formspreeEndpoint.includes('YOUR_FORMSPREE_ENDPOINT')) {
        const mailtoUrl = `mailto:sunnykothakonda4@gmail.com?subject=${encodeURIComponent(
          formData.subject.trim()
        )}&body=${encodeURIComponent(
          `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
        )}`;
        window.location.href = mailtoUrl;
        setSubmitStatus({
          type: 'success',
          message: 'Opening your default email client to send your message directly to Sunny!'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        return;
      }

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          _replyto: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim()
        })
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Message transmitted successfully! Thank you for reaching out.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(`Submission failed with status: ${response.status}`);
      }
    } catch (err) {
      // If network fetch fails, offer direct mailto fallback
      const mailtoUrl = `mailto:sunnykothakonda4@gmail.com?subject=${encodeURIComponent(
        formData.subject.trim()
      )}&body=${encodeURIComponent(
        `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
      )}`;
      window.location.href = mailtoUrl;
      setSubmitStatus({
        type: 'info',
        message: 'Direct transmission failed; opened your default email application to deliver message.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Direct Communication Gateway</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Interested in cybersecurity, penetration testing, VAPT, security research, or collaboration?
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Channels & Dedicated "Email Me" */}
          <div className="contact-channels-col">
            <div className="cyber-card channels-card">
              <div className="channels-header">
                <h3>Direct Inquiries</h3>
                <p>
                  Connect directly with Kothakonda Sunny via telephone, email, or verified professional profiles.
                </p>
              </div>

              {/* Dedicated "Email Me" CTA button */}
              <div className="direct-email-cta-box">
                <a
                  href="mailto:sunnykothakonda4@gmail.com"
                  className="btn btn-primary direct-email-btn"
                  id="direct-email-me-btn"
                >
                  <Mail size={18} />
                  <span>Email Me</span>
                </a>
                <span className="direct-email-caption">Opens your default email client directly</span>
              </div>

              <div className="contact-links-list">
                {/* Email */}
                <a
                  href="mailto:sunnykothakonda4@gmail.com"
                  className="contact-channel-item"
                  id="channel-email"
                >
                  <div className="channel-icon-wrap">
                    <Mail size={18} />
                  </div>
                  <div className="channel-text">
                    <span className="channel-label">Direct Gmail</span>
                    <span className="channel-val">sunnykothakonda4@gmail.com</span>
                  </div>
                  <ArrowUpRight size={16} className="channel-arrow" />
                </a>

                {/* Phone */}
                <a
                  href="tel:+917093297758"
                  className="contact-channel-item"
                  id="channel-phone"
                >
                  <div className="channel-icon-wrap">
                    <Phone size={18} />
                  </div>
                  <div className="channel-text">
                    <span className="channel-label">Telephone</span>
                    <span className="channel-val">+91 7093297758</span>
                  </div>
                  <ArrowUpRight size={16} className="channel-arrow" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/sunny-kothakonda-13616a281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-item"
                  id="channel-linkedin"
                >
                  <div className="channel-icon-wrap">
                    <Linkedin size={18} />
                  </div>
                  <div className="channel-text">
                    <span className="channel-label">LinkedIn Profile</span>
                    <span className="channel-val">linkedin.com/in/sunny-kothakonda-13616a281</span>
                  </div>
                  <ArrowUpRight size={16} className="channel-arrow" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/sunny1451"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-item"
                  id="channel-github"
                >
                  <div className="channel-icon-wrap">
                    <Github size={18} />
                  </div>
                  <div className="channel-text">
                    <span className="channel-label">GitHub Repositories</span>
                    <span className="channel-val">github.com/sunny1451</span>
                  </div>
                  <ArrowUpRight size={16} className="channel-arrow" />
                </a>

                {/* Portfolio */}
                <a
                  href="https://sunnykothakonda-portfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-item"
                  id="channel-portfolio"
                >
                  <div className="channel-icon-wrap">
                    <Globe size={18} />
                  </div>
                  <div className="channel-text">
                    <span className="channel-label">Live Portfolio</span>
                    <span className="channel-val">sunnykothakonda-portfolio.vercel.app</span>
                  </div>
                  <ArrowUpRight size={16} className="channel-arrow" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Transmission Form */}
          <div className="contact-form-col">
            <div className="cyber-card form-card">
              <div className="form-card-header">
                <h3>Transmit Inbound Message</h3>
                <span className="form-subtitle">Delivered directly to sunnykothakonda4@gmail.com</span>
              </div>

              <form onSubmit={handleSubmit} noValidate className="contact-form">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    maxLength={100}
                    className={`form-input ${formErrors.name ? 'has-error' : ''}`}
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                  {formErrors.name && (
                    <span className="error-text" role="alert">{formErrors.name}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Email <span className="req">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    maxLength={150}
                    className={`form-input ${formErrors.email ? 'has-error' : ''}`}
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                  {formErrors.email && (
                    <span className="error-text" role="alert">{formErrors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">
                    Subject <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    maxLength={150}
                    className={`form-input ${formErrors.subject ? 'has-error' : ''}`}
                    placeholder="Subject (e.g. VAPT Internship / Security Assessment)"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {formErrors.subject && (
                    <span className="error-text" role="alert">{formErrors.subject}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Message <span className="req">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    maxLength={3000}
                    className={`form-input form-textarea ${formErrors.message ? 'has-error' : ''}`}
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {formErrors.message && (
                    <span className="error-text" role="alert">{formErrors.message}</span>
                  )}
                </div>

                {/* Status Notice */}
                {submitStatus && (
                  <div className={`form-status-alert status-${submitStatus.type}`} role="status">
                    {submitStatus.type === 'success' ? (
                      <CheckCircle2 size={18} className="status-alert-icon" />
                    ) : (
                      <AlertCircle size={18} className="status-alert-icon" />
                    )}
                    <div className="status-alert-content">
                      <p>{submitStatus.message}</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary form-submit-btn"
                  id="submit-contact-form-btn"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="spinner" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
