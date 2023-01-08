import stonkersImg from "../assets/images/stonkers-homepage.png";
import sadhikaImg from "../assets/images/sadhikapf.png";
import botpediaImg from "../assets/images/bot-pedia.png";
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

const sadhikapf = Project(
  "UX Designer Portfolio",
  sadhikaImg,
  2022,
  "https://billadesigns.com/",
  "https://github.com/SimonMilord/sadhika-portfolio",
  `This is a portfolio website I made as a freelance project for a Shopify Senior UX designer.
  I built the site with React and SCSS.`
);

const botpedia = Project(
  "Bot-pedia",
  botpediaImg,
  2022,
  "https://bot-pedia.netlify.app/",
  "https://github.com/SimonMilord/Shopify-intern-challenge-fall2022",
  `Bot-pedia is a web app that I built for the Shopify 2022 Internship challenge. It gives users the option to choose
  between 2 bots: Awesom-O (answers sarcastically based on his mood) and Jarvis (gives you right answers). It was built using
  React and leveraged the Open AI GPT-3 API. The requirements were to have a form make the API call and to display the
  prompts and answers in a list.`
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

const projects = [stonkers, sadhikapf, botpedia, instock];

export default projects;