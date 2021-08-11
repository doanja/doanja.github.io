import React, { Fragment } from 'react';

const TextCard: React.FC = () => {
  return (
    <div className='bg-white shadow-md rounded-md p-4 m-4'>
      <Fragment>
        <span className='font-bold'>Pacific Lutheran University</span>
        <p className='text-sm'>Bachelor's Degree in Computer Science</p>
        <span className='font-bold'>University of Washington</span>
        <p className='text-sm'>Full Stack Web Development</p>
      </Fragment>
    </div>
  );
};

export default TextCard;
