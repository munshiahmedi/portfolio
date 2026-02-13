import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Section Header */}
        <div className="section-header">
          <h2>About Me</h2>
        </div>

        {/* About Content Grid */}
        <div className="about-grid-new">
          {/* Left Column - Photo */}
          <div className="about-photo-container">
            <div className="hero__photo">
              <img 
                src="Ahmedii.webp" 
                alt="Profile" 
                className="hero__profile-img"
              />
            </div>
          </div>

          {/* Right Column - Content Sections */}
          <div className="about-sections">
            {/* About Me Section */}
            <div className="about-card">
              <h3 className="about-card-title">About Me</h3>
              <div className="about-card-content">
                <p className="about-description">
                  I'm a Frontend Developer with hands-on experience building web and mobile applications using React and React Native. I'm currently working as a Frontend Developer Intern, with 5+ months of real-world experience focused on clean UI, authentication flows, and API integration.
                </p>
                <p className="about-description">
                  Alongside my internship, I built a full-stack Hotel Booking System and designed my own developer portfolio to showcase my projects and skills. I enjoy building responsive interfaces, writing maintainable code, and continuously improving my skills through practical development.
                </p>
              </div>
            </div>

            {/* Education Section */}
            <div className="about-card">
              <h3 className="about-card-title">Education</h3>
              <div className="about-card-content">
                <div className="info-item">
                  <div className="info-icon">🎓</div>
                  <div className="info-details">
                    <h4>B.Tech – Electronics</h4>
                    <p className="info-subtitle">Jawaharlal Nehru Technological University, Anantapur</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="about-card">
              <h3 className="about-card-title">Experience</h3>
              <div className="about-card-content">
                <div className="info-item">
                  <div className="info-icon">💼</div>
                  <div className="info-details">
                    <h4>Frontend Developer Intern</h4>
                    <p className="info-subtitle">Mantravat Infotech · 5+ months (Currently working)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="about-card">
              <h3 className="about-card-title">Location</h3>
              <div className="about-card-content">
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-details">
                    <h4>Adoni, Andhra Pradesh</h4>
                    <p className="info-subtitle">India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Download CV Button */}
            <div className="cv-download-section">
              <a
                href="https://drive.google.com/uc?export=download&id=1x7Iah6_m2vrdRbvEHfwlpJd6PsjoaCq2"
                target="_blank"
                rel="noopener noreferrer"
                className="cv-download-btn"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
