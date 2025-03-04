import React from "react";
import Profile from "../../assets/gambar2.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./home.css";

const Home = () => {
  return (
    <section className="grid home section">
      <img src={Profile} alt="" className="home__img" />

      <motion.div
        className="home__content"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
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
      </motion.div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
