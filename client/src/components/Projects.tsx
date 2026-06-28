import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">
          {/* Project 1 - Smart Book App */}
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
                src="smart-book-app.webp" 
                alt="Smart Book App"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                loading="eager"
              />
            </div>
            <h3 className="project-title">Smart Book App</h3>
            <p className="project-description">
              A full-stack application for managing and organizing books efficiently. Users can add, update, delete, and search books through a responsive interface.
            </p>
            <div className="project-tech-stack">
              <h4>Tech Stack</h4>
              <div className="tech-tags">
                <span>React.js</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>

          {/* Project 2 - Task & Habit Tracker */}
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
                src="task-habit-tracker.webp" 
                alt="Task & Habit Tracker"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                loading="eager"
              />
            </div>
            <h3 className="project-title">Task & Habit Tracker</h3>
            <p className="project-description">
              A productivity application that helps users manage daily tasks and build habits consistently with full CRUD functionality and responsive design.
            </p>
            <div className="project-tech-stack">
              <h4>Tech Stack</h4>
              <div className="tech-tags">
                <span>React.js</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>

          {/* Project 3 - LLM Observability App */}
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
                src="llm-observability.webp" 
                alt="LLM Observability App"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                loading="eager"
              />
            </div>
            <h3 className="project-title">LLM Observability App</h3>
            <p className="project-description">
              An AI-powered observability platform for monitoring LLM interactions and performance. Tracks prompts, responses, latency, token usage, and errors with a comprehensive dashboard. 🚧 Under Development
            </p>
            <div className="project-tech-stack">
              <h4>Tech Stack</h4>
              <div className="tech-tags">
                <span>React.js</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
