import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const allImages = [
  "https://images.unsplash.com/photo-1583394838336-acd977736f90",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
  "https://images.unsplash.com/photo-1552058544-f2b08422138a",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
];

const Gallery: React.FC = () => {
  const loopedImages = [...allImages, ...allImages];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allImages.length);
    }, 4000); // sync with scroll loop timing

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-11/12 lg:w-5/6 lg:h-[100dvh] h-auto mx-auto text-white flex overflow-hidden">
      {/* Left text section */}

      <div className="flex-1 flex flex-col w-2/3 justify-center items-center ">
        <div className="pr-10 w-full">
          <h1 className="mb-4 text-6xl text-black font-bold">Highlights</h1>
          <p className="text-lg  text-gray-300 max-w-xl">
            An immersive scroll experience — where visuals flow like time.
          </p>
          {/* Dynamic Preview Image */}
          <div className="mt-6 w-full h-[440px]  rounded-lg overflow-hidden border border-white/20 shadow-md">
            <img
              src={allImages[currentIndex]}
              alt={`Preview ${currentIndex}`}
              className="w-full object-contain transition-all duration-500 cursor-pointer"
              onClick={() => setShowModal(true)}
            />
          </div>

            {/* Image full screen */}
            {showModal && (
              <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
                <div className="relative max-w-6xl w-full px-4">
                  {/* Close Button */}
                  <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-4 right-4 text-white text-3xl z-50 hover:text-gray-300"
                  >
                    &times;
                  </button>

                  {/* Prev Button */}
                  <button
                    onClick={() =>
                      setCurrentIndex((prev) =>
                        prev === 0 ? allImages.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-black text-2xl bg-white/10 hover:bg-white/20 rounded-full p-2 z-50"
                  >
                    <FaArrowLeft size={16} />
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={() =>
                      setCurrentIndex((prev) => (prev + 1) % allImages.length)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-2xl bg-white/10 hover:bg-white/20 rounded-full p-2 z-50"
                  >
                    <FaArrowRight size={16} />{" "}
                  </button>

                  {/* Fullscreen Image */}
                  <img
                    src={allImages[currentIndex]}
                    alt="Fullscreen Preview"
                    className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-xl"
                  />
                </div>
              </div>
            )}

            {/* Prev/Next */}
            <div className="mt-12 flex gap-4  justify-center  mb-6">
              <div>
                <button
                  onClick={() =>
                    setCurrentIndex((prev) =>
                      prev === 0 ? allImages.length - 1 : prev - 1
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
                    setCurrentIndex((prev) => (prev + 1) % allImages.length)
                  }
                  className="px-4 py-4 border-2 text-black/50 border-black/50 rounded-full cursor-pointer border-black hover:border-black hover:text-black transition  text-sm"
                >
                  <FaArrowRight size={16} />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling image columns */}
        <div className="lg:flex justify-end w-1/3 gap-6 hidden">
          {/* Left Column: Scroll Down */}
          <motion.div
            className="flex flex-col gap-4"
            animate={{ y: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          >
            {loopedImages.map((src, idx) => (
              <img
                key={`col1-${idx}`}
                src={src}
                alt={`col1-${idx}`}
                className="w-40 h-60 object-cover rounded-md opacity-80 hover:opacity-100 transition"
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
