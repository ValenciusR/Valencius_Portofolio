import React from "react";
import { portfolio } from "../../data";
import PortofolioItem from "../../components/PortofolioItem";
import "./portofolio.css";

const Portofolio = () => {
  return (
    <section className="portofolio section">
      <h2 className="section__title">
        My <span>Portofolio</span>
      </h2>

      <div className="container grid portofolio__container">
        {portfolio.map((item) => {
          return <PortofolioItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Portofolio;
