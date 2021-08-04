import React from 'react';
import Brand from '../components/Brand';
import Card from '../components/Card';
import SocialIcons from '../components/SocialIcons';
import TextCard from '../components/TextCard';
import projects from '../assets/json/projects.json';
import { Intro, IntroAnimation } from 'src/components';

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

    <Intro>
      <IntroAnimation />
    </Intro>

    // <div className='container bg-red-300'>
    //   <h1 id='about' className='h-96'>
    //     about
    //   </h1>
    //   <h1 id='projects' className='h-96'>
    //     projects
    //   </h1>
    //   <h1 id='education' className='h-96'>
    //     education
    //   </h1>
    //   <h1 id='skills' className='h-96'>
    //     skills
    //   </h1>
    // </div>
  );
};

export default Home;
