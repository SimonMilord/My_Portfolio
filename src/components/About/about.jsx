import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import "./about.scss";
import LinkedIn from "../../assets/icons/linkedin.png";
import Github from "../../assets/icons/github.png";
import Twitter from "../../assets/icons/twitter.png";
import Email from "../../assets/icons/email.png";
import Raptors from "../../assets/icons/raptors.png";
import Habs from "../../assets/icons/canadiens.png";

export default function About(props) {

  return (
    <div className="about">
      <div className="info">
        <div className="infoCard">
          <h2 className="infoCard__title">About me</h2>
          <p className="infoCard__aboutme infoCard__aboutme--1">
            I'm a developer from Canada with a background in finance, a CFA
            charter and a keen interest in fintech and E-commerce.
          </p>
          {/* <p className="infoCard__aboutme infoCard__aboutme--2">
            Ever since I can remember, solving problems has been a passion of
            mine. It did not matter much whether it was programming Lego robots,
            solving puzzles, math problems, building my own PC or even playing
            real-time strategy games. I felt best when I would finally crack the
            problem and understand the logic behind the solution, after hours of
            tinkering.
          </p> */}
          {/* <p className="infoCard__aboutme infoCard__aboutme--3">
            This passion was rekindled during the pandemic when I took the CS50
            class from Harvard's David Malan. I was learning about logic, data
            structures, algorithms and how the web works and got hooked. Big
            time. I then pursued The Odin Project (an open-source web
            development curriculum) and the Brainstation Web Development
            Bootcamp to further hone my skills. I am now looking for new
            challenges and I am thrilled by the fact that there will always be
            more opportunities to solve problems, to build new things and above
            all to learn.
          </p> */}
          <p className="infoCard__aboutme infoCard__aboutme--3">
            During the pandemic, I took the CS50
            class from Harvard's David Malan. I was learning about logic, data
            structures, algorithms and how the web works and got hooked. Big
            time. I then pursued The Odin Project (an open-source web
            development curriculum) and the Brainstation Web Development
            Bootcamp to further hone my skills. I am now looking for new
            challenges and I am thrilled by the fact that there will always be
            more opportunities to solve problems, build new things and above
            all, to learn.
          </p>
          <p className="infoCard__aboutme infoCard__aboutme--4">
            When you're not finding me at a coffee shop coding, I enjoy running,
            investing, following basketball{" "}
            <img src={Raptors} alt="raptors logo" className="emoji" /> and
            hockey (Go Habs go!{" "}
            <img src={Habs} alt="habs logo" className="emoji" /> ) and
            traveling.
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
            <ScrollLink activeClass='active' to='contact' smooth={true} className="infoCard__link">
              <img className="infoCard__img" src={Email} alt="email logo"></img>
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
}
