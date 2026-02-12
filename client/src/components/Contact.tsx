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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/ahmedimunshi@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'New Contact Form Submission',
          _template: 'table',
          _captcha: 'false',
          _next: window.location.origin + '/thank-you' // Optional: Redirect after submission
        })
      });

      const result = await response.json();
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again later or email me directly at ahmedimunshi@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Section Header */}
        <div className="section-header">
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
            {submitStatus && (
              <div className={`form-message ${submitStatus.success ? 'success' : 'error'}`}>
                {submitStatus.message}
              </div>
            )}
            <form 
              onSubmit={handleSubmit} 
              className="contact-form"
              method="POST"
              action="https://formsubmit.co/ahmedimunshi@gmail.com"
            >
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

              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
