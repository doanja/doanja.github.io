import React from 'react';
import { SectionBreak } from './';

const About: React.FC = () => {
  return (
    <div className='section-wrap' id='about'>
      <SectionBreak />
      <div className='section-title'>About</div>
      <div className='section-text'>
        I have a bachelor’s degree in computer science, and hands-on experience creating a multitude of full stack web applications. I value being
        challenged and engaging with projects that require me to work outside my comfort and knowledge set. As I continue to learn new languages and
        development techniques I know that I can be an asset to the success of any organization.
      </div>
    </div>
  );
};

export default About;
