import React from 'react';

const About: React.FC = () => (
  <section id="about" className="section about-section" aria-labelledby="about-title">
    <div className="container">
      <div className="section-heading">
        <p className="eyebrow">A little about me</p>
        <h2 id="about-title">Full-stack developer with hands-on project experience.</h2>
        <p className="section-intro">
          I have six months of frontend internship experience and have built full-stack
          applications with React.js, Node.js, Express.js, and MySQL. I’m seeking a junior
          full-stack developer opportunity.
        </p>
      </div>

      <div className="about-grid">
        <article className="detail-card experience-card">
          <p className="card-kicker">Experience</p>
          <h3>Frontend Developer Intern</h3>
          <p className="detail-meta">Mantravat Infotech <span aria-hidden="true">·</span> November 2025 – May 2026</p>
          <ul className="detail-list">
            <li>Developed reusable React.js components for login, registration, and profile management in the Vanshavali application.</li>
            <li>Implemented add, edit, update, and delete functionality for application records.</li>
            <li>Integrated REST APIs and implemented form validation and API error handling.</li>
            <li>Used Git and GitHub for version control and team collaboration.</li>
          </ul>
        </article>

        <div className="about-side">
          <article className="detail-card">
            <p className="card-kicker">Education</p>
            <h3>B.Tech in Electronics and Communication Engineering</h3>
            <p className="detail-meta">JNTU Anantapur <span aria-hidden="true">·</span> 2024</p>
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
