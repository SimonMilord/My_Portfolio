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

  const  switchTheme = async(e) => {
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
