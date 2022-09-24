import React from "react";
import { FaHandPointRight } from "react-icons/fa";





const Hero = () => {

  return (
    <div className="w-full h-screen bg-[#2D283E] bg-balloon bg-contain bg-center">
      <div className="max-w-[1000px] mx-auto px-14 flex flex-col justify-center h-full">
        <p className="text-[#FFE5b4] f font-bold"> Hello! My name is </p>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#e0ded1]">
          Chris Williams
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#66b2b2]">
          I am a Full Stack web developer
        </h2>
        <p className="text-[#FFE5b4] font-bold py-4 max-w-[700px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          velit, cum tenetur assumenda possimus ratione porro impedit architecto
          ex quasi inventore repellat, veniam repudiandae accusamus. Labore aut
          cupiditate impedit cum ea. Neque magnam expedita at nemo id nam
          inventore doloribus vero? Omnis, laudantium voluptas. Deserunt quod
          sapiente earum fugiat. Exercitationem!
        </p>
        <div>
          <button className="text-[#e0ded1] group border-4 rounded-full px-6 py-3 my-2 flex items-center hover:bg-[#66b2b2] hover:border-[#3e7a7a] hover:font-bold">
            My Projects
            <span className="group-hover:rotate-90 group-hover:fa-bounce duration-200">
              <FaHandPointRight className="ml-2"/>
            </span>
          </button>
          ;
        </div>
      </div>
    </div>
  );
};

export default Hero;
