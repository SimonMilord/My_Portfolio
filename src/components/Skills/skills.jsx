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
  SiSalesforce,
  SiJira,
  SiGithub,
  SiJest,
} from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { BiCog } from "react-icons/bi";
import { BsLightning } from "react-icons/bs";

const iconSize = "24px";

export default function Skills({ theme }) {
  return (
    <div className="skills">
      <h2 className="skills-title">Skills</h2>
      <section className="skills__section">
        <div className="skills__table">
          <div className="skills__top">
            <FaLaptopCode size={iconSize} />
            <h3 className="skills__subtitle">Frontend</h3>
          </div>
          <ul className="skills__list">
            <li className="skills__listItem">
              <SiTypescript color="#008bb9" />
              <p>TypeScript</p>
            </li>
            <li className="skills__listItem">
              <SiReact color="#88dded" />
              <p>React</p>
            </li>
            <li className="skills__listItem">
              <SiJavascript color="#f0db4f" />
              <p>JavaScript</p>
            </li>
            <li className="skills__listItem">
              <SiHtml5 color="#F16529" />
              <p>HTML</p>
            </li>
            <li className="skills__listItem">
              <SiCss3 color="#2965f1" />
              <p>CSS</p>
            </li>
            <li className="skills__listItem">
              <SiSass color="#cc6699" />
              <p>SASS</p>
            </li>
            <li className="skills__listItem">
              <BsLightning color="#3568a3" />
              <p>LWC</p>
            </li>
          </ul>
        </div>

        <div className="skills__table">
          <div className="skills__top">
            <FiDatabase size={iconSize} />
            <h3 className="skills__subtitle">Backend</h3>
          </div>
          <ul className="skills__list">
            <li className="skills__listItem">
              <SiSalesforce color="#1798c1" />
              <p>Apex</p>
            </li>
            <li className="skills__listItem">
              <SiNodedotjs color="#68a063" />
              <p>Node JS</p>
            </li>
            <li className="skills__listItem">
              <SiExpress color="#999" />
              <p>Express</p>
            </li>
            <li className="skills__listItem">
              <SiMongodb color="#589636" />
              <p>MongoDB</p>
            </li>
            <li className="skills__listItem">
              <SiRuby color="#D30001" />
              <p>Ruby</p>
            </li>
          </ul>
        </div>

        <div className="skills__table">
          <div className="skills__top">
            <BiCog size={iconSize} />
            <h3 className="skills__subtitle">Tools</h3>
          </div>
          <ul className="skills__list">
            <li className="skills__listItem">
              <SiGit color="#f34f29" />
              <p>Git</p>
            </li>
            <li className="skills__listItem">
              <SiGithub color="#171515" />
              <p>Github</p>
            </li>
            <li className="skills__listItem">
              <SiJira color="#0052CC" />
              <p>Jira</p>
            </li>
            <li className="skills__listItem">
              <SiJest color="#C63D14" />
              <p>Jest</p>
            </li>
            <li className="skills__listItem">
              <SiPostman color="#FF6C37" />
              <p>Postman</p>
            </li>
            <li className="skills__listItem">
              <SiSalesforce color="#1798c1" />
              <p>Salesforce</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
