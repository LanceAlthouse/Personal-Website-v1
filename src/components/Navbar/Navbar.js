import React from "react";
//import { Link, Element, scroll, Button } from "react-scroll";

const Navbar = () => {
  return (
    <ul className="pt-16 outline-2 outline-green-600 grid grid-cols-1 grid-rows-4 gap-5 text-center text-white">
      <li className="text-2xl font-serif font-medium hover:text-green-600">
        <span class="cursor inline-block w-2 h-5 bg-green-600 animate-pulse"></span>
        <a href="/" className=" pl-2 text-green-600 hover:drop-shadow-green">
          Home
        </a>
      </li>
      <li className=" text-2xl font-serif font-medium hover:text-green-600">
        <a href="/" className=" pl-2 hover:drop-shadow-green">
          About Me
        </a>
      </li>
      <li className="text-2xl font-serif font-medium hover:text-green-600">
        <a href="/" className=" pl-2 hover:drop-shadow-green">
          Projects
        </a>
      </li>
      <li className="text-2xl font-serif font-medium hover:text-green-600">
        <a href="/" className=" pl-2 hover:drop-shadow-green">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
