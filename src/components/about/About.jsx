import React from "react";
import "./about.css";
import MISCHA from "../../assets/mischa-lamoureux-about.jpeg";
import { TbAward, TbPencil, TbSchool } from "react-icons/tb";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MISCHA} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <a href="#experience" className="about__card">
              <TbAward className="about__icon" />
              <h5>Development Experience</h5>
              <small>4+ Years</small>
            </a>

            <a href="#portfolio" className="about__card">
              <TbPencil className="about__icon" />
              <h5>Personal Projects</h5>
              <small>10+ Completed</small>
            </a>

            <article className="about__card">
              <TbSchool className="about__icon" />
              <h5>Co-op Terms</h5>
              <small>2/6 Completed</small>
            </article>
          </div>

          <p>
            Hi, I’m Mischa! I’m a second-year Computer Engineering student at
            the University of Waterloo.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
