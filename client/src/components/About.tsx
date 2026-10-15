import React from 'react';

const About: React.FC = () => (
  <section id="about" className="section about-section" aria-labelledby="about-title">
    <div className="container">
      <div className="section-heading">
        <p className="eyebrow">A little about me</p>
        <h2 id="about-title">Building practical, thoughtful web experiences.</h2>
        <p className="section-intro">
          I’m an early-career developer interested in frontend and full-stack roles. I enjoy
          turning requirements into clear interfaces and connecting them to reliable APIs.
        </p>
      </div>

      <div className="about-grid">
        <article className="detail-card experience-card">
          <p className="card-kicker">Experience</p>
          <h3>Frontend Developer Intern</h3>
          <p className="detail-meta">Mantravat Infotech <span aria-hidden="true">·</span> November 2025 – May 2026</p>
          <ul className="detail-list">
            <li>Developed React UI components.</li>
            <li>Integrated REST APIs and handled loading states and API errors.</li>
            <li>Implemented form validation.</li>
            <li>Used Git and GitHub for version control.</li>
          </ul>
        </article>

        <div className="about-side">
          <article className="detail-card">
            <p className="card-kicker">Education</p>
            <h3>B.Tech in Electronics and Communication Engineering</h3>
            <p className="detail-meta">St Johns College of Engineering and Technology <span aria-hidden="true">·</span> 2024</p>
          </article>

          <article className="detail-card location-card">
            <p className="card-kicker">Based in</p>
            <h3>Adoni, Andhra Pradesh, India</h3>
            <p className="detail-meta">Open to junior developer opportunities.</p>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default About;
