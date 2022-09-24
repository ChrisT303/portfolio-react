import React from "react";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";
import { HiFolderDownload } from "react-icons/hi";
// import Resume from "./Resume";

const Footer = () => {


 
  return (
    <div className="hidden lg:flex fixed flex-col top-[50%] left-0">
      <ul>
        <li className="side-buttons bg-blue-500">
          <a
            className="button-content"
            href="https://www.linkedin.com/in/christopher-williams-368b29201/"
          >
            Linkedin <FaLinkedin size={30} />
          </a>
        </li>
        <li className="side-buttons bg-[#6cc644]">
          <a className="button-content" href="https://github.com/deftonechris">
            GitHub <FaGithub size={30} />
          </a>
        </li>
        <li className="side-buttons bg-orange-600">
          <a
            className="button-content"
            href="https://stackoverflow.com/users/19105152/chriswill303"
          >
            Stack OverFlow <FaStackOverflow size={30} />
          </a>
        </li>
        <li className="side-buttons bg-red-600">
          <a
            className="button-content"
            href="https://drive.google.com/file/d/1L4tDGX2ejbyd1-mDdsmRxdNuH5bYtPtp/view?usp=sharing"
          >
            Resume <HiFolderDownload size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
