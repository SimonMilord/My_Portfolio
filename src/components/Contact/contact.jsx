import React from "react";
import "./contact.scss";

function contact(props) {
  return (
    <div className="contact">
      <h2 className="contact-title">Get in touch</h2>
      <form className="emailForm">
        <input
          type="text"
          className="emailForm__input emailForm__input--name"
          name="name"
          placeholder="Full name*"
        ></input>
        <input
          type="email"
          className="emailForm__input emailForm__input--email"
          name="email"
          placeholder="Email*"
        ></input>
        <textarea
          className="emailForm__input emailForm__input--message"
          name="message"
          placeholder="Message*"
        ></textarea>
        <button type="submit" className="emailForm__btn">SEND</button>
      </form>
    </div>
  );
}

export default contact;
