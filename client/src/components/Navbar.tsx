import React from 'react';

interface NavbarProps {
  activeSection: 'home' | 'about' | 'resume' | 'projects' | 'contact' | 'skills';
  setActiveSection: (section: 'home' | 'about' | 'resume' | 'projects' | 'contact' | 'skills') => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (section: 'home' | 'about' | 'resume' | 'projects' | 'contact' | 'skills') => {
    setActiveSection(section);
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scrollToSection(section);
    }
  };

  return (
    <header className="navbar">
      <nav className="navbar__inner">
        <div className="navbar__brand" onClick={() => handleNavClick('home')}>
          Ahmedi_codes.
        </div>
        <div className="navbar__nav-items">
          <button 
            onClick={() => handleNavClick('home')} 
            className={activeSection === 'home' ? 'active' : ''}
          >
            Home
          </button>
          <button 
            onClick={() => handleNavClick('about')} 
            className={activeSection === 'about' ? 'active' : ''}
          >
            About
          </button>
          <button 
            onClick={() => handleNavClick('skills')} 
            className={activeSection === 'skills' ? 'active' : ''}
          >
            Skills
          </button>
          <button 
            onClick={() => handleNavClick('projects')} 
            className={activeSection === 'projects' ? 'active' : ''}
          >
            Projects
          </button>
          <button 
            onClick={() => handleNavClick('contact')} 
            className={activeSection === 'contact' ? 'active' : ''}
          >
            Contact
          </button>
        </div>
        <button 
          onClick={() => handleNavClick('contact')} 
          className="navbar__cta"
        >
          Let's Talk
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
