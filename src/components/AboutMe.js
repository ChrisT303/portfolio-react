import React from "react";
import PortPic from "../assets/portfolio-pic.png";
import Footer from "./Footer";

function AboutMe() {
  return (
    <div name="about" className="w-full h-screen secondary text-main">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 bdr">About Me</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <img className="mx-auto h-[200px] md:h-[425px] " src={PortPic} alt="Portfolio Pic" />
          </div>
          <div>
            <p>
              Hi! My name is Chris. I recently graduated from a Full-Stack
              Developer boot camp at the University of Denver. I have been in
              sales for the past 14 years and decided it was time for a career
              change. I love tech and all of the challenges it brings. I like to
              solve complex problems and working with a team. I am outgoing and
              dedicated to doing what is necessary to complete any task. I
              believe that keeping an open mind is key to becoming a better
              Developer and am inclined to take in any feedback I can get.
              Thanks for taking the time and I hope to hear from you soon!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutMe;
