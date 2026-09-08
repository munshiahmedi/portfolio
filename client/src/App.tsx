import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import GitHubActivity from './components/GitHubActivity';
import Contact from './components/Contact';
import './styles.css';

const App: React.FC = () => {
  type Section = 'home' | 'about' | 'skills' | 'projects' | 'contact' | 'resume';
  const [activeSection, setActiveSection] = useState<Section>('home');
  const handleSetActiveSection = (section: Section) => setActiveSection(section);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section as any);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Navbar activeSection={activeSection} setActiveSection={handleSetActiveSection} />
      <main>
        <Home setActiveSection={handleSetActiveSection} />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <GitHubActivity />
        <Contact />
      </main>
    </div>
  );
};

export default App;
