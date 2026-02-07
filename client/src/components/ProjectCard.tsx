import React from 'react';

type Link = {
  label: string;
  href: string;
};

type Props = {
  title: string;
  description: string;
  tech: string[];
  role?: string;
  github?: string;
};

const ProjectCard: React.FC<Props> = ({ title, description, tech, role, github }) => (
  <article className="project-card">
    <h3 className="project-card__title">{title}</h3>
    <p className="project-card__desc">{description}</p>

    <div className="project-card__tech">
      {tech.map((t) => (
        <span key={t} className="tech-badge">{t}</span>
      ))}
    </div>

    {role && <p className="project-card__role">Role: {role}</p>}

    {github && (
      <a href={github} target="_blank" rel="noopener noreferrer">
        GitHub ↗
      </a>
    )}
  </article>
);

export default ProjectCard;
