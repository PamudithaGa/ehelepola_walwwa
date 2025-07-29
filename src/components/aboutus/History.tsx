import React from 'react'

import ImageTest from '../../assets/gallery/B17A2196.jpg'

const History = () => {
  return (
    <>
      <section
        className='flex w-5/6 mx-auto gap-5 '>
        <div
          className='w-1/2 flex flex-col gap-5'>
          <div className='w-full'>
            <img src={ImageTest} alt="" className='rounded-2xl' />
          </div>

          <div
            className='flex justify-between w-full'>
            <img src={ImageTest} alt="" className='w-49 rounded-2xl ' />
            <img src={ImageTest} alt="" className='w-49 rounded-2xl ' />
            <img src={ImageTest} alt="" className='w-49 rounded-2xl ' />
          </div>
        </div>

        {/* content */}
        <div className="flex-1 flex flex-col lg:mt-5 w-1/2 pl-10">
          <div className="">
            <h1 className="text-primary leading-15  lg:text-6xl text-[42px] font-bold ">
              History Re-Making
            </h1>
          </div>

          <p className="text-gray-600 text-base leading-relaxed text-justify my-4">
            Nestled in the ancient kingdom's heart, Ehelepola Walauwa stands as
            Kandy's crown jewel, where colonial architecture Sri Lanka meets
            traditional craftsmanship. This heritage walauwa Sri Lanka has
            witnessed centuries of royal intrigue, serving the noble Ehelepola
            Nilame family. Today, cultural tourism Sri Lanka finds its perfect
            destination in this meticulously restored mansion, showcasing
            authentic Kandyan heritage sites.
            <br />
            <br />
            The ancestral home of the legendary Ehelepola Disawe transforms
            history into living experiences. This historic mansion in Sri Lanka,
            once echoing with political conversations and family gatherings, now
            houses four distinct projects that celebrate our rich past.
            Traditional Sri Lankan architecture merges seamlessly with modern
            attractions, creating an immersive journey through time where
            visitors experience authentic walauwa in Sri Lanka.
          </p>
        </div>
      </section>
    </>
  )
}

export default History