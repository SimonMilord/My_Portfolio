import React from 'react';
import './projects.scss';

function projects(props) {
  return (
    <div className='projects-box'>
      <div className='projects'>
        <h2 className='projects-title'>Projects</h2>
        <ul className='projects__list'>
          <li className='projects__listItem'>
            Project 1

          </li>
          <li className='projects__listItem'>
            Project 2
          </li>
        </ul>
      </div>
    </div>
  );
}

export default projects;