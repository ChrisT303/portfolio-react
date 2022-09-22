import React from 'react'
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";
import { HiOutlineMail, HiFolderDownload } from "react-icons/hi";

function Footer() {
  return (
    <div className="hidden lg:flex fixed flex-col top-[50%] left-0">
      <ul>
        <li className="side-buttons bg-blue-500">
          <a
            className="button-content"
            href="/"
          >
            Linkedin <FaLinkedin size={30} />
          </a>
        </li>
        <li className="side-buttons bg-[#6cc644]">
          <a
            className="button-content"
            href="/"
          >
            GitHub <FaGithub size={30} />
          </a>
        </li>
        <li className="side-buttons bg-orange-600">
          <a
            className="button-content"
            href="/"
          >
            Stack OverFlow <FaStackOverflow size={30} />
          </a>
        </li>
        <li className="side-buttons bg-gray-500">
          <a
            className="button-content"
            href="/"
          >
            Email <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="side-buttons bg-red-600">
          <a
            className="button-content"
            href="/"
          >
            Resume <HiFolderDownload size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer