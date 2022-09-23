import React from "react";
import PortPic from "../assets/portfolio-pic.png";

function AboutMe() {
  return (
    <div name="about" className="w-full h-screen bg-[#31708E] text-[#D1d7E0]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#66b2b2]">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <img className="mx-auto" src={PortPic} alt="Portfolio Pic" />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              adipisci dolore beatae, necessitatibus nesciunt illo maiores
              quibusdam ea porro, modi minima vero dolorem dicta minus soluta
              veniam distinctio non ipsum!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
