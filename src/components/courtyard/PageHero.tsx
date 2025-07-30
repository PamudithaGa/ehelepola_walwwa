import React from "react";
import heroImage from "../../assets/gallery/courtBanner.png"; // Replace with your actual image path

const PageHero: React.FC = () => {
  return (
    <>
    <section className="bg-black w-full flex items-baseline-last   justify-center lg:h-[95dvh] h-auto">
      <div className=" w-5/6 h-full lg:h-4/5 flex flex-col lg:flex-row justify-center items-center">
        
        {/* Heading & Para */}
        <div className=" lg:w-1/2 lg:h-full mt-20  pt-10">
          <h1 className="font-bold text-[56px] lg:text-[80px]  leading-tight flex flex-wrap gap-x-2">
            {"The Court Yard".split(" ").map((word, i) => (
              <span
                key={i}
                className="bg-gradient-to-t from-white to-transparent bg-clip-text text-transparent"
              >
                {word}
              </span>
            ))}
          </h1>

          <p className="text-[15px] text-white/30 mt-5 mb-10 text-justify lg:pr-10">
           Discover a tranquil sanctuary where centuries-old stone walls whisper ancient tales and time seems to stand still. This beautifully landscaped heritage garden serves as the heart of the walauwa, where original architectural elements blend seamlessly with lush tropical vegetation. Meandering pathways lead you past flowering frangipani trees, traditional water features, and carefully preserved stone carvings that once witnessed royal gatherings
          </p>

          <p className="text-white">Open 9.00 AM to 6:00 PM</p>
          <p className="text-sm text-white/20 mt-2">Open Daily (Monday - Sunday)</p>
        </div>
        
        {/* Image */}
        <div className="lg:w-1/2 h-full my-5 lg:pl-20 rounded-2xl flex justify-center items-center">
          <img src={heroImage} alt="" className="rounded-2xl w-full" />
        </div>
      </div>
    </section>
    </>
  );
};

export default PageHero;
