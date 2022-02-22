import React from "react";

import Hero from "./../Components/Hero";
import Hobies from "./../Components/Hobies";
import Abilities from "./../Components/Abilities";
import Experience from "./../Components/Experience";
import Education from "./../Components/Education";
import Projects from "./../Components/Projects";

const Home = () => {
  return (
    <>
      <Hero />
      <Hobies />
      <Experience />
      <Abilities />
      <Education />
      <Projects />
    </>
  );
};

export default Home;
