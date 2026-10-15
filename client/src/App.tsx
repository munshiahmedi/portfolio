import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import type { SectionId } from './components/Navbar';
import './styles.css';

const sectionIds: SectionId[] = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];
        if (!activeEntry) return;

        const section = sectionIds.find((id) => id === activeEntry.target.id);
        if (section) setActiveSection(section);
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0 },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <Navbar activeSection={activeSection} />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </div>
  );
};

export default App;
