import React from "react";
import { Link } from "react-router";

// import HeroVideo from "../../assets/videos/hero-video.mp4";
import HeroVideo from "../../assets/videos/ehalepolaNew.mp4";
import WalawwaBlock from "../../assets/logos/sketch-white.png";

const HeroSection: React.FC = () => {
  return (
    <>
      <section className="relative w-full lg:h-[100dvh] h-[90dvh] overflow-hidden z-10">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={HeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Top-to-bottom overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" /> */}

        {/*Desktop and Mobile overlay Bottom-to-top */}
        <div className="block absolute inset-0 bg-gradient-to-t from-black lg:via-black/75 via-black/15 to-transparent z-10" />

        {/*Mobile overlay Bottom-to-top */}
        <div className="lg:hidden block absolute inset-0 h-full bg-gradient-to-b from-black/80 via-black/45 to-transparent z-10" />

        {/* Content */}
        <div className="relative z-20 w-full h-full flex items-center justify-center  px-6">
          <div className="mt-20 md:mt-60 w-11/12 items-center flex flex-col justify-center">
            {/* <h1 className="font-bold bg-gradient-to-t text-center from-white to-black/10 bg-clip-text text-transparent lg:text-4xl text-[48px] md:text-8xl mb-4 leading-tight">
              Ehelepola Walauwwa
            </h1> */}

            <h1 className="font-bold text-[56px] lg:text-8xl justify-center -mt-10 lg:mt-0 items-center text-center leading-tight flex flex-wrap gap-x-2">
              {"Ehelepola Walauwwe".split(" ").map((word, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-t from-white to-transparent bg-clip-text text-transparent text-center"
                >
                  {word}
                </span>
              ))}
            </h1>

            <p className="text-[#dfdfdf] mt-6 lg:mt-4 leading-8 lg:text-center text-justify font-extralight md:text-base mb-8 lg:px-36">
              {/* Step into the legendary Ehelepola Walauwa, where Sri Lanka's regal
              heritage comes alive through four extraordinary experiences:
              Prison Arcade shopping, Wax Museum exhibitions, Courtyard
              serenity, and Kings Court dining. */}
              Step into the legendary Ehelepola Walauwa, where Sri Lanka's regal heritage comes alive through four extraordinary experiences: shopping at the Prison Arcade, exploring exhibitions at the Wax Museum, enjoying the serenity of the Courtyard, and dining at the Kings Court
            </p>

            {/* sketch walauwwe */}
            <div className="lg:block hidden mt-4 lg:mt-0 lg:w-1/2">
              <img src={WalawwaBlock} alt="" className="opacity-45" />
            </div>

            {/* Buttons */}
            <div className="flex lg:hidden flex-wrap md:justify-center justify-center gap-4 mt-20">
              {/* Primary Button */}
              <Link
                to="aboutUs"
                className="bg-white text-black px-8 py-2 text-sm md:text-base rounded-md transition-all duration-300 hover:text-white hover:bg-black"
              >
                More Details
              </Link>
              {/* Secondary Button */}
              <Link
                to="/ContactUs"
                className="border border-[#7d7d7d] text-[#7d7d7d] px-8 py-2 text-sm md:text-base rounded-md transition-all duration-300 hover:border-white hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
