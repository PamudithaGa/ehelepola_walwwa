import Slider from "react-slick";
import NewsCard from "./NewsCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ImageTest from "../../assets/gallery/arcade.jpg";
import PrithCeremonies from "../../assets/news/pirith.jpg";
import PresidentialInauguration from "../../assets/news/prasident.jpg"
import Tourits from "../../assets/news/Tousrists.jpg"

const updates = [
  {
    title: "Presidential Inauguration Ceremony ",
    description:
      "President Anura Kumara Dissanayake officially opened the Wax Museum at historic Ehelepola Walawwa the first ever wax museum in Sri Lanka on the 17th of July 2025, marking a significant milestone in Sri Lanka's cultural tourism development and heritage preservation efforts in the ancient capital.",
    image: PresidentialInauguration,
    date: "17",
    month: "July",
  },
  {
    title: "Sacred Restoration Complete ",
    description:
      "Under Temple of the Sacred Tooth Relic Stewardship, Ehelepola Walauwa's restoration was blessed through Pirith chanting ceremonies on June 30 and July 01, honoring ancestral traditions while embracing modernity.",
    image: PrithCeremonies,
    date: "30",
    month: "June",
  },
  {
    title: "Heritage Tourism Milestone Achieved ",
    description:
      "The transformation of this 400-year-old heritage walauwa Sri Lanka into a premier cultural destination represents a groundbreaking achievement in preserving historic mansions in Sri Lanka for future generations.",
    image: Tourits,
    date: "22",
    month: "March",
  },
  // {
  //   title: "Ehelepola Walawwa Receives National Recognition",
  //   description:
  //     "The iconic building is now listed as a protected heritage site, preserving its cultural significance for future generations. This designation not only safeguards its architectural integrity but also highlights its vital role in the region’s historical narrative. ",
  //   image: ImageTest,
  //   date: "22",
  //   month: "July",
  // },
  // {
  //   title: "Ehelepola Walawwa Receives National Recognition",
  //   description:
  //     "The iconic building is now listed as a protected heritage site, preserving its cultural significance for future generations. This designation not only safeguards its architectural integrity but also highlights its vital role in the region’s historical narrative. ",
  //   image: ImageTest,
  //   date: "22",
  //   month: "July",
  // },
  // {
  //   title: "Ehelepola Walawwa Receives National Recognition",
  //   description:
  //     "The iconic building is now listed as a protected heritage site, preserving its cultural significance for future generations. This designation not only safeguards its architectural integrity but also highlights its vital role in the region’s historical narrative. ",
  //   image: ImageTest,
  //   date: "22",
  //   month: "July",
  // },
  // {
  //   title: "Ehelepola Walawwa Receives National Recognition",
  //   description:
  //     "The iconic building is now listed as a protected heritage site, preserving its cultural significance for future generations. This designation not only safeguards its architectural integrity but also highlights its vital role in the region’s historical narrative. ",
  //   image: ImageTest,
  //   date: "22",
  //   month: "July",
  // },
];

const NewsSection: React.FC = () => {
  const settings = {
    rtl: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className=" lg:p-6 w-11/12 mx-auto ">
      <div className=" mt-5 lg:mt-0 mb-10">
        <h1 className="text-secondary leading-15  lg:text-6xl text-[42px] font-bold ">
          Recents News
        </h1>
        <p className="text-gray-600 text-base text-justify leading-relaxed mt-2 w-full lg:w-5/6 lg:pr-10">
          Stay updated with the latest announcements, stories, and happenings
          from Ehelepola Walawwe where heritage meets today. Explore event
          highlights, restoration updates, and cultural moments that honor its
          historic legacy.
        </p>
      </div>
      <Slider {...settings} className="z-50">
        {updates.map((item, index) => (
          <div key={index} className="px-2 lg:px-5">
            <NewsCard {...item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsSection;
