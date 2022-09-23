/* eslint-disable no-undef */

  // <div className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
  //   <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
  //     <div className="pb-8">
  //       <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-purple-800">
  //         Portfolio
  //       </p>
  //     </div>
  //     <div className="grid mx-auto sm:grid-cols-2 md:grid-cols-3 gap-4">
  //       {applications.map((app) => (
  //         <div key={app.key}>
  //           <div className={"sm" ? "hidden" : "hovereffect"}>
  //             <img src={app.src} alt="{app.name}" />
  //             <div className="md:text-center overlay">
  //               <h2>{app.name}</h2>
  //               <h4 className="font-bold text-black">{app.desc}</h4>
  //               <a className="info" href={app.link}>
  //                 Link Here
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // </div>;

    


import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaStackOverflow, FaFontAwesome } from "react-icons/fa";
import { HiFolderDownload } from "react-icons/hi";
import Resume from "./Resume";

const Footer = () => {
  const [showResume, setShowResume] = useState(false);

  const handleClick = (event) => {
    setShowResume(true);
  };

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
          <button onClick={handleClick} className="button-content">
            Resume <HiFolderDownload size={30} />
          </button>
          {showResume && <Resume />}
        </li>
      </ul>
    </div>
  );
};

export default Footer;
