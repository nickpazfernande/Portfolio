import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-wraper ">
      <Particles
        params={{
          particles: {
            number: {
              value: 40,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      />
      <div className="main-info animate__animated animate__flipInY ">
        <div className="divOpacity p-5 rounded-3 ">
          <h4 className="text-white ">Web Developer</h4>
          <h1> Nick Paz Fernandez </h1>

          <Typed
            className="bg-light"
            className="typed-text"
            strings={[
              "React JS",
              "Node JS",
              "CSS",
              "HTML",
              "JavaScript",
              "Next JS",
              "Git",
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
          <Link to="/contact">
            <div className="pt-3">
              <button className="btn btn-info">Contacto</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
