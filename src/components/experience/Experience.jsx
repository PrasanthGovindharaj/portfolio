import React from "react";
import "./experience.css";
import ExperienceData from "../../data/experienceData.json";
import image from '../../image/TechStorey.jpeg'

const Experience = () => {
  return (
    <section className="experience-link">
      <h2 className="section-title">Experience</h2>
      <div className="experience">
        {ExperienceData.map((item, index) => (
          <div key={index} className="experience-item">
            <div className="experience-image">
              <img src={image} alt={item.title} />
            </div>
            <div className="experience-content">
              <h2>{item.period}</h2>
              <h3>{item.title}</h3>
              <h3>{item.location}</h3>
              <p>{item.description}</p>
              <div className="projects">
                <h4>Projects:</h4>
                <ul>
                  {item.projects.map((project, projectIndex) => (
                    <li key={projectIndex}>
                      <strong>{project.name}</strong>
                      <p>{project.description}</p>
                      <p>
                        <em>My Role: {project.role}</em>
                      </p>
                      <p>
                        <em>Technologies: {project.technologies}</em>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
