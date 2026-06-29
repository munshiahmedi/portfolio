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
            <div className="project-description-block">
                <h4 className="project-subtitle">Smart Book App</h4>
                <p className="project-description">A full-stack web application that enables users to manage book records with CRUD operations and search functionality through a responsive interface.</p>
                <p className="project-description"><strong>Tech Stack:</strong> React.js • Node.js • Express.js • MySQL</p>
            </div>
          </div>
          {/* Project 2 - LLM Observability Dashboard */}
          <div className="project-showcase">
            <div className="project-description-block">
              <h4 className="project-subtitle">LLM Observability Dashboard <span style={{fontStyle: 'italic', fontWeight: 400}}>(In Progress)</span></h4>
              <p className="project-description">Building a full-stack web application for monitoring and analyzing Large Language Model (LLM) interactions. The dashboard is designed to track prompts, responses, latency, token usage, and performance metrics through interactive visualizations.</p>
              <p className="project-description"><strong>Tech Stack:</strong> React.js • Node.js • Express.js • MySQL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
