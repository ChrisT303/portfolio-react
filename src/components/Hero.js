import React from "react";
import { FaHandPointRight } from "react-icons/fa";



const Hero = () => {

  return (
    <div className="w-full h-screen bg-[#2D283E]">
      <div className="max-w-[1000px] mx-auto px-14 flex flex-col justify-center h-full">
        <p className="text-[#68a3c7] "> Hello! My name is </p>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#D1d7E0]">
          Chris Williams
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#802BB1]">
          I am a Full Stack web developer
        </h2>
        <p className="text-[#68a3c7] py-4 max-w-[700px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          nemo voluptatum officiis sequi libero voluptatem molestiae nisi
          similique? Est, iure!
        </p>
        <div>
          <button className="text-[#D1d7E0] group border-4 rounded-full px-6 py-3 my-2 flex items-center hover:bg-[#802BB1] hover:border-[#5c1c82]">
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
