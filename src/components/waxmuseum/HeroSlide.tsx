import React from "react";

const HeroSlide: React.FC = () => {
  return (
    <>
    <section className="bg-black w-full flex items-baseline-last   justify-center lg:h-[95dvh] h-auto">
      <div className=" w-5/6 h-full lg:h-4/5 flex flex-col lg:flex-row justify-center items-center">
        
        {/* Heading & Para */}
        <div className=" lg:w-1/2 lg:h-full lg:mt-10 mt-20  pt-10">
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
            Enter a realm where Sri Lanka's most celebrated heroes come to life through thirty-five masterfully crafted wax figures. Each figure is positioned within carefully curated exhibits that showcase authentic Kandyan architecture, from intricate wood carvings to traditional roof designs. Marvel at displays featuring royal customs, ceremonial attire, and time-honored crafts that define our cultural identity.
          </p>

          <p className="text-white">Open 9.00 AM to 6:00 PM</p>
          <p className="text-sm text-white/20 mt-2">Open Daily (Monday - Sunday)</p>
        </div>
        
        {/* Image */}
        <div className="lg:w-1/2 h-full my-5 lg:pl-20 rounded-2xl flex justify-center items-center">
          <img src="https://assets.ehelepolawalawwa.lk/assets/assets/gallery/waxBanner.webp" alt="" className="rounded-2xl w-full" />
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSlide;
