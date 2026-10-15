import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { resumeUrl } from '../siteLinks';

export type SectionId = 'home' | 'about' | 'skills' | 'projects' | 'resume' | 'contact';

interface NavbarProps {
  activeSection: SectionId;
}

const links: { id: SectionId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-container container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="M. Ahmedi, home">
          <span className="brand-mark" aria-hidden="true">MA</span>
          <span>M. Ahmedi</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>

        <div
          className={`nav-links${isMenuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
        >
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? 'is-active' : undefined}
              aria-current={activeSection === id ? 'location' : undefined}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <a className="nav-resume" href={resumeUrl} download="Ahmedi_Resume.pdf" onClick={closeMenu}>
            Download CV
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
