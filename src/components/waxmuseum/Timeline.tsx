import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type TimelineItemType = {
  id: number;
  term: string;
  image: string;
  description: string;
};

const timelineData: TimelineItemType[] = [
  {
    id: 1,
    term: "King Vimaladharmasuriya ii",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90",
    description: "Description for Term 1. This text explains more in detail.",
  },
  {
    id: 2,
    term: "Term 2",
    image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    description: "Description for Term 2. This text explains more in detail.",
  },
  {
    id: 3,
    term: "Term 3",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
    description: "Description for Term 3. This text explains more in detail.",
  },
  {
    id: 4,
    term: "Term 4",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    description: "Description for Term 4. This text explains more in detail.",
  },
  {
    id: 5,
    term: "Term 5",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    description: "Description for Term 5. This text explains more in detail.",
  },
  {
    id: 6,
    term: "Term 6",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
    description: "Description for Term 6. This text explains more in detail.",
  },
  {
    id: 7,
    term: "Term 7",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    description: "Description for Term 7. This text explains more in detail.",
  },
];

const TimelineCard: React.FC<{
  item: TimelineItemType;
  isLeft: boolean;
  expanded: boolean;
  onToggle: () => void;
}> = ({ item, isLeft, expanded, onToggle }) => {
  return (
    <div
      className={`relative flex w-full   justify-${
        isLeft ? "start" : "end"
      } items-center`}
    >
      <div
        onClick={onToggle}
        className={`relative bg-white border  border-gray-200 rounded-lg shadow-md w-1/2 p-4 cursor-pointer transition-transform hover:scale-105 z-10
          ${isLeft ? "-ml-1 mr-auto" : "ml-auto -mr-2"}
        `}
      >
        {/* Marker ball inside card */}
        <div
          className="absolute top-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white transform -translate-y-1/2"
          style={{
            right: isLeft ? "-20px" : undefined,
            left: !isLeft ? "-20px" : undefined,
          }}
        ></div>

        <img
          src={item.image}
          alt={item.term}
          className="w-full h-32 object-cover rounded-md mb-2"
        />
        <h3 className="text-lg font-semibold text-gray-800">{item.term}</h3>

        <AnimatePresence>
          {expanded && (
            <motion.p
              className="text-gray-600 mt-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {item.description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="relative w-full flex flex-col items-center py-10">
      {/* Vertical timeline line */}
      <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 z-0"></div>

      <div className="flex flex-col gap-16 w-full max-w-5xl px-4">
        {timelineData.slice(0, visibleCount).map((item, index) => {
          const isLeft = index % 2 === 0;
          const expanded = expandedItems.includes(item.id);

          return (
            <TimelineCard
              key={item.id}
              item={item}
              isLeft={isLeft}
              expanded={expanded}
              onToggle={() => toggleExpand(item.id)}
            />
          );
        })}
      </div>

      {visibleCount < timelineData.length && (
        <button
          onClick={() => setVisibleCount((prev) => prev + 5)}
          className="mt-10 px-6 py-3 z-19 bg-blue-500 cursor-pointer text-white rounded-full hover:bg-blue-600 transition"
        >
          See More
        </button>
      )}
    </div>
  );
};

export default Timeline;
