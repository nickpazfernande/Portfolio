import React from "react";
import logo from "../assets/img/Logo2.png";
import "./navBar.css";

// REACT FONT AWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  const offMenuMobile = () => {};
  return (
    <>
      <nav className="navbar sticky-top menu navbar-expand-lg navbar-dark bg-dark ">
        <div className="container bg">
          <Link className="navbar-brand logo-link" to="/">
            <img src={logo} className="logo m-0 pl-3 logo-nick" />
          </Link>
          <button
            className="navbar-toggler"
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
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item ">
                <Link
                  className="nav-link"
                  id="link-inicio"
                  aria-current="page"
                  to="/"
                >
                  <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    INICIO
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">
                  <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    PORTFOLIO
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/certificaciones">
                  <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    CERTIFICACIONES
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    CONTACTO
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
