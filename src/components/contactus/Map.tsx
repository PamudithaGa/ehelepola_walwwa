import React from 'react'

import LocationMap from "../contactus/LocationMap";

const Map:React.FC = () => {
  return (
    <div>
      <div className="w-full h-[90vh] md:h-auto md:mb-30 md:mt-10 px-5 mb-10 mx-auto flex flex-col justify-center items-center bg-neutral-50">
          <div className="w-5/6">
            <h2 className="text-xl font-semibold text-gray-600 md:pt-0 lg:pt-0">
              Our Lcation
            </h2>
            <p className="text-gray-400 font-normal text-base mt-1 mb-10 w-full leading-7">
              {" "}
              Find your way to us. Whether you're planning a trip or just want
              to drop by, our location is one pin away.
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
