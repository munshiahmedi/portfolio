import React from 'react';
import { FiArrowUpRight, FiMail } from 'react-icons/fi';

const Contact: React.FC = () => (
  <>
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="container contact-layout">
        <div>
          <p className="eyebrow">Let’s connect</p>
          <h2 id="contact-title">Have a role or project in mind?</h2>
          <p className="section-intro">
            I’m open to junior full-stack, React, frontend, and software engineering opportunities.
            The quickest way to reach me is by email.
          </p>
          <a className="button button-primary contact-email-button" href="mailto:ahmedimunshi@gmail.com">
            <FiMail aria-hidden="true" /> Email me
          </a>
        </div>

        <div className="contact-links" aria-label="Contact and professional profiles">
          <a href="mailto:ahmedimunshi@gmail.com">
            <span>Email</span>
            <strong>ahmedimunshi@gmail.com</strong>
            <FiArrowUpRight aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/m-ahmedi-80baab269/" target="_blank" rel="noreferrer">
            <span>LinkedIn</span>
            <strong>M. Ahmedi</strong>
            <FiArrowUpRight aria-hidden="true" />
          </a>
          <a href="https://github.com/munshiahmedi" target="_blank" rel="noreferrer">
            <span>GitHub</span>
            <strong>munshiahmedi</strong>
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>M. Ahmedi</span>
        <span>Adoni, Andhra Pradesh, India</span>
        <a href="#home">Back to top <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  </>
);

export default Contact;
