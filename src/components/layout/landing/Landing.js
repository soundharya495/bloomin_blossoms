import React from "react";
import { Link } from "react-router-dom";

import About from "./About";

const Landing = () => {
  return (
    <div>
      <div className="banner">
        <div className="content">
          <h2>Bloomin' Blossoms</h2>
          <h3>Time to grow your greens </h3>

          <button className="btn">
            <span className="btnText">Get Growing</span>
          </button>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Landing;
