import React from "react";
import Home from "./home/Home";
import About1 from "./about/About1";
import Eduction from "./eduction/Eduction";
import Experience from "./experience/Experience";
import Skill from "./skill/Skill";
import Project from "./project/Project";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

const Hero = () => {
  return (
    <div>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About1 />
      </div>
      <div id="eduction">
        <Eduction />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="skill">
        <Skill />
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
