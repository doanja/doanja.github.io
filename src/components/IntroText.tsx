import React from 'react';

interface IntroTextProps {}

const IntroText: React.FC<IntroTextProps> = ({}) => {
  return (
    <div className='intro-text-wrap'>
      <div className='left-section'>
        <h2 className='section-title'>
          Welcome To <br />
          My Personal Portfolio
        </h2>
        <p className='section-text'>John Doan - Web Designer and Programmer</p>
      </div>
    </div>
  );
};

export default IntroText;
