import React from 'react'

import testImage from '../../assets/gallery/prison.jpg'
import testImage1 from '../../assets/gallery/B17A2196.jpg'
import testImage2 from '../../assets/gallery/B17A2214.jpg'

const HeroSection: React.FC = () => {
    return (
        <>
            <section className="bg-black w-full flex items-baseline-last justify-center lg:h-[95dvh] h-auto">
                <div className=" w-5/6 h-full lg:h-4/5 lg:gap-10 flex flex-col lg:flex-row justify-center items-center">
                    {/* Heading & Para */}
                    <div className=" lg:w-1/2 lg:h-full pt-30  lg:pt-20">
                        <h1 className="font-bold text-[56px] lg:text-[80px]  leading-tight flex flex-wrap gap-x-2">
                            {"About Us".split(" ").map((word, i) => (
                                <span
                                    key={i}
                                    className="bg-gradient-to-t from-white to-transparent bg-clip-text text-transparent"
                                >
                                    {word}
                                </span>
                            ))}
                        </h1>

                        <p className="text-[15px] text-white/30 mt-5 mb-10 text-justify lg:pr-10">
                            The colonial-era prison was transformed into a distinctive shopping
                            destination, blending history, architecture, and modern retail.
                            While preserving elements of its original design, the space
                            seamlessly integrated luxury boutiques, artisan shops, and art
                            galleries, creating a unique commercial and cultural experience.
                            High-end brands contrasted with the historic setting, while local
                            craftsmen showcased handmade goods, keeping the heritage alive.
                        </p>

                        <p className="text-white">Open 9.00 AM to 6:00 PM</p>
                        <p className="text-sm text-white/20 mt-2">Monday - Saturday</p>
                    </div>

                    {/* Image */}
                    <div className="lg:w-1/2 gap-5 mt-10 lg:mt-0 lg:gap-8 h-[30dvh] lg:h-full mb-3 lg:mb-0 lg:py-15 rounded-2xl flex justify-center items-center">
                        <div 
                        className='w-1/3 h-full flex items-start mb-3 lg:mb-0justify-center'>
                            <img src={testImage} alt="" 
                            className='w-full rounded-2xl h-11/12 object-cover' />
                        </div>
                        <div 
                        className='w-1/3 h-full flex items-end justify-center'>
                            <img src={testImage1} alt="" 
                            className='w-full rounded-2xl h-11/12 object-cover' />
                        </div>
                        <div 
                        className='w-1/3 h-full flex items-start justify-center'>
                            <img src={testImage2} alt="" 
                            className='w-full rounded-2xl h-11/12 object-cover' />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection