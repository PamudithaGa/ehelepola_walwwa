import React from "react";
import { Link } from "react-router";

// Images
import KingCourt from "../../assets/home/kings-court-wite.png";
import MadaMidula from "../../assets/home/MADA-MIDULA-White-vertical.png";
import Prison from "../../assets/home/Prison-LOGO-Black.png";
import WaxMuseum from "../../assets/home/wax-museum-white.png";
import { MdOutlineArrowOutward } from "react-icons/md";

const zones = [
  {
    image: Prison,
    title: "Old Prison Cells",
    description:
      "Step into the eerie world of historic incarceration. Explore the chilling past within the dim corridors of the old prison block.",
    link: "/PrisonArcade",
  },
  {
    image: MadaMidula,
    title: "Mada Midula Garden",
    description:
      "A serene escape within stone walls. Discover nature's touch through lush greenery and ancient botanical secrets.",
    link: "/courtyard",
  },
  {
    image: WaxMuseum,
    title: "Wax Museum",
    description:
      "Meet the past face-to-face. From kings to rebels, this zone brings history to life with stunningly realistic wax figures.",
    link: "/WaxMuseum",
  },
  {
    image: KingCourt,
    title: "The King's Court",
    description:
      "Where justice, politics, and power once echoed. Walk the grand halls where noblemen debated and rulers reigned.",
    link: "/kingscourt",
  },
];

const Places: React.FC = () => {
  return (
    <div className="w-5/6 lg:h-5/6 mx-auto items-center">
      <div className="flex flex-col md:flex-row gap-16 ">
        {/* Image Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
          {zones.map((zone, idx) => (
            <div
              key={idx}
              className="py-8 px-3 rounded-xl pt-12 bg-gradient-to-tr from-black via-[#131313] to-black  flex flex-col justify-center items-center"
            >
              <div className="w-full flex items-center rounded-2xl justify-center mb-2">
                <img
                  src={zone.image}
                  alt={zone.title}
                  className="h-20 object-contain"
                />
              </div>

              <div className="lg:pt-2 px-4 ">
                <p className="text-ternary text-center font-extralight text-[14px]  mb-4">
                  {zone.description}
                </p>
              </div>

              <div className="lg:mt-3 w-full px-4">
                <div className="group px-4 py-2 w-full border backdrop-blur-md bg-white/10 rounded-lg border-white/30 flex justify-center items-center hover:cursor-pointer hover:hi">
                  <Link
                    to={zone.link}
                    className="text-secondary flex items-center justify-center gap-2  font-medium"
                  >
                    Explore <MdOutlineArrowOutward className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Description Box */}
        <div className="flex-1 flex flex-col lg:mt-5">
          <div className="">
            <h1 className="text-primary  leading-12 text-[52px] font-extrabold tracking-[0.8rem]">
              {" "}
            </h1>
          </div>
          <p className="text-gray-600 text-base leading-relaxed text-justify my-4">
            Discover the cultural heart of Sri Lanka at Ehelapola Walawwa. From
            immersive shopping to artistic entertainment, historical
            exploration, and royal dining — each zone offers a unique experience
            m within these timeless walls. Discover the cultural heart of Sri
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

          <div className="flex gap-4 pt-5 ">
            <Link
              to="/aboutUs"
              className="bg-primary cursor-pointer rounded-lg border border-primary text-secondary px-4 py-2  hover:brightness-110 transition"
            >
              Explore More
            </Link>
            <Link
              to="/ContactUs"
              className="border border-highlight  rounded-lg cursor-pointer text-highlight px-4 py-2  hover:brightness-110 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Places;
