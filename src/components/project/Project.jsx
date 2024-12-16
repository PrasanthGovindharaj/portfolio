import React, { useState } from "react";
import "./project.css";
import projectsData from "../../data/projects.json";

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Website", "Navbar", "Button", "Other"];

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section className="project-section">
      <h2 className="section-title">Projects</h2>

      <ul className="category-list">
        {categories.map((category) => (
          <li
            key={category}
            className={`category-item ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>

      <div className="project-content">
        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li key={project.id} className="project">
              <div className="project-card">
                <img
                  src={project.image || "default-image.jpg"}
                  alt={project.title}
                  className="project-image"
                />
                <p className="project-title">{project.title}</p>
                <div className="project-links">
                  <a
                    href={project.github}
                    className="github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.website}
                    className="website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Project;
