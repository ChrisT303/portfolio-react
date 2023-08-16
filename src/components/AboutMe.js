import React from "react";
import PortPic from "../assets/portfolio-pic.png";
import Footer from "./Footer";

function AboutMe() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-eyes bg-cover bg-center text-main"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 bdr text-white">About Me</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <img
              className="mx-auto h-[140px] md:h-[425px] "
              src={PortPic}
              alt="Portfolio Pic"
            />
          </div>
          <div>
            <p className="font-bold text-gray-700 text-2xl ">
              I am Christopher Williams, a dedicated Full Stack Developer with a
              robust background in sales, marketing, and management. Recently
              certified through a rigorous Full Stack Web Development program at
              the University of Denver, I have transitioned my career
              trajectory to embrace my passion for technology and
              problem-solving. My professional journey has been marked by
              successful collaboration with clients and cross-functional teams,
              yielding innovative web-based applications. I have harnessed my
              experience to effectively bridge the realms of business and
              technology, creating applications that engage users while meeting
              strategic goals.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AboutMe;
