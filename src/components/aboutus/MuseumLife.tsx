import React from "react";
import { GiPrisoner, GiImperialCrown, GiArtificialHive } from "react-icons/gi";
import { FaChessKing } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import crown from "../../assets/crown.svg";

const MuseumLife: React.FC = () => {
  return (
    <>
      <section className="w-5/6 z-20 mx-auto h-auto  items-center justify-center">
        <div className=" flex items-center  flex-col lg:flex-row justify-center gap-8 lg:gap-25 h-full">
          <div className="w-full lg:w-1/3 flex flex-col items-center justify-center p-8 lg:p-0  rounded shadow-2xl lg:shadow-none">
            <div className="flex pb-6 items-center justify-center w-20 h-20 ">
                <img src={crown} alt="" />
            </div>
            <div>
              <p className="text-center">
                Lifelike wax statues of all nine kings of the Kandyan Kingdom
                (1594 - 1815) and key figures like Ehelepola Adhikaram and British
                colonial administrators.
              </p>
            </div>
          </div>

          <div className=" w-full lg:w-1/3  p-8 lg:p-0  rounded shadow-2xl lg:shadow-none">
            <div className="flex pb-6 items-center justify-center">
              <IoLogoReact   className="w-20 h-20" />{" "}
            </div>
            <div>
              <p className="text-center">
                AI-enhanced exhibits with vivid details, from royal costumes to
                dramatic historical scenes, immersive, interactive, lifelike,
                educational, captivating.
              </p>
            </div>
          </div>

          <div className="  w-full lg:w-1/3  p-8 lg:p-0  rounded shadow-2xl lg:shadow-none">
            <div className="flex pb-6 items-center justify-center">
              <GiPrisoner className="w-20 h-20" />
            </div>
            <div>
              <p className="text-center">
                The Prison Arcade, where British-era prison cells now showcase
                traditional Sri Lankan crafts perfect for unique souvenirs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MuseumLife;
