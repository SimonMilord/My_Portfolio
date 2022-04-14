import React from "react";
import "./header.scss";
import { Link } from "react-scroll";
import DarkMode from "../Themes/darkMode";

export default function Header(props) {

  return (
    <div className="header">
      <div className="logo">Simon Milord</div>
      <div className="header-right">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link className="nav__link" activeClass='active' to='about' smooth={true}>
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" activeClass='active' to='projects' smooth={true}>
                Projects
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" activeClass='active' to='contact' smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <DarkMode />
      </div>
  </div>
  );
}

