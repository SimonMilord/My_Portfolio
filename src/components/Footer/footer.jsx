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
    </div>
  );
}
