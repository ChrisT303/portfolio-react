import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';

// import Logo from '../assets/logo2.png';


const Navigation = () => {
 const [nav, setNav] = useState(false)
 const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-center items-center px-4 bg-[#2D283E] text-[#f7F9fB]">
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Experience</li>
        <li>Contact</li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#2D283E] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About Me</li>
        <li className="py-6 text-4xl">Portfolio</li>
        <li className="py-6 text-4xl">Experience</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>
    </div>
  );
}

export default Navigation