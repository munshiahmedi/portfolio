import React from 'react';

const learningTopics = [
  {
    title: 'n8n Automation',
    description: 'Building workflows and automating repetitive tasks.',
  },
];

const statusBadges = ['📚 Currently Learning', '🛠 Building Projects', '🚀 Active Journey'];

const Learning: React.FC = () => {
  return (
    <section id="learning" className="learning-section">
      <div className="learning-container">
        <div className="section-header">
          <div className="accent-line"></div>
          <h2>Learning Journey 🚀</h2>
        </div>

        <div className="learning-content">
          <div className="learning-copy">
            <p className="learning-description">
              I'm continuously expanding my skills by building real-world projects. Currently learning n8n automation to build workflows and automate repetitive tasks.
              My focus is on creating practical and scalable web applications with Full Stack Development.
            </p>
            <ul className="learning-highlights">
              <li>Practical skills through hands-on web development and automation.</li>
              <li>Breaking complex systems into clear, production-ready steps.</li>
              <li>Tracking progress with real goals and milestone projects.</li>
            </ul>
          </div>

          <div className="learning-grid" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {learningTopics.map((topic) => (
              <article key={topic.title} className="learning-card">
                <div className="learning-card-header">
                  <span className="learning-badge">Status: Currently Learning</span>
                  <h3>{topic.title}</h3>
                </div>
                <p className="learning-card-text">{topic.description}</p>
                <div className="learning-card-tags">
                  {statusBadges.map((tag) => (
                    <span key={tag} className="learning-tag">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learning;
