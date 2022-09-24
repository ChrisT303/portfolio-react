import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full h-screen main bg-balloon bg-contain bg-center">
      <div className="max-w-[1000px] mx-auto px-14 flex flex-col justify-center h-full">
        <p className="peach  font-bold"> Hello! My name is </p>
        <h1 className="text-3xl sm:text-5xl font-bold text-main">
          Chris Williams
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#66b2b2]">
          I am a Full Stack web developer
        </h2>
        <p className="peach font-bold py-4 max-w-[700px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          velit, cum tenetur assumenda possimus ratione porro impedit architecto
          ex quasi inventore repellat, veniam repudiandae accusamus. Labore aut
          cupiditate impedit cum ea. Neque magnam expedita at nemo id nam
          inventore doloribus vero? Omnis, laudantium voluptas. Deserunt quod
          sapiente earum fugiat. Exercitationem!
        </p>
        <div>
          <button className="hero-btn">
            <NavLink to="/work">My Projects</NavLink>
          </button>
          ;
        </div>
      </div>
    </div>
  );
};

export default Hero;
