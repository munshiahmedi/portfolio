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
    console.log('Form submission started');
    e.preventDefault();
    console.log('Default prevented');
    
    try {
      console.log('Setting isSubmitting to true');
      setIsSubmitting(true);
      setSubmitStatus(null);

      console.log('Form data:', formData);
      const formDataObj = new FormData();
      formDataObj.append('name', formData.name);
      formDataObj.append('email', formData.email);
      formDataObj.append('message', formData.message);
      formDataObj.append('_subject', 'New Contact Form Submission');
      formDataObj.append('_template', 'table');
      formDataObj.append('_captcha', 'false');
      formDataObj.append('_next', window.location.origin + '/thank-you');

      console.log('Sending request to FormSubmit');
      const response = await fetch('https://formsubmit.co/ajax/ahmedimunshi@gmail.com', {
        method: 'POST',
        body: formDataObj,
        headers: {
          'Accept': 'application/json'
        }
      });

      console.log('Response status:', response.status);
      const result = await response.json();
      console.log('Response data:', result);
      
      if (response.ok) {
        console.log('Form submission successful');
        setSubmitStatus({
          success: true,
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Form submission failed:', result);
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
