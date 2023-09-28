import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div className="w-full h-screen  bg-eyes  bg-cover bg-center">
      <div className="max-w-[1000px] mx-auto px-12 flex flex-col justify-center  h-full">
        <p className="text-white text-2xl font-bold "> Hello! My name is </p>
        <h1 className="text-3xl sm:text-6xl font-bold text-white text-opacity-80">
          Chris Williams
        </h1>
        <h2 className="text-3xl sm:text-7xl font-bold text-[#30D5C8] text-opacity-80">
          Full Stack Developer
        </h2>
        <p className="text-gray-700 font-bold py-4 text-2xl sm:text-base max-w-[700px] text-opacity-80">
        Full Stack Developer specializing in React, Next.js, TailwindCSS, MongoDB, and GraphQL. Passionate about crafting clean, efficient, and user-friendly web applications. Actively seeking opportunities to expand my technical toolkit, currently diving into Python programming. Open to new challenges and continuously driven to learn and grow in the ever-evolving world of technology.

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
