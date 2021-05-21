import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import pdf from '../assets/files/resume.pdf';

const SocialIcons: React.FC = () => {
  return (
    <div className='flex flex-row-reverse'>
      <a className='icon' href={pdf} target='_blank' rel='noreferrer'>
        <FontAwesomeIcon icon={faFile} size='2x' />
      </a>
      <a className='icon' href='https://github.com/doanja' target='_blank' rel='noreferrer'>
        <FontAwesomeIcon icon={faGithub} size='2x' />
      </a>
      <a className='icon' href='https://www.linkedin.com/in/doanjohnc/' target='_blank' rel='noreferrer'>
        <FontAwesomeIcon icon={faLinkedin} size='2x' />
      </a>
    </div>
  );
};

export default SocialIcons;
