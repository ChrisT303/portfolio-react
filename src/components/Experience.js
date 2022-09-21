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
  }

  const handleMouseOut = () => {
    setIsHoveringID(undefined);
  }

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
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              onMouseOver={() => handleMouseOver(1)}
              onMouseOut={handleMouseOut}
              className="w-20 mx-auto"
              src={CssLogo}
              alt="Css Logo"
            />
            {hoveringID === 1 ? <p className="font-bold">CSS</p> : ""}
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              onMouseOver={() => handleMouseOver(2)}
              onMouseOut={handleMouseOut}
              className="w-20 mx-auto"
              src={HtmlLogo}
              alt="HTML logo"
            />
            {hoveringID === 2 ? <p className="font-bold">HTML</p> : ""}
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              onMouseOver={() => handleMouseOver(3)}
              onMouseOut={handleMouseOut}
              className="w-20 mx-auto"
              src={JavaScriptLogo}
              alt="Js Logo"
            />
            {hoveringID === 3 ? <p className="font-bold">JavaScript</p> : ""}
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              onMouseOver={() => handleMouseOver(4)}
              onMouseOut={handleMouseOut}
              className="w-20 mx-auto"
              src={MongoLogo}
              alt="Mongo Logo"
            />
            {hoveringID === 4 ? <p className="font-bold">Mongo DB</p> : ""}
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              onMouseOver={() => handleMouseOver(5)}
              onMouseOut={handleMouseOut}
              className="w-20 mx-auto"
              src={MysqlLogo}
              alt="Mysql Logo"
            />
            {hoveringID === 5 ? <p className="font-bold">MySQL</p> : ""}
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              onMouseOver={() => handleMouseOver(6)}
              onMouseOut={handleMouseOut}
              className="w-20 mx-auto"
              src={NodeLogo}
              alt="Node Logo"
            />
            {hoveringID === 6 ? <p className="font-bold">Node JS</p> : ""}
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              onMouseOver={() => handleMouseOver(7)}
              onMouseOut={handleMouseOut}
              className="w-20 mx-auto"
              src={ReactLogo}
              alt="React Logo"
            />
            {hoveringID === 7 ? <p className="font-bold">React</p> : ""}
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200">
            <img
              onMouseOver={() => handleMouseOver(8)}
              onMouseOut={handleMouseOut}
              className="w-20 mx-auto"
              src={TailwindLogo}
              alt="Tailwind Logo"
            />
            {hoveringID === 8 ? <p className="font-bold">Tailwind CSS</p> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
