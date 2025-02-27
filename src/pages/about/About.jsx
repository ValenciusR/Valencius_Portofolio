import React from "react";
import { FaDownload } from "react-icons/fa";
import Info from "../../components/Info";
import Stats from "../../components/Stats";
import CV from "../../assets/steve-Cv.pdf";
import Skills from "../../components/Skills";
import "./about.css";

const About = () => {
  return (
    <main className="container section">
      <section className="about">
        <h2 className="section__title">
          About <span>Me </span>
        </h2>

        <div className="grid about__container">
          <div className="about__info">
            <h3 className="section__subtitle">Personal Infos</h3>

            <ul className="grid info__list">
              <Info />
            </ul>

            <a href={CV} download="" className="button">
              Download CV
              <span className="button__icon">
                <FaDownload></FaDownload>
              </span>
            </a>
          </div>

          <div className="grid stats">
            <Stats />
          </div>
        </div>
      </section>

      <div className="seperator"></div>

      <section className="skills">
        <h3 className="section__subtitle subtitle__center">My Skills</h3>
        <div className="grid skills__container">
          <Skills />
        </div>
      </section>
    </main>
  );
};

export default About;
