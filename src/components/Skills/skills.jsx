import React from "react";
import "./skills.scss";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiRuby,
  SiPostman,
  SiTypescript,
} from "react-icons/si";

const iconSize = "50px";

function Skills(props) {
  return (
    <div className="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="grid">
        <div className="grid__item">
          <span className="grid__span">HTML5</span>
          <a className="grid__link" aria-label="HTML5" href="https://html.spec.whatwg.org/">
            <SiHtml5 color="#F16529" size={iconSize} />
          </a>
        </div>
        <div className="grid__item">
        <span className="grid__span">CSS3</span>
        <a className="grid__link" aria-label="CSS3" href="https://www.w3.org/Style/CSS/Overview.en.html">
          <SiCss3 color="#2965f1" size={iconSize} />
        </a>
        </div>
        <div className="grid__item">
        <span className="grid__span">Sass</span>
        <a className="grid__link" aria-label="Sass" href="https://sass-lang.com/">
          <SiSass color="#cc6699" size={iconSize} />
        </a>
        </div>
        <div className="grid__item">
        <span className="grid__span">JavaScript</span>
        <a className="grid__link" aria-label="JavaScript" href="https://www.javascript.com/">
          <SiJavascript color="#f0db4f" size={iconSize} />
        </a>
        </div>
        <div className="grid__item">
        <span className="grid__span">MongoDB</span>
        <a className="grid__link" aria-label="MongoDB" href="https://www.mongodb.com/">
          <SiMongodb color="#589636" size={iconSize} />
        </a>
        </div>
        <div className="grid__item">
        <span className="grid__span">Express.js</span>
        <a className="grid__link" aria-label="Express.js" href="https://expressjs.com/">
          <SiExpress color="#999" size={iconSize} />
        </a>
        </div>
        <div className="grid__item">
        <span className="grid__span">React</span>
        <a className="grid__link" aria-label="React" href="https://reactjs.org/">
          <SiReact color="#88dded" size={iconSize} />
        </a>
        </div>
        <div className="grid__item">
        <span className="grid__span">Node.js</span>
        <a className="grid__link" aria-label="Node.js" href="https://nodejs.dev/">
          <SiNodedotjs color="#68a063" size={iconSize} />
        </a>
        </div>
        <div className="grid__item">
        <span className="grid__span">Git</span>
        <a className="grid__link" aria-label="Git" href="https://git-scm.com/">
          <SiGit color="#f34f29" size={iconSize} />
        </a>
        </div>
        <div className="grid__item">
        <span className="grid__span">Ruby</span>
        <a className="grid__link" aria-label="Ruby" href="https://www.ruby-lang.org/en/">
          <SiRuby color="#D30001" size={iconSize} />
        </a>
        </div>
        <div className="grid__item">
        <span className="grid__span">Postman</span>
        <a className="grid__link" aria-label="Postman" href="https://www.postman.com/">
          <SiPostman color="#FF6C37" size={iconSize} />
        </a>
        </div>
        <div className="grid__item">
        <span className="grid__span">TypeScript</span>
        <a className="grid__link" aria-label="TypeScript" href="https://www.typescriptlang.org/">
          <SiTypescript color="#008bb9" size={iconSize} />
        </a>
        </div>
      </div>
    </div>
  );
}

export default Skills;
