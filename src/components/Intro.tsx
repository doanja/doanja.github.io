import React from 'react';

interface IntroProps {
  children: React.ReactNode;
}

const Intro: React.FC<IntroProps> = ({ children }) => {
  return <section className='section-wrap'>{children}</section>;
};

export default Intro;
