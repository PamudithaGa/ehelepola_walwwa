import React from "react";

// Images
import KingCourt from "../../assets/home/kings-court-wite.png";
import MadaMidula from "../../assets/home/MADA-MIDULA-White-vertical.png";
import Prison from "../../assets/home/Prison-LOGO-Black.png";
import WaxMuseum from "../../assets/home/wax-museum-white.png";

const zones = [
  {
    image: Prison,
    title: "Old Prison Cells",
    description:
      "Step into the eerie world of historic incarceration. Explore the chilling past within the dim corridors of the old prison block.",
  },
  {
    image: MadaMidula,
    title: "Mada Midula Garden",
    description:
      "A serene escape within stone walls. Discover nature's touch through lush greenery and ancient botanical secrets.",
  },
  {
    image: WaxMuseum,
    title: "Wax Museum",
    description:
      "Meet the past face-to-face. From kings to rebels, this zone brings history to life with stunningly realistic wax figures.",
  },
  {
    image: KingCourt,
    title: "The King's Court",
    description:
      "Where justice, politics, and power once echoed. Walk the grand halls where noblemen debated and rulers reigned.",
  },
];

const Places: React.FC = () => {
  return (
    <div className="w-5/6 lg:h-[100dvh] mx-auto  flex items-center">
      <div className="flex flex-col md:flex-row gap-8 ">
        {/* Image Grid */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
          {[Prison, MadaMidula, WaxMuseum, KingCourt].map((imgSrc, idx) => (
            <div
              key={idx}
              className="py-8 px-3 border border-gray-300 pt-12 bg-black flex flex-col justify-center items-center"
            >
              <div className="w-full flex  items-center justify-center mb-2">
                <img
                  src={imgSrc}
                  alt="Place Logo"
                  className="h-20 object-contain"
                />
              </div>
              <div className=" lg:pt-2 px-4">
                <p className="text-highlight/[0.8] font-extralight  text-[14px] text-justify mb-4">
                  exploration, and royal dining — each zone offers a unique
                  experience within these timeless walls. Discover the cultural
                  heart of Sri Lanka at Ehelapola Walawwa.
                </p>
              </div>
              <div className=" lg:mt-2 w-full px-4">
                <div className="px-4 py-2 w-full   border border-white/30 flex justify-center items-center">
                  <button className="text-secondary font-medium">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
          {zones.map((zone, idx) => (
            <div
              key={idx}
              className="py-8 px-3 border border-gray-300 pt-12 bg-black flex flex-col justify-center items-center"
            >
              <div className="w-full flex items-center justify-center mb-2">
                <img
                  src={zone.image}
                  alt={zone.title}
                  className="h-20 object-contain"
                />
              </div>

              <div className="lg:pt-2 px-4 text-center">
                <p className="text-highlight/[0.8] font-extralight text-[14px] text-justify mb-4">
                  {zone.description}
                </p>
              </div>

              <div className="lg:mt-2 w-full px-4">
                <div className="px-4 py-2 w-full border border-white/30 flex justify-center items-center">
                  <button className="text-secondary font-medium">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Description Box */}
        <div className="flex-1 flex flex-col lg:mt-25">
          <div className="">
            <h1 className="text-primary ">Ehelepola Walawwa: Echoes of Royalty, Crafted for Today’s World</h1>
          </div>
          <p className="text-gray-600 text-base leading-relaxed text-justify mb-4">
            Discover the cultural heart of Sri Lanka at Ehelapola Walawwa. From
            immersive shopping to artistic entertainment, historical
            exploration, and royal dining — each zone offers a unique experience
            within these timeless walls. Discover the cultural heart of Sri
            Lanka at Ehelapola Walawwa. From immersive shopping to artistic
            entertainment, historical exploration, and royal dining — each zone
            offers a unique experience within these timeless walls.
            <br />
            <br />
            Discover the cultural heart of Sri Lanka at Ehelapola Walawwa. From
            immersive shopping to artistic entertainment, historical
            exploration, and royal dining — each zone offers a unique experience
            within these timeless walls. Discover the cultural heart of Sri
            Lanka at Ehelapola Walawwa. From immersive shopping to artistic
            entertainment, historical exploration, and royal dining — each zone
            offers a unique experience within these timeless walls.
            {/* <br />
            <br />
            Discover the cultural heart of Sri Lanka at Ehelapola Walawwa. From
            immersive shopping to artistic entertainment, historical
            exploration, and royal dining Discover the cultural heart of Sri
            Lanka at Ehelapola Walawwa. From immersive shopping to artistic
            entertainment, historical exploration, and royal dining */}
          </p>

          <div className="flex gap-4 mt-18 pt-4 ">
            <button className="bg-primary cursor-pointer text-secondary px-4 py-2 rounded-[16px] hover:brightness-110 transition">
              Explore More
            </button>
            <button className="border border-highlight cursor-pointer text-highlight px-4 py-2 rounded-[16px] hover:brightness-110 transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Places;
