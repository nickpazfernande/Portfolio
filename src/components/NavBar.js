import React from "react";
import logo from "../logo.jpeg";
// REACT FONT AWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <div class="container bg">
        <a class="navbar-brand" href="#">
          <img src={logo} className="  w-50 " />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                INICIO
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                ACERCA DE MI
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                PORTFOLIO
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                CONTACTO
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
