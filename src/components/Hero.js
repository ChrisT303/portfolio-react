import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import logos from "../data/LogoData";


const Hero = () => {
  const [nameDisplay, setNameDisplay] = useState("");
  const [developerText, setDeveloperText] = useState("");
  const [showLogos, setShowLogos] = useState(false);  
  const greetingText = "Hello! My name is Chris Williams";
  const fullDeveloperText = "I am a Full Stack Developer";

  useEffect(() => {
    let tempNameDisplay = "";
    let i = 0;

    const greetingInterval = setInterval(() => {
      tempNameDisplay += greetingText.charAt(i);
      setNameDisplay(tempNameDisplay);
      i++;

      if (i === greetingText.length) {
        clearInterval(greetingInterval);

        let tempDeveloperText = "";
        let j = 0;

        const developerInterval = setInterval(() => {
          tempDeveloperText += fullDeveloperText.charAt(j);
          setDeveloperText(tempDeveloperText);
          j++;

          if (j === fullDeveloperText.length) {
            clearInterval(developerInterval);
            setShowLogos(true);  
          }
        }, 75);
      }
    }, 75);
  }, []);

  return (
    <div className="w-full h-screen bg-eyes bg-cover bg-center">
      <div className="max-w-[1000px] mx-auto px-12 flex flex-col justify-center h-full">
        <p className="text-white custom-outline text-2xl font-bold">
          {nameDisplay}
        </p>
        <h2 className="text-3xl sm:text-7xl font-bold text-[#30D5C8] text-opacity-80">
          {developerText}
        </h2>

        {/* Tech Logos Reveal */}
        <div className="mt-4 flex space-x-6 overflow-x-auto scrollbar-hide">
      {logos.map((logo, index) => (
        <div 
          key={logo.id} 
          className={`relative group transition-opacity duration-500 ${showLogos ? 'opacity-100' : 'opacity-0'}`} 
          style={{ transitionDelay: `${showLogos ? index * 100 : 0}ms` }}  // Staggered reveal for each logo
        >
          <img src={logo.src} alt={logo.alt} className="h-12 md:h-16 w-auto" />
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 bg-black text-white text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition">
            {logo.hoverContent}
          </div>
        </div>
      ))}
    </div>


        <div className="text-white mt-6">
          <button className="hero-btn">
            <NavLink to="/work">My Projects</NavLink>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );

};

export default Hero;






