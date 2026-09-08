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
            Full Stack Developer with 6 months of internship experience in React.js, Node.js, Express.js, and MySQL.
          </p>
        </div>

        <div className="resume-grid">
          {/* Left Column - Resume Content */}
          <div className="resume-content">
            <div className="resume-description">
              <p>
                Skilled in building REST APIs, responsive web applications, and database integrations.
              </p>
              <ul className="resume-highlights-list">
                <li>Built two full-stack projects with React.js, Node.js, Express.js, and MySQL</li>
                <li>Built responsive UI components and integrated REST APIs</li>
                <li>Handled form validation, API error handling, and database integration</li>
              </ul>
              <p className="confidence-line">
                Seeking roles as a Full Stack Developer, React Developer, or Junior Software Engineer.
              </p>
            </div>

            <div className="resume-actions">
              <a
                href="/Ahmedi_Resume.pdf"
                download="Ahmedi_Resume.pdf"
                className="btn-primary"
              >
                Download Resume (PDF)
              </a>
              <a
                href="/Ahmedi_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View Resume
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
                  <div className="highlight-role">Frontend Developer Intern</div>
                  <div className="highlight-duration">Mantravat Infotech · November 2025 - May 2026</div>
                </div>
                
                <div className="highlight-item">
                  <div className="highlight-category">🚀 Projects</div>
                  <div className="highlight-role">Smart Book App</div>
                  <div className="highlight-duration">CRUD system · REST APIs · MySQL database</div>
                  <div className="highlight-role">Task Management System</div>
                  <div className="highlight-duration">Authentication · Status and priority · Search and filtering</div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-category">🎓 Education</div>
                  <div className="highlight-role">B.Tech - Electronics and Communication Engineering</div>
                  <div className="highlight-duration">JNTU Anantapur · 2024</div>
                </div>
                
                <div className="tech-summary">
                  <div className="highlight-category">🛠 Tech Stack</div>
                  <div className="tech-tags">
                    <span className="tech-tag">React.js</span>
                    <span className="tech-tag">JavaScript</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">Express.js</span>
                    <span className="tech-tag">MySQL</span>
                    <span className="tech-tag">Git</span>
                    <span className="tech-tag">Postman</span>
                  </div>
                </div>
                
                <div className="trust-signal">
                  <div className="highlight-category">🔥 Production Impact</div>
                  <div className="trust-text">Open to remote and on-site opportunities in India</div>
                </div>
              </div>
              
              <div className="final-call">
                Open to frontend and React.js opportunities where I can contribute and grow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
