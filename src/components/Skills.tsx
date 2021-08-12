import React from 'react';
import { DiGit, DiVisualstudio, DiStreamline } from 'react-icons/di';
import { SectionBreak } from './';

const Skills: React.FC = ({}) => {
  return (
    <div className='section-wrap' id='skills'>
      <SectionBreak />
      <div className='section-title'>Skills</div>
      <div className='section-text'>
        I have a bachelor’s degree in computer science, and hands-on experience creating a multitude of full stack web applications using various
        technologies, frameworks and libraries.
      </div>
      <ul className='skill-list'>
        <li className='skill-item'>
          <DiVisualstudio size='2rem' className='skill-icon' />

          <div className='skill-wrap'>
            <h4 className='skill-title'>Languages</h4>
            <p className='skill-text'>TypeScript, JavaScript, CSS, SASS, SQL</p>
          </div>
        </li>
        <li className='skill-item'>
          <DiStreamline size='2rem' className='skill-icon' />
          <div className='skill-wrap'>
            <h4 className='skill-title'>Frameworks & Libraries</h4>
            <p className='skill-text'>React, Node, React Native, jQuery, NextJS</p>
          </div>
        </li>
        <li className='skill-item'>
          <DiGit size='2rem' className='skill-icon' />
          <div className='skill-wrap'>
            <h4 className='skill-title'>Other Skills</h4>
            <p className='skill-text'> Jest, React Testing Library, Enzyme, Docker, CI/CD</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
