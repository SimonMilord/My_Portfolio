import "./header.scss";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <div className="header">
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
        </div>
      </div>
    </div>
  );
}
