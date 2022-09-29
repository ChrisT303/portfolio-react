import React from "react";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";
import { HiFolderDownload } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="h-[100px] w-full px-4 main">
      <div>
        <div>
          <div className="max-w-[1000px] mx-auto flex flex-col pt-4">
            <ul className="w-full space-y-2  grid grid-cols-4 mb-0 gap-8">
              <li>
                <a
                  href="https://www.linkedin.com/in/christopher-williams-368b29201/"
                  className="text-main  hover:text-[#0072b1] group"
                >
                  <h2 className="invisible group-hover:visible group-hover:animate-bounce pt-2">
                    LinkedIn
                  </h2>
                  <FaLinkedin size={30} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/deftonechris"
                  className="text-main hover:text-[#6cc644] group"
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
                  className="text-main  hover:text-[#FF9900] group"
                >
                  <h2 className="invisible group-hover:visible  group-hover:animate-bounce">
                    stack overflow
                  </h2>
                  <FaStackOverflow size={30} />
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1U7PzBKN4b86Zkl16N55fDvl2dB-N6HMp/view?usp=sharing"
                  className="text-main hover:text-red-600 group"
                >
                  <h2 className="invisible group-hover:visible group-hover:animate-bounce">
                    Resume
                  </h2>
                  <HiFolderDownload size={30} />
                </a>
              </li>
            </ul>
            <h4 className="pt-8 text-center text-main">
              © 2022 Copyright: Chris Williams Media
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;