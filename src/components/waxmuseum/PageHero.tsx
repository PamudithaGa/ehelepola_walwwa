import React from "react";
import heroImage from "../../assets/gallery/arcade-with-logo.jpg";
import HeroSlide from "./HeroSlide";

const PageHero: React.FC = () => {
  return (
    <>
      <section className="bg-black w-full flex items-baseline-last justify-center h-[95dvh]">
        {/* <div className=" w-5/6 mx-auto h-4/5 flex justify-center items-center">
          <div className=" w-1/2 h-full pt-10">
            <h1 className="font-bold text-[80px] pr-30 leading-tight flex flex-wrap gap-x-2">
              {"The Court Yard".split(" ").map((word, i) => (
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
              The Ehelepola Walawwa, believed to have been built between 1800 and 1810 AD, is over two centuries old and occupies 141 acres of land. It belonged to Ehelepola Maha Adikaram, a prominent figure in the Kandyan Kingdom. This walawwa was the residence of Ehelepola Kumarihami, the most elite noblewoman of the Kandyan Kingdom, and Prince Weera Madduma Bandara.<br/> <span className="hidden">
              In 1818, the British seized the Ehelepola Walawwa and converted it into a prison. More than 50 high-profile rebel leaders, including Ehelepola Maha Adikaram and Keppetipola Disawe, were among the first to be imprisoned there. It is said that the British altered the walawwa's original design and constructed additional prison cells on the property.</span>
            </p>

            <p
            className="text-white">Open 9.00 AM to 8:30 PM</p>
            <p
            className="text-sm text-white/20 mt-2">Monday - Saturday</p>
          </div>
          <div className="w-1/2 h-full pl-20 rounded-2xl flex justify-center items-center">
            <img src={heroImage} alt="" 
            className="rounded-2xl w-full"/>
          </div>
        </div> */}

          <HeroSlide />
      </section>
    </>
  );
};

export default PageHero;
