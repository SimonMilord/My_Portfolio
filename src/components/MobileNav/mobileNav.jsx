import "./mobileNav.scss";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-scroll";

export default function MobileNav() {

  return (
    <div className="mobileNav">
      <Link
        className="mobileNav__link"
        activeClass="active"
        to="header"
        smooth={true}
      >
        <HomeIcon
          style={{ color: "black", fontSize: 28 }}
          className="mobileNav__icon"
        />
      </Link>
      <Link
        className="mobileNav__link"
        activeClass="active"
        to="skills"
        smooth={true}
      >
        <InfoIcon
          style={{ color: "black", fontSize: 28 }}
          className="mobileNav__icon"
        />
      </Link>
      <Link
        className="mobileNav__link"
        activeClass="active"
        to="projects"
        smooth={true}
      >
        <BusinessCenterIcon
          style={{ color: "black", fontSize: 28 }}
          className="mobileNav__icon"
        />
      </Link>
      <Link
        className="mobileNav__link"
        activeClass="active"
        to="contact"
        smooth={true}
      >
        <PersonIcon
          style={{ color: "black", fontSize: 28 }}
          className="mobileNav__icon"
        />
      </Link>
    </div>
  );
}
