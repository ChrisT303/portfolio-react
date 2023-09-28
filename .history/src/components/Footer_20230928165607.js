import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiFolderDownload } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-inherit fixed bottom-0 left-0 w-full">
    <div className="md:hidden fixed bottom-0 right-0 p-4">
      <ul className="space-y-2">
        <li>
          <a
            href="https://www.linkedin.com/in/christopher-williams-368b29201/"
            className="text-gray-300 group hover:text-[#0072b1]"
          >
            <FaLinkedin size={30} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/deftonechris"
            className="text-gray-300 group hover:text-[#6cc644]"
          >
            <FaGithub size={30} />
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1F9QXAFgH3DuC2GkPuuiRkouwcBjN8J8z/view?usp=drive_link"
            className="text-gray-300 group hover:text-red-600"
          >
            <HiFolderDownload size={30} />
          </a>
        </li>
      </ul>
    </div>
  
        </div>
      </div>
    </footer>
  );
};

export default Footer;


