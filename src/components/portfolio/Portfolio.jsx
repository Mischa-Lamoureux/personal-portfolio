import React from "react";
import "./portfolio.css";
import CHIMEIN from "../../assets/chime-in.png";

const data = [
  {
    id: 1,
    image: CHIMEIN,
    title: "Chime-in",
    github: "https://github.com/Mischa-Lamoureux/chimeIn",
    demo: "https://github.com/Mischa-Lamoureux/chimeIn/blob/main/Chime-In%20Design%20Document.pdf",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* Live Demo */}
                  Design
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
