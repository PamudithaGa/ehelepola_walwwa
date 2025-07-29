import React from 'react'

import WaxLogo from '../../assets/logos/wax-museum-logo-black.png'
import PrisonLogo from '../../assets/logos/prison-arcade-logo-black.png'
import KingsLogo from '../../assets/logos/kings-court-logo-black.png'
import CourtYard from '../../pages/CourtYard'

const Places: React.FC = () => {
    return (
        <>
            <section
                className='w-5/6 mx-auto h-[60dvh]'>
                <div
                    className='h-2/5 flex flex-col'>
                    <h1 className="text-secondary leading-15  lg:text-6xl text-[42px] font-bold ">
                        Our Premium Places
                    </h1>
                    <p className="text-base text-white/50 leading-relaxed mt-2 w-full lg:w-5/6 ">
                        From lifelike wax figures to shopping delights, thrilling entertainment, and a majestic ceremonial court—our spaces are designed to inspire, engage, and elevate your experience.
                    </p>

                </div>

                <div
                    className='h-3/5 flex gap-8'>
                    <div
                        className='w-1/4 bg-white h-full rounded-2xl flex items-center justify-center'>
                        <img 
                        src={WaxLogo } 
                        alt="" 
                        className='w-30'/>

                        
                    </div>
                    <div
                        className='w-1/4 bg-white h-full rounded-2xl flex items-center justify-center'>
                        <img 
                        src={PrisonLogo } 
                        alt="" 
                        className='w-30'/>
                    </div>
                    <div
                        className='w-1/4 bg-white h-full rounded-2xl flex items-center justify-center'>
                        <img 
                        src={KingsLogo } 
                        alt="" 
                        className='w-30'/>
                    </div>
                    <div
                        className='w-1/4 bg-white h-full rounded-2xl flex items-center justify-center'>
                        <img 
                        src={WaxLogo } 
                        alt="" 
                        className='w-30'/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Places