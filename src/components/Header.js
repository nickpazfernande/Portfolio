import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1> Desarrollador WEB </h1>
        <Typed
          className="typed-text"
          strings={[
            "Desarrollador WEB",
            "Bachiller Tecnológico",
            "React JS",
            "Node JS",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <button className="btn btn-primary">Contacto</button>
      </div>
    </div>
  );
};

export default Header;
