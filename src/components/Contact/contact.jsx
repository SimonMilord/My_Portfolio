import "./contact.scss";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  let name = "";
  let email = "";
  let message = "";

  const [missingInfo, setmissingInfo] = useState(false);
  const [messageSent, setmessageSent] = useState(false);
  const [messageError, setmessageError] = useState(false);

  const validate = (e) => {
    name = e.target.user_name.value;
    email = e.target.user_email.value;
    message = e.target.message.value;

    if (!name || !email || !message) {
      setmissingInfo(true);
      return false;
    }
    return true;
  }

  const sendEmail = (e) => {
    e.preventDefault();
    let isValid = validate(e);
    if (isValid) {
      emailjs.sendForm('service_egkh5yr', 'template_7esbhub', form.current, 'x4gZeZxQ6lq4l--CY')
        .then((result) => {
          setmessageSent(true);
          setTimeout(() => {
            setmessageSent(false);
          }, 5000);
        }, (error) => {
          setmessageError(true);
        });
        e.target.reset();
    }
  }

  return (
    <div className="contact">
      <h2 className="contact-title">Let's get in touch!</h2>
      <form className="emailForm" ref={form} onSubmit={sendEmail}>
        {missingInfo && <span className="emailForm__span--error">Please fill all fields before submitting</span>}
        <input
          type="text"
          className={(missingInfo) ? "emailForm__input emailForm__input--invalid" : "emailForm__input"}
          name="user_name"
          placeholder="Full name"
        ></input>
        <input
          type="email"
          className={(missingInfo ) ? "emailForm__input emailForm__input--invalid" : "emailForm__input"}
          name="user_email"
          placeholder="Email"
        ></input>
        <textarea
          className={(missingInfo) ? "emailForm__input emailForm__input--message emailForm__input--invalid" : "emailForm__input emailForm__input--message"}
          name="message"
          placeholder="Message"
        ></textarea>
        <button type="submit" value="Send" className="emailForm__btn">SEND</button>
        {messageSent && <span className="emailForm__span emailForm__span--success">Message sent!</span>}
        {messageError && <span className="emailForm__span emailForm__span--error">Seems like there was an error. Please contact me at: simon.milord@gmail.com</span>}
      </form>
    </div>
  );
}

