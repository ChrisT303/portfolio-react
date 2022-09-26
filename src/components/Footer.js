import React from "react";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";
import { HiFolderDownload } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="h-[150px] px-4 main">
      <div className="container p-4">
        <div className="">
          <div className="mb-4">
            <ul className="flex flex-row justify-around items-center lg:ml-[20%] px-6 mb-0">
              <li>
                <a
                  href="https://www.linkedin.com/in/christopher-williams-368b29201/"
                  className="text-main hover:text-[#0072b1] group"
                >
                  <h2 className="invisible group-hover:visible ">LinkedIn</h2>
                  <FaLinkedin size={30} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/deftonechris"
                  className="text-main hover:text-[#6cc644] group"
                >
                  <h2 className="invisible group-hover:visible ">GitHub</h2>
                  <FaGithub size={30} />
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com/users/19105152/chriswill303"
                  className="text-main  hover:text-[#FF9900] group"
                >
                  <h2 className="invisible group-hover:visible group-hover:text-center">
                    stack overflow
                  </h2>
                  <FaStackOverflow size={30} />
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1L4tDGX2ejbyd1-mDdsmRxdNuH5bYtPtp/view?usp=sharing"
                  className="text-main hover:text-red-600 group"
                >
                  <h2 className="invisible group-hover:visible group-hover:text-center">
                    Resume
                  </h2>
                  <HiFolderDownload size={30} />
                </a>
              </li>
            </ul>
            <h4 className="pt-4 text-center text-main">© 2021 Copyright:</h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
