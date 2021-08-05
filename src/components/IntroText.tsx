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
        <p className='section-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eum? Ut sunt at suscipit labore ipsa quam ullam perspiciatis saepe!
        </p>
      </div>
    </div>
  );
};

export default IntroText;
