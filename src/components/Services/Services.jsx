import React from "react";
import "./services.css";
import servicesData from "../../data/services.json";

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
