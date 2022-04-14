import stonkersImg from "../assets/images/stonkers-homepage.png";

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
  "Stonkers is a fully responsive web application that allows users to look up quotes, charts, news and stats of stocks. It also allows them to add stocks to their watchlist. It was built using the MERN stack, Chart.JS and JWT. It features databases, server-side authentication and the use of API data. "
);

const stonkersa = Project(
  "Stonkers",
  stonkersImg,
  2022,
  "https://stonkers.netlify.app/",
  "https://github.com/SimonMilord/Stonkers",
  "Stonkers is a fully responsive web application that allows users to look up quotes, charts, news and stats of stocks. It also allows them to add stocks to their watchlist. It was built using the MERN stack, Chart.JS and JWT. It features databases, server-side authentication and the use of API data. "
);

const stonkersb = Project(
  "Stonkers",
  stonkersImg,
  2022,
  "https://stonkers.netlify.app/",
  "https://github.com/SimonMilord/Stonkers",
  "Stonkers is a fully responsive web application that allows users to look up quotes, charts, news and stats of stocks. It also allows them to add stocks to their watchlist. It was built using the MERN stack, Chart.JS and JWT. It features databases, server-side authentication and the use of API data. "
);

const projects = [stonkers, stonkersa, stonkersb];

export default projects;
