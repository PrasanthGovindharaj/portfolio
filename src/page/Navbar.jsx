import React, { useState } from 'react'
import './navbar.css'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen]=useState(false);
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen)
    }
  return (
    <header className={`header ${isMenuOpen ? "showMenu" : ""}`}>
      <nav className="navbar">
        <h2 className="logo-text">Prasanth J G</h2>
        <i
          className={`bi ${isMenuOpen ? "bi-x-lg" : "bi-list"}`}
          aria-label={isMenuOpen ? "close" : "open"}
          onClick={toggleMenu}
        ></i>
        <ul className={`nav-menu ${isMenuOpen ? "show" : ""}`}>
          <li>
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#skill" className="nav-link">
              Skill
            </a>
          </li>
          <li>
            <a href="#experience" className="nav-link">
              Experience
            </a>
          </li>
          <li>
            <a href="#eduction" className="nav-link">
              Eduction
            </a>
          </li>
          <li>
            <a href="#project" className="nav-link">
              Project
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar
