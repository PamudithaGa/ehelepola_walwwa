import React from "react";


import HeroImage from '../../assets/gallery/arcade-with-logo.jpg'

const HeroSlide: React.FC = () => {

  return (
    <>
      <section className="bg-black w-full flex items-baseline-last justify-center h-[95dvh]">
        <div className=" w-5/6 mx-auto h-4/5 flex justify-center items-center">
          <div className=" w-1/2 h-full pt-10">
            <h1 className="font-bold text-[80px] pr-20 leading-tight flex flex-wrap gap-x-2">
              {"The Wax Museum".split(" ").map((word, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-t from-white to-transparent bg-clip-text text-transparent"
                >
                  {word}
                </span>
              ))}
            </h1>

            <p
              className="text-[15px] text-white/30 mt-5 mb-10 text-justify pr-10">
              The Wax Museum at Ehelepola Walawwa is a tribute to the legacy of the Kandyan Kingdom, featuring lifelike figures of monarchs, nobles, and historic icons. Set within the restored heritage manor, each exhibit blends artistry with storytelling, offering an immersive journey through Sri Lanka’s regal past. The museum preserves tradition while sparking curiosity for generations to come.
            </p>

            <p
              className="text-white">Open 9.00 AM to 8:30 PM</p>
            <p
              className="text-sm text-white/20 mt-2">Monday - Saturday</p>
          </div>
          <div className="w-1/2 h-full pl-20 rounded-2xl flex justify-center items-center">
            <img src={HeroImage} alt=""
              className="rounded-2xl w-full" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSlide;
