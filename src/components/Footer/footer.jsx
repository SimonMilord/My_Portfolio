import React from "react";
import "./footer.scss";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const currentYear = new Date().getFullYear();

export default function footer(props) {
  const handleClick = (e) => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer">
      <div className="footer__top">
        <h2 className="footer__name">Simon Milord</h2>
      </div>
      <div className="footer__bottom">
        <span className="footer__copyright">
          &copy; {currentYear} Let's not pretend this is copyrighted
        </span>
        <button className="footer__topBtn" onClick={handleClick}>
          <ArrowUpwardIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
}
