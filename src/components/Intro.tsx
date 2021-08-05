import React from 'react';

interface IntroProps {
  children: React.ReactNode;
}

const Intro: React.FC<IntroProps> = ({ children }) => {
  return <div className='intro-wrap'>{children}</div>;
};

export default Intro;
