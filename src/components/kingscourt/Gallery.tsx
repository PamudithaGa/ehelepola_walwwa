import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaEye } from "react-icons/fa";

// For scroll bars
const SilderImages = [
  new URL("../../assets/gallery/kingsCourt/KingsCourtAreaVertical.png", import.meta.url).href,
  new URL("../../assets/gallery/kingsCourt/KingsCourtNameVertical.png", import.meta.url)
    .href,
  new URL("../../assets/gallery/kingsCourt/KingsCourtPlatesVertical.png", import.meta.url).href,
  new URL("../../assets/gallery/kingsCourt/KingsCourtPotsVertical.png", import.meta.url).href,
  new URL("../../assets/gallery/kingsCourt/KingsCourtTableVertical.png", import.meta.url).href,
];

//Main images
const AnimateImages = [
  {
    src: new URL(
      "../../assets/gallery/kingsCourt/KingsCourtArea.png",
      import.meta.url
    ).href,
    description: "Main entrance of the Walawwa classic colonial elegance.",
  },
  {
    src: new URL(
      "../../assets/gallery/kingsCourt/KingsCourtName.png",
      import.meta.url
    ).href,
    description: "Restored prison arcade blending history with modernity.",
  },
  {
    src: new URL(
      "../../assets/gallery/kingsCourt/KingsCourtPlates.png",
      import.meta.url
    ).href,
    description: "Front courtyard a peaceful blend of heritage and greenery.",
  },
  {
    src: new URL(
      "../../assets/gallery/kingsCourt/KingsCourtPots.png",
      import.meta.url
    ).href,
    description: "Vintage hallway echoes of the past in every step.",
  },
  {
    src: new URL("../../assets/gallery/kingsCourt/KingsCourtTable.png", import.meta.url).href,
    description: "Lush surroundings serenity beyond the walls.",
  },
];

const Gallery: React.FC = () => {
  // For scroll bars
  const loopedImages = [...SilderImages, ...SilderImages];
  //For main animate
  const AnimateloopedImages = [...AnimateImages, ...AnimateImages];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % AnimateImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-11/12 lg:w-5/6 lg:h-[100dvh] h-auto lg:mb-8 mx-auto text-white flex overflow-hidden">
      {/* Left text section */}

      <div className="flex-1 lg:h-full flex flex-col  lg:w-2/3 justify-center items-center ">
        <div className="border lg:p-6  lg:mt-5 lg:pr-10  w-full">
          {/*  */}
          <h1 className="mb-4 lg:text-6xl text-[48px] text-black font-bold">
            Highlights
          </h1>
          <p className="text-lg  text-gray-300 max-w-xl">
            Experience authentic Kandyan culture through architecture, wax
            figures, and heritage.
          </p>

          {/* Dynamic Preview Image - For Desktop */}
          <div className="hidden lg:block mt-6 w-full   h-[440px] relative rounded-lg overflow-hidden border border-white/20 shadow-md">
            <div
              className="cursor-pointer absolute top-5 right-5 hover:bg-primary rounded-full h-10 w-10 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 shadow-lg  transition"
              onClick={() => setShowModal(true)}
            >
              <FaEye className="text-white" />
            </div>

            {/* Dark overlay */}
            <div className="absolute inset-0 h-2/3 bottom-0 flex self-baseline-last bg-gradient-to-t from-black/80 via-black/45 to-transparent z-10" />
            {/* Image */}
            <img
              src={AnimateImages[currentIndex].src}
              alt={`Preview ${currentIndex}`}
              className="w-full object-contain transition-all duration-500 "
            />

            {/* Description*/}
            {/* <div className="absolute bottom-8 left-4 text-center right-4 z-20">
              <span className="text-xl bg-gradient-to-t from-white to-transparent bg-clip-text text-transparent text-center">
                {AnimateImages[currentIndex].description}
              </span>
            </div> */}
          </div>

          {/* Dynamic Preview Image - For Mobile */}
          <div className="lg:hidden block mt-6 w-full h-[440px] relative rounded-lg overflow-hidden border border-white/20 shadow-md">
            {/* Dark overlay */}
            <div className="absolute inset-0 h-full bg-gradient-to-t from-black/80 via-black/45 to-transparent z-10" />

            {/* Image */}
            <img
              src={loopedImages[currentIndex]}
              alt={`Preview ${currentIndex}`}
              className="w-full object-contain transition-all duration-500 cursor-pointer"
              onClick={() => setShowModal(true)}
            />

            {/* Description*/}
            <div className="absolute hidden bottom-8 left-4 text-center right-4 z-20">
              <span className="text-lg bg-gradient-to-t from-white to-transparent bg-clip-text text-transparent text-center">
                {AnimateImages[currentIndex].description}
              </span>
            </div>
          </div>

          {/* Image full screen */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
              <div className="relative max-w-6xl w-full px-4">
                {/* Close Button */}
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 text-white text-3xl z-50 cursor-pointer hover:text-gray-300"
                >
                  &times;
                </button>

                {/* Prev Button */}
                <button
                  onClick={() =>
                    setCurrentIndex((prev) =>
                      prev === 0 ? AnimateImages.length - 1 : prev - 1
                    )
                  }
                  className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 text-black text-2xl bg-white/10 hover:bg-white/20 rounded-full p-2 z-50"
                >
                  <FaArrowLeft size={16} />
                </button>

                {/* Next Button */}
                <button
                  onClick={() =>
                    setCurrentIndex((prev) => (prev + 1) % AnimateImages.length)
                  }
                  className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 text-white text-2xl bg-white/10 hover:bg-white/20 rounded-full p-2 z-50"
                >
                  <FaArrowRight size={16} />{" "}
                </button>

                <img
                  src={AnimateloopedImages[currentIndex].src}
                  alt={AnimateloopedImages[currentIndex].description}
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-xl"
                />
              </div>
            </div>
          )}

          {/* Prev/Next */}
          <div className="mt-12 lg:mt-5 flex gap-4  justify-center  mb-6">
            <div>
              <button
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev === 0 ? AnimateImages.length - 1 : prev - 1
                  )
                }
                className="px-4 py-4 border-2 text-black/50 border-black/50 rounded-full cursor-pointer border-black hover:border-black hover:text-black transition  text-sm"
              >
                <FaArrowLeft size={16} />
              </button>
            </div>

            <div>
              <button
                onClick={() =>
                  setCurrentIndex((prev) => (prev + 1) % AnimateImages.length)
                }
                className="px-4 py-4 border-2 text-black/50 border-black/50 rounded-full cursor-pointer border-black hover:border-black hover:text-black transition  text-sm"
              >
                <FaArrowRight size={16} />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling image columns - Desktop*/}
      <div className="lg:flex justify-end w-1/3 gap-6 hidden">
        {/* Left Column: Scroll Down */}
        <motion.div
          className="flex flex-col gap-4 "
          animate={{ y: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          {loopedImages.map((src, idx) => (
            <img
              key={`col1-${idx}`}
              src={src}
              alt={`col1-${idx}`}
              className="w-40  h-160 object-fill rounded-md opacity-80 hover:opacity-100 transition"
            />
          ))}
        </motion.div>

        {/* Right Column: Scroll Up */}
        <motion.div
          className="flex flex-col gap-4"
          animate={{ y: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          {loopedImages.map((src, idx) => (
            <img
              key={`col2-${idx}`}
              src={src}
              alt={`col2-${idx}`}
              className="w-40 h-60 object-cover rounded-md opacity-70 hover:opacity-100 transition"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
