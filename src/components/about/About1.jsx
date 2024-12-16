import React from "react";
import "./about.css";
import aboutImage from "../../image/image4.png";
import aboutData from "../../data/about.json";

const About1 = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-image-wrapper">
          <img src={aboutImage} alt="About" className="about-image" />
        </div>
        <div className="about-details">
          <h2 className="section-title">{aboutData.title}</h2>
          <p className="about-text">{aboutData.description}</p>
          <div className="about-link-list">
            {aboutData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="about-link"
              >
                <i className={link.iconClass}></i>
              </a>
            ))}
          </div>
          <div className="button1">
            <a href={aboutData.contactLink} className="button-about contact1">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;
