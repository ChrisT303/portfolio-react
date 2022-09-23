import React, { useState } from "react";
import logos from "../data/LogoData";

const Experience = () => {
  const [hoveringID, setIsHoveringID] = useState();

  const handleMouseOver = (id) => {
    setIsHoveringID(id);
  };

  const handleMouseOut = () => {
    setIsHoveringID(undefined);
  };

  return (
    <div
      name="experience"
      className="w-full h-screen bg-[#2D283E] text-[#D1d7E0]"
    >
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#66b2b2]">
            Experience
          </p>
          <p className="py-4">Technologies I have worked with</p>
        </div>
        <div className="w-full space-y-2 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <img
                onMouseOver={() => handleMouseOver(logo.id)}
                onMouseOut={handleMouseOut}
                className="w-20 mx-auto"
                src={logo.src}
                alt={logo.alt}
              />
              {hoveringID === logo.id ? (
                <p className="font-bold">{logo.hoverContent}</p>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
