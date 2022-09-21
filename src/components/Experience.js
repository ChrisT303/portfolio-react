import React, { useState } from "react";

import CssLogo from "../assets/css-logo.png";
import HtmlLogo from "../assets/html-logo.png";
import JavaScriptLogo from "../assets/javascript-logo.png";
import MongoLogo from "../assets/mongo-logo.png";
import MysqlLogo from "../assets/mysql-logo.png";
import NodeLogo from "../assets/node-logo.png";
import ReactLogo from "../assets/react-logo.png";
import TailwindLogo from "../assets/tailwind-logo.png";

const Experience = () => {
  const [hoveringID, setIsHoveringID] = useState();

  const handleMouseOver = (id) => {
    setIsHoveringID(id);
  };

  const handleMouseOut = () => {
    setIsHoveringID(undefined);
  };

  const logos = [
    {
      id: 1,
      src: CssLogo,
      alt: "Css Logo",
      hoverContent: "CSS",
    },
    {
      id: 2,
      src: HtmlLogo,
      alt: "HTML Logo",
      hoverContent: "HTML",
    },
    {
      id: 3,
      src: JavaScriptLogo,
      alt: "JS Logo",
      hoverContent: "Javascript",
    },
    {
      id: 4,
      src: MongoLogo,
      alt: "Mongo Logo",
      hoverContent: "MongoDB",
    },
    {
      id: 5,
      src: MysqlLogo,
      alt: "MySql Logo",
      hoverContent: "MySQL",
    },
    {
      id: 6,
      src: NodeLogo,
      alt: "Node Logo",
      hoverContent: "Node JS",
    },
    {
      id: 7,
      src: ReactLogo,
      alt: "React Logo",
      hoverContent: "React",
    },
    {
      id: 8,
      src: TailwindLogo,
      alt: "Tailwind Logo",
      hoverContent: "Tailwind CSS",
    },
  ];

  return (
    <div
      name="experience"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-purple-800">
            Experience
          </p>
          <p className="py-4">Technologies I have worked with</p>
        </div>
        <div className="w-full space-y-2 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {logos.map((logo) => (
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
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
