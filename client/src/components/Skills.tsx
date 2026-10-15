import React from 'react';
import { FaCode, FaDatabase, FaGitAlt, FaLayerGroup } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <FaCode aria-hidden="true" />,
    skills: ['JavaScript', 'HTML5', 'CSS3', 'React.js'],
  },
  {
    title: 'Backend',
    icon: <FaLayerGroup aria-hidden="true" />,
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Database',
    icon: <FaDatabase aria-hidden="true" />,
    skills: ['MySQL'],
  },
  {
    title: 'Tools',
    icon: <FaGitAlt aria-hidden="true" />,
    skills: ['Git', 'GitHub', 'Postman'],
  },
];

const Skills: React.FC = () => (
  <section id="skills" className="section skills-section" aria-labelledby="skills-title">
    <div className="container">
      <div className="section-heading section-heading-compact">
        <p className="eyebrow">Tools I work with</p>
        <h2 id="skills-title">Skills</h2>
      </div>

      <div className="skills-grid">
        {skillCategories.map(({ title, icon, skills }) => (
          <article className="skill-category" key={title}>
            <div className="skill-category-heading">
              <span className="skill-category-icon">{icon}</span>
              <h3>{title}</h3>
            </div>
            <ul className="skill-list">
              {skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
