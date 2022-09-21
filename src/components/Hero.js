import React from "react";
import { FaHandPointRight } from "react-icons/fa";



const Hero = () => {

  return (
    <div className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-14 flex flex-col justify-center h-full">
        <p className="text-purple-800"> Hello! My name is </p>
        <h1 className="text-3xl sm:text-5xl font-bold text-white">
          Chris Williams
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-purple-800">
          I am a Full Stack web developer
        </h2>
        <p className="text-pink-800 py-4 max-w-[700px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          nemo voluptatum officiis sequi libero voluptatem molestiae nisi
          similique? Est, iure!
        </p>
        <div>
          <button className="text-white group border-4 rounded-full px-6 py-3 my-2 flex items-center hover:bg-purple-800/80 hover:border-purple-800">
            My Projects
            <span className="group-hover:rotate-90 duration-200">
              <FaHandPointRight className="ml-2" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
