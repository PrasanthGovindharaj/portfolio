import React, { useState } from "react";
import "./project.css";

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      id: 1,
      category: "Website",
      image: "",
      title: "Website Project 1",
      github: "#",
      website: "#",
    },
    {
      id: 2,
      category: "Navbar",
      image: "",
      title: "Navbar Project 1",
      github: "#",
      website: "#",
    },
    {
      id: 3,
      category: "Button",
      image: "",
      title: "Button Project 1",
      github: "#",
      website: "#",
    },
    {
      id: 4,
      category: "Other",
      image: "",
      title: "Other Project 1",
      github: "#",
      website: "#",
    },
    {
      id: 5,
      category: "Website",
      image: "",
      title: "Website Project 1",
      github: "#",
      website: "#",
    },
    {
      id: 6,
      category: "Navbar",
      image: "",
      title: "Navbar Project 1",
      github: "#",
      website: "#",
    },
    {
      id: 7,
      category: "Button",
      image: "",
      title: "Button Project 1",
      github: "#",
      website: "#",
    },
    {
      id: 8,
      category: "Other",
      image: "",
      title: "Other Project 1",
      github: "#",
      website: "#",
    },
    // Add more projects as needed
  ];

  const categories = ["All", "Website", "Navbar", "Button", "Other"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

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
