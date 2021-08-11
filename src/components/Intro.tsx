import React from 'react';
import { IntroAnimation, IntroText } from './';

const Intro: React.FC = () => {
  return (
    <div className='intro-wrap'>
      <IntroText />
      <IntroAnimation />
    </div>
  );
};

export default Intro;
