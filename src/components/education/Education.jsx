import React from "react";
import "./Education.css";
import educationImage1 from "../../image/download (3).jpg";
import educationImage2 from "../../image/download (2).jpg";
import educationImage3 from "../../image/download (1).jpg";

const timelineData = [
  {
    period: "2015 - 2016",
    title: "Christ Matric Hr Sec School",
    location: "Gollapatti, Krishnagiri",
    description:
      "From an early age, I became fascinated with computers and programming. Starting with basic HTML and CSS, I gradually expanded my skills to include JavaScript and various frameworks.",
    image: educationImage1,
    button: "/sslc",
  },
  {
    period: "2017 - 2018",
    title: "Sri Sathya Sai Matric Hr Sec School",
    location: "Kundarapalli, Krishnagiri",
    description:
      "During my university years, I studied computer science and gained hands-on experience through internships and freelance projects. This period fueled my passion for creating innovative solutions and solving complex problems.",
    image: educationImage2,
    button: "/hl",
  },
  {
    period: "2018 - 2022",
    title: "Bharathidasan Engineering College",
    location: "Natrampalli, Tirupattur",
    description:
      "Throughout my career, I have consistently sought opportunities to refine my skills and stay updated with the latest technologies. I strive for excellence in every project and aim to deliver valuable solutions.",
    image: educationImage3,
    button: "/",
  },
];
const Education = () => {
  return (
    <section>
      <div className="education-container">
        <h2 className="section-title">Education</h2>
        <p className="education-subtitle">
          Learn more education me, my background, and what motivates me.
        </p>
        <div className="education">
          {timelineData.map((item, index) => (
            <div key={index} className="education-item">
              <div className="education-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="education-content">
                <h2>{item.period}</h2>
                <h3>{item.title}</h3>
                <h3>{item.location}</h3>
                <p>{item.description}</p>
                <a href={item.button} className="education-button">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
