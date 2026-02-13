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
    
    try {
      setIsSubmitting(true);
      setSubmitStatus(null);

      // Format the message to include all fields clearly
      const formattedMessage = `
        Name: ${formData.name.trim()}
        Email: ${formData.email.trim()}
        Message: ${formData.message.trim()}
      `;

      const formDataObj = new FormData();
      formDataObj.append('name', formData.name.trim());
      formDataObj.append('email', formData.email.trim());
      formDataObj.append('message', formattedMessage);
      formDataObj.append('_subject', `New Contact from ${formData.name.trim()}`);
      formDataObj.append('_template', 'table');
      formDataObj.append('_captcha', 'false');
      formDataObj.append('_next', `${window.location.origin}/thank-you`);

      const response = await fetch('https://formsubmit.co/ajax/ahmedimunshi@gmail.com', {
        method: 'POST',
        body: formDataObj,
        headers: {
          'Accept': 'application/json'
        }
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
                onClick={(e) => {
                  console.log('Button clicked');
                  console.log('isSubmitting:', isSubmitting);
                }}
                style={{
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.7 : 1,
                  transition: 'opacity 0.3s'
                }}
              >
                {isSubmitting ? (
                  <span>Sending... <i className="fas fa-spinner fa-spin"></i></span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
