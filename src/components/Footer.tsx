import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillFileText } from 'react-icons/ai';
import pdf from '../assets/files/resume.pdf';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className='footer-wrap'>
        <div className='footer-link-wrap'>
          <h4 className='footer-link-title'>Phone</h4>
          <a href='123-123-1234' className='footer-link'>
            123-123-1234
          </a>
        </div>

        <div className='footer-link-wrap'>
          <h4 className='footer-link-title'>Email</h4>
          <a href='test@test.com' className='footer-link'>
            test@test.com
          </a>
        </div>

        <div className='footer-icon-wrap'>
          <a className='footer-icon' href='https://github.com/doanja' target='_blank'>
            <AiFillGithub size='2rem' />
          </a>
          <a className='footer-icon' href='https://www.linkedin.com/in/doanjohnc/' target='_blank'>
            <AiFillLinkedin size='2rem' />
          </a>
          <a className='footer-icon' href={pdf} target='_blank'>
            <AiFillFileText size='2rem' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
