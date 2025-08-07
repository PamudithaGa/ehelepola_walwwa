import React from "react";
import { Link } from "react-router";
import { MdOutlineArrowOutward } from "react-icons/md";

const zones = [
  {
    image: "https://assets.ehelepolawalawwa.lk/assets/assets/home/Prison-LOGO-Black.webp",
    title: "Old Prison Cells",
    description:
      "Where history meets retail therapy, forty shopping cells house luxury brands like Maliban, PG Martin, and Silani in a uniquely transformed heritage space.",
    link: "/PrisonArcade",
  },
  {
    image: "https://assets.ehelepolawalawwa.lk/assets/assets/home/MADA-MIDULA-White-vertical.webp",
    title: "Mada Midula Garden",
    description:
      "A tranquil sanctuary where ancient stone walls whisper tales of yesteryear, offering visitors peaceful moments amidst beautifully landscaped heritage gardens.",
    link: "/courtyard",
  },
  {
    image:  "https://assets.ehelepolawalawwa.lk/assets/assets/home/wax-museum-white.webp",
    title: "Wax Museum",
    description:
      "Thirty-five lifelike figures bring Sri Lanka's greatest heroes to life, surrounded by exhibits showcasing Kandyan architecture, royal customs, and traditional crafts.",
    link: "/WaxMuseum",
  },
  {
    image: "https://assets.ehelepolawalawwa.lk/assets/assets/home/kings-court-wite.webp",
    title: "The King's Court",
    description:
      "Authentic royal dining experience recreating ancient culinary traditions, where traditional flavors meet regal ambiance in a restaurant fit for royalty.",
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
              <div className="w-full h-3/10 flex items-center rounded-2xl justify-center mb-2">
                <img
                  src={zone.image}
                  alt={zone.title}
                  className="h-20 object-contain"
                />
              </div>

              <div className="h-5/10 lg:pt-2 px-4 ">
                <p className="text-ternary text-center font-extralight text-[14px]  mb-4">
                  {zone.description}
                </p>
              </div>

              <div className="lg:mt-3 w-full px-4">
                <Link
                  to={zone.link}
                  className="text-secondary flex items-center justify-center gap-2  font-medium"
                >
                  <div className="group px-4 py-2 w-full border backdrop-blur-md bg-white/10 rounded-lg border-white/30 flex justify-center items-center hover:cursor-pointer hover:bg-white/20">
                    Explore <MdOutlineArrowOutward className="w-5 h-5" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Description Box */}
        <div className="flex-1 flex flex-col lg:mt-5 ">
          <div className="">
            <h1 className="text-primary leading-15  lg:text-6xl text-[42px] font-bold ">
              The Noble Heart of Kandy
            </h1>
          </div>
          <p className="text-gray-600 text-base leading-relaxed text-justify my-4">
            Nestled in the ancient kingdom's heart, Ehelepola Walauwa stands as
            Kandy's crown jewel, where colonial architecture Sri Lanka meets
            traditional craftsmanship. This heritage walauwa Sri Lanka has
            witnessed centuries of royal intrigue, serving the noble Ehelepola
            Nilame family. Today, cultural tourism Sri Lanka finds its perfect
            destination in this meticulously restored mansion, showcasing
            authentic Kandyan heritage sites.
            <br />
            <br />
            The ancestral home of the legendary Ehelepola Disawe transforms
            history into living experiences. This historic mansion in Sri Lanka,
            once echoing with political conversations and family gatherings, now
            houses four distinct projects that celebrate our rich past.
            Traditional Sri Lankan architecture merges seamlessly with modern
            attractions, creating an immersive journey through time where
            visitors experience authentic walauwa in Sri Lanka.
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
