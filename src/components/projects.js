import stonkersImg from "../assets/images/stonkers-homepage.png";
import instockImg from "../assets/images/instock-warehouses.png";
import mastermindImg from "../assets/images/mastermind.png";

const Project = (name, img, year, demo, code, desc) => {
  const getName = () => name;
  const getImg = () => img;
  const getYear = () => year;
  const getDemo = () => demo;
  const getCode = () => code;
  const getDesc = () => desc;
  return { getName, getImg, getYear, getDemo, getCode, getDesc };
};

const stonkers = Project(
  "Stonkers",
  stonkersImg,
  2022,
  "https://stonkers.netlify.app/",
  "https://github.com/SimonMilord/Stonkers",
  `Stonkers is a fully responsive web application that allows users to look up quotes, charts, news and stats of stocks.
  It also allows them to add stocks to their watchlist. It was built using the MERN stack, Chart.JS and JWT.
  It features databases, server-side authentication and the use of API data. The app seeks to provide beginners and new investors
  a simple to use interface to help them keep an eye on their investments. `
);

const instock = Project(
  "InStock",
  instockImg,
  2022,
  "https://instock-demo.netlify.app/",
  "https://github.com/SimonMilord/instock_client",
  `InStock is a responsive inventory management application that allows users to keep track of inventories spread across multiple warehouses.
   It was built as a team project for the Brainstation program where we got to collaborate in an agile development environment using Jira.
   The app itself was built with React and SASS on the frontend and Node and Express on the backend. My contributions range from backend routing,
   to React logic, to building some React components for the frontend including styling with SASS.`
);

const mastermind = Project(
  "Mastermind",
  mastermindImg,
  2021,
  "https://replit.com/@simonmilord/mastermindRuby",
  "https://github.com/SimonMilord/mastermind_Ruby",
  `My ruby version of the classic code breaking game Mastermind! It allows the user to play Mastermind against the computer, as
  the code breaker. And yes, I have lost against my own program. The game is played in the command line and the demo is hosted
  on Replit, a browser based IDE.`
);

const projects = [stonkers, instock, mastermind];

export default projects;