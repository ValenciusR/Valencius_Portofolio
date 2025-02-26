import React from "react";
import Profile from "../../assets/home.jpg";
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
            <span>I'm Valencius Rianto.</span> Developer
          </h1>
          <p className="home__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            similique a dignissimos, animi voluptatibus error cupiditate
            corporis aliquid, ab in eaque recusandae, nemo sint. Quaerat
            eligendi ullam fugit voluptatem sint!
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
