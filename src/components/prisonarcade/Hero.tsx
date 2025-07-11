import React from "react";
import PrisonArcadeLogo from "../../assets/logos/prison-arcade-logo-white.png";
import Walawwa from "../../assets/gallery/wallwwa1.png";

const Hero: React.FC = () => {
  return (
    <div className="bg-primary pb-9 lg:pb-0 text-white flex lg:flex-row flex-col items-center justify-between h-[90dvh] lg:h-[100dvh] px-3 lg:px-16 relative overflow-hidden">
      {/* Left Side - Description */}
      <div className="lg:w-1/2 bg-white/5 p-3 lg:p-8 backdrop-blur-lg rounded-2xl mt-20 lg:mt-0 shadow-xl border border-white/10 lg:pr-10">
        <h1 className="text-4xl  font-light mb-6">Prison Arcade</h1>
        <p className="text-secondary text-lg leading-relaxed lg:text-left text-justify">
          The colonial-era prison was transformed into a distinctive shopping
          destination, blending history, architecture, and modern retail. While
          preserving elements of its original design, the space seamlessly
          integrated luxury boutiques, artisan shops, and art galleries,
          creating a unique commercial and cultural experience.
          <br />
          <br />
          High-end brands contrasted with the historic setting, while local
          craftsmen showcased handmade goods. Art installations and galleries
          explored themes of freedom and transformation, reflecting the site’s
          past.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="lg:w-1/2 flex justify-center items-center relative">
        {/* Torn effect image */}

        <div className="relative z-10 w-[90%] h-auto rounded-xl">
          <div className="absolute inset-0 bg-black/50 z-10 rounded-xl"></div>
          <img
            src={Walawwa}
            alt="Walawwa"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

  
        {/* Overlay Logo */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <img
            src={PrisonArcadeLogo}
            alt="Prison Arcade Logo"
            className="w-40 h-auto opacity-90 drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;