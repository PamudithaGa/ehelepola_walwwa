import React from "react";
// import heroImage from "../../assets/gallery/arcade-with-logo.jpg";
import KingsCourtHeroVideo from "../../assets/videos/KingsCourt.mp4"

const PageHero: React.FC = () => {
  return (
    <>
      <section className="bg-black w-full flex items-baseline-last   justify-center lg:h-[95dvh] h-auto">
        <div className=" w-5/6 h-full lg:h-4/5 flex flex-col lg:flex-row justify-center items-center">


          <div className=" lg:w-1/2 lg:h-full mt-20  pt-10">
            <h1 className="font-bold text-[56px] lg:text-[80px]  leading-tight flex flex-wrap gap-x-2">
              {"The Kings Court".split(" ").map((word, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-t from-white to-transparent bg-clip-text text-transparent"
                >
                  {word}
                </span>
              ))}
            </h1>

            <p className="text-[15px] text-white/30 mt-5 mb-10 text-justify lg:pr-10">
              Culminate your royal journey with an extraordinary dining experience that faithfully recreates the culinary traditions of ancient Sri Lankan royalty. This authentic restaurant transports you to an era of royal banquets, where traditional recipes passed down through generations are prepared using time-honored techniques and locally sourced ingredients. The restaurant's regal ambiance, complete with carved wooden furniture, traditional brass serving vessels, and soft candlelight, creates an atmosphere truly fit for royalty. 
            </p>

            <p className="text-white">Open 9.00 AM to 6:00 PM</p>
            <p className="text-sm text-white/20 mt-2">Open Daily (Monday - Sunday)</p>
          </div>

          <div className="lg:w-1/2 h-full my-5 lg:pl-5 rounded-2xl flex justify-center items-center">
            {/* <img src={heroImage} alt="" className="rounded-2xl w-full" /> */}
            <video
              className="w-full rounded-2xl "
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={KingsCourtHeroVideo} type="video/mp4" />
            </video>
          </div>



        </div>
      </section>
    </>
  );
};

export default PageHero;
