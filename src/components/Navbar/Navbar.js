import React from "react";
//import { Link, Element, scroll, Button } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <ul className="pt-16 outline-2 outline-green-600 grid grid-cols-1 grid-rows-4 gap-5 text-center text-white">
      <li className="text-2xl font-serif font-medium hover:text-green-600 ease-in duration-300 hover:scale-110">
        {currentPath === "/" && (
          <span class="cursor inline-block w-2 h-5 bg-green-600 animate-pulse"></span>
        )}
        <NavLink
          to="/"
          className={`pl-2 ${currentPath === "/" ? "text-green-600" : ""}`}
        >
          Home
        </NavLink>
      </li>
      <li className=" text-2xl font-serif font-medium hover:text-green-600 ease-in duration-300 hover:scale-110">
        {currentPath === "/aboutme" && (
          <span class="cursor inline-block w-2 h-5 bg-green-600 animate-pulse"></span>
        )}
        <NavLink
          to="/aboutme"
          className={`pl-2 ${
            currentPath === "/aboutme" ? "text-green-600" : ""
          }`}
        >
          About Me
        </NavLink>
      </li>
      <li className="text-2xl font-serif font-medium hover:text-green-600 ease-in duration-300 hover:scale-110">
        {currentPath === "/projects" && (
          <span class="cursor inline-block w-2 h-5 bg-green-600 animate-pulse"></span>
        )}
        <NavLink
          to="/projects"
          className={`pl-2 ${
            currentPath === "/projects" ? "text-green-600" : ""
          }`}
        >
          Projects
        </NavLink>
      </li>
      <li className="text-2xl font-serif font-medium hover:text-green-600 ease-in duration-300 hover:scale-110">
        {currentPath === "/contact" && (
          <span class="cursor inline-block w-2 h-5 bg-green-600 animate-pulse"></span>
        )}
        <NavLink
          to="/contact"
          className={`pl-2 ${
            currentPath === "/contact" ? "text-green-600" : ""
          }`}
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
