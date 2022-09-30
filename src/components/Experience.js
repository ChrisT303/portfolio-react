import React, { useState } from "react";
import logos from "../data/LogoData";
import Footer from "./Footer";

const Experience = () => {
  const [hoveringID, setIsHoveringID] = useState();

  const handleMouseOver = (id) => {
    setIsHoveringID(id);
  };

  const handleMouseOut = () => {
    setIsHoveringID(false);
  };

  return (
    <div className="w-full h-screen bg-eyes bg-cover bg-center text-main">
      <div className="max-w-[1000px] pt-[40px] mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 bdr">Experience</p>
          <p className="py-4">Technologies I have worked with</p>
        </div>
        <div className="w-full space-y-2  grid grid-cols-2 sm:grid-cols-4 gap-12 text-center py-8">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="shadow-none md:shadow-lg md:shadow-[#040c16] md:hover:scale-110 md:duration-1000"
            >
              <img
                onMouseOver={() => handleMouseOver(logo.id)}
                onMouseOut={handleMouseOut}
                className="w-10 mx-auto md:w-40"
                src={logo.src}
                alt={logo.alt}
              />
              {hoveringID === logo.id ? (
                <p className="font-bold text-2xl">{logo.hoverContent}</p>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
        <div className=" w-full px-4 pl-[10%] md:pt-[10px] "></div>
        <Footer />
      </div>
    </div>
  );
};

export default Experience;
