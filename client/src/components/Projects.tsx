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
              <p className="project-description">Built CRUD-based book management system.</p>
              <p className="project-description">Developed REST APIs using Node.js and Express.js.</p>
              <p className="project-description">Integrated MySQL database.</p>
                <p className="project-description"><strong>Tech Stack:</strong> React.js • Node.js • Express.js • MySQL</p>
            </div>
          </div>
          <div className="project-showcase">
            <div className="project-description-block">
              <h4 className="project-subtitle">Task Management System</h4>
              <p className="project-description">Built a full-stack task management system with CRUD operations.</p>
              <p className="project-description">Implemented user authentication and task management.</p>
              <p className="project-description">Added task status, priority, search, and filtering.</p>
              <p className="project-description">Integrated REST APIs with MySQL database.</p>
              <p className="project-description"><strong>Tech Stack:</strong> React.js • Node.js • Express.js • MySQL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
