import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

//Logos of choices
import Ayurweda from "../../assets/logos/ayurveda.webp";
import Brassware from "../../assets/logos/brassware.webp";
import clay from "../../assets/logos/clay.webp";
import cosmetics from "../../assets/logos/cosmetics.webp";
import Gems from "../../assets/logos/gems.webp";
import Handloom from "../../assets/logos/handloom.webp";
import jewellery from "../../assets/logos/jewellery.webp";
import Laksha from "../../assets/logos/laksha.webp";
import Mask from "../../assets/logos/mask.webp";
import Porcelain from "../../assets/logos/porcelain.webp";
import Spices from "../../assets/logos/spices.webp";
import Silver from "../../assets/logos/silver.webp";
import Stoneware from "../../assets/logos/stoneware.webp";
import Tea from "../../assets/logos/tea.webp";
import Paintings from "../../assets/logos/paintings.webp";
import Paper from "../../assets/logos/paper.webp";
import Woodcarving from "../../assets/logos/wood-carving.webp";
import Photography from "../../assets/logos/photography.webp";
import Batik from "../../assets/logos/batik.webp";
import Leather from "../../assets/logos/leather.webp";

//Logos of companies
import DelmahLogo from "../../assets/prisonarcade/DilmahLogoColour.jpg";
import SpaCelonLogo from "../../assets/prisonarcade/spacelonLOgo.jpg";

//Promo Banners
import spacelonPromo from "../../assets/prisonarcade/spacelonBannerHorizontal.png";
import EarthboundCreationsPromo from "../../assets/prisonarcade/EarthboundCreationsBannerHorizontal.png";
// import AnotherLogo from "../../assets/prisonarcade/dilmateaBanner.png";

const promoImages = [spacelonPromo, EarthboundCreationsPromo];

type Card = {
  id: number;
  title: string;
  name: string;
  image: string;
  description: string;
  backImage: string;
  moreDetails: string;
};

const cardsData: Card[] = [
  {
    id: 1,
    title: "Cosmetics",
    name: "Spa Ceylon",
    image: cosmetics,
    description: "Worn by guards of the royal royal prison arcade.",
    backImage: SpaCelonLogo,
    moreDetails: "Luxury accessories once safeguarded in the vaults.",
  },

  {
    id: 2,
    title: "Tea",
    name: "Dilmah",
    image: Tea,
    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: DelmahLogo,
    moreDetails: "Luxury accessories once safeguarded in the vaults.",
  },

  {
    id: 3,
    title: "Clay",
    name: "Spa Ceylon",
    image: clay,
    description: "Inspired by candle-lit hhfgfhj corridors of the past.",
    backImage: Brassware,
    moreDetails: "Luxury accessories once safeguarded in the vaults.",
  },
  {
    id: 4,
    title: "Ayuruweda",
    name: "Spa Ceylon",
    image: Ayurweda,
    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: SpaCelonLogo,
    moreDetails: "Luxury accessories once safeguarded in the vaults.",
  },
  {
    id: 5,
    title: "Gems",
    name: "Spa Ceylon",

    image: Gems,
    description: "Inspired by candle-lit hhfgfhj corridors of the past.",
    backImage: Brassware,
    moreDetails: "Luxury accessories once safeguarded in the vaults.",
  },
  {
    id: 6,
    title: "Handloom",
    name: "Spa Ceylon",

    image: Handloom,
    description: "Inspired by candle-lit hhfgfhj corridors of the past.",
    backImage: Brassware,
    moreDetails: "Luxury accessories once safeguarded in the vaults.",
  },
  {
    id: 7,
    title: "Jewellery",
    image: jewellery,
    name: "Spa Ceylon",

    description: "Inspired by candle-lit hhfgfhj corridors of the past.",
    backImage: Brassware,
    moreDetails: "Luxury accessories once safeguarded in the vaults.",
  },
  {
    id: 8,
    title: "Laksha",
    image: Laksha,
    name: "Spa Ceylon",

    description: "Inspired by candle-lit hhfgfhj corridors of the past.",
    backImage: Brassware,
    moreDetails: "Luxury accessories once safeguarded in the vaults.",
  },
  {
    id: 9,
    title: "Mask",
    name: "Spa Ceylon",

    image: Mask,
    description: "Inspired by candle-lit hhfgfhj corridors of the past.",
    backImage: Brassware,
    moreDetails: "Luxury accessories once safeguarded in the vaults.",
  },
  {
    id: 10,
    title: "Porcelain",
    name: "Spa Ceylon",

    image: Porcelain,
    description: "Inspired by candle-lit hhfgfhj corridors of the past.",
    backImage: Brassware,
    moreDetails: "Luxury accessories once safeguarded in the vaults.",
  },
  {
    id: 11,
    title: "Spices",
    name: "Spa Ceylon",

    image: Spices,
    description: "Inspired by candle-lit hhfgfhj corridors of the past.",
    backImage: Brassware,
    moreDetails: "Luxury accessories once safeguarded in the vaults.",
  },
  {
    id: 12,
    title: "Silver",
    name: "Spa Ceylon",

    image: Silver,
    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: Brassware,
    moreDetails: "Luxury accessories once safeguarded in the vaults.",
  },
  {
    id: 13,
    title: "Stoneware",
    name: "Spa Ceylon",

    image: Stoneware,
    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: Brassware,
    moreDetails: "Luxury accessories once safeguarded in the vaults.",
  },
  {
    id: 14,
    title: "Brassware",
    name: "Spa Ceylon",

    image: Brassware,
    description: "Symbol of historic access to secret chambers.",
    backImage: Brassware,
    moreDetails: "Luxury accessories once safeguarded in the vaults.",
  },
  {
    id: 15,
    title: "Paintings",
    name: "Spa Ceylon",
    image: Paintings,
    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: Brassware,
    moreDetails: "Luxury accessories once safeguarded in the vaults.",
  },
  {
    id: 16,
    title: "Papers",
    name: "Spa Ceylon",

    image: Paper,
    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: Brassware,
    moreDetails: "Luxury accessories once safeguarded in the vaults.",
  },
  {
    id: 17,
    title: "Wood Carving",
    name: "Spa Ceylon",

    image: Woodcarving,
    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: Brassware,
    moreDetails: "Luxury accessories once safeguarded in the vaults.",
  },
  {
    id: 18,
    title: "Photography",
    name: "Spa Ceylon",

    image: Photography,
    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: Brassware,
    moreDetails: "Luxury accessories once safeguarded in the vaults.",
  },
  {
    id: 19,
    title: "Batik",
    name: "Spa Ceylon",

    image: Batik,
    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: Brassware,
    moreDetails: "Luxury accessories once safeguarded in the vaults.",
  },
  {
    id: 20,
    title: "Leather",
    name: "Spa Ceylon",

    image: Leather,
    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: Brassware,
    moreDetails: "Luxury accessories once safeguarded in the vaults.",
  },
];

const CARDS_PER_PAGE = 9;

const Choices: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const totalPages = Math.ceil(cardsData.length / CARDS_PER_PAGE);
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const currentCards = cardsData.slice(startIndex, startIndex + CARDS_PER_PAGE);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const mobileGroups = [];
  for (let i = 0; i < cardsData.length; i += 4) {
    mobileGroups.push(cardsData.slice(i, i + 4));
  }

  return (
    <section className="text-white px-4 lg:min-h-screen overflow-x-auto ">
      <div
        className="max-w-7xl mx-auto space-y-10 
      "
      >
        {/* Cards */}
        {!isMobile ? (
          // Desktop Grid
          <div className="flex gap-2">
            <div className="w-1/4  rounded-2xl overflow-hidden">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop
                speed={800}
                slidesPerView={1}
                className="rounded-2xl"
              >
                {promoImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`Promo ${index + 1}`}
                      className="w-full h-auto rounded-2xl object-contain pr-1"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="w-3/4 grid grid-cols-1 lg:grid-cols-3  lg:gap-3">
              {currentCards.map((card) => (
                <CardItem key={card.id} card={card} />
              ))}
            </div>
          </div>
        ) : (
          <div
            className=" flex snap-x snap-mandatory overflow-x-auto w-full  "
            style={{ scrollPaddingLeft: 16, scrollPaddingRight: 16 }}
          >
            {mobileGroups.map((group, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-start flex flex-col gap-4  overflow-x-auto"
              >
                {group.map((card) => (
                  <CardItem key={card.id} card={card} />
                ))}
              </div>
            ))}
            <div>
              <div className="w-1/4  rounded-2xl overflow-hidden">
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop
                  speed={800}
                  slidesPerView={1}
                  className="rounded-2xl"
                >
                  {promoImages.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={img}
                        alt={`Promo ${index + 1}`}
                        className="w-full h-auto rounded-2xl object-contain pr-1"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        )}

        {/* Pagination (only for desktop) */}
        {!isMobile && (
          <div className="flex justify-center items-center gap-3 mt-10">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm border bg-primary border-white/20 rounded hover:bg-primary hover:cursor-pointer disabled:opacity-40"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 text-sm border text-ternary border-ternary rounded hover:bg-ternary hover:cursor-pointer hover:text-white ${
                  currentPage === i + 1 ? "text-white bg-black" : ""
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-sm border bg-primary border-white/20 rounded hover:bg-primary hover:cursor-pointer disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>
      <div></div>
    </section>
  );
};

const CardItem: React.FC<{ card: Card }> = ({ card }) => (
  <div className="flip-card-container w-[90%] lg:w-[100%]">
    <div className="flip-card">
      {/* Front Side */}
      <div className="flip-card-front bg-gradient-to-tr from-black via-[#0c0c0c] to-black lg:py-8 py-6 px-8 rounded-lg overflow-x-auto shadow-md">
        <div className="h-3/6">
          <div className="w-15 h-15 rounded-full bg-white/30 backdrop-blur-md border border-white/30 shadow-lg flex items-center justify-center">
            <img
              src={card.image}
              alt={card.title}
              className="w-10 h-10 object-contain"
            />
          </div>
        </div>
        <div className="h-1/6 pt-2 lg:pt-1">
          <p className="text-white/70 text-base">{card.title}</p>
        </div>
        <div className="h-2/6 pt-3 lg:pt-1">
          <p className="text-white/30 text-sm">{card.description}</p>
        </div>
      </div>

      {/* Back Side */}
      <div className="flip-card-back bg-gradient-to-tr from-[#1a1a1a] via-[#111] to-[#000] lg:py-8 py-6 px-8 rounded-lg overflow-x-auto shadow-md text-white">
        <div className="w-15 h-15 rounded-full bg-white/30 backdrop-blur-md border border-white/30 shadow-lg flex items-center justify-center">
          <img
            src={card.backImage}
            alt={card.title}
            className="w-full h-full object-contain rounded-full"
          />
        </div>
        <div className="h-1/6 pt-2 lg:pt-1">
          <p className="text-white/70 text-base">{card.name}</p>
        </div>
        <div className="h-2/6 pt-3 lg:pt-1">
          <p className="text-white/30 text-sm">{card.moreDetails}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Choices;
