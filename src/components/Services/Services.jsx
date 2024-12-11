import React from "react";
import "./services.css";

const servicesData = [
  {
    id: 1,
    icon: "bi bi-code",
    title: "Front End Developer",
    description:
      "Skilled in React.js, HTML, CSS, and JavaScript to build responsive user interfaces.",
    skills: ["React.js", "HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    id: 2,
    icon: "bi bi-back",
    title: "Back End Developer",
    description:
      "Experience with Node.js, Express.js, and database management for server-side development.",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL"],
  },
  {
    id: 3,
    icon: "bi bi-circle-square",
    title: "Full Stack Developer",
    description:
      "Combining Front End and Back End development to create fully functional web applications.",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Git"],
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="service-width">
        <h2 className="section-title">My Services</h2>
        <div className="services-content">
          {servicesData.map((service) => (
            <div className="card" key={service.id}>
              <div className="box">
                <i className={service.icon}></i>
                <div className="text">{service.title}</div>
                <p>{service.description}</p>
                <ul className="skills-list">
                  {service.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
