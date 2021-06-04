import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div>
        <span className="logo">B'B</span>
      </div>
      <ul>
        <li>
          <Link>Products</Link>
        </li>
        <li>
          <Link>Services</Link>
        </li>
        <li>
          <Link>About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
