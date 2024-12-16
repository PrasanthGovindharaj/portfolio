import React from "react";
import "./skill.css";

const Skill = () => {
  return (
    <section class="skill-section">
      <div class="skill-content">
        <h2 class="section-title">My skills</h2>
        <div class="skills-content">
          <div class="skill-column1">
            <div class="text">My creative skills.</div>
            <p>
              I am a dedicated Front-End Developer with a passion for crafting
              responsive and user-friendly web applications. My expertise lies
              in React.js, HTML, CSS, JavaScript, and ensuring seamless user
              experiences. With a focus on innovative solutions, I bring
              creativity and technical proficiency to every project I undertake.
            </p>
            <a href="/" className="button-skill">
              Read more
            </a>
          </div>
          <div class="skill-column2">
            <div class="bars">
              <div class="info">
                <span>HTML</span>
                <span>90%</span>
              </div>
              <div class="line html"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>CSS</span>
                <span>60%</span>
              </div>
              <div class="line css"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>JavaScript</span>
                <span>80%</span>
              </div>
              <div class="line js"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>Bootstrap</span>
                <span>70%</span>
              </div>
              <div class="line bootstrap"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>Java</span>
                <span>60%</span>
              </div>
              <div class="line java"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>PHP</span>
                <span>40%</span>
              </div>
              <div class="line php"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>MySQL</span>
                <span>70%</span>
              </div>
              <div class="line mysql"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
