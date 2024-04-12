import React from "react";
import "./portfolio.css";
import CHIMEIN from "../../assets/chime-in.png";
import AICRO from "../../assets/aicro.png";

const data = [
  {
    id: 1,
    image: AICRO,
    title: "AICRO Uganda",
    primary: {
      name: "View",
      link: "https://www.aicro-uganda.org/",
    },
  },
  {
    id: 2,
    image: CHIMEIN,
    title: "Chime-in",
    secondary: {
      name: "GitHub",
      link: "https://github.com/Mischa-Lamoureux/chimeIn",
    },
    primary: {
      name: "View",
      link: "https://github.com/Mischa-Lamoureux/chimeIn/blob/main/Chime-In%20Design%20Document.pdf",
    },
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, secondary, primary }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={primary["link"]}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                  >
                  {primary["name"]}
                </a>
                  {secondary && (
                    <a
                      href={secondary["link"]}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {secondary["name"]}
                    </a>
                  )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
