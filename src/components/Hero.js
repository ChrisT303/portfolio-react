import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";


const Hero = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p>Lorem ipsum dolor sit.</p>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          nemo voluptatum officiis sequi libero voluptatem molestiae nisi
          similique? Est, iure!
        </p>
        <div>
          <button>
            My Projects
            <FaArrowCircleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
