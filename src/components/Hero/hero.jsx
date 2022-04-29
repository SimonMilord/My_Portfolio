import React from "react";
import "./hero.scss";
import Illustration from "../../assets/images/illustrationHero.svg";

function Hero(props) {
  return (
    <div className="hero">
      <div className="hero-top">
        <div className="hero__text">
          <span className="hero__intro">Hi, my name is</span>
          <h1 className="hero__title">Simon Milord</h1>
          {/* <h2 className="hero__subtitle">Web developer</h2> */}
          <h2 className="hero__subtitle">From Trading to Coding</h2>
          <div className="hero__desc">
            <p className="hero__desc-content">
              {" "}
              I'm a developer from Canada with a background in finance and a
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

export default Hero;
