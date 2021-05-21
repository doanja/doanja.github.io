import React, { Fragment } from 'react';
import skills from '../assets/json/skills.json';

interface TextCardProps {
  textCardTypeSkills?: boolean;
}

const TextCard: React.FC<TextCardProps> = ({ textCardTypeSkills }) => {
  return (
    <div className='bg-white shadow-md rounded-md p-4 m-4'>
      {textCardTypeSkills ? (
        <Fragment>
          {skills.map((skill: Skill) => (
            <Fragment>
              <span className='font-bold'>{skill.skillName}: </span>
              <p className='text-sm'>{skill.skills.join(', ')}</p>
            </Fragment>
          ))}
        </Fragment>
      ) : (
        <Fragment>
          <span className='font-bold'>Pacific Lutheran University</span>
          <p className='text-sm'>Bachelor's Degree in Computer Science</p>
          <span className='font-bold'>University of Washington</span>
          <p className='text-sm'>Full Stack Web Development</p>
        </Fragment>
      )}
    </div>
  );
};

export default TextCard;
