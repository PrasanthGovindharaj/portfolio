import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Navbar from './page/Navbar';
import "bootstrap-icons/font/bootstrap-icons.css"
import Hero from './components/Hero';
import Home from './components/home/Home';
import About1 from './components/about/About1';
import Contact from './components/contact/Contact';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Project from './components/project/Project';
import Skill from './components/skill/Skill';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="main">
        <Hero />
        <Routes>
          <Route path="#" element={<Home />} />
          <Route path="#about" element={<About1 />} />
          <Route path="#contact" element={<Contact />} />
          <Route path="#education" element={<Education />} />
          <Route path="#experience" element={<Experience />} />
          <Route path="#project" element={<Project />} />
          <Route path="#skill" element={<Skill />} />
          <Route path="#footer" element={<Footer />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
