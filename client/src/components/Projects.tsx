import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="accent-line"></div>
          <h2>Projects</h2>
          <p className="section-subtitle">
            Full-stack applications and mobile development projects showcasing frontend development, API integration, and UI/UX design.
          </p>
        </div>

        <div className="projects-grid">
          {/* Hotel Booking System */}
          <div className="project-showcase">
            <div className="project-header">
              <h3>Hotel Booking System (Full Stack)</h3>
              <div className="project-type">Internship Project (Mantravat Infotech)</div>
            </div>

            <div className="project-description">
              <p>
                A complete hotel booking platform with user authentication, booking flow, and admin management dashboard.
              </p>
            </div>

            <div className="project-features">
              <h4>Features</h4>
              <ul className="features-list">
                <li>Login & Registration</li>
                <li>Hotel listing & room selection</li>
                <li>Booking confirmation</li>
                <li>Payment flow & result screens</li>
                <li>Admin dashboard (rooms, pricing, amenities)</li>
                <li>Booking cancellation</li>
              </ul>
            </div>

            <div className="project-tech-stack">
              <h4>Tech Stack</h4>
              <div className="tech-chips">
                <span className="tech-chip">React</span>
                <span className="tech-chip">Node.js</span>
                <span className="tech-chip">Express</span>
                <span className="tech-chip">MySQL</span>
                <span className="tech-chip">TypeScript</span>
              </div>
            </div>

            <div className="project-actions">
              <a
                href="https://github.com/munshiahmedi/hotel-booking"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View Project
              </a>
              <a
                href="https://github.com/munshiahmedi/hotel-booking"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View Code
              </a>
            </div>
          </div>

          {/* React Native Internship Project */}
          <div className="project-showcase">
            <div className="project-header">
              <h3>React Native Mobile Application</h3>
              <div className="project-type">Internship Project (Mantravat Infotech)</div>
            </div>

            <div className="project-description">
              <p>
                Worked on production mobile application UI using React Native.
              </p>
            </div>

            <div className="project-work">
              <h4>Work Done</h4>
              <ul className="features-list">
                <li>Reusable UI components</li>
                <li>Authentication flow screens</li>
                <li>API integration</li>
                <li>Error handling & loading states</li>
                <li>UI bug fixing</li>
              </ul>
            </div>

            <div className="project-tech-stack">
              <h4>Tech Stack</h4>
              <div className="tech-chips">
                <span className="tech-chip">React Native</span>
                <span className="tech-chip">TypeScript</span>
                <span className="tech-chip">Redux</span>
                <span className="tech-chip">Navigation</span>
              </div>
            </div>

            <div className="project-actions">
              <a
                href="https://github.com/munshiahmedi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View Project
              </a>
              <a
                href="https://github.com/munshiahmedi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
