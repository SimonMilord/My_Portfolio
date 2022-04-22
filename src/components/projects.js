import stonkersImg from "../assets/images/stonkers-homepage.png";
import instockImg from "../assets/images/instock-warehouses.png";

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

const projects = [stonkers, instock];

export default projects;