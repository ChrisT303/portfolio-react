import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div className="w-full h-screen  bg-balloon bg-opacity-50 bg-cover bg-center">
      <div className="max-w-[1000px] mx-auto px-12 flex flex-col justify-center  h-full">
        <p className="peach  font-bold"> Hello! My name is </p>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-black text-opacity-90">
          Chris Williams
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#30D5C8]">
          Full Stack Developer
        </h2>
        <p className="peach font-extrabold py-4 max-w-[700px]">
          Based in Denver, CO. I am passionate about tech, design, data, and
          everything in between. Welcome to my page! Feel free to have a look
          around and contact me with any questions you might have.
        </p>
        <div>
          <button className="hero-btn">
            <NavLink to="/work">My Projects</NavLink>
          </button>
        </div>
      <Footer />
      </div>
    </div>
  );
};

export default Hero;
