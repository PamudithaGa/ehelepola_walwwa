import React from 'react'

import LocationMap from "../contactus/LocationMap";
import Walawwa from '../../assets/logos/walawwa-building.png'


const Map:React.FC = () => {
  return (
    <div className='relative overflow-hidden'>
      <div className=" h-[auto] md:h-auto md:mb-30 lg:mb-10 mb-30 mx-auto flex flex-col justify-center items-center overflow-hidden">
        <div className='lg:w-1/2'>
              <h2 className="lg:text-6xl text-[48px] font-bold text-center  text-primary md:pt-0 lg:pt-0">
              Our Location
            </h2>
              <img src={Walawwa} alt="" className='hidden lg:block' />
            </div>
          <div className="lg:w-1/2 text-center">
            
            <p className="text-gray-400 font-normal text-base lg:mt-8 mb-10 w-full leading-7">
              {" "}
              Located in Kandy's heritage district, it is easily accessible near Sacred Tooth Relic Temple and city center.
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
