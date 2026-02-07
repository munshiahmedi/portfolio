import React from 'react';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="accent-line"></div>
          <h2>Resume & Experience Snapshot</h2>
          <p className="section-subtitle">
            Frontend Developer with hands-on React & React Native experience, focused on real-world product development.
          </p>
        </div>

        <div className="resume-grid">
          {/* Left Column - Resume Content */}
          <div className="resume-content">
            <div className="resume-description">
              <p>
                View my resume highlighting hands-on frontend experience and production-ready projects.
              </p>
              <ul className="resume-highlights-list">
                <li>5+ months hands-on experience as a React Native Intern</li>
                <li>Built real-world frontend & full-stack applications</li>
                <li>Strong focus on clean UI, reusable components & API integration</li>
              </ul>
              <p className="confidence-line">
                Currently contributing to real product features and improving code quality during my internship.
              </p>
            </div>

            <div className="resume-actions">
              <a
                href="https://drive.google.com/file/d/1Tqzkh3uZJJAk1jZVfffmQBUyVpCw3VzV/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Download Resume (PDF)
              </a>
              <a
                href="https://drive.google.com/file/d/1Tqzkh3uZJJAk1jZVfffmQBUyVpCw3VzV/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View Resume Online
              </a>
            </div>
          </div>

          {/* Right Column - Resume Preview Card */}
          <div className="resume-preview">
            <div className="resume-card">
              <div className="resume-card-header">
                <div className="resume-icon">📄</div>
                <h3>Professional Highlights</h3>
              </div>
              
              <div className="resume-highlights">
                <div className="highlight-item">
                  <div className="highlight-category">💼 Role</div>
                  <div className="highlight-role">React Native Intern</div>
                  <div className="highlight-duration">5+ months · Real-world projects</div>
                </div>
                
                <div className="highlight-item">
                  <div className="highlight-category">🚀 Key Project</div>
                  <div className="highlight-role">Hotel Booking Application</div>
                  <div className="highlight-duration">Auth · Booking system · Admin dashboard</div>
                </div>
                
                <div className="tech-summary">
                  <div className="highlight-category">🛠 Tech Stack</div>
                  <div className="tech-tags">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">TypeScript</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">MySQL</span>
                  </div>
                </div>
                
                <div className="trust-signal">
                  <div className="highlight-category">🔥 Production Impact</div>
                  <div className="trust-text">Actively contributing to production-level features during internship</div>
                </div>
              </div>
              
              <div className="final-call">
                Open to frontend and React Native opportunities where I can contribute and grow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
