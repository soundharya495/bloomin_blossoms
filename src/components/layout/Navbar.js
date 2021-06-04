import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [navClass, setnavClass] = useState("nav");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setnavClass(window.scrollY > 0 ? "nav sticky" : "nav");
    });
  }, []);
  return (
    <div className={navClass}>
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
