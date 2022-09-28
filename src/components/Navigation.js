import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/newlogo.png";

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 main text-main z-10">
      <div>
        <img src={Logo} alt="Logo" className="h-16" />
      </div>
      <ul className="hidden md:flex">
        <li>
          <NavLink to="/" className="nav-hover">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-hover">
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience" className="nav-hover">
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink to="/work" className="nav-hover">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-hover">
            Contact
          </NavLink>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-100">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen main flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <NavLink onClick={handleClick} to="/" className="nav-hover">
            Home
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink onClick={handleClick} to="/about" className="nav-hover">
            About Me
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink onClick={handleClick} to="/experience" className="nav-hover">
            Experience
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink onClick={handleClick} to="/work" className="nav-hover">
            Portfolio
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink onClick={handleClick} to="/contact" className="nav-hover">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
