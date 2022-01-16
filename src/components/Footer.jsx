import React from "react";
import "./footer.css";
import linkedin from "../assets/img/linkedin.png";
import github from "../assets/img/github.png";
import instagram from "../assets/img/instagram.png";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white p-5 text-center">
      <div className="container">
        <p>
          Desarrollado por Nick Paz Copyright © Todos los derechos reservados.
        </p>
        <a href="https://www.linkedin.com/in/nick-pazf/">
          <img src={linkedin} alt="Icon Linkedin" className="icon-linkedin" />
        </a>
        <a href="https://github.com/nickpazfernande">
          <img src={github} alt="Icon Linkedin" className="icon-linkedin" />
        </a>
        <a href="https://www.instagram.com/nickpazf">
          <img src={instagram} alt="Icon Linkedin" className="icon-linkedin" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
