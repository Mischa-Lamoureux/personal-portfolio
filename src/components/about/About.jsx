import React from "react";
import "./about.css";
import MISCHA from "../../assets/mischa-lamoureux-about.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

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
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Dev Experience</h5>
              <small>4+ Years</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
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
