import React from "react";
import Profile from "../../assets/gambar2.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <section className="grid home section">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Valencius Rianto.</span> Application Developer
          </h1>
          <p className="home__description">
            I'm a Computer Science graduate from Binus with a passion for
            front-end and mobile development. Skilled in React.js and Java for
            Android, I excels in building dynamic, user-friendly applications.
            With strong teamwork and problem-solving skills, I am eager to
            learn, collaborate, and contribute to impactful projects.
          </p>

          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
