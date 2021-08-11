import React from 'react';
import { Intro, Projects, Skills, About } from 'src/components';

const Home: React.FC = () => {
  return (
    <>
      <Intro />
      <Projects />
      <Skills />
      <About />
    </>
  );
};

export default Home;
