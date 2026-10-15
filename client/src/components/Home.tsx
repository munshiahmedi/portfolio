import React from 'react';
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';
import { resumeUrl } from '../siteLinks';

const Home: React.FC = () => (
  <section id="home" className="hero" aria-labelledby="hero-title">
    <div className="container hero-layout">
      <div className="hero-copy">
        <p className="eyebrow">Junior Full Stack Developer <span aria-hidden="true">·</span> React Developer</p>
        <h1 id="hero-title">Hi, I’m <span>M. Ahmedi.</span></h1>
        <p className="hero-summary">
          I build responsive web interfaces with React and JavaScript, and work across
          REST APIs and MySQL-backed applications. Based in Adoni, Andhra Pradesh.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">
            Hire me <FiArrowUpRight aria-hidden="true" />
          </a>
          <a className="button button-secondary" href="#projects">
            View projects <FiArrowDownRight aria-hidden="true" />
          </a>
          <a className="text-link" href={resumeUrl} download="Ahmedi_Resume.pdf">
            Download resume
          </a>
        </div>
        <div className="hero-socials" aria-label="Professional profiles">
          <a href="https://github.com/munshiahmedi" target="_blank" rel="noreferrer">
            GitHub <FiArrowUpRight aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/m-ahmedi-80baab269/" target="_blank" rel="noreferrer">
            LinkedIn <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="hero-portrait-wrap">
        <img
          className="hero-portrait"
          src={`${import.meta.env.BASE_URL}Ahmedii.webp`}
          alt="Portrait of M. Ahmedi"
          width="202"
          height="343"
          fetchPriority="high"
        />
      </div>
    </div>
    <a className="scroll-cue" href="#about" aria-label="Scroll to about me">
      <span aria-hidden="true">↓</span>
    </a>
  </section>
);

export default Home;
