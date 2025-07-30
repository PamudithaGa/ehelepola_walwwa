import React from 'react'

import ImageTest from '../../assets/gallery/B17A2196.jpg'

const History = () => {
  return (
    <>
      <section
        className='flex lg:flex-row flex-col-reverse w-5/6 mx-auto gap-5 '>
        <div
          className='w-full lg:w-1/2 flex flex-col gap-5'>
          <div className='w-full'>
            <img src={ImageTest} alt="" className='rounded-2xl' />
          </div>

          <div
            className='flex justify-between w-full gap-2'>
            <img src={ImageTest} alt="" className='w-1/3 lg:w-49 rounded-2xl ' />
            <img src={ImageTest} alt="" className='w-1/3 lg:w-49 rounded-2xl ' />
            <img src={ImageTest} alt="" className='w-1/3 lg:w-49 rounded-2xl ' />
          </div>
        </div>

        {/* content */}
        <div className="flex-1 flex flex-col lg:mt-5 lg:w-1/2 w-full lg:pl-10">
          <div className="">
            <h1 className="text-primary leading-15  lg:text-6xl text-[42px] font-bold ">
              Restoration & the Wax Museum
            </h1>
          </div>

          <p className="text-gray-600 text-base leading-relaxed text-justify my-4">
            Built in 1800, Ehelepola Walauwwe was the official home of Ehelepola Adhikaram, the powerful deputy to the last king of Kandy, Sri Wickrama Rajasinghe. Gifted by the king himself, this majestic mansion housed Ehelepola’s family for over a decade. Its walls witnessed both the splendor of Kandyan aristocracy and the dark days of betrayal and rebellion, including the tragic fate of Ehelepola’s family.
            <br />
            After the fall of the kingdom in 1815, the British transformed the Walauwwe into Ceylon’s first prison, where rebels like Keppetipola Disawe were held. For nearly two centuries, it served as part of Bogambara Prison before being restored to its former grandeur.
            <br />
            <br />
            In 2022, Ehelepola Walauwwe was entrusted to the Sacred Temple of the Tooth Relic (Sri Dalada Maligawa). Under the guidance of the Diyawadana Nilame Pradeep Nilanga Dela, it was meticulously restored and reborn as Sri Lanka’s first and only historic wax museum in Sri Lanka.
          </p>
        </div>
      </section>
    </>
  )
}

export default History