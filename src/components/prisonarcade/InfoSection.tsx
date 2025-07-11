import React from 'react'

import PrisonArcadeLogo from "../../assets/logos/prison-arcade-logo-black.png";
import Walawwa from "../../assets/gallery/arcade.jpg";

const InfoSection = () => {
    return (
        <div className="lg:pb-0 text-white -mt-30 flex lg:flex-row flex-col items-center justify-between h-[90dvh] lg:h-[80dvh] px-3 lg:px-16  overflow-hidden">

            {/* Right Side - Image */}
            <div className="lg:w-1/2 flex justify-center lg:mt-30 items-center rounded-2xl">
                {/* Torn effect image */}

                <div className="relative z-10 w-[90%] h-auto rounded-2xl">
                    <img
                        src={Walawwa}
                        alt="Walawwa"
                        className="w-full h-auto object-cover rounded-2xl"
                    />
                </div>


                {/* Overlay Logo */}
                <div className="absolute bottom-5 bg-secondary rounded-2xl flex justify-center items-center w-60 h-60 left-1/2 left-160 z-20 rounded-full">
                    <img
                        src={PrisonArcadeLogo}
                        alt="Prison Arcade Logo"
                        className="w-35 h-auto opacity-90 -mt-5"
                    />
                </div>
            </div>

            {/* Left Side - Description */}
            <div className="lg:w-1/2 p-3 text-primary lg:p-8 rounded-2xl mt-20 lg:mt-30 lg:pr-10 ">
                <h1 className="text-4xl  font-light mb-6">Prison Arcade</h1>
                <p className="text-primary/[0.6] text-lg leading-relaxed lg:text-left text-justify">
                    The colonial-era prison was transformed into a distinctive shopping
                    destination, blending history, architecture, and modern retail. While
                    preserving elements of its original design, the space seamlessly
                    integrated luxury boutiques, artisan shops, and art galleries,
                    creating a unique commercial and cultural experience.
                    <br />
                    <br />
                    High-end brands contrasted with the historic setting, while local
                    craftsmen showcased handmade goods. Art installations and galleries
                    explored themes of freedom and transformation, reflecting the site’s
                    past.
                </p>
            </div>
        </div>
    )
}

export default InfoSection