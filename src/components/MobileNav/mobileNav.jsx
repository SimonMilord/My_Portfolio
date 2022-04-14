import React, { useEffect, useState } from "react";
import "./mobileNav.scss";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PersonIcon from '@mui/icons-material/Person';

export default function MobileNav(props) {
  // let theme = "light";
  let [theme, setTheme] = useState('light');
  useEffect(() => {
    setTheme(localStorage.getItem('theme'));
    // console.log(theme);
  }, [theme])

  window.addEventListener('storage', () => {
    console.log(JSON.parse(window.localStorage.getItem('theme')));
  })

  return (
    <div className={theme === "light" ? "mobileNav" : "mobileNav-dark"}>
      <div className={theme === "light" ? "mobileNav__link" : "mobileNav-dark__link"}>
        <HomeIcon className="mobileNav__icon"/>
      </div>
      <div className={theme === "light" ? "mobileNav__link" : "mobileNav-dark__link"}>
        <InfoIcon className="mobileNav__icon"/>
      </div>
      <div className={theme === "light" ? "mobileNav__link" : "mobileNav-dark__link"}>
        <BusinessCenterIcon className="mobileNav__icon"/>
      </div>
      <div className={theme === "light" ? "mobileNav__link" : "mobileNav-dark__link"}>
        <PersonIcon className="mobileNav__icon" style={{ fontSize: 24 }}/>
      </div>
    </div>
  );
}

