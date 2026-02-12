import React, { useState, useEffect } from 'react';

interface HomeProps {
  setActiveSection: (section: 'home' | 'about' | 'resume' | 'projects' | 'contact') => void;
}

const Home: React.FC<HomeProps> = ({ setActiveSection }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const lines = ['Junior Full Stack Developer'];
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = lines[currentLineIndex];
    
    const handleTyping = () => {
      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }

      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentLineIndex((prevIndex) => (prevIndex + 1) % lines.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [displayText, currentLineIndex, isDeleting, lines]);
  return (
    <>
      <section id="home" className="hero">
        <div className="hero__content">
          <div className="hero__main">
            <div className="hero__text">
              <h1 className="hero__greeting">👋 Hello there!</h1>
              <h2 className="hero__title">
                <div className="title-line">I'm <span className="name">Ahmedi</span></div>
                <div className="title-line"><span className="typing-text">{displayText}</span><span className="cursor">|</span></div>
              </h2>
              <p className="hero__description">
                I build scalable and user-focused web applications using modern frontend and backend technologies.
              </p>
              <div className="hero__actions">
                <button 
                  className="btn btn-primary" 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Hire Me
                </button>
                <a 
                  href="/resume.pdf" 
                  className="btn btn-secondary"
                  download="Ahmedi_Resume.pdf"
                >
                  Download Resume
                </a>
              </div>
            </div>
            <div className="hero__photo">
              <img 
                src="/Ahmedii.jpeg" 
                alt="Profile" 
                className="hero__profile-img" 
                style={{ 
                  width: '100%', 
                  maxWidth: '350px',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }} 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
