import React, { Fragment } from "react";
import abImg from "../../../images/banner2.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="row">
        <div className="col50">
          <h2 className="titleText">
            <span>A</span>bout Us
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            sint nulla molestiae soluta impedit rerum enim, incidunt fugiat ad
            saepe dolor commodi, sit optio pariatur. Perspiciatis non tempore
            molestiae atque?
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sed
            officiis a dicta praesentium amet, ipsa optio aspernatur nostrum
            natus, ipsam recusandae perspiciatis placeat esse iusto debitis
            veniam quo ducimus.
          </p>
        </div>
        <div className="col50">
          <div className="abtimg">
            <img src={abImg}></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
