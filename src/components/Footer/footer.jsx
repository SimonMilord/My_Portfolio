import React from "react";
import "./footer.scss";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Link } from "react-scroll";
const currentYear = new Date().getFullYear();

export default function Footer() {

  return (
    <div className="footer">
      <div className="footer__top">
        <h2 className="footer__name">Simon Milord</h2>
      </div>
      <div className="footer__bottom">
        <span className="footer__copyright">
          &copy; {currentYear} Let's not pretend this is copyrighted
        </span>
        <Link className="footer_topBtn" activeClass='active' to='header' smooth={true}>
          <ArrowUpwardIcon fontSize="large" />
        </Link>
      </div>
    </div>
  );
}
