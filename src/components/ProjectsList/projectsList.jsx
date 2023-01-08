import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./projectsList.scss";
import ProjectItem from "../ProjectItem/projectItem";
import projects from "../projects";
import ProjectModal from "../ProjectModal/projectModal";
let uniqid = require("uniqid");

function ProjectsList(props) {
  const [project, setProject] = useState(projects[0]);
  const [vis, setVis] = useState(false);

  const handleClick = (item) => {
    setProject(item);
    setVis((vis) => !vis);
  };

  const closeModal = () => {
    setVis((vis) => !vis);
  };

  return (
    <div className="projects-box">
      <div className="projects">
        <h2 className="projects-title">Projects</h2>
        <ul className="projects-list">
          {projects.map((item) => {
            return (
              <li className="project" key={uniqid()}>
                <ProjectItem project={item} handleClick={handleClick} />
              </li>
            );
          })}
        </ul>
      </div>
      <ProjectModal project={project} vis={vis} closeModal={closeModal} />
      <div className="projects-bottom">
        <Link to="/bits">
          <button className="projects-bitsbtn">More fun stuff!</button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectsList;
