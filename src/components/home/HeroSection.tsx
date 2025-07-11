import React, { useEffect, useState } from "react";

import HeroVideo from '../../assets/videos/hero-video.mp4'
import logo from '../../assets/logos/seondary-logo.png';  

const HeroSection: React.FC = () => {
    const [showContent, setShowContent] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 2000); 
  
      return () => clearTimeout(timer);
    }, []);

    const fullText = `The Ehelepola Walawwa, believed to have been built between 1800 and 1810 AD,
    stood for over two centuries, covering an expansive 141 acres. It belonged
    to Ehelepola Maha Adikaram and served as the residence of Ehelepola
    Kumarihami, the most esteemed noblewoman of the Kandyan Kingdom, as well as
    Prince Veera Madduma Bandara. In 1818, the British seized the Ehelepola
    Walawwa and repurposed it as a prison. More than 50 high-profile rebel
    leaders, including Ehelepola Maha Adikaram and Keppetipola Disawe, were
    among the first to be incarcerated within its walls. It was said that the
    British altered the Walawwa’s original structure, adding prison cells to the
    property, marking a significant transformation in its historical narrative.`;
    
      const shortText = fullText.slice(0, 250) + "...";
  
    return (
      <section className="relative w-full lg:h-[100dvh] h-[70dvh] md:h-[65dvh] overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={HeroVideo}
          autoPlay
          muted
          loop
          playsInline
        />
  
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
  
        {/* Content */}
        <div className="relative w-11/12 lg:w-5/6 mx-auto z-20 flex flex-col items-center justify-center h-full text-center px-4 text-secondary/[0.8] font-thin mt-15 md:mt-25 lg:mt-20">
          {/* Logo */}
          {/* <img
            src={logo}
            alt="Logo"
            className={`w-30 h-35 md:w-50 md:h-60 mb-4 transform transition-all duration-2000 ease-in-out ${
              showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          /> */}

          {/* Paragraph */}
          <h1 className="text-secondary leading-12 text-[60px] font-meritta font-bold">Legacy Meets Luxury </h1>

       
        </div>
      </section>
    );
}

export default HeroSection