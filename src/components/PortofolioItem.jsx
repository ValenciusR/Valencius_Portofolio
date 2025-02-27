import React, { useState } from "react";
import Close from "../assets/close.svg";

const PortofolioItem = ({ img, title, details }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div className="portofolio__item">
      <img src={img} alt="" className="portofolio__img" />

      <div className="portofolio__hover" onClick={toggleModal}>
        <h3 className="portofolio__title">{title}</h3>
      </div>

      {modal && (
        <div className="portofolio__modal">
          <div className="portofolio__modal-content">
            <img
              src={Close}
              alt=""
              className="modal__close"
              onClick={toggleModal}
            />
            <h3 className="modal__title">{title}</h3>
            <ul className="grid modal__list">
              {details.map(({ icon, title, desc }, index) => {
                return (
                  <li className="modal__item" key={index}>
                    <span className="item__icon">{icon}</span>

                    <div>
                      <span className="item__title">{title}</span>
                      <span className="item__details">{desc}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
            <img src={img} alt="" className="modal__img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PortofolioItem;
