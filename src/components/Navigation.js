import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';

import Logo from '../assets/logo2.png';


const Navigation = () => {
 const [nav, setNav] = useState(false)
 const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" className="h-24 w-48 mt-5" />
      </div>

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>

      {/* Click handler to toggle back and forth */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes/> }
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About Me</li>
        <li className="py-6 text-4xl">Portfolio</li>
        <li className="py-6 text-4xl">Resume</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social Icons */}
    
    </div>
  );
}

export default Navigation