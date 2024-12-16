import React from "react";
import "./home.css";
import data from "../../data/navbar.json";
import ReactTypingEffect from "react-typing-effect";
import homeImage from "../../image/image4.png";

const Home = () => {
  return (
    <section className="home-section">
      {data.map((item) => (
        <div className="home-content" key={item.id}>
          <div className="text-container">
            <h2 className="home_title">{item.home}</h2>
            <h3 className="home_subtitle">{item.home_name}</h3>
            <h3 className="home_description">
              {item.home_Role}
              <ReactTypingEffect text={item.home_developer} className="type" />
            </h3>
            <br />
            <p className="home_paragraph">{item.home_paragraph}</p>
            <div className="home-button">
              <a href="#resume" className="button resume">
                Resume
                <i className="bi bi-box-arrow-down"></i>
              </a>
              <a href="#contact" className="button contact">
                Contact
              </a>
            </div>
          </div>
          <div className="home-image-wrapper">
            <img src={homeImage} alt="home" className="home-image1" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Home;
