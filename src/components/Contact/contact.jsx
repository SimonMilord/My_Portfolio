import "./contact.scss";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact(props) {

  const form = useRef();

  const sendEmail = (e) => {
    const field = e.target;
    if (field.user_name.value && field.user_email.value && field.message.value !== "") {
      emailjs.sendForm('service_egkh5yr', 'template_7esbhub', form.current, 'x4gZeZxQ6lq4l--CY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    } else {
      alert("please fill all the fields");
    }
    e.preventDefault();
  };

  return (
    <div className="contact">
      <h2 className="contact-title">Get in touch</h2>
      <form className="emailForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="emailForm__input emailForm__input--name"
          name="user_name"
          placeholder="Full name*"
        ></input>
        <input
          type="email"
          className="emailForm__input emailForm__input--email"
          name="user_email"
          placeholder="Email*"
        ></input>
        <textarea
          className="emailForm__input emailForm__input--message"
          name="message"
          placeholder="Message*"
        ></textarea>
        <button type="submit" value="Send" className="emailForm__btn">SEND</button>
      </form>
    </div>
  );
}

