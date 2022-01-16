import React from "react";
import Card from "../components/Card";
import image1 from "../assets/img/portfolio1.png";
import image2 from "../assets/img/portfolio2.png";
import image3 from "../assets/img/portfolio3.png";
import image4 from "../assets/img/portfolio4.png";
import image5 from "../assets/img/portfolio5.png";
const cards = [
  {
    id: 1,
    title: "e-Mercado",
    image: image1,
    url: "https://nickpazfernande.github.io/e-mercado",
    description:
      "Proyecto académico, realizado en Jóvenes a Programar de Plan Ceibal. E-commerce utilizando html, css y JavaScript. La misma se carga con contenido dinámico, a través de archivos JSON. Inicio de sesion con Google o en localStorage, responsive design.",
  },
  {
    id: 2,
    title: "Crypto React",
    image: image2,
    url: "https://nickpazfernande.github.io/cryptos-react/",
    description:
      "Primer proyecto realizado con el framework React Js, el mismo muestra contenido dinámico gracias a la API de coingecko. Muestra las primeras 25 criptomonedas con su valor actualizado en el día. Incluye un buscador para encontrar fácilmente la moneda deseada. ",
  },
  {
    id: 3,
    title: "Portfolio",
    image: image3,
    url: "",
    description:
      "Portfolio personal desarrollado con React Js. Gracias a esto nos brinda una rápida navegación entre sus páginas sin necesidad de recargar la misma. Se utilizaron librerías de efectos como animated.css, react particles.js y react typed. Su misión es complementar mi CV.",
  },
  {
    id: 4,
    title: "Test Frontend",
    image: image4,
    url: "https://nickpazfernande.github.io/test-frontend1/",
    description:
      "Landing page creada como prueba para una oferta laboral. Posee responsive design, formulario funcional que resalta con color rojo los errores, formulario con algunos efectos de estilos, slider y construida tal cual se solicitaba. ",
  },
  {
    id: 5,
    title: "Live-football",
    image: image5,
    url: "https://nickpazfernande.github.io/api-football/",
    description:
      "Sitio creado con React que se carga dinámicamente con datos sobre fútbol en tiempo real. Muestra todos los partidos de fútbol profesional que se estén jugando en el mundo, e información acerca de los equipos uruguayos. ",
  },
];

const Portfolio = () => {
  return (
    <>
      <h2 className="text-center text-white pt-5">Portfolio</h2>
      <h4 className="text-center text-secondary mb-5">
        Algunos de mis proyectos realizados hasta el momento.
      </h4>

      <div className="pb-5 container d-flex justify-content-center h-100  align-items-center ">
        <div className="row">
          {cards.map((card) => (
            <div className="col-md-4 p-3 pb-5 h-100" key={card.id}>
              <Card
                title={card.title}
                image={card.image}
                url={card.url}
                description={card.description}
                btn="Ir al sitio"
              ></Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
