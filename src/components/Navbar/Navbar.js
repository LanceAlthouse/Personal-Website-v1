import React from "react";
import { Link, Element, scroll, Button } from "react-scroll";

const Navbar = () => {
  return (
    <ul className="outline-2 outline-green-600 grid grid-cols-1 grid-rows-4 gap-5">
      <li>
        <button>Home</button>
      </li>
      <li>
        <button>About Me</button>
      </li>
      <li>
        <button>Projects</button>
      </li>
    </ul>
  );
};

export default Navbar;
