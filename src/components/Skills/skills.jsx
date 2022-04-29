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
  SiMysql,
} from "react-icons/si";

const iconSize = "50px";

function Skills(props) {
  return (
    <div className="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="grid">
        <div className="grid__item">
          <SiHtml5 color="#F16529" size={iconSize} />
        </div>
        <div className="grid__item">
          <SiCss3 color="#2965f1" size={iconSize} />
        </div>
        <div className="grid__item">
          <SiSass color="#cc6699" size={iconSize} />
        </div>
        <div className="grid__item">
          <SiJavascript color="#f0db4f" size={iconSize} />
        </div>
        <div className="grid__item">
          <SiMongodb color="#589636" size={iconSize} />
        </div>
        <div className="grid__item">
          <SiExpress color="#999" size={iconSize} />
        </div>
        <div className="grid__item">
          <SiReact color="#88dded" size={iconSize} />
        </div>
        <div className="grid__item">
          <SiNodedotjs color="#68a063" size={iconSize} />
        </div>
        <div className="grid__item">
          <SiGit color="#f34f29" size={iconSize} />
        </div>
        <div className="grid__item">
          <SiRuby color="#D30001" size={iconSize} />
        </div>
        <div className="grid__item">
          <SiPostman color="#FF6C37" size={iconSize} />
        </div>
        <div className="grid__item">
          <SiMysql color="#008bb9" size={iconSize} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
