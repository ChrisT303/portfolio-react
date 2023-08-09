import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div className="w-full h-screen  bg-eyes  bg-cover bg-center">
      <div className="max-w-[1000px] mx-auto px-12 flex flex-col justify-center  h-full">
        <p className="text-white font-bold "> Hello! My name is </p>
        <h1 className="text-3xl sm:text-5xl font-bold text-white text-opacity-60">
          Chris Williams
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#30D5C8] text-opacity-80">
          Full Stack Developer
        </h2>
        <p className="text-white font-bold py-4 max-w-[700px] text-opacity-80">
          Based in Denver, CO. I am passionate about tech, design, data, and
          everything in between. Welcome to my page! Feel free to have a look
          around and contact me with any questions you might have.
        </p>
        <div className="text-white">
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
