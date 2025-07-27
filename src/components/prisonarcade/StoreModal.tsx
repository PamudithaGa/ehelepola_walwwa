import React from "react";

interface Card {
  id: number;
  title: string;
  name: string;
  image: string;
  description: string;
  backImage: string;
  shellnumber: string;
  moreDetails: string;
  popup: string;
  address: string;
  number: string;
  email: string;
}

interface StoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  card: Card | null;
}

const StoreModal: React.FC<StoreModalProps> = ({ isOpen, onClose, card }) => {
  if (!isOpen || !card) return null;

  return (
    <>
      {/* for desktop */}
      <div className="hidden fixed inset-0 z-50 lg:flex items-center justify-center bg-black/50 px-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md border border-white/30">
        <div className="bg-white rounded-2xl px-30 shadow-2xl w-[80vw] h-[80vh] overflow-y-auto relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-black text-2xl font-bold cursor-pointer hover:text-red-500"
          >
            &times;
          </button>

          <div className="flex h-full">
            <div className="w-3/10 bg-black h-full flex flex-col justify-center items-center px-2 gap-5">
              <div className="flex justify-center items-center">
                <h2 className="text-4xl mb-5  font-bold text-secondary">
                  {card.name}
                </h2>
              </div>
              <div>
                <img
                  src={card.backImage}
                  alt={card.name}
                  className="w-40 h-40 object-contain border border-gray-300"
                />
              </div>
              <div className="text-sm px-4 text-center text-highlight">
                <p>{card.moreDetails}</p>
              </div>
            </div>

            <div className="w-7/10 h-4/5 flex my-auto  flex-col pl-15 ">
              <div className="h-1/6">
                <h2 className="text-4xl text-primary ">
                  Shell Number #{" "}
                  <span className="font-bold">{card.shellnumber}</span>
                </h2>
              </div>
              <div className="h-2/6">
                <p className="text-gray-700 whitespace-pre-line text-left ">
                  {card.popup}
                </p>
              </div>
              <div className=" flex flex-col-3 gap-6 text-black h-3/6 ">
                <div className="bg-white/20 border border-white/30 rounded-xl shadow-sm h-2/3 backdrop-blur-md p-5 px-4 w-1/3 items-center justify-center flex flex-col">
                  <h2 className="font-bold">Address</h2>
                  <p className="text-center">{card.address}</p>
                </div>
                <div className="bg-white/20 border border-white/30 rounded-xl shadow-sm h-2/3 backdrop-blur-md p-5 px-4 w-1/3 items-center justify-center flex flex-col">
                  <h2 className="font-bold">Number</h2>
                  <p>{card.number}</p>
                </div>
                <div className="bg-white/20 border border-white/30 rounded-xl shadow-sm h-2/3 backdrop-blur-md p-5 px-4 w-1/3 items-center justify-center flex flex-col">
                  <h2 className="font-bold">Email</h2>
                  <p>{card.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* For Mobile */}
      <div className="lg:hidden  fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md border border-white/30">
        <div className="bg-white rounded-2xl shadow-2xl w-[90vw] h-[90vh] overflow-y-auto relative flex flex-col md:flex-row">
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-white text-2xl font-bold cursor-pointer hover:text-red-500 z-10"
          >
            &times;
          </button>

          <div className="md:w-3/10 w-full bg-black md:h-full flex flex-col justify-center items-center p-6 gap-5">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center">
              {card.name}
            </h2>

            <img
              src={card.backImage}
              alt={card.name}
              className="w-32 h-32 md:w-40 md:h-40 object-contain border border-gray-300"
            />

            <div className="text-sm px-2 text-center text-highlight">
              <p>{card.moreDetails}</p>
            </div>
          </div>

          <div className="md:w-7/10 w-full flex flex-col gap-6 px-6 py-8">
            <div>
              <h2 className="text-2xl md:text-4xl text-primary">
                Shell Number #{" "}
                <span className="font-bold">{card.shellnumber}</span>
              </h2>
            </div>

            <div>
              <p className="text-gray-700 whitespace-pre-line text-left text-sm md:text-base">
                {card.popup}
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 text-black">
              <div className="bg-white/20 border border-white/30 rounded-xl shadow-sm backdrop-blur-md p-5 flex-1 flex flex-col items-center justify-center">
                <h2 className="font-bold">Address</h2>
                <p className="text-center">{card.address}</p>
              </div>
              <div className="bg-white/20 border border-white/30 rounded-xl shadow-sm backdrop-blur-md p-5 flex-1 flex flex-col items-center justify-center">
                <h2 className="font-bold">Number</h2>
                <p>{card.number}</p>
              </div>
              <div className="bg-white/20 border border-white/30 rounded-xl shadow-sm backdrop-blur-md p-5 flex-1 flex flex-col items-center justify-center">
                <h2 className="font-bold">Email</h2>
                <p>{card.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreModal;
