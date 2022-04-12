import React from "react";
import "./mobileNav.scss";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PersonIcon from '@mui/icons-material/Person';

export default function mobileNav(props) {
  return (
    <div className="mobileNav">
      <div className="mobileNav__link mobileNav__link--home">
        <HomeIcon className="mobileNav__icon"/>
      </div>
      <div className="mobileNav__link mobileNav__link--about">
        <InfoIcon className="mobileNav__icon"/>
      </div>
      <div className="mobileNav__link mobileNav__link--projects">
        <BusinessCenterIcon className="mobileNav__icon"/>
      </div>
      <div className="mobileNav__link mobileNav__link--contact">
        <PersonIcon className="mobileNav__icon" style={{ fontSize: 24 }}/>
      </div>
    </div>
  );
}

