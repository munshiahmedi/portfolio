import React from 'react';

const learningTopics = [
  {
    title: 'Python Fundamentals',
    description: 'Learning Python fundamentals, problem solving, and automation basics.',
  },
  {
    title: 'AI Engineering',
    description: 'Learning LLM fundamentals, prompt engineering, and building AI applications.',
  },
  {
    title: 'Agentic AI',
    description: 'Learning about AI agents, memory, tools, and multi-step reasoning.',
  },
  {
    title: 'n8n Automation',
    description: 'Building workflows and automating repetitive tasks.',
  },
  {
    title: 'LLM Observability',
    description: 'Building platforms to monitor prompts, responses, latency, and token usage.',
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
              I’m continuously expanding my skills by building real-world projects and exploring modern AI technologies.
              My focus is on combining Full Stack Development with AI Engineering, Agentic AI, and automation to create practical and scalable solutions.
            </p>
            <ul className="learning-highlights">
              <li>Practical skills through hands-on automation and AI engineering.</li>
              <li>Breaking complex systems into clear, production-ready steps.</li>
              <li>Tracking progress with real goals and milestone projects.</li>
            </ul>
          </div>

          <div className="learning-grid">
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
