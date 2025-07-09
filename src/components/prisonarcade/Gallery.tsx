import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allImages.length);
    }, 4000); // sync with scroll loop timing

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[100vh] bg-black text-white flex overflow-hidden">
      {/* Left text section */}
     

      <div className="flex-1 flex flex-col justify-center items-start px-10 hidden lg:block">
        <div className="ml-20 mt-10 bg-blue-500">
          <h1 className="text-5xl font-light mb-4">Gallery</h1>
          <p className="text-lg text-gray-300 max-w-xl">
            An immersive scroll experience — where visuals flow like time.
          </p>

          {/* Dynamic Preview Image */}
          <div className="mt-6 w-full h-[380px] rounded-lg overflow-hidden border border-white/20 shadow-md">
            <img
              src={allImages[currentIndex]}
              alt={`Preview ${currentIndex}`}
              className="w-full  object-contain transition-all duration-500"
            />
          </div>

          {/* Prev/Next Controls */}
          <div className="mt-4 flex gap-4  justify-center  ">
            <div>
              <button
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev === 0 ? allImages.length - 1 : prev - 1
                  )
                }
                className="px-4 py-2 border border-white/30 hover:bg-white/10 transition  text-sm"
              >
                Prev
              </button>
            </div>
            <div>
              <button
                onClick={() =>
                  setCurrentIndex((prev) => (prev + 1) % allImages.length)
                }
                className="px-4 py-2 border border-white/30 hover:bg-white/10 transition  text-sm"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling image columns */}
      <div className="flex-1 flex justify-center gap-6">
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
