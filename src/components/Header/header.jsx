import React, { useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Header(props) {
  const [currentTheme, setcurrentTheme] = useState("light");

  return (
    <div className="header">
      <div className="logo">Simon Milord</div>
      <div className="header-right">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/" className="nav__link">
                Projects
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/" className="nav__link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className="themeIcon"
          onClick={() => {
            currentTheme === "dark"
              ? setcurrentTheme("light")
              : setcurrentTheme("dark");
          }}
        >
          {currentTheme === "dark" ? (
            <DarkModeOutlinedIcon fontSize="large" />
          ) : (
            <LightModeIcon fontSize="large" />
          )}
        </div>
      </div>
    </div>
  );
}
