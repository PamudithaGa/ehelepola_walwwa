import React from "react";
import { Link } from "react-router";

import HeroVideo from "../../assets/videos/hero-video.mp4";

const HeroSection: React.FC = () => {
  return (
    <>
      <section className="relative w-full h-[100dvh] overflow-hidden">
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
        {/* Bottom-to-top overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent z-10" />

        {/* Content */}
        <div className="relative z-20 w-full h-full flex items-center justify-center  px-6">
          <div className="mt-20 md:mt-68 w-4/5  md:text-left">
            <h1 className="font-bold bg-gradient-to-t text-center from-white to-black/10 bg-clip-text text-transparent text-4xl md:text-8xl mb-4 leading-tight">
              Ehelepola Walauwwa
            </h1>

            <p className="text-[#dfdfdf] leading-8 text-center font-extralight md:text-base mb-8 lg:px-36">
              Discover the cultural heart of Sri Lanka at Ehelapola Walawwa.
              From immersive shopping to artistic entertainment, historical
              exploration, and royal dining — each zone offers a unique
              experience m within these timeless walls.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap md:justify-center justify-center gap-4 mt-20">
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
