import React from 'react';
import { Intro, Projects, Technologies } from 'src/components';

const Home: React.FC = () => {
  return (
    // <div className='container mx-auto h-full my-10 bg-gray-200 rounded-md w-100 sm:w-100 lg:w-3/5'

    //   <h1 className='section-title'>Education</h1>
    //   <TextCard />

    //   <h1 className='section-title'>Skills</h1>
    //   <TextCard textCardTypeSkills={true} />
    // </div>

    <>
      <Intro />
      <Projects />
      <Technologies />
    </>
  );
};

export default Home;
