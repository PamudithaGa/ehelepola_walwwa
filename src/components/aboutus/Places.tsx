import React from "react";
import { Link } from "react-router";

import { MdOutlineArrowOutward } from "react-icons/md";

const Places: React.FC = () => {
  return (
    <>
      <section className="w-5/6 z-20 mx-auto h-auto lg:h-[60dvh]">
        <div className="h-2/5 flex flex-col">
          <h1 className="text-secondary leading-15  lg:text-6xl text-[42px] font-bold ">
            Premium Places
          </h1>
          <p className="text-base text-white/50 leading-relaxed mt-2 w-full lg:w-5/6 ">
            From lifelike wax figures to shopping delights, thrilling
            entertainment, and a majestic ceremonial court our spaces are
            designed to inspire, engage, and elevate your experience.
          </p>
        </div>

        <div className="h-auto lg:h-3/5 flex lg:flex-row justify-center items-center mt-10 lg:mt-0 flex-col gap-8">
          {/* wax */}
          <div className="w-5/6 py-2 lg:py-5 lg:w-1/4 bg-white flex flex-col gap-1 h-60 lg:h-full rounded-2xl flex items-center justify-center">
            <div className="h-2/4 w-full flex justify-center items-center">
              <img src= "https://assets.ehelepolawalawwa.lk/assets/assets/logos/wax-museum-logo-black.webp" alt="" className="w-30" />
            </div>
            <div className="h-1/4 w-full flex justify-center items-center">
              <p className="text-sm text-center w-4/5">
                Explore 12 rooms telling tales of royalty, rebellion, and
                resilience.
              </p>
            </div>
            <div className="h-1/4 w-full flex justify-center items-center">
              <Link to="/WaxMuseum" className="w-full">
                <button className="bg-black w-auto flex items-center justify-cenetr gap-2 mx-auto px-5 py-3 rounded-2xl text-white  hover:cursor-pointer hover:bg-black/90">
                  Explore Here <MdOutlineArrowOutward className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>

          {/*prison */}
          <div className="w-5/6 py-2 lg:py-5 lg:w-1/4 bg-white flex flex-col gap-1 h-60 lg:h-full rounded-2xl flex items-center justify-center">
            <div className="h-2/4 w-full flex justify-center items-center">
              <img src= "https://assets.ehelepolawalawwa.lk/assets/assets/logos/prison-arcade-logo-black.webp" alt="" className="w-30" />
            </div>
            <div className="h-1/4 w-full flex justify-center items-center">
              <p className="text-sm text-center w-4/5">
                Prison Arcade’s 40 chambers showcase handlooms, woodwork, and
                crafts.
              </p>
            </div>
            <div className="h-1/4 w-full flex justify-center items-center">
              <Link to="/PrisonArcade" className="w-full">
                <button className="bg-black w-auto flex items-center justify-cenetr gap-2 mx-auto px-5 py-3 rounded-2xl text-white  hover:cursor-pointer hover:bg-black/90">
                  Explore Here <MdOutlineArrowOutward className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>

          {/* kings */}
          <div className="w-5/6 py-2 lg:py-5 lg:w-1/4 bg-white flex flex-col gap-1 h-60 lg:h-full rounded-2xl flex items-center justify-center">
            <div className="h-2/4 w-full flex justify-center items-center">
              <img src="https://assets.ehelepolawalawwa.lk/assets/assets/logos/kings-court-logo-black.webp" alt="" className="w-30" />
            </div>
            <div className="h-1/4 w-full flex justify-center items-center">
              <p className="text-sm text-center w-4/5">
                Savor rich, traditional Kandyan-era flavors at the on-site
                restaurant.{" "}
              </p>
            </div>
            <div className="h-1/4 w-full flex justify-center items-center">
              <Link to="/kingscourt" className="w-full">
                <button className="bg-black w-auto flex items-center justify-cenetr gap-2 mx-auto px-5 py-3 rounded-2xl text-white  hover:cursor-pointer hover:bg-black/90">
                  Explore Here <MdOutlineArrowOutward className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>

          {/* court */}
          <div className="w-5/6 py-2 lg:py-5 lg:w-1/4 bg-white flex flex-col gap-1 h-60 lg:h-full rounded-2xl flex items-center justify-center">
            <div className="h-2/4 w-full flex justify-center items-center">
              <img src="https://assets.ehelepolawalawwa.lk/assets/assets/logos/mada-midula-logo-black.webp" alt="" className="w-20" />
            </div>
            <div className="h-1/4 w-full flex justify-center items-center">
              <p className="text-sm text-center w-4/5">
                A traditional Sinhala courtyard for gatherings{" "}
              </p>
            </div>
            <div className="h-1/4 w-full flex justify-center items-center">
              <Link to="/courtyard" className="w-full">
                <button className="bg-black w-auto flex items-center justify-cenetr gap-2 mx-auto px-5 py-3 rounded-2xl text-white  hover:cursor-pointer hover:bg-black/90">
                  Explore Here <MdOutlineArrowOutward className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Places;
