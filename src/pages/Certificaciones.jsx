import React from "react";
import Card from "../components/Card";
import image1 from "../assets/img/frontend1.png";
import image2 from "../assets/img/frontend-practico.png";
import image3 from "../assets/img/ECMASript6.png";
import image4 from "../assets/img/introductionweb.png";
import image5 from "../assets/img/ibm.png";
import image6 from "../assets/img/jap.png";
import image7 from "../assets/img/ReactPractico.png";
import image8 from "../assets/img/intro-react.png";
import image9 from "../assets/img/clousures.png";

const Certificaciones = () => {
  const cards = [
    {
      id: 6,
      title: "Jovenes a Programar",
      image: image6,
      url: "https://www.nick.com.uy/files/49804495.pdf",
    },
    {
      id: 7,
      title: "Curso React.js práctico",
      image: image7,
      url: "https://www.nick.com.uy/files/diploma-react-practico.pdf",
    },
    {
      id: 8,
      title: "Curso de Introducción a React.js",
      image: image8,
      url: "https://www.nick.com.uy/files/diploma-react.pdf",
    },
    {
      id: 1,
      title: "Curso de Frontend Developer",
      image: image1,
      url: "https://www.nick.com.uy/files/diploma-frontend-developer.pdf",
    },
    {
      id: 2,
      title: "Curso Práctico de Frontend Developer",
      image: image2,
      url: "https://www.nick.com.uy/files/diploma-frontend-developer-practico.pdf",
    },
    {
      id: 3,
      title: "Curso ECMASCRIPT 6+",
      image: image3,
      url: "https://www.nick.com.uy/files/diploma-ecmascript-6.pdf",
    },
    {
      id: 9,
      title: "Curso de Closures y Scope en JavaScript",
      image: image9,
      url: "https://www.nick.com.uy/files/diploma-scope.pdf",
    },
    {
      id: 4,
      title: "Introduction to Web Development",
      image: image4,
      url: "https://www.nick.com.uy/files/Coursera-introduction.pdf",
    },

    {
      id: 5,
      title: "Introduction to Cloud Computing",
      image: image5,
      url: "https://www.nick.com.uy/files/Coursera-cloud.pdf",
    },
  ];
  return (
    <>
      <div className="container-cert">
        <h2 className="text-center text-white pt-5">Certificaciones</h2>
        <h4 className="text-center text-secondary mb-5">
          Diplomas obtenidos en diversas plataformas y/o instituciones.
        </h4>
      </div>
      <div className="pb-5 container d-flex justify-content-center h-100  align-items-center ">
        <div className="row">
          {cards.map((card) => (
            <div className="col-md-4 p-3 pb-5 h-100" key={card.id}>
              <Card
                title={card.title}
                image={card.image}
                url={card.url}
                description={card.description}
                btn="Ver diploma"
              ></Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Certificaciones;
