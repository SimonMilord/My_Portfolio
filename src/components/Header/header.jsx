import React, { useEffect, useState } from "react";
import "./header.scss";
import { Link } from "react-scroll";

export default function Header(props) {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let [theme, setTheme] = useState("light");

  // darkmode
  useEffect(()=> {
    if(localStorage.getItem('theme')) {
      setTheme(localStorage.getItem('theme'))
    }
  }, [], [theme])

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = async(e) => {
    if (theme === darkTheme) {
      await setTheme(lightTheme);
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
    } else {
      await setTheme(darkTheme);
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
    }
    props.getTheme(theme);
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
            className={theme === "light" ? "shape-fill" : "shape-fill--dark"}
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
                  to="skills"
                  smooth={true}
                >
                  Skills
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
          <button
            className={theme === "dark" ? "darkMode" : "lightMode"}
            id="darkMode"
            aria-label="themeToggle"
            onClick={(e) => switchTheme(e)}
          ></button>
        </div>
      </div>
    </div>
  );
}
