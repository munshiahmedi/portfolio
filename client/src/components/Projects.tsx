import React from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => (
  <section id="projects" className="section projects-section" aria-labelledby="projects-title">
    <div className="container">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2 id="projects-title">Projects</h2>
        <p className="section-intro">
          Practical projects that let me work across interfaces, APIs, and data.
        </p>
      </div>

      <div className="projects-grid">
        <ProjectCard
          title="SmartBook App"
          description="A full-stack book management application built with React.js, Node.js, Express.js, and MySQL."
          tech={['React.js', 'Node.js', 'Express.js', 'MySQL']}
          features={[
            'Create, read, update, and delete book records.',
            'REST API integration with MySQL data storage.',
            'Backend validation and organized routes, controllers, and services.',
          ]}
          github="https://github.com/munshiahmedi/smart-book-app"
          image={{
            src: `${import.meta.env.BASE_URL}smartbookapp.png`,
            alt: 'SmartBook application preview showing book management screens',
          }}
        />

        <ProjectCard
          title="Task & Engagement Management Tool"
          description="A backend-focused project in development for organizing clients, engagements, tasks, and task history."
          tech={['Node.js', 'Express.js', 'MySQL', 'Postman']}
          status="In development"
          features={[
            'Express.js backend with a MySQL connection and relational data tables.',
            'Task creation API validation and database relationship checks.',
            'Postman testing for successful requests and error scenarios.',
          ]}
          inDevelopment="React frontend integration and broader task assignment and review workflows."
          github="https://github.com/munshiahmedi/task-engagement-tool"
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
