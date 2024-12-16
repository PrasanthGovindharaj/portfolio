import React from "react";
import Home from "./home/Home";
import About1 from "./about/About1";
import Education1 from "./education/Education1";
import Experience from "./experience/Experience";
import Skill from "./skill/Skill";
import Project from "./project/Project";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Services from "./Services/Services";

const Hero = () => {
  return (
    <div>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About1 />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="skill">
        <Skill />
      </div>
      <div id="education">
        <Education1 />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Hero;
