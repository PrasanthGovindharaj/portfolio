import React from "react";
import "./education.css";
import timelineData from "../../data/educationData.json";

import educationImage1 from "../../image/10th.jpg";
import educationImage2 from "../../image/12th.jpg";
import educationImage3 from "../../image/college.jpg";

const images = [educationImage1, educationImage2, educationImage3];

const Education1 = () => {
  return (
    <section>
      <div className="education-container">
        <h2 className="section-title">Education</h2>
        <p className="education-subtitle">
          Learn more about my education, background, and what motivates me.
        </p>
        <div className="education">
          {timelineData.map((item, index) => (
            <div key={index} className="education-item">
              <div className="education-image">
                <img src={images[index]} alt={item.title} />
              </div>
              <div className="education-content">
                <h2>{item.period}</h2>
                <h3>{item.title}</h3>
                <h3>{item.location}</h3>
                <p className="education-intro">{item.intro}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education1;
