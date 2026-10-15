import React from 'react';
import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi';
import { resumeUrl } from '../siteLinks';

const Resume: React.FC = () => (
  <section id="resume" className="resume-section" aria-labelledby="resume-title">
    <div className="container resume-panel">
      <div>
        <p className="eyebrow">Resume</p>
        <h2 id="resume-title">A concise overview of my experience and skills.</h2>
      </div>
      <div className="resume-actions">
        <a className="button button-light" href={resumeUrl} download="Ahmedi_Resume.pdf">
          Download resume <FiArrowDown aria-hidden="true" />
        </a>
        <a className="resume-view-link" href={resumeUrl} target="_blank" rel="noreferrer">
          View PDF <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
);

export default Resume;
