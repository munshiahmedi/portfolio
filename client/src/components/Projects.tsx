import React from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => (
  <section id="projects" className="section projects-section" aria-labelledby="projects-title">
    <div className="container">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2 id="projects-title">Projects</h2>
        <p className="section-intro">
          Completed full-stack applications covering CRUD workflows, REST APIs, authentication, and role-based access.
        </p>
      </div>

      <div className="projects-grid">
        <ProjectCard
          title="SmartBook App"
          description="A full-stack book management application built with React.js, Node.js, Express.js, and MySQL."
          tech={['React.js', 'Node.js', 'Express.js', 'MySQL']}
          features={[
            'Create, read, update, and delete book records.',
            'Built REST API endpoints with Node.js and Express.js.',
            'Integrated MySQL to store and manage book data.',
          ]}
          github="https://github.com/munshiahmedi/smart-book-app"
          image={{
            src: `${import.meta.env.BASE_URL}smartbookapp.png`,
            alt: 'SmartBook application preview showing book management screens',
          }}
        />

        <ProjectCard
          title="Task & Engagement Management Tool"
          description="A full-stack application for managing clients, engagements, tasks, and user roles."
          tech={['React.js', 'Node.js', 'Express.js', 'MySQL']}
          status="Completed"
          features={[
            'Organized REST APIs with routes, controllers, middleware, and service-layer logic.',
            'Implemented JWT authentication and role-based authorization.',
            'Supported Admin, Manager, and Team Member roles.',
          ]}
          github="https://github.com/munshiahmedi/taskflow-ai"
          visual={<div className="project-art" aria-label="Technology overview: Express API, MySQL, and Postman">
            <span>Express API</span>
            <span>MySQL</span>
            <span>Postman</span>
          </div>}
        />
      </div>
    </div>
  </section>
);

export default Projects;
