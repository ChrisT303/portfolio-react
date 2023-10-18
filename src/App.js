
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import ParticlesBackground from './components/ParticlesBackground';
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Work from "./components/Work";
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <div className="relative w-full h-screen">
        {/* This will serve as your background */}
        <ParticlesBackground className="absolute w-full h-full top-0 left-0 z-0" />
        
        {/* Your main content */}
        <div className="relative z-10">
          <Navigation />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}





export default App;
