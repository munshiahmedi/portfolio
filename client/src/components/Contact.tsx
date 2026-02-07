import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="accent-line"></div>
          <h2>Get In Touch</h2>
         
        </div>

        <div className="contact-grid">
          {/* Left Column - Contact Information */}
          <div className="contact-info">
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-info-text">
                  <h4>Email</h4>
                  <a href="mailto:ahmedimunshi@gmail.com" className="contact-link">
                    ahmedimunshi@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-info-text">
                  <h4>Phone</h4>
                  <a href="tel:7569020332" className="contact-link">
                    7569020332
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">💼</div>
                <div className="contact-info-text">
                  <h4>LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/m-ahmedi-80baab269" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    linkedin.com/in/m-ahmedi-80baab26
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">💻</div>
                <div className="contact-info-text">
                  <h4>GitHub</h4>
                  <a 
                    href="https://github.com/munshiahmedi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    github.com/munshiahmedi
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="contact-form-container">
            <h3>Contact Form</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
