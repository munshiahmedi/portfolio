import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  github: string;
  status?: string;
  image?: {
    src: string;
    alt: string;
  };
  visual?: React.ReactNode;
  inDevelopment?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  features,
  github,
  status,
  image,
  visual,
  inDevelopment,
}) => (
  <article className={`project-card${image || visual ? ' project-card-with-image' : ''}`}>
    {image && (
      <div className="project-image-wrap">
        <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
      </div>
    )}
    {visual && <div className="project-visual-wrap">{visual}</div>}
    <div className="project-card-content">
      <div className="project-card-heading">
        <h3>{title}</h3>
        {status && <span className="project-status">{status}</span>}
      </div>
      <p className="project-description">{description}</p>

      <h4 className="project-detail-label">Highlights</h4>
      <ul className="project-feature-list">
        {features.map((feature) => <li key={feature}>{feature}</li>)}
      </ul>

      {inDevelopment && (
        <p className="development-note">
          <strong>Still in development:</strong> {inDevelopment}
        </p>
      )}

      <ul className="tech-list" aria-label={`${title} technologies`}>
        {tech.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <a className="project-link" href={github} target="_blank" rel="noreferrer">
        View source code <FiArrowUpRight aria-hidden="true" />
      </a>
    </div>
  </article>
);

export default ProjectCard;
