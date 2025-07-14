// import type { image } from "framer-motion/client";
import React, { useState } from "react";

//Logos
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

    title: "testtitle",
    image: "/assets/icons/candle.png",
    description: "Inspired by candle-lit corridors of the past.",
  },
  {
    id: 4,

    title: "testtitle",
    image: "/assets/icons/helmet.png",
    description: "Worn by guards of the royal prison arcade.",
  },
  {
    id: 5,

    title: "testtitle",
    image: "/assets/icons/scroll.png",
    description: "Ancient trade records once archived here.",
  },
  {
    id: 6,

    title: "testtitle",
    image: "/assets/icons/balance.png",
    description: "Justice and design rebalanced with elegance.",
  },
  {
    id: 7,

    title: "testtitle",
    image: "/assets/icons/watch.png",
    description: "Timeless fashion, rooted in colonial history.",
  },
  {
    id: 8,

    title: "testtitle",
    image: "/assets/icons/bag.png",
    description: "Redefined luxury shopping in an ancient shell.",
  },
  {
    id: 9,

    title: "testtitle",
    image: "/assets/icons/feather.png",
    description: "Soft elegance in a strong-walled sanctuary.",
  },
  {
    id: 10,
    title: "testtitle",
    image: "/assets/icons/shield.png",
    description: "Modern brands within a fortress of heritage.",
  },
  {
    id: 11,
    title: "testtitle",
    image: "/assets/icons/door.png",
    description: "Every entrance a story. Every exit an experience.",
  },
  {
    id: 12,
    title: "testtitle",
    image: "/assets/icons/tile.png",
    description: "Textures tell tales of royal footsteps.",
  },
  {
    id: 12,
    title: "testtitle",
    image: "/assets/icons/tile.png",
    description: "Textures tell tales of royal footsteps.",
  },
];

const CARDS_PER_PAGE = 12;

const Choices: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cardsData.length / CARDS_PER_PAGE);
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const currentCards = cardsData.slice(startIndex, startIndex + CARDS_PER_PAGE);

  return (
    <section className=" text-white px-4 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-tr from-black via-[#0c0c0c] to-black py-8 px-8 rounded-lg shadow-md relative"
            >
              {/* Image Circle */}
              <div className="w-15 h-15 rounded-full bg-white/30 backdrop-blur-md border border-white/30 shadow-lg flex items-center justify-center mb-4 overflow-hidden">
                <img
                  src={card.image}
                  alt={`icon ${card.id}`}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* title */}
              <p className="text-white/70 my-2  text-base">{card.title}</p>

              {/* Description */}
              <p className="text-white/30 text-sm">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
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
      </div>
    </section>
  );
};

export default Choices;
