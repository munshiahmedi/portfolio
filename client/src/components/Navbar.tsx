import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

interface NavbarProps {
  activeSection: 'home' | 'about' | 'resume' | 'projects' | 'contact' | 'skills';
  setActiveSection: (section: 'home' | 'about' | 'resume' | 'projects' | 'contact' | 'skills') => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after clicking a link on mobile
  };

  const handleNavClick = (section: 'home' | 'about' | 'resume' | 'projects' | 'contact' | 'skills') => {
    setActiveSection(section);
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scrollToSection(section);
    }
  };

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.navbar__nav-items') && !target.closest('.hamburger')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar__inner">
        <div className="navbar__brand" onClick={() => handleNavClick('home')}>
          Ahmedi_codes.
        </div>

        <button 
          className="hamburger" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <div className={`navbar__nav-items ${isMenuOpen ? 'active' : ''}`}>
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
          <button 
            onClick={() => handleNavClick('contact')} 
            className="navbar__cta mobile-cta"
          >
            Let's Talk
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
