import React, { useState } from "react";
import "./darkMode.scss";

const Darkmode = (props) => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let [theme, setTheme] = useState("light");

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      setTheme(lightTheme);
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      setTheme(darkTheme);
    }
    props.getTheme(theme);
  };

  return (
    <>
      <button
        className={theme === "dark" ? "darkMode" : "lightMode"}
        id="darkMode"
        onClick={(e) => switchTheme(e)}
      ></button>
    </>
  );
};

export default Darkmode;
