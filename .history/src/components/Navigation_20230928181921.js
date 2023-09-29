import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/newlogo.png";
import Footer from "./Footer";

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleClick = () => setNav(!nav);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-inherit text-main text-2xl font-semibold z-10">
      <div>
        <img src={Logo} alt="Logo" className="hidden md:flex h-16" />
      </div>
      <ul className="hidden md:flex">
        <li>
          <NavLink to="/" className="nav-hover text-white">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-hover text-white">
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience" className="nav-hover text-white">
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/work" className="nav-hover text-white">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-hover text-white">
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
            : "absolute top-0 left-0 w-full h-screen main flex flex-col justify-center items-center bg-black md:bg-black "
        }
      >
              {nav && (
        <div 
          onClick={handleClick} 
          className="absolute top-4 right-4 z-50 cursor-pointer text-white"
          style={{ fontSize: '24px' }} // Adjust the size as needed
        >
          <FaTimes />
        </div>
      )}

        <li className="py-6 text-4xl">
          <NavLink
            onClick={handleClick}
            to="/"
            className="nav-hover text-white"
          >
            Home
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink
            onClick={handleClick}
            to="/about"
            className="nav-hover text-white"
          >
            About Me
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink
            onClick={handleClick}
            to="/experience"
            className="nav-hover text-white"
          >
            Skills
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink
            onClick={handleClick}
            to="/work"
            className="nav-hover text-white"
          >
            Portfolio
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink
            onClick={handleClick}
            to="/contact"
            className="nav-hover text-white"
          >
            Contact
          </NavLink>
        </li>
        {nav && isMobile && <Footer />}

      </ul>
      {!isMobile && <Footer />} 
    </div>
  );
};

export default Navigation;
