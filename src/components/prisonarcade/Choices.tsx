// import type { image } from "framer-motion/client";
import React from "react";

//Logos
import Batik from "../../assets/logos/batik.webp";
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

type ChoiceItemProps = {
  image: string;
  title: string;
  description: string;
};

const ChoiceItemMobile: React.FC<ChoiceItemProps> = ({
  image,
  title,
  description,
}) => (
  <div className="w-[220px] bg-black rounded-lg p-2 text-white text-center">
    <img src={image} alt={title} className="w-10 h-10 mx-auto mb-1" />
    <h3 className="text-xs font-semibold my-1 text-white">{title}</h3>
    <p className="text-[0.7rem] text-[#ccc]">{description}</p>
  </div>
);

const Choices: React.FC = () => {
  const data = [
    {
      image: Ayurweda,
      title: "Ayurweda",
      description:
        "Sri Lanka’s sparkling legacy, straight from the mines to museum-grade displays.",
    },
    {
      image: Batik,
      title: "Bathik",
      description:
        "Dive into Sri Lankan folklore with handcrafted masks full of spirit & story.",
    },
    {
      image: Brassware,
      title: " Brassware",
      description:
        "Grace, drums, and heritage. Witness our cultural rhythm in motion.",
    },
    {
      image: clay,
      title: "Clay",
      description:
        "Sip history. Taste tradition. Discover why Ceylon Tea is world-famous.",
    },
    {
      image: cosmetics,
      title: "Cosmetics",
      description:
        "From cinnamon to curry leaves, journey through our aromatic identity.",
    },
    {
      image: Gems,
      title: "Gems",
      description:
        "Every color has a story — explore the roots of our proud national symbol.",
    },
    {
      image: Handloom,
      title: "Handloom",
      description:
        "Woven, carved, and painted — handmade traditions passed down generations.",
    },
    {
      image: jewellery,
      title: "Jewellery",
      description:
        "Ancient architecture meets spiritual energy — a must-see journey inward.",
    },
    {
      image: Laksha,
      title: "Laksha",
      description:
        "Ancient architecture meets spiritual energy — a must-see journey inward.",
    },
    {
      image: Mask,
      title: "Mask",
      description:
        "Ancient architecture meets spiritual energy — a must-see journey inward.",
    },
    {
      image: Porcelain,
      title: "Porcelain",
      description:
        "Ancient architecture meets spiritual energy — a must-see journey inward.",
    },
    {
      image: Spices,
      title: "Spices",
      description:
        "Ancient architecture meets spiritual energy — a must-see journey inward.",
    },
  ];

  // Divide into two rows for mobile
  const half = Math.ceil(data.length / 2);
  const firstRow = data.slice(0, half);
  const secondRow = data.slice(half);

  return (
    <>
      {/* Desktop grid layout */}
      <div className="hidden  md:grid grid-cols-4 grid-rows-3 gap-5 w-4/5 mx-auto items-center  justify-center text-white">
        {data.map((card) => (
          <div className="grid h-[30dvh] place-items-center rounded-xl bg-black bg-opacity-60 backdrop-blur-md border border-black/30 shadow-lg">
            <div className="h-20 w-20 mt-8 bg-[#353535] rounded-full flex items-center justify-center">
              <img src={card.image} alt={card.title} className="p-4" />
            </div>
            <h3 className="text-white text-2xl text-center">{card.title}</h3>
            <p className="text-[#CECECE] px-5 pb-2 text-center text-sm">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile horizontal grid with two rows */}
      <div className="block md:hidden p-4 overflow-x-auto">
        <div className="grid grid-rows-2 auto-cols-[220px] grid-flow-col gap-4 w-max">
          {firstRow.map((item, idx) => (
            <ChoiceItemMobile
              key={idx}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
          {secondRow.map((item, idx) => (
            <ChoiceItemMobile
              key={idx + half}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Choices;
