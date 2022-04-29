import React, { useState } from "react";
import "./header.scss";
import { Link } from "react-scroll";
import DarkMode from "../Themes/darkMode";

export default function Header(props) {
  let [theme, setTheme] = useState('dark');

  const handleTheme = async(value) => {
    await setTheme(value);
    await props.getTheme(theme);
  };

  return (
    <div className="header">
      <div className="header-wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={props.theme === "light" ? "shape-fill" : "shape-fill--dark"}
          ></path>
        </svg>
      </div>
      <div className="header-rightBox">
        <div className="header-right">
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <Link
                  className="nav__link"
                  activeClass="active"
                  to="about"
                  smooth={true}
                >
                  About
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  className="nav__link"
                  activeClass="active"
                  to="projects"
                  smooth={true}
                >
                  Projects
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  className="nav__link"
                  activeClass="active"
                  to="contact"
                  smooth={true}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <DarkMode getTheme={handleTheme} />
        </div>
      </div>
    </div>
  );
}
