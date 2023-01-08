import React from "react";
import "./hero.scss";
import Illustration from "../../assets/images/illustrationHero.svg";

export default function Hero(props) {
  return (
    <div className="hero">
      <div className="hero-top">
        <div className="hero__text">
          <h1 className="hero__title">Simon Milord</h1>
          <h2 className="hero__subtitle">Software Developer @ Coveo</h2>
          <div className="hero__desc">
            <p className="hero__desc-content">
              {" "}
              I'm a developer from Montreal with a background in finance and a
              keen interest in Fintech. I'm also a CFA charter holder and was an
              investment advisor in my past life!
            </p>
          </div>
          <div className="hero__btn-box">
            <a className="btn hero__btn--desktop" href="/resume.pdf">
              RESUME
            </a>
          </div>
        </div>
        <div className="hero__img-box">
          <img
            src={Illustration}
            alt="illustration of me"
            className="hero__img"
          ></img>
        </div>
      </div>
      <a className="btn hero__btn--mobile" href="/resume.pdf">
        RESUME
      </a>
    </div>
  );
}
