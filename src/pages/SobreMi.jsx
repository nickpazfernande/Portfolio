import React from "react";
import UserImg from "../assets/img/perfil4.jpeg";
import "./sobreMi.css";
import { Link } from "react-router-dom";
import MyPDF from "../cv.pdf";

const SobreMi = () => {
  return (
    <div className="text-white pt-5 info row px-5  divOpacity">
      <div className=" col-md-6  h-75  rounded-3 ">
        <div className=" text-center pt-5  ">
          <h1 className="mt-3 pt-5">
            ¡Hola, mi nombres es <span className="text-info">Nick</span>!{" "}
          </h1>
          <hr className="m-5" />
          <h4 className="mx-3">
            Soy uruguayo, tengo 22 años y desde pequeño soy un apasionado de la
            informática. En este sitio podrás ver algunos de mis proyectos
            realizados hasta el momento. Si quieres saber más acerca de mí
            puedes descargar mi Curriculum Vitae, como también ver mi portfolio
            de proyectos.
          </h4>
          <Link className="nav-link" to="/portfolio">
            <button className="btn btn-info m-3">Ver portfolio</button>
          </Link>

          <a
            href={MyPDF}
            download="cv.pdf"
            className="btn btn-outline-info mb-5"
          >
            Descargar Curriculum
          </a>
        </div>
      </div>
      <div className="div-img col-md-6  text-center  ">
        <img src={UserImg} alt="" className="mb-5 imgPerfil img-fluid mt-5 " />
      </div>
    </div>
  );
};

export default SobreMi;
