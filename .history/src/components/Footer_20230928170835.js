import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiFolderDownload } from "react-icons/hi";

const Footer = () => {
  // Define a state variable to track the screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Define a function to update the screen width when the window is resized
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  // Use useEffect to add and remove the resize event listener
  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  // Define a threshold screen width below which the footer won't be rendered
  const thresholdScreenWidth = 768;
  return (
    <footer className="bg-inherit fixed bottom-0 left-0 w-full ">
      <div>
        <div>
          <div className="max-w-[1000px] mx-auto pt-4 pb-2">
            <ul className="w-full space-y-2 grid grid-cols-3 auto-cols-max mb-0 gap-8 justify-center">
              <li>
                <a
                  href="https://www.linkedin.com/in/christopher-williams-368b29201/"
                  className="text-gray-300 group hover:text-[#0072b1]"
                >
                  <h2 className="invisible md:group-hover:visible md:group-hover:animate-bounce pt-2">
                    LinkedIn
                  </h2>
                  <FaLinkedin size={50} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/deftonechris"
                  className="text-gray-300 group hover:text-[#6cc644]"
                >
                  <h2 className="invisible md:group-hover:visible md:group-hover:animate-bounce">
                    GitHub
                  </h2>
                  <FaGithub size={50} />
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1F9QXAFgH3DuC2GkPuuiRkouwcBjN8J8z/view?usp=drive_link"
                  className="text-gray-300 group hover:text-red-600"
                >
                  <h2 className="invisible md:group-hover:visible md:group-hover:animate-bounce">
                    Resume
                  </h2>
                  <HiFolderDownload size={50} />
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


