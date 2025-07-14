import React from 'react'

import LocationMap from "../contactus/LocationMap";
import Walawwa from '../../assets/logos/walawwa-building.png'
import FloatImage from '../../assets/logos/loading-logo-white.png'

const Map:React.FC = () => {
  return (
    <div className='relative overflow-hidden'>
      <div className=" h-[auto] md:h-auto md:mb-30 mb-10 mx-auto flex flex-col justify-center items-center overflow-hidden">
        <div className='w-1/2'>
              <h2 className="text-6xl font-bold text-center textprimary md:pt-0 lg:pt-0">
              Our Location
            </h2>
              <img src={Walawwa} alt="" />
            </div>
          <div className="w-1/2 text-center">
            
            <p className="text-gray-400 font-normal text-base mt-8 mb-10 w-full leading-7">
              {" "}
              Find your way to a place where history resides and heritage breathes
            </p>
          </div>
          <div className="w-full gap-5 flex">
            <div className='w-full'>
              <LocationMap />
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Map
