import React from "react";
import "./projectItem.scss";

function ProjectItem(props) {
  const { project, handleClick } = props;

  return (
    <div className="projectcard">
      <div className="projectcard__top">
        <h3 className="projectcard__name" onClick={() => handleClick(project)}>
          {project.getName()}
        </h3>
        <span className="projectcard__year">{project.getYear()}</span>
      </div>
      <img
        className="projectcard__img"
        src={project.getImg()}
        alt="Project Screenshot"
        onClick={() => handleClick(project)}
      />
      <div className="projectcard__bottom">
        <a
          className="projectcard__link projectcard__link--demo"
          href={project.getDemo()}
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
        <a
          className="projectcard__link"
          href={project.getCode()}
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
      </div>
    </div>
  );
}

export default ProjectItem;
