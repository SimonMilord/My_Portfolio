import React from "react";
import "./footer.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import LinkedIn from "../../assets/icons/linkedin.svg";
import Github from "../../assets/icons/github.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Email from "../../assets/icons/email.svg";
const currentYear = new Date().getFullYear();

export default function Footer(props) {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__links">
          <Link to="/linkedin" className="footer__link">
            <img
              className="footer__img"
              src={LinkedIn}
              alt="linkedin logo"
            ></img>
          </Link>
          <Link to="/github" className="footer__link">
            <img className="footer__img" src={Github} alt="github logo"></img>
          </Link>
          <Link to="/twitter" className="footer__link">
            <img className="footer__img" src={Twitter} alt="twitter logo"></img>
          </Link>
          <a href="mailto:simon.milord@gmail.com" className="footer__link">
            <img className="footer__img" src={Email} alt="email icon"></img>
          </a>
        </div>
        <span className="footer__copyright">
          &copy; {currentYear} Let's not pretend this is copyrighted
        </span>
      </div>
      <div className="footer__right">
        <ScrollLink
          className="footer__topBtn"
          activeClass="active"
          to="header"
          smooth={true}
        >
          <KeyboardArrowUpIcon
            fontSize="large"
            style={{ color: "black" }}
            className="icon"
          />
        </ScrollLink>
      </div>
      <div className="footer-wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={
              props.theme === "light" ? "shape-fill" : "shape-fill--dark"
            }
          ></path>
        </svg>
      </div>
    </div>
  );
}
