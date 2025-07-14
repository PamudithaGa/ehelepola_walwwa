import React, { useState, useEffect } from "react";

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

type Card = {
  id: number;
  title: string;
  image: string;
  description: string;
};

const cardsData: Card[] = [
  {
    id: 1,
    title: "Ayuruweda",
    image: Ayurweda,
    description: "Luxury accessories once safeguarded in the vaults.",
  },
  {
    id: 2,
    title: "Brassware",
    image: Brassware,
    description: "Symbol of historic access to secret chambers.",
  },
  {
    id: 3,
    title: "Clay",
    image: clay,
    description: "Inspired by candle-lit hhfgfhj corridors of the past.",
  },
  {
    id: 4,
    title: "Cosmetics",
    image: cosmetics,
    description: "Worn by guards of the royal royal prison arcade.",
  },
  {
    id: 5,
    title: "Gems",
    image: Gems,
    description: "Ancient trade records once archived here.",
  },
  {
    id: 6,
    title: "Handloom",
    image: Handloom,
    description: "Justice and design rebalanced with elegance.",
  },
  {
    id: 7,
    title: "Jewellery",
    image: jewellery,
    description: "Timeless fashion, rooted in colonial history.",
  },
  {
    id: 8,
    title: "Laksha",
    image: Laksha,
    description: "Redefined luxury shopping in an ancient shell.",
  },
  {
    id: 9,
    title: "Mask",
    image: Mask,
    description: "Soft elegance in a strong-walled sanctuary.",
  },
  {
    id: 10,
    title: "Porcelain",
    image: Porcelain,
    description: "Modern brands within a fortress of heritage.",
  },
  {
    id: 11,
    title: "Spices",
    image: Spices,
    description: "Every entrance a story. Every exit an experience.",
  },
  {
    id: 12,
    title: "Silver",
    image: Silver,
    description: "Textures tell tales of royal footsteps.",
  },
  {
    id: 13,
    title: "Stoneware",
    image: Stoneware,
    description: "Textures tell tales of royal footsteps.",
  },
  {
    id: 14,
    title: "Tea",
    image: Tea,
    description: "Textures tell tales of royal footsteps.",
  },
  {
    id: 15,
    title: "Paintings",
    image: Paintings,
    description: "Textures tell tales of royal footsteps.",
  },
  {
    id: 16,
    title: "Papers",
    image: Paper,
    description: "Textures tell tales of royal footsteps.",
  },
  {
    id: 17,
    title: "Wood Carving",
    image: Woodcarving,
    description: "Textures tell tales of royal footsteps.",
  },
  {
    id: 18,
    title: "Photography",
    image: Photography,
    description: "Textures tell tales of royal footsteps.",
  },
  {
    id: 19,
    title: "Batik",
    image: Batik,
    description: "Textures tell tales of royal footsteps.",
  },
  {
    id: 20,
    title: "Leather",
    image: Leather,
    description: "Textures tell tales of royal footsteps.",
  },
];

const CARDS_PER_PAGE = 12;

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

  // Split mobile cards into groups of 4
  const mobileGroups = [];
  for (let i = 0; i < cardsData.length; i += 4) {
    mobileGroups.push(cardsData.slice(i, i + 4));
  }

  return (
    <section className="text-white px-4 min-h-screen overflow-x-auto">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Cards */}
        {!isMobile ? (
          // Desktop Grid
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentCards.map((card) => (
              <CardItem key={card.id} card={card} />
            ))}
          </div>
        ) : (

          <div
            className="flex snap-x snap-mandatory overflow-x-auto w-full  "
            style={{ scrollPaddingLeft: 16, scrollPaddingRight: 16 }} // for smooth snap padding
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
    </section>
  );
};

const CardItem: React.FC<{ card: Card }> = ({ card }) => (
  <div className="bg-gradient-to-tr from-black via-[#0c0c0c]  to-black w-[90%] py-8 px-8 rounded-lg overflow-x-auto shadow-md relative">
    <div className="w-15 h-15 rounded-full bg-white/30 backdrop-blur-md border border-white/30 shadow-lg flex items-center justify-center mb-4 overflow-hidden">
      <img
        src={card.image}
        alt={card.title}
        className="w-10 h-10 object-contain"
      />
    </div>
    <p className="text-white/70 my-2 text-base">{card.title}</p>
    <p className="text-white/30 text-sm">{card.description}</p>
  </div>
);
export default Choices;
