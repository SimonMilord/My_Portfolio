import React from "react";
import { Link } from "react-router-dom";
import "./about.scss";
import LinkedIn from "../../assets/icons/linkedin.svg";
import Github from "../../assets/icons/github.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Email from "../../assets/icons/email.svg";

export default function About(props) {
  return (
    <div className="about">
      <div className="info">
        <div className="infoCard">
          <h2 className="infoCard__title">About me</h2>
          <p className="infoCard__aboutme infoCard__aboutme--1">
            For as long as I can remember, I've loved solving problems - from
            programming Lego robots as a kid to playing real-time strategy games
            and building my own PC as a teenager to deciphering complex quant
            equations as an adult.
          </p>
          <p className="infoCard__aboutme infoCard__aboutme--2">
            During the pandemic, I wanted to pick up a new skill that would
            complement my experience in finance. My journey into development
            started when I took the CS50 class from Harvard's David Malan. I
            spent my evenings learning about data structures, algorithms, how
            the web works, and was immediately hooked. Once I completed the
            course, I pursued The Odin Project and the Brainstation Web
            Development Bootcamp to further hone my skills.
          </p>
          <p className="infoCard__aboutme infoCard__aboutme--3">
            I am now looking for new challenges and I am thrilled by the fact
            that there will always be more opportunities to solve problems, to
            build new things and above all to learn!
          </p>
          <div className="infoCard__links">
            <Link to="/linkedin" className="infoCard__link">
              <img
                className="infoCard__img"
                src={LinkedIn}
                alt="linkedin logo"
              ></img>
            </Link>
            <Link to="/github" className="infoCard__link">
              <img
                className="infoCard__img"
                src={Github}
                alt="github logo"
              ></img>
            </Link>
            <Link to="/twitter" className="infoCard__link">
              <img
                className="infoCard__img"
                src={Twitter}
                alt="twitter logo"
              ></img>
            </Link>
            <a href="mailto:simon.milord@gmail.com" className="infoCard__link">
              <img className="infoCard__img" src={Email} alt="email logo"></img>
            </a>
            <a href="/resume.pdf" className="infoCard__link infoCard__link--resume">
              <div className="infoCard__cv">CV</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
