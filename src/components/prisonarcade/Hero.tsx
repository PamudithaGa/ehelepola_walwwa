  import React from "react";
  import PrisonArcadeLogo from "../../assets/logos/prison-arcade-logo-black.png";
  import Walawwa from "../../assets/gallery/arcade.jpg";

  const Hero: React.FC = () => {
    return (
      <div className="relative bg-[url('./assets/gallery/arcade.jpg')] bg-cover bg-center lg:pb-0 text-white flex lg:flex-row flex-col items-center justify-between h-[90dvh] lg:h-[80dvh] px-3 lg:px-16">
        
        <div className="absolute h-[80dvh] inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
      </div>
    );
  };

  export default Hero;