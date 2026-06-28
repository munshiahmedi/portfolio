import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Section Header */}
        <div className="section-header">
          <h2>About Me</h2>
        </div>

        {/* About Content Grid - simplified: 2x2 cards */}
        <div className="about-grid-new about-grid-2x2">
          <div className="about-card about-card-main">
            <h3 className="about-card-title">About Me</h3>
            <div className="about-card-content">
              <p className="about-description">
                I'm a Full Stack Developer passionate about building modern web applications using React, Node.js, Express, and MySQL. Currently, I'm exploring AI Engineering and Agentic AI through hands-on projects and continuous learning.
              </p>
            </div>
          </div>

          <div className="about-card about-card-education">
            <h3 className="about-card-title">Education</h3>
            <div className="about-card-content">
              <div className="info-item">
                <div className="info-icon">🎓</div>
                <div className="info-details">
                  <h4>B.Tech – Electronics</h4>
                  <p className="info-subtitle">Jawaharlal Nehru Technological University, Anantapur</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-card">
            <h3 className="about-card-title">Experience</h3>
            <div className="about-card-content">
              <div className="info-item">
                <div className="info-icon">💼</div>
                <div className="info-details">
                  <h4>Frontend Developer Intern</h4>
                  <p className="info-subtitle">Mantravat Infotech · 5+ months (Currently working)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-card">
            <h3 className="about-card-title">Location</h3>
            <div className="about-card-content">
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-details">
                  <h4>Adoni, Andhra Pradesh</h4>
                  <p className="info-subtitle">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cv-download-section" style={{textAlign: 'center', marginTop: '1.5rem'}}>
          <a
            href="https://drive.google.com/uc?export=download&id=1x7Iah6_m2vrdRbvEHfwlpJd6PsjoaCq2"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-download-btn"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
