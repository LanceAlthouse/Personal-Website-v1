import React from "react";
//import { Link, Element, scroll, Button } from "react-scroll";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="pt-16 outline-2 outline-green-600 grid grid-cols-1 grid-rows-4 gap-5 text-center text-white">
      <li className="text-2xl font-serif font-medium hover:text-green-600">
        <span class="cursor inline-block w-2 h-5 bg-green-600 animate-pulse"></span>
        <NavLink
          to="/"
          className="pl-2 text-green-600 hover:drop-shadow-green"
          activeClassName="active-link"
        >
          Home
        </NavLink>
      </li>
      <li className=" text-2xl font-serif font-medium hover:text-green-600">
        <NavLink
          to="/aboutme"
          className="pl-2 hover:drop-shadow-green"
          activeClassName="active-link"
        >
          About Me
        </NavLink>
      </li>
      <li className="text-2xl font-serif font-medium hover:text-green-600">
        <NavLink
          to="/projects"
          className="pl-2 hover:drop-shadow-green"
          activeClassName="active-link"
        >
          Projects
        </NavLink>
      </li>
      <li className="text-2xl font-serif font-medium hover:text-green-600">
        <NavLink
          to="/contact"
          className="pl-2 hover:drop-shadow-green"
          activeClassName="active-link"
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
