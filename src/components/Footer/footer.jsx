import React from "react";
import "./footer.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link as ScrollLink } from "react-scroll";

const currentYear = new Date().getFullYear();

export default function Footer(props) {

  return (
    <div className="footer">
      <div className="footer__content">
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
