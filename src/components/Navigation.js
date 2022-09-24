import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/newlogo.png";

// import Logo from '../assets/logo2.png';
const Navigation = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2D283E] text-[#e0ded1]">
      <div>
        <img src={Logo} alt="Logo" className="h-16" />
      </div>
      <ul className="hidden md:flex">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Me</NavLink>
        </li>
        <li>
          <NavLink to="/work">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/experience">Experience</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
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
        <li className="py-6 text-4xl">
          <NavLink onClick={handleClick} to="/">
            {" "}
            Home
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink onClick={handleClick} to="/about">
            {" "}
            About Me
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink onClick={handleClick} to="/work"> Portfolio</NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink onClick={handleClick} to="/experience">Experience</NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink onClick={handleClick} to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
