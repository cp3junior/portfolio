import React from "react";

import {
  Hero,
  Hobies,
  Abilities,
  Experience,
  Education,
  Projects,
} from "../Components";

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

export default React.memo(Home);
