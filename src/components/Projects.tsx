import React from 'react';
import projects from '../assets/json/projects.json';
import { Card, SectionBreak } from './';

const Projects: React.FC = () => {
  return (
    <div className='section-wrap' id='projects'>
      <SectionBreak />
      <h2 className='section-title'>Projects</h2>
      <div className='card-wrap'>
        {projects.map((project: Project) => (
          <Card project={project} key={project.projectName} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
