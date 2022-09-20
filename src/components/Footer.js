import React from 'react'
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
    <div className="hidden lg:flex fixed flex-col top-[60%] left-0">
      <ul>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="/"
          >
            Linkedin <FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6cc644]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="/"
          >
            GitHub <FaGithub size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-orange-600">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="/"
          >
            Stack OverFlow <FaStackOverflow size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="/"
          >
            Email <HiOutlineMail size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer