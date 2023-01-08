import googleImg from "../assets/images/google.png";
import etchasketchImg from "../assets/images/etchasketch.png";
import libraryImg from "../assets/images/libTracker.png";
import spacestagramImg from "../assets/images/spacestagram.png";
import mastermindImg from "../assets/images/mastermind.png";

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

const mastermind = Bit(
  "Mastermind",
  mastermindImg,
  2021,
  "https://replit.com/@simonmilord/mastermindRuby",
  "https://github.com/SimonMilord/mastermind_Ruby",
  `My ruby version of the classic code breaking game Mastermind! It allows the user to play Mastermind against the computer, as
  the code breaker. And yes, I have lost against my own program. The game is played in the command line and the demo is hosted
  on Replit, a browser based IDE.`
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

const spacestagram = Bit(
  "Spacestagram",
  spacestagramImg,
  2022,
  "https://anotherspacestagram.netlify.app/",
  "https://github.com/SimonMilord/Spacestagram",
  `This is a small project I made to practice for the Shopify internship coding challenge.
  It's an application that displays ten random images from the NASA picture of the day API.
  It was built using React and features a loading state, the option to like a post and a button
  to generate more posts.`
);

const bits = [spacestagram, libraryTracker, etchaSketch, mastermind, google ];

export default bits;