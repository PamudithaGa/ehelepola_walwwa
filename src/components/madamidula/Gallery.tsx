import React from "react";
import { motion } from "framer-motion";

const imagesCol1 = [
  "https://images.unsplash.com/photo-1583394838336-acd977736f90",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
];

const imagesCol2 = [
  "https://images.unsplash.com/photo-1552058544-f2b08422138a",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
];

const imagesCol3 = [
  "https://images.unsplash.com/photo-1552058544-f2b08422138a",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
];

const images = [
  ...[
    "https://images.unsplash.com/photo-1583394838336-acd977736f90",
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
  ],
  ...[
    "https://images.unsplash.com/photo-1552058544-f2b08422138a",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  ],
  ...[
    "https://images.unsplash.com/photo-1552058544-f2b08422138a",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  ],
];


const Gallery: React.FC = () => {
  // Merge images with a duplicate for seamless loop
  const loopImages = (images: string[]) => [...images, ...images];

  return (
    <div className="w-full h-[63dvh] lg:h-[80dvh] bg-black text-white lg:flex overflow-hidden">
      {/* Left text column */}
      <div className="lg:flex-1 lg:flex lg:flex-col justify-center items-start px-10 hidden lg:block">
        <div className=" ml-20">
        <h1 className="text-5xl font-light mb-4">Gallery</h1>
        <p className="text-lg text-gray-300 max-w-xl">
          A vibrant collection showcasing stunning visuals, each piece capturing
          unique moments, emotions, and stories. Explore diverse themes through
          artful photography and creative compositions. This gallery invites you
          to experience beauty, inspiration, and perspective — a visual journey
          that sparks curiosity and celebrates the power of imagery.
        </p>
        </div>
      </div>

      <div className="flex-1 flex-col block lg:hidden justify-center items-start p-6 md:p-10">
        <h1 className="text-4xl md:text-5xl font-light mb-4">Gallery</h1>
        <p className="text-base md:text-lg text-gray-300 max-w-xl">
          A vibrant collection showcasing stunning visuals, each piece capturing
          unique moments, emotions, and stories. Explore diverse themes through
          artful photography and creative compositions. This gallery invites you
          to experience beauty, inspiration, and perspective — a visual journey
          that sparks curiosity and celebrates the power of imagery.
        </p>
      </div>

      {/* Right image columns */}
      <div className="lg:flex flex-1 justify-center gap-4 hidden lg:block">
        {/* Left column */}
        <motion.div
          className="flex flex-col gap-4"
          animate={{ y: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        >
          {loopImages(imagesCol1).map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`col1-${idx}`}
              className="w-40 h-60 object-cover rounded-md opacity-80 hover:opacity-100 transition"
            />
          ))}
        </motion.div>

        {/* Center column */}
        <motion.div
          className="flex flex-col gap-4"
          animate={{ y: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
        >
          {loopImages(imagesCol2).map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`col2-${idx}`}
              className={`w-40 h-60 object-cover rounded-md transition ${
                idx % imagesCol2.length === 1
                  ? "scale-110 opacity-100"
                  : "opacity-70"
              }`}
            />
          ))}
        </motion.div>

        {/* Right column */}
        <motion.div
          className="flex flex-col gap-4"
          animate={{ y: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {loopImages(imagesCol3).map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`col3-${idx}`}
              className="w-40 h-60 object-cover rounded-md opacity-80 hover:opacity-100 transition"
            />
          ))}
        </motion.div>
      </div>

      <div className="flex md:hidden overflow-x-auto space-x-4 p-4">
        {images.map((src, idx) => (
          <motion.img
            key={idx}
            src={src}
            alt={`mobile-${idx}`}
            className="flex-shrink-0 w-40 h-60 object-cover rounded-md opacity-80 hover:opacity-100 transition"
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
