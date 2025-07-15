import React from "react";

import HeroImage from "../../assets/gallery/arcade-with-logo.jpg";

const HeroSlide: React.FC = () => {
  return (
    <>
    <section className="bg-black w-full flex items-baseline-last   justify-center lg:h-[95dvh] h-auto">
      <div className=" w-5/6 h-full lg:h-4/5 flex flex-col lg:flex-row justify-center items-center">
        
        {/* Heading & Para */}
        <div className=" lg:w-1/2 lg:h-full mt-20  pt-10">
          <h1 className="font-bold text-[56px] lg:text-[80px]  leading-tight flex flex-wrap gap-x-2">
            {"The Wax Museum".split(" ").map((word, i) => (
              <span
                key={i}
                className="bg-gradient-to-t from-white to-transparent bg-clip-text text-transparent"
              >
                {word}
              </span>
            ))}
          </h1>

          <p className="text-[15px] text-white/30 mt-5 mb-10 text-justify lg:pr-10">
            The colonial-era prison was transformed into a distinctive shopping
            destination, blending history, architecture, and modern retail.
            While preserving elements of its original design, the space
            seamlessly integrated luxury boutiques, artisan shops, and art
            galleries, creating a unique commercial and cultural experience.
            High-end brands contrasted with the historic setting, while local
            craftsmen showcased handmade goods, keeping the heritage alive.
          </p>

          <p className="text-white">Open 9.00 AM to 8:30 PM</p>
          <p className="text-sm text-white/20 mt-2">Monday - Saturday</p>
        </div>
        
        {/* Image */}
        <div className="lg:w-1/2 h-full my-5 lg:pl-20 rounded-2xl flex justify-center items-center">
          <img src={HeroImage} alt="" className="rounded-2xl w-full" />
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSlide;
