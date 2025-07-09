import React from "react";

type ChoiceItemProps = {
  imgSrc: string;
  title: string;
  description: string;
};

const ChoiceItemMobile: React.FC<ChoiceItemProps> = ({
  imgSrc,
  title,
  description,
}) => (
  <div className="w-[220px] bg-black rounded-lg p-2 text-white text-center">
    <img src={imgSrc} alt={title} className="w-10 h-10 mx-auto mb-1" />
    <h3 className="text-xs font-semibold my-1 text-white">{title}</h3>
    <p className="text-[0.7rem] text-[#ccc]">{description}</p>
  </div>
);

const Choices: React.FC = () => {
  const data = [
    {
      imgSrc:
        "https://ehelepolawalawwa.lk/wp-content/uploads/2025/07/gem-svgrepo-com.svg",
      title: "Gems & Jewels",
      description:
        "Sri Lanka’s sparkling legacy, straight from the mines to museum-grade displays.",
    },
    {
      imgSrc:
        "https://ehelepolawalawwa.lk/wp-content/uploads/2025/07/mask-svgrepo-com.svg",
      title: "Traditional Masks",
      description:
        "Dive into Sri Lankan folklore with handcrafted masks full of spirit & story.",
    },
    {
      imgSrc:
        "https://ehelepolawalawwa.lk/wp-content/uploads/2025/07/dance-svgrepo-com.svg",
      title: "Kandyan Dance",
      description:
        "Grace, drums, and heritage. Witness our cultural rhythm in motion.",
    },
    {
      imgSrc:
        "https://ehelepolawalawwa.lk/wp-content/uploads/2025/07/tea-svgrepo-com.svg",
      title: "Ceylon Tea",
      description:
        "Sip history. Taste tradition. Discover why Ceylon Tea is world-famous.",
    },
    {
      imgSrc:
        "https://ehelepolawalawwa.lk/wp-content/uploads/2025/07/spice-svgrepo-com.svg",
      title: "Spice Trail",
      description:
        "From cinnamon to curry leaves, journey through our aromatic identity.",
    },
    {
      imgSrc:
        "https://ehelepolawalawwa.lk/wp-content/uploads/2025/07/flag-svgrepo-com.svg",
      title: "Sri Lankan Flag",
      description:
        "Every color has a story — explore the roots of our proud national symbol.",
    },
    {
      imgSrc:
        "https://ehelepolawalawwa.lk/wp-content/uploads/2025/07/crafts-svgrepo-com.svg",
      title: "Local Crafts",
      description:
        "Woven, carved, and painted — handmade traditions passed down generations.",
    },
    {
      imgSrc:
        "https://ehelepolawalawwa.lk/wp-content/uploads/2025/07/stupa-svgrepo-com.svg",
      title: "Stupas & Temples",
      description:
        "Ancient architecture meets spiritual energy — a must-see journey inward.",
    },
    // {
    //   imgSrc: "https://ehelepolawalawwa.lk/wp-content/uploads/2025/07/food-svgrepo-com.svg",
    //   title: "Traditional Food",
    //   description: "Bold flavors, fiery spices — Sri Lankan cuisine is a sensory explosion.",
    // },
    // {
    //   imgSrc: "https://ehelepolawalawwa.lk/wp-content/uploads/2025/07/lake-svgrepo-com.svg",
    //   title: "Sacred Lakes",
    //   description: "Nature meets divinity in these still waters steeped in legend.",
    // },
    // {
    //   imgSrc: "https://ehelepolawalawwa.lk/wp-content/uploads/2025/07/elephant-svgrepo-com.svg",
    //   title: "Elephant Culture",
    //   description: "From temple processions to wildlife parks — a majestic national symbol.",
    // },
    // {
    //   imgSrc: "https://ehelepolawalawwa.lk/wp-content/uploads/2025/07/textile-svgrepo-com.svg",
    //   title: "Handloom Textiles",
    //   description: "Colorful, cozy, and culturally rich — feel the texture of tradition.",
    // },
  ];

  // Divide into two rows for mobile
  const half = Math.ceil(data.length / 2);
  const firstRow = data.slice(0, half);
  const secondRow = data.slice(half);

  return (
    <>
      {/* Desktop grid layout */}
      <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-5 w-4/5 mx-auto text-white">
        {data.map((card) => (
          // <ChoiceItem
          //   key={idx}
          //   imgSrc={item.imgSrc}
          //   title={item.title}
          //   description={item.description}
          // />

          <div className="grid h-[320px] place-items-center bg-black bg-opacity-60 backdrop-blur-md border border-black/30 shadow-lg">
            <div className="h-20 w-20 mt-8 bg-[#353535] rounded-full flex items-center justify-center">
              <img src={card.imgSrc} alt={card.title} className="p-4" />
            </div>
            <h3 className="text-white text-2xl text-center">{card.title}</h3>
            <p className="text-[#CECECE] px-5 text-center text-sm">
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
              imgSrc={item.imgSrc}
              title={item.title}
              description={item.description}
            />
          ))}
          {secondRow.map((item, idx) => (
            <ChoiceItemMobile
              key={idx + half}
              imgSrc={item.imgSrc}
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
