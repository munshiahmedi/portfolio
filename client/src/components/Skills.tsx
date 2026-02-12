import React from 'react';
import { 
  FaReact, FaNodeJs, FaDatabase, FaTools, 
  FaHtml5, FaCss3Alt, FaJs, FaGithub 
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiExpress, 
  SiMysql, SiPostman, SiFigma
} from 'react-icons/si';
import { VscVm, VscLayout } from 'react-icons/vsc';
import { FiLayers, FiSmartphone } from 'react-icons/fi';

const Skills: React.FC = () => {

  const getSkillIcon = (skillName: string) => {
    return <div className="skill-icon">•</div>;
  };

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FaReact className="category-icon" />,
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 90 },
        { name: 'React.js', level: 85 },
        { name: 'React Native', level: 70 },
      ],
    },
    {
      title: 'UI/UX Design',
      icon: <VscLayout className="category-icon" />,
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Wireframes', level: 80 },
        { name: 'Prototype', level: 75 },
        { name: 'Responsive Design', level: 85 },
      ],
    },
    {
      title: 'Backend',
      icon: <FaNodeJs className="category-icon" />,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'REST APIs', level: 85 },
      ],
    },
    {
      title: 'Tools',
      icon: <FaTools className="category-icon" />,
      skills: [
        { name: 'Git & GitHub', level: 80 },
        { name: 'Postman', level: 85 },
      ],
    },
    {
      title: 'Database',
      icon: <FaDatabase className="category-icon" />,
      skills: [
        { name: 'MySQL', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2>Skills & Expertise</h2>
      </div>
      
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={category.title} className="skill-category">
            <div className="category-header">
              <div className="category-icon-container">
                {category.icon}
              </div>
              <h3>{category.title}</h3>
            </div>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skill.name} 
                  className="skill-item"
                >
                  <div className="skill-header">
                    {getSkillIcon(skill.name)}
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;