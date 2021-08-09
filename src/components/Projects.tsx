import React from 'react';
import projects from '../assets/json/projects.json';
import { Card } from './';

const Projects: React.FC = () => {
  return (
    <div className='section-wrap border-2 border-yellow-300' id='projects'>
      <h2 className='section-title'>Projects</h2>
      <div className='card-container'>
        {projects.map((project: Project) => (
          <Card project={project} key={project.projectName} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
