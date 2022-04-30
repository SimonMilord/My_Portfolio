import googleImg from "../assets/images/google.png";
import etchasketchImg from "../assets/images/etchasketch.png";
import libraryImg from "../assets/images/libTracker.png";

const Bit = (name, img, year, demo, code, desc) => {
  const getName = () => name;
  const getImg = () => img;
  const getYear = () => year;
  const getDemo = () => demo;
  const getCode = () => code;
  const getDesc = () => desc;
  return { getName, getImg, getYear, getDemo, getCode, getDesc };
};

const google = Bit(
  "Google Homepage",
  googleImg,
  2021,
  "https://simonmilord.github.io/google-homepage/",
  "https://github.com/SimonMilord/google-homepage",
  `This is the very first project I have ever made as part of the Odin Project.
  It was built using HTML and CSS for the layout and allows users to search something
  on Google. `
);

const etchaSketch = Bit(
  "Etch-A-Sketch",
  etchasketchImg,
  2021,
  "https://simonmilord.github.io/Etch-A-Sketch/",
  "https://github.com/SimonMilord/Etch-A-Sketch",
  `This is my version of Etch-A-Sketch made with HTML, CSS and Javascript.
  Although I have never been much of an artist, it was a fun challenge to
  take on while learning JavaScript.`
);

const libraryTracker = Bit(
  "Library Tracker",
  libraryImg,
  2022,
  "https://simonmilord.github.io/library-tracker/",
  "https://github.com/SimonMilord/library-tracker",
  `Web-based library tracker that I built on a Sunday morning to help me keep track of
  my many books and to practice some JS skills. While doing this project, I learned how modals
  work, solidified JS DOM manipulation and got some exposure to objects and constructors in JS.
  The next steps will be to add a backend.`
);

const bits = [libraryTracker, etchaSketch, google ];

export default bits;