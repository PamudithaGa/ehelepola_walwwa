import React from "react";

//Images
import KingCourt from "../../assets/home/kings-court-wite.png";
import MadaMidula from "../../assets/home/MADA-MIDULA-White-vertical.png";
import Prison from "../../assets/home/Prison-LOGO-Black.png";
import WaxMuseum from "../../assets/home/wax-museum-white.png";

const Places: React.FC = () => {
  return (
    <div className="w-5/6 h-[100dvh] items-center justify-center ">
      <div className="flex h-full flex-wrap justify-between items-start gap-8 p-5">
        {/*Image Grid */}

        <div className="grid grid-cols-2 h-full gap-4 w-full md:w-1/2 ">
          
          <div className="py-4 px-3 border border-gray-300 bg-black flex flex-col justify-center items-center">
            <div className="w-full h-2/6  flex items-center justify-center">
              <img
                src={Prison}
                alt="Shopping Logo"
                className="w-50 h-20 object-contain rounded-md bg-black p-"
              />
            </div>

            <div className="h-2/6  text-justify ">
              <p className="text-secondary px-5 text-[14px]">
                exploration, and royal dining — each zone offers a unique
                experience within these timeless walls. Discover the cultural
                heart of Sri Lanka at Ehelapola Walawwa. From i
              </p>
            </div>

            <div className="h-1/6 py-2 pt-4  m flex items-center mt-5 -mb-[10px] gap-4 w-full ">
              <div className="px-4 py-2 w-full bg-white/20 rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] border border-white/30 flex justify-center items-center">
                <button className="text-secondary font-medium">Explore</button>
              </div>
            </div>
          </div>

          <div className="py-4 px-3 border border-gray-300 bg-black flex flex-col justify-center items-center">
            <div className="w-full h-2/6  flex items-center justify-center">
              <img
                src={MadaMidula}
                alt="Shopping Logo"
                className="w-50 h-20 object-contain rounded-md bg-black p-"
              />
            </div>

            <div className="h-2/6  text-justify ">
              <p className="text-secondary px-5 text-[14px]">
                exploration, and royal dining — each zone offers a unique
                experience within these timeless walls. Discover the cultural
                heart of Sri Lanka at Ehelapola Walawwa. From i
              </p>
            </div>

            <div className="h-1/6 py-2 pt-4  m flex items-center mt-5 -mb-[10px] gap-4 w-full ">
              <div className="px-4 py-2 w-full bg-white/20 rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] border border-white/30 flex justify-center items-center">
                <button className="text-secondary font-medium">Explore</button>
              </div>
            </div>
          </div>

          <div className="py-4 px-3 border border-gray-300 bg-black flex flex-col justify-center items-center">
            <div className="w-full h-2/6  flex items-center justify-center">
              <img
                src={WaxMuseum}
                alt="Shopping Logo"
                className="w-50 h-20 object-contain rounded-md bg-black p-"
              />
            </div>

            <div className="h-2/6  text-justify ">
              <p className="text-secondary px-5 text-[14px]">
                exploration, and royal dining — each zone offers a unique
                experience within these timeless walls. Discover the cultural
                heart of Sri Lanka at Ehelapola Walawwa. From i
              </p>
            </div>

            <div className="h-1/6 py-2 pt-4  m flex items-center mt-5 -mb-[10px] gap-4 w-full ">
              <div className="px-4 py-2 w-full bg-white/20 rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] border border-white/30 flex justify-center items-center">
                <button className="text-secondary font-medium">Explore</button>
              </div>
            </div>
          </div>

          <div className="py-4 px-3 border border-gray-300 bg-black flex flex-col justify-center items-center">
            <div className="w-full h-2/6  flex items-center justify-center">
              <img
                src={KingCourt}
                alt="Shopping Logo"
                className="w-50 h-20 object-contain rounded-md bg-black p-"
              />
            </div>

            <div className="h-2/6  text-justify ">
              <p className="text-secondary px-5 text-[14px]">
                exploration, and royal dining — each zone offers a unique
                experience within these timeless walls. Discover the cultural
                heart of Sri Lanka at Ehelapola Walawwa. From i
              </p>
            </div>

            <div className="h-1/6 py-2 pt-4  m flex items-center mt-5 -mb-[10px] gap-4 w-full ">
              <div className="px-4 py-2 w-full bg-white/20 rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] border border-white/30 flex justify-center items-center">
                <button className="text-secondary font-medium">Explore</button>
              </div>
            </div>
          </div>
        </div>

        {/*Description Box */}

        <div className="flex-1 w-full md:w-1/2 flex flex-col h-full">
          <div className="mt-20">
            <p className="text-gray-600 text-base leading-relaxed text-justify">
              Discover the cultural heart of Sri Lanka at Ehelapola Walawwa.
              From immersive shopping to artistic entertainment, historical
              exploration, and royal dining — each zone offers a unique
              experience within these timeless walls. Discover the cultural
              heart of Sri Lanka at Ehelapola Walawwa. From immersive shopping
              to artistic entertainment, historical exploration, and royal
              dining — each zone offers a unique experience within these
              timeless walls. Discover the cultural heart of Sri Lanka at
              Ehelapola Walawwa.
              <br />
              <br />
              From immersive shopping to artistic entertainment, historical
              exploration, and royal dining — each zone offers a unique
              experience within these timeless walls. Discover the cultural
              heart of Sri Lanka at Ehelapola Walawwa. From immersive shopping
              to artistic entertainment, historical exploration, and royal
              dining <br />
              <br /> From immersive shopping to artistic entertainment, historical
              exploration, and royal dining — each zone offers a unique
              experience within these timeless walls. Discover the cultural
              heart of Sri Lanka at Ehelapola Walawwa. From immersive shopping
              to artistic entertainment, historical exploration, and royal
              dining
            </p>
          </div>

          <div className="flex gap-12 mt-auto pt-10">
            <button className="bg-primary cursor-pointer text-secondary px-4 py-2 rounded-[16px] hover:brightness-110 transition">
              About
            </button>
            <button className="bg-highlight cursor-pointer text-secondary px-4 py-2 rounded-[16px] hover:brightness-110 transition">
              Contact Us
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Places;
