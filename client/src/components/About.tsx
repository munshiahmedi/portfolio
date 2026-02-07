import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>I'm a <span className="highlight">Frontend Developer</span> with a passion for creating seamless digital experiences, now expanding into full-stack development. I specialize in <span className="highlight">React</span> and <span className="highlight">TypeScript</span>, with growing expertise in <span className="highlight">Node.js</span> and <span className="highlight">Express</span>. I focus on building responsive, performant applications with clean, maintainable code and a strong emphasis on user experience. I'm excited to contribute my skills to innovative projects that make a meaningful impact.</p>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default About;
