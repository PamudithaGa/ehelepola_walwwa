import React from 'react'

import LocationMap from "../contactus/LocationMap";

const Map:React.FC = () => {
  return (
    <div>
      <div className="w-full h-[90vh] md:h-auto md:mb-30 md:mt-10 mb-10 mx-auto flex flex-col justify-center items-center">
          <div className="w-full">
            <h2 className="text-6xl font-semibold textprimary md:pt-0 lg:pt-0">
              Our Lcation
            </h2>
            <p className="text-gray-400 font-normal text-base mt-1 mb-10 w-full leading-7">
              {" "}
              Find your way to a place where history resides and heritage breathes
            </p>
          </div>
          <div className="w-full">
            <LocationMap />
          </div>
        </div>
    </div>
  )
}

export default Map
