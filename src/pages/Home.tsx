import React from 'react';
import { Intro, Projects } from 'src/components';

const Home: React.FC = () => {
  return (
    // <div className='container mx-auto h-full my-10 bg-gray-200 rounded-md w-100 sm:w-100 lg:w-3/5'>
    //   <div className='p-10'>
    //     <Brand />
    //     <SocialIcons />
    //   </div>

    //   <h1 className='section-title'>Projects</h1>
    //   <div className='flex flex-wrap'>
    //     {projects.map((project: Project) => (
    //       <Card project={project} />
    //     ))}
    //   </div>

    //   <h1 className='section-title'>Education</h1>
    //   <TextCard />

    //   <h1 className='section-title'>Skills</h1>
    //   <TextCard textCardTypeSkills={true} />
    // </div>

    <>
      <Intro />
      <Projects />
    </>
  );
};

export default Home;
