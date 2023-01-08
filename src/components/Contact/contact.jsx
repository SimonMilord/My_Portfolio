import "./contact.scss";
import React from "react";
import { Link } from "react-router-dom";
import LinkedIn from "../../assets/icons/linkedin.svg";
import Github from "../../assets/icons/github.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Email from "../../assets/icons/email.svg";

export default function Contact() {
  return (
    <div className="contact">
      <h2 className="contact-title">Let's get in touch!</h2>
      <p className="contact-subtitle">
        Feel free to reach out to me at {" "}
        <a href="mailto:simon.milord@gmail.com" className="contact__email-link">simon.milord@gmail.com</a>
      </p>
      <div className="contact__links">
        <Link to="/linkedin" className="contact__link">
          <img
            className="contact__img"
            src={LinkedIn}
            alt="linkedin logo"
          ></img>
        </Link>
        <Link to="/github" className="contact__link">
          <img className="contact__img" src={Github} alt="github logo"></img>
        </Link>
        <Link to="/twitter" className="contact__link">
          <img className="contact__img" src={Twitter} alt="twitter logo"></img>
        </Link>
        <a href="mailto:simon.milord@gmail.com" className="contact__link">
          <img className="contact__img" src={Email} alt="email icon"></img>
        </a>
      </div>
    </div>
  );
}
