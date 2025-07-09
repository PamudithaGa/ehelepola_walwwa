import React from "react";

//Components
import Hero from "../components/prisonarcade/Hero";
import Choices from "../components/prisonarcade/Choices";
import Places from "../components/prisonarcade/Places";
import Gallery from "../components/prisonarcade/Gallery";

const PrisonArcade: React.FC = () => {
  return (
    <>
      <Hero />
      <div>
        <Choices />
      </div>
      <div>
        <Places />
      </div>
      <div className="mt-20">
        <Gallery />
      </div>
    </>
  );
};

export default PrisonArcade;
