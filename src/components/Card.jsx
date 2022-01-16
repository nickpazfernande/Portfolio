import React from "react";
import "./cards.css";

const Card = ({ title, image, url, description, btn }) => {
  return (
    <div>
      <div className="card text-center bg-dark text-white animate__animated animate__fadeInUp">
        <div className="overflow">
          <img src={image} className="card-img-top img-fluid" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-secondary d-sm-block d-md-block">
            {description}
          </p>
          <a href={url} target="_blank" className="btn btn-outline-info">
            {btn}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
