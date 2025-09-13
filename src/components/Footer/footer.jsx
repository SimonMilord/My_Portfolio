import "./footer.scss";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Rocket from "../../assets/icons/rocket.svg";

const currentYear = new Date().getFullYear();

export default function Footer() {
  const [isLaunching, setIsLaunching] = useState(false);
  const [shouldScroll, setShouldScroll] = useState(false);

  const handleRocketClick = () => {
    if (!isLaunching) {
      setIsLaunching(true);

      // Start scrolling after shake animation
      setTimeout(() => {
        setShouldScroll(true);
      }, 600); // Wait for shake to complete

      // Reset everything after animation completes
      setTimeout(() => {
        setIsLaunching(false);
        setShouldScroll(false);
      }, 2800);
    }
  };

  useEffect(() => {
    if (shouldScroll) {
      // Trigger scroll programmatically when shouldScroll becomes true
      const headerElement = document.getElementById("header");
      if (headerElement) {
        headerElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [shouldScroll]);

  return (
    <div className="footer">
      <div className="footer__left">
        <span className="footer__copyright">
          Simon Milord &copy; {currentYear}
        </span>
      </div>
      <div className="footer__right">
        {shouldScroll ? (
          <ScrollLink
            className="footer__topBtn"
            activeClass="active"
            to="header"
            smooth={true}
            duration={2000}
          >
            <img
              className={`footer__icon ${isLaunching ? "takeoff" : ""}`}
              src={Rocket}
              alt="rocket icon"
            />
          </ScrollLink>
        ) : (
          <div className="footer__topBtn" onClick={handleRocketClick}>
            <img
              className={`footer__icon ${isLaunching ? "takeoff" : ""}`}
              src={Rocket}
              alt="rocket icon"
            />
          </div>
        )}
      </div>
    </div>
  );
}
