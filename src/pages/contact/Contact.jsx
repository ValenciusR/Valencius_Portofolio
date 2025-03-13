import React, { useState } from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";

import "./contact.css";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_x05py9n";
    const templateId = "template_o4hh5f4";
    const publicKey = "YWIu-LAjBY7S5V3_T";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Valencius Rianto",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        alert("Email sent successfully");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        alert("Email sent failed", error);
      });
  };

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="container grid contact__container">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy!</h3>

          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail Me</span>
                <h4 className="info__desc">valencius.rianto25@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call Me</span>
                <h4 className="info__desc">+62 852 1812 2644</h4>
              </div>
            </div>
          </div>

          <div className="contact__social">
            <a
              href="https://www.linkedin.com/in/valencius-rianto/"
              className="contact__social-link"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/ValenciusR"
              className="contact__social-link"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                value={name}
                placeholder="Your Name"
                className="form__control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                value={email}
                placeholder="Your Email"
                className="form__control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              value={message}
              className="form__control textarea"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="button">
            Send Message{" "}
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
