import React, {useState} from 'react';
import './projectsList.scss';
import ProjectItem from '../ProjectItem/projectItem';
import projects from '../projects';
import ProjectModal from '../ProjectModal/projectModal';
let uniqid = require('uniqid');

function ProjectsList(props) {
  const [project, setProject] = useState(projects[0]);
  const [vis, setVis] = useState(false);

  const handleClick = (item) => {
    setProject(item);
    setVis(vis => !vis);
  }

  const closeModal = () => {
    setVis(vis => !vis);
  }

  return (
    <div className='projects-box'>
      <div className='projects'>
        <h2 className='projects-title'>Projects</h2>
        <ul className='projects-list'>
            {projects.map(item => {
              return (
              <li className='project'>
                <ProjectItem project={item} handleClick={handleClick} key={uniqid()}/>
              </li>
              )
            })}
        </ul>
      </div>
      <ProjectModal project={project} vis={vis} closeModal={closeModal}/>
    </div>
  );
}

export default ProjectsList;