import React from 'react';
import { IntroAnimation, IntroText } from './';

const Intro: React.FC = () => {
  return (
    <div className='intro-wrap border-2 border-red-400'>
      <IntroText />
      <IntroAnimation />
    </div>
  );
};

export default Intro;
