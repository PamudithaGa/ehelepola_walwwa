// import React from "react";

// type ChoiceItemProps = {
//   imgSrc: string;
//   title: string;
//   description: string;
// };

// const ChoiceItem: React.FC<ChoiceItemProps> = ({ imgSrc, title, description }) => (
//   <div className="grid h-[320px] place-items-center bg-black bg-opacity-60 backdrop-blur-md border border-black/30 shadow-lg">
//     <div className="h-20 w-20 mt-8 bg-[#353535] rounded-full flex items-center justify-center">
//       <img src={imgSrc} alt={title} className="p-4" />
//     </div>
//     <h3 className="text-white text-2xl">{title}</h3>
//     <p className="text-[#CECECE] px-5 text-center text-sm">
//       {description}
//     </p>
//   </div>
// );

// const Choices: React.FC = () => {
//   const data = Array.from({ length: 12 }, () => ({
//     imgSrc: "https://ehelepolawalawwa.lk/wp-content/uploads/2025/07/gem-svgrepo-com.svg",
//     title: "Jems",
//     description:
//       "We focus on delivering quality, convenience, and peace of mind all wrapped in one smooth experience.",
//   }));

//   return (
//     <div className="grid grid-cols-4 grid-rows-3 gap-2 w-4/5 mx-auto text-white">
//       {data.map((item, idx) => (
//         <ChoiceItem
//           key={idx}
//           imgSrc={item.imgSrc}
//           title={item.title}
//           description={item.description}
//         />
//       ))}
//     </div>
//   );
// };

// export default Choices;







// import React from "react";

// type ChoiceItemProps = {
//   imgSrc: string;
//   title: string;
//   description: string;
// };

// const ChoiceItem: React.FC<ChoiceItemProps> = ({ imgSrc, title, description }) => (
//   <div className="grid h-[320px] place-items-center bg-black bg-opacity-60 backdrop-blur-md border border-black/30 shadow-lg">
//     <div className="h-20 w-20 mt-8 bg-[#353535] rounded-full flex items-center justify-center">
//       <img src={imgSrc} alt={title} className="p-4" />
//     </div>
//     <h3 className="text-white text-2xl">{title}</h3>
//     <p className="text-[#CECECE] px-5 text-center text-sm">
//       {description}
//     </p>
//   </div>
// );

// const ChoiceItemMobile: React.FC<ChoiceItemProps> = ({ imgSrc, title, description }) => (
//   <div className="min-w-[220px] bg-black rounded-lg p-2 text-white text-center">
//     <img src={imgSrc} alt={title} className="w-10 h-10 mx-auto mb-1" />
//     <h3 className="text-xs font-semibold my-1 text-white">{title}</h3>
//     <p className="text-[0.7rem] text-[#ccc]">{description}</p>
//   </div>
// );

// const Choices: React.FC = () => {
//   const data = Array.from({ length: 12 }, () => ({
//     imgSrc: "https://ehelepolawalawwa.lk/wp-content/uploads/2025/07/gem-svgrepo-com.svg",
//     title: "Jems",
//     description:
//       "We focus on delivering quality, convenience, and peace of mind all wrapped in one smooth experience.",
//   }));

//   return (
//     <>
//       {/* Desktop grid layout */}
//       <div className="hidden md:grid grid-cols-4 grid-rows-3 gap-2 w-4/5 mx-auto text-white">
//         {data.map((item, idx) => (
//           <ChoiceItem
//             key={idx}
//             imgSrc={item.imgSrc}
//             title={item.title}
//             description={item.description}
//           />
//         ))}
//       </div>

//       {/* Mobile horizontal scroll layout */}
//       <div className="block md:hidden p-4 overflow-x-auto whitespace-nowrap">
//         <div className="inline-grid grid-flow-col auto-cols-[220px] gap-4 w-max">
//           {data.map((item, idx) => (
//             <ChoiceItemMobile
//               key={idx}
//               imgSrc={item.imgSrc}
//               title={item.title}
//               description={item.description}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Choices;



import React from "react";

type ChoiceItemProps = {
  imgSrc: string;
  title: string;
  description: string;
};

const ChoiceItem: React.FC<ChoiceItemProps> = ({ imgSrc, title, description }) => (
  <div className="grid h-[320px] place-items-center bg-black bg-opacity-60 backdrop-blur-md border border-black/30 shadow-lg">
    <div className="h-20 w-20 mt-8 bg-[#353535] rounded-full flex items-center justify-center">
      <img src={imgSrc} alt={title} className="p-4" />
    </div>
    <h3 className="text-white text-2xl text-center">{title}</h3>
    <p className="text-[#CECECE] px-5 text-center text-sm">
      {description}
    </p>
  </div>
);

const ChoiceItemMobile: React.FC<ChoiceItemProps> = ({ imgSrc, title, description }) => (
  <div className="w-[220px] bg-black rounded-lg p-2 text-white text-center">
    <img src={imgSrc} alt={title} className="w-10 h-10 mx-auto mb-1" />
    <h3 className="text-xs font-semibold my-1 text-white">{title}</h3>
    <p className="text-[0.7rem] text-[#ccc]">{description}</p>
  </div>
);

const Choices: React.FC = () => {
  const data = Array.from({ length: 12 }, () => ({
    imgSrc: "https://ehelepolawalawwa.lk/wp-content/uploads/2025/07/gem-svgrepo-com.svg",
    title: "Jems",
    description:
      "We focus on delivering quality, convenience, and peace of mind all wrapped in one smooth experience.",
  }));

  // Divide into two rows for mobile
  const half = Math.ceil(data.length / 2);
  const firstRow = data.slice(0, half);
  const secondRow = data.slice(half);

  return (
    <>
      {/* Desktop grid layout */}
      <div className="hidden md:grid grid-cols-4 grid-rows-3 gap-2 w-4/5 mx-auto text-white">
        {data.map((item, idx) => (
          <ChoiceItem
            key={idx}
            imgSrc={item.imgSrc}
            title={item.title}
            description={item.description}
          />
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
