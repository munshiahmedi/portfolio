import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-showcase">
            <div className="project-proof">
              <img 
                src="/portfolio.png" 
                alt="Portfolio Website"
                className="project-image"
              />
            </div>
            <h3 className="project-title">Personal Portfolio Website</h3>
            <p className="project-description">
              A responsive portfolio website built with React and TypeScript to showcase my work and skills.
            </p>
            <div className="project-tech-stack">
              <h4>Tech Stack</h4>
              <div className="tech-tags">
                <span>React</span>
                <span>TypeScript</span>
                <span>CSS3</span>
                <span>Vite</span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-showcase">
            <div className="project-proof">
              <img 
                src="/hotel-booking.png" 
                alt="Hotel Booking System"
                className="project-image"
              />
            </div>
            <h3 className="project-title">Hotel Booking System</h3>
            <p className="project-description">
              A complete hotel booking platform with user authentication, booking management, and admin dashboard.
            </p>
            <div className="project-tech-stack">
              <h4>Tech Stack</h4>
              <div className="tech-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MySQL</span>
                <span>TypeScript</span>
              </div>
            </div>
          </div>

          {/* Project 3 - React Native Social App */}
          <div className="project-showcase">
            <div className="project-proof" style={{
              backgroundColor: '#0f172a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '200px',
              overflow: 'hidden',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <img 
                src="/react-native-thumbnail.png" 
                alt="Social Media App Mockup"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center'
                }}
                loading="eager"
              />
            </div>
            <h3 className="project-title">React Native App</h3>
            <p className="project-description">
              A modern social media platform with real-time updates, and interactive features built with React Native.
            </p>
            <div className="project-tech-stack">
              <h4>Tech Stack</h4>
              <div className="tech-tags">
                <span>React Native with Expo</span>
                <span>React Navigation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
