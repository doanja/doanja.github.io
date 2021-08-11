import React from 'react';
import { DiGit, DiVisualstudio, DiStreamline } from 'react-icons/di';

const Skills: React.FC = ({}) => {
  return (
    <div className='section-wrap border-2 border-blue-600' id='skills'>
      <div className='section-title'>Skills</div>
      <div className='section-text'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate hic iure eligendi porro, aut rem cupiditate libero quia, laboriosam
        tempora delectus qui totam eveniet iste unde non dolorem deserunt nihil.
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
