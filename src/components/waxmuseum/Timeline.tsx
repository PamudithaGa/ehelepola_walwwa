import React, { useEffect, useState } from "react";

import { FaRegDotCircle } from "react-icons/fa";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import vimaladarmasooriya from "../../assets/images/charactors/wimaladarmasuriya.jpg";

const timelineData = [
  {
    date: "1594 - 1604 CE",
    title: "King Vimaladharmasuriya I",
    description: [
      "The Kingdom of Kandy, originally initiated by King Senasammatha Vikramabahu, was firmly established by King Vimaladharmasuriya I, who undertook significant measures to safeguard the realm from European colonial powers for over two centuries. Initially under the Portuguese influence, he resisted foreign domination and ascended to the Kandyan throne in 1594 CE,adopting the royal title 'Vimaladharmasuriya In a politically strategic move to legitimize hisclaim to the throne, he married Kusumasana Devi also known as Dona Katharina direct heirof the Karalliyadda royal lineage.",

      "Vimaladharmasuriya I was the son of the nobleman Weerasundara Bandara of the Peradeniyaroyal lineage and fathered six children. One of his most  historically significant contributions was the relocation of the Sacred Tooth Relic of the Buddha from the Delgamuwa Raja Maha Vihara to Kandy. He constructed a two-storied edifice, the Temple of the Tooth Relic (Dalada Maligawa), to enshrine the relic, thereby strengthening both the religious and political legitimacy of his reign.",
    ],
    image: vimaladarmasooriya,
  },
  {
    date: "1594 - 1604 CE",
    title: "King Vimaladharmasuriya I",
    description: [
      "The Kingdom of Kandy, originally initiated by King Senasammatha Vikramabahu, was firmly established by King Vimaladharmasuriya I, who undertook significant measures to safeguard the realm from European colonial powers for over two centuries. Initially under the Portuguese influence, he resisted foreign domination and ascended to the Kandyan throne in 1594 CE,adopting the royal title 'Vimaladharmasuriya In a politically strategic move to legitimize hisclaim to the throne, he married Kusumasana Devi also known as Dona Katharina direct heirof the Karalliyadda royal lineage.",

      "Vimaladharmasuriya I was the son of the nobleman Weerasundara Bandara of the Peradeniyaroyal lineage and fathered six children. One of his most  historically significant contributions was the relocation of the Sacred Tooth Relic of the Buddha from the Delgamuwa Raja Maha Vihara to Kandy. He constructed a two-storied edifice, the Temple of the Tooth Relic (Dalada Maligawa), to enshrine the relic, thereby strengthening both the religious and political legitimacy of his reign.",
    ],
    image: vimaladarmasooriya,
  },
  {
    date: "1594 - 1604 CE",
    title: "King Vimaladharmasuriya I",
    description: [
      "The Kingdom of Kandy, originally initiated by King Senasammatha Vikramabahu, was firmly established by King Vimaladharmasuriya I, who undertook significant measures to safeguard the realm from European colonial powers for over two centuries. Initially under the Portuguese influence, he resisted foreign domination and ascended to the Kandyan throne in 1594 CE,adopting the royal title 'Vimaladharmasuriya In a politically strategic move to legitimize hisclaim to the throne, he married Kusumasana Devi also known as Dona Katharina direct heirof the Karalliyadda royal lineage.",

      "Vimaladharmasuriya I was the son of the nobleman Weerasundara Bandara of the Peradeniyaroyal lineage and fathered six children. One of his most  historically significant contributions was the relocation of the Sacred Tooth Relic of the Buddha from the Delgamuwa Raja Maha Vihara to Kandy. He constructed a two-storied edifice, the Temple of the Tooth Relic (Dalada Maligawa), to enshrine the relic, thereby strengthening both the religious and political legitimacy of his reign.",
    ],
    image: vimaladarmasooriya,
  },
  {
    date: "1594 - 1604 CE",
    title: "King Vimaladharmasuriya I",
    description: [
      "The Kingdom of Kandy, originally initiated by King Senasammatha Vikramabahu, was firmly established by King Vimaladharmasuriya I, who undertook significant measures to safeguard the realm from European colonial powers for over two centuries. Initially under the Portuguese influence, he resisted foreign domination and ascended to the Kandyan throne in 1594 CE,adopting the royal title 'Vimaladharmasuriya In a politically strategic move to legitimize hisclaim to the throne, he married Kusumasana Devi also known as Dona Katharina direct heirof the Karalliyadda royal lineage.",

      "Vimaladharmasuriya I was the son of the nobleman Weerasundara Bandara of the Peradeniyaroyal lineage and fathered six children. One of his most  historically significant contributions was the relocation of the Sacred Tooth Relic of the Buddha from the Delgamuwa Raja Maha Vihara to Kandy. He constructed a two-storied edifice, the Temple of the Tooth Relic (Dalada Maligawa), to enshrine the relic, thereby strengthening both the religious and political legitimacy of his reign.",
    ],
    image: vimaladarmasooriya,
  },
  {
    date: "1594 - 1604 CE",
    title: "King Vimaladharmasuriya I",
    description: [
      "The Kingdom of Kandy, originally initiated by King Senasammatha Vikramabahu, was firmly established by King Vimaladharmasuriya I, who undertook significant measures to safeguard the realm from European colonial powers for over two centuries. Initially under the Portuguese influence, he resisted foreign domination and ascended to the Kandyan throne in 1594 CE,adopting the royal title 'Vimaladharmasuriya In a politically strategic move to legitimize hisclaim to the throne, he married Kusumasana Devi also known as Dona Katharina direct heirof the Karalliyadda royal lineage.",

      "Vimaladharmasuriya I was the son of the nobleman Weerasundara Bandara of the Peradeniyaroyal lineage and fathered six children. One of his most  historically significant contributions was the relocation of the Sacred Tooth Relic of the Buddha from the Delgamuwa Raja Maha Vihara to Kandy. He constructed a two-storied edifice, the Temple of the Tooth Relic (Dalada Maligawa), to enshrine the relic, thereby strengthening both the religious and political legitimacy of his reign.",
    ],
    image: vimaladarmasooriya,
  },
  {
    date: "1594 - 1604 CE",
    title: "King Vimaladharmasuriya I",
    description: [
      "The Kingdom of Kandy, originally initiated by King Senasammatha Vikramabahu, was firmly established by King Vimaladharmasuriya I, who undertook significant measures to safeguard the realm from European colonial powers for over two centuries. Initially under the Portuguese influence, he resisted foreign domination and ascended to the Kandyan throne in 1594 CE,adopting the royal title 'Vimaladharmasuriya In a politically strategic move to legitimize hisclaim to the throne, he married Kusumasana Devi also known as Dona Katharina direct heirof the Karalliyadda royal lineage.",

      "Vimaladharmasuriya I was the son of the nobleman Weerasundara Bandara of the Peradeniyaroyal lineage and fathered six children. One of his most  historically significant contributions was the relocation of the Sacred Tooth Relic of the Buddha from the Delgamuwa Raja Maha Vihara to Kandy. He constructed a two-storied edifice, the Temple of the Tooth Relic (Dalada Maligawa), to enshrine the relic, thereby strengthening both the religious and political legitimacy of his reign.",
    ],
    image: vimaladarmasooriya,
  },
];

const TimeLine: React.FC = () => {
  //top mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showAll, setShowAll] = useState(false);
  const visibleTimeline = showAll ? timelineData : timelineData.slice(0, 4);

  return (
    <>
      <section className="py-10 md:mt-20 lg:px-4 sm:px-8   relative lg:mt-20 w-11/12 lg:w-5/6 mx-auto h-auto  mt-10">
        <section className="w-full lg:w-2/3 flex flex-col gap-5 mt-2 mx-auto justify-center items-center mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[62px] font-bold text-center lg:text-left text-black">
            Wax Museum
          </h2>
          <p className=" text-base lg:text-xl text-center lg:text-center font-normal text-ternary/80">
            Experience the Kandyan Kingdom like never before where history comes
            to life in wax. Meet the iconic figures of Sri Lanka’s royal past,
            reborn in lifelike detail.
          </p>
        </section>

        <div className="absolute left-1/2 mt-15 transform  -translate-x-1/2 bg-primary w-1 top-40 bottom-40 z-0 hidden md:block" />

        <div className="w-full space-y-10 sm:space-y-20 lg:space-y-24 relative z-10">
          {visibleTimeline.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row lg:h-[500px] items-center gap-4 sm:gap-12 lg:gap-24 ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              } relative`}
            >
              {/* <img
                  src={timeline}
                  alt="Timeline marker"
                  className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-6 w-20 h-10 z-10"
                /> */}
              <FaRegDotCircle className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-6 w-20 h-10 z-10" />

              {/* IMAGE */}
              <div
                className={` w-full sm:w-1/2 ${
                  index % 2 === 0
                    ? "flex justify-end md:pr-5 lg:pr-0"
                    : "flex justify-start md:pl-5 lg:pl-0"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className=" shadow-md w-full max-h-64 sm:max-h-120 object-cover object-top lg:w-full lg:h-[full rounded-xl"
                />
              </div>

              {/* TEXT CONTENT */}
              <div className=" w-full sm:w-1/2 space-y-0">
                <div
                  className={`text-center sm:text-left ${
                    index % 2 === 0
                      ? "sm:text-right pr-2 sm:pr-4 lg:pr-6"
                      : "sm:text-left pl-2 sm:pl-4 lg:pl-1"
                  }`}
                >
                  <div className="text-3xl sm:text-4xl lg:text-[52px] text-gray-300 font-bold leading-none">
                    {item.date}
                  </div>
                </div>

                <div className=" p-0 lg:p-4 pt-3 relative">
                  <h3 className="text-lg sm:text-xl text-center md:text-left lg:text-2xl font-bold text-primary mb-5">
                    {item.title}
                  </h3>
                  {/* description */}
                  <div className="overflow-y-auto flex flex-col gap-5 bg-neutral-50 mt-1 h-80 p-5">
                    {item.description.map((para) => (
                      <p className=" text-sm sm:text-sm text-justify leading-7">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>

        <div className="relative flex flex-col items-center mt-20 lg:mt-16 px-4 py-6">
          {/* <img
              src={showmore}
              alt="Show more"
              className={`w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 opacity-60 hover:opacity-100 cursor-pointer transition-transform duration-300 z-10 ${
                showAll ? "rotate-180" : "rotate-0"
              }`} */}
          <RiArrowDownDoubleFill
            className={`w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-10 opacity-60 hover:opacity-100 cursor-pointer transition-transform duration-300 z-10 ${
              showAll ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => setShowAll(!showAll)}
          />
          <p
            className="text-sm sm:text-base text-gray-500 hover:text-black transition-colors cursor-pointer z-10"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show less" : "Show more"}
          </p>
        </div>
      </section>
    </>
  );
};

export default TimeLine;
