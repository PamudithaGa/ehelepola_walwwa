

import NavBar from '../components/common/NavBar'

const Blogs = () => {
    return (
        <>
            <section
                className={`absolute w-full z-50 transition-all duration-2000 ease-in-out`}
            >
                <NavBar page="about" />
            </section>

            <section
                className='bg-red-500'>
                <div className="">
                    <h1 className="text-primary pt-50 leading-15 text-center lg:text-6xl text-[42px] font-bold ">
                        Our Blogs
                    </h1>
                </div>

                <div
                className='bg-green-600 mt-30'>
                    Blog card section
                </div>

            </section>
        </>
    )
}

export default Blogs