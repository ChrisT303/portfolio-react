import React from "react";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";
import { HiFolderDownload } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="w-full h-[80px] flex justify-around items-center px-4 bg-inherit text-main font-semibold">
      <ul className="">
        <li>
          <a
            href="https://www.linkedin.com/in/christopher-williams-368b29201/"
            className="text-black opacity-70 hover:opacity-100 hover:font-black  hover:text-[#0072b1] group"
          >
            <h2 className="invisible group-hover:visible group-hover:animate-bounce ">
              LinkedIn
            </h2>
            <FaLinkedin size={30} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/deftonechris"
            className="text-black opacity-70 hover:opacity-100 hover:font-black   hover:text-[#6cc644] group"
          >
            <h2 className="invisible group-hover:visible group-hover:animate-bounce">
              GitHub
            </h2>
            <FaGithub size={30} />
          </a>
        </li>
        <li>
          <a
            href="https://stackoverflow.com/users/19105152/chriswill303"
            className="text-black opacity-70 hover:opacity-100 hover:font-black   hover:text-[#FF9900] group"
          >
            <h2 className="invisible group-hover:visible group-hover:animate-bounce ">
              stack overflow
            </h2>
            <FaStackOverflow size={30} />
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1U7PzBKN4b86Zkl16N55fDvl2dB-N6HMp/view?usp=sharing"
            className="text-black opacity-70 hover:opacity-100 hover:font-black  hover:text-pink-500 group"
          >
            <h2 className="invisible group-hover:visible group-hover:animate-bounce">
              Resume
            </h2>
            <HiFolderDownload size={30} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
