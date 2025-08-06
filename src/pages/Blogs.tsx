
import NavBar from '../components/common/NavBar'
import { Link } from 'react-router'
import Footer from '../components/common/Footer';
import { useRef, useState } from 'react';

import FooterTopImage from "../assets/footer-image.png";
import FootetrtTopImageMobile from '../assets/footer-image-mobile.png'
import FooterArt2 from '../assets/gallery/perahera-art.png'
import FooterArt from "../assets/logos/ehelepola-walauwwe-logo-white.png";

import BlogImage from '../assets/gallery/B17A2214.jpg'
import Walawwa from "../assets/logos/sketch-white.png";

// blog interface
export interface Blog {
    id: string;
    title: string;
    description: string;
    image: string;
    p1: string;
    p2: string;
    p3: string;
}

const Blogs = () => {

    // blogs array
    const blogData: Blog[] = [
        {
            id: '1',
            title: 'Blog Title 1',
            description: 'Lorem ipsum dolor sit amet...',
            image: BlogImage,
            p1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ratione hic praesentium numquam minima magni. Natus officia voluptate quae earum omnis quam perferendis? Dolor iste consectetur eius expedita ab natus sed optio fugit ducimus illum, praesentium quo voluptatem aperiam odio dolore magni inventore a suscipit error incidunt in itaque? Ea ut repellendus ducimus vel! Consequatur quos fuga esse totam incidunt ipsam numquam, eligendi vitae sit vel nihil assumenda quam, atque dolore, nemo officia. Accusamus rerum totam aspernatur est, consequuntur asperiores distinctio et impedit consectetur quia harum velit corrupti saepe consequatur ipsam eveniet. Cum dolor minus maxime neque non amet repellat, fugit odit ex, obcaecati blanditiis dolorem quam assumenda velit? Enim, nam iusto nostrum unde accusantium inventore incidunt illo perspiciatis in minus temporibus ipsa architecto eos veniam quae impedit error optio eveniet ipsam aliquid? Aliquid, debitis obcaecati asperiores ipsum sit similique illo incidunt animi veniam doloremque laudantium possimus recusandae alias nam, quas est adipisci, enim nulla ab ut? Debitis, nulla quibusdam.',
            p2: 'Nesciunt quidem distinctio dicta totam dolorem nemo, quaerat quas et maiores deleniti in fuga voluptatum, eum omnis, qui dolor culpa eligendi aspernatur fugit asperiores? A molestiae distinctio aperiam quis quidem quisquam dignissimos beatae ex cumque labore fugit nulla, sequi voluptate hic, id quia nobis impedit delectus? Explicabo perspiciatis ducimus eveniet odio expedita reiciendis sapiente beatae corrupti ullam, molestiae quas placeat et aliquam provident distinctio facere quia fugiat alias minima! Deleniti nesciunt doloremque similique quia voluptates necessitatibus vero veniam est, asperiores unde at soluta maiores perspiciatis incidunt, eum ea tempore rem sapiente nobis velit corporis perferendis! Nesciunt, atque nam? Mollitia quo harum voluptates perferendis maiores dignissimos, ducimus, hic debitis voluptatibus laborum temporibus asperiores, rerum error fuga dolor est cumque esse numquam sequi accusamus fugiat illo? Modi, magni quod minus autem neque necessitatibus optio ullam accusantium dignissimos perspiciatis nobis quasi asperiores, ducimus exercitationem nihil, aspernatur esse minima dolorum unde velit deserunt ab rerum! Dolorem, eos sint quia et inventore minus molestiae possimus ad omnis dolores nulla laborum magni libero itaque est dolor cum earum similique sapiente suscipit maiores nesciunt.',
            p3: 'Ea similique amet id a deleniti non ipsum culpa. Quia, libero unde molestias est dignissimos veniam quaerat. Asperiores earum neque ullam ipsa, nulla quae eligendi nam esse, vitae commodi alias facilis rem nemo sit cum veritatis dicta sed mollitia blanditiis. Pariatur asperiores soluta ad architecto ex debitis reiciendis provident, ab officia! Illo quibusdam, deserunt hic corporis possimus cumque facere ratione laudantium fugit! Dicta nemo soluta quidem autem quas enim et animi ex beatae similique, ratione ut repellendus molestiae ea eaque rem architecto assumenda voluptate adipisci ducimus tenetur necessitatibus. Rem deleniti nostrum sit doloribus saepe adipisci voluptatem, corporis, delectus voluptatum quae tempore modi quisquam similique expedita. Voluptate maiores incidunt, recusandae maxime soluta quod eius sit eveniet distinctio eaque quaerat, voluptatem totam hic veritatis non sed asperiores officia adipisci. Minus repudiandae, nobis assumenda praesentium provident, ipsam possimus officiis tempora aliquam doloremque temporibus earum consectetur quos quis similique ipsa? Ratione necessitatibus optio, ea ab eligendi voluptatem? Repellat, magni incidunt! Repudiandae nostrum magni accusantium quis, maiores eum?'
        },

        {
            id: '2',
            title: 'Blog Title 2',
            description: 'Lorem ipsum dolor sit amet...',
            image: BlogImage,
            p1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ratione hic praesentium numquam minima magni. Natus officia voluptate quae earum omnis quam perferendis? Dolor iste consectetur eius expedita ab natus sed optio fugit ducimus illum, praesentium quo voluptatem aperiam odio dolore magni inventore a suscipit error incidunt in itaque? Ea ut repellendus ducimus vel! Consequatur quos fuga esse totam incidunt ipsam numquam, eligendi vitae sit vel nihil assumenda quam, atque dolore, nemo officia. Accusamus rerum totam aspernatur est, consequuntur asperiores distinctio et impedit consectetur quia harum velit corrupti saepe consequatur ipsam eveniet. Cum dolor minus maxime neque non amet repellat, fugit odit ex, obcaecati blanditiis dolorem quam assumenda velit? Enim, nam iusto nostrum unde accusantium inventore incidunt illo perspiciatis in minus temporibus ipsa architecto eos veniam quae impedit error optio eveniet ipsam aliquid? Aliquid, debitis obcaecati asperiores ipsum sit similique illo incidunt animi veniam doloremque laudantium possimus recusandae alias nam, quas est adipisci, enim nulla ab ut? Debitis, nulla quibusdam.',
            p2: 'Nesciunt quidem distinctio dicta totam dolorem nemo, quaerat quas et maiores deleniti in fuga voluptatum, eum omnis, qui dolor culpa eligendi aspernatur fugit asperiores? A molestiae distinctio aperiam quis quidem quisquam dignissimos beatae ex cumque labore fugit nulla, sequi voluptate hic, id quia nobis impedit delectus? Explicabo perspiciatis ducimus eveniet odio expedita reiciendis sapiente beatae corrupti ullam, molestiae quas placeat et aliquam provident distinctio facere quia fugiat alias minima! Deleniti nesciunt doloremque similique quia voluptates necessitatibus vero veniam est, asperiores unde at soluta maiores perspiciatis incidunt, eum ea tempore rem sapiente nobis velit corporis perferendis! Nesciunt, atque nam? Mollitia quo harum voluptates perferendis maiores dignissimos, ducimus, hic debitis voluptatibus laborum temporibus asperiores, rerum error fuga dolor est cumque esse numquam sequi accusamus fugiat illo? Modi, magni quod minus autem neque necessitatibus optio ullam accusantium dignissimos perspiciatis nobis quasi asperiores, ducimus exercitationem nihil, aspernatur esse minima dolorum unde velit deserunt ab rerum! Dolorem, eos sint quia et inventore minus molestiae possimus ad omnis dolores nulla laborum magni libero itaque est dolor cum earum similique sapiente suscipit maiores nesciunt.',
            p3: 'Ea similique amet id a deleniti non ipsum culpa. Quia, libero unde molestias est dignissimos veniam quaerat. Asperiores earum neque ullam ipsa, nulla quae eligendi nam esse, vitae commodi alias facilis rem nemo sit cum veritatis dicta sed mollitia blanditiis. Pariatur asperiores soluta ad architecto ex debitis reiciendis provident, ab officia! Illo quibusdam, deserunt hic corporis possimus cumque facere ratione laudantium fugit! Dicta nemo soluta quidem autem quas enim et animi ex beatae similique, ratione ut repellendus molestiae ea eaque rem architecto assumenda voluptate adipisci ducimus tenetur necessitatibus. Rem deleniti nostrum sit doloribus saepe adipisci voluptatem, corporis, delectus voluptatum quae tempore modi quisquam similique expedita. Voluptate maiores incidunt, recusandae maxime soluta quod eius sit eveniet distinctio eaque quaerat, voluptatem totam hic veritatis non sed asperiores officia adipisci. Minus repudiandae, nobis assumenda praesentium provident, ipsam possimus officiis tempora aliquam doloremque temporibus earum consectetur quos quis similique ipsa? Ratione necessitatibus optio, ea ab eligendi voluptatem? Repellat, magni incidunt! Repudiandae nostrum magni accusantium quis, maiores eum?'
        },

        {
            id: '3',
            title: 'Blog Title 3',
            description: 'Lorem ipsum dolor sit amet...',
            image: BlogImage,
            p1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ratione hic praesentium numquam minima magni. Natus officia voluptate quae earum omnis quam perferendis? Dolor iste consectetur eius expedita ab natus sed optio fugit ducimus illum, praesentium quo voluptatem aperiam odio dolore magni inventore a suscipit error incidunt in itaque? Ea ut repellendus ducimus vel! Consequatur quos fuga esse totam incidunt ipsam numquam, eligendi vitae sit vel nihil assumenda quam, atque dolore, nemo officia. Accusamus rerum totam aspernatur est, consequuntur asperiores distinctio et impedit consectetur quia harum velit corrupti saepe consequatur ipsam eveniet. Cum dolor minus maxime neque non amet repellat, fugit odit ex, obcaecati blanditiis dolorem quam assumenda velit? Enim, nam iusto nostrum unde accusantium inventore incidunt illo perspiciatis in minus temporibus ipsa architecto eos veniam quae impedit error optio eveniet ipsam aliquid? Aliquid, debitis obcaecati asperiores ipsum sit similique illo incidunt animi veniam doloremque laudantium possimus recusandae alias nam, quas est adipisci, enim nulla ab ut? Debitis, nulla quibusdam.',
            p2: 'Nesciunt quidem distinctio dicta totam dolorem nemo, quaerat quas et maiores deleniti in fuga voluptatum, eum omnis, qui dolor culpa eligendi aspernatur fugit asperiores? A molestiae distinctio aperiam quis quidem quisquam dignissimos beatae ex cumque labore fugit nulla, sequi voluptate hic, id quia nobis impedit delectus? Explicabo perspiciatis ducimus eveniet odio expedita reiciendis sapiente beatae corrupti ullam, molestiae quas placeat et aliquam provident distinctio facere quia fugiat alias minima! Deleniti nesciunt doloremque similique quia voluptates necessitatibus vero veniam est, asperiores unde at soluta maiores perspiciatis incidunt, eum ea tempore rem sapiente nobis velit corporis perferendis! Nesciunt, atque nam? Mollitia quo harum voluptates perferendis maiores dignissimos, ducimus, hic debitis voluptatibus laborum temporibus asperiores, rerum error fuga dolor est cumque esse numquam sequi accusamus fugiat illo? Modi, magni quod minus autem neque necessitatibus optio ullam accusantium dignissimos perspiciatis nobis quasi asperiores, ducimus exercitationem nihil, aspernatur esse minima dolorum unde velit deserunt ab rerum! Dolorem, eos sint quia et inventore minus molestiae possimus ad omnis dolores nulla laborum magni libero itaque est dolor cum earum similique sapiente suscipit maiores nesciunt.',
            p3: 'Ea similique amet id a deleniti non ipsum culpa. Quia, libero unde molestias est dignissimos veniam quaerat. Asperiores earum neque ullam ipsa, nulla quae eligendi nam esse, vitae commodi alias facilis rem nemo sit cum veritatis dicta sed mollitia blanditiis. Pariatur asperiores soluta ad architecto ex debitis reiciendis provident, ab officia! Illo quibusdam, deserunt hic corporis possimus cumque facere ratione laudantium fugit! Dicta nemo soluta quidem autem quas enim et animi ex beatae similique, ratione ut repellendus molestiae ea eaque rem architecto assumenda voluptate adipisci ducimus tenetur necessitatibus. Rem deleniti nostrum sit doloribus saepe adipisci voluptatem, corporis, delectus voluptatum quae tempore modi quisquam similique expedita. Voluptate maiores incidunt, recusandae maxime soluta quod eius sit eveniet distinctio eaque quaerat, voluptatem totam hic veritatis non sed asperiores officia adipisci. Minus repudiandae, nobis assumenda praesentium provident, ipsam possimus officiis tempora aliquam doloremque temporibus earum consectetur quos quis similique ipsa? Ratione necessitatibus optio, ea ab eligendi voluptatem? Repellat, magni incidunt! Repudiandae nostrum magni accusantium quis, maiores eum?'
        },


        {
            id: '4',
            title: 'Blog Title 4',
            description: 'Lorem ipsum dolor sit amet...',
            image: BlogImage,
            p1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ratione hic praesentium numquam minima magni. Natus officia voluptate quae earum omnis quam perferendis? Dolor iste consectetur eius expedita ab natus sed optio fugit ducimus illum, praesentium quo voluptatem aperiam odio dolore magni inventore a suscipit error incidunt in itaque? Ea ut repellendus ducimus vel! Consequatur quos fuga esse totam incidunt ipsam numquam, eligendi vitae sit vel nihil assumenda quam, atque dolore, nemo officia. Accusamus rerum totam aspernatur est, consequuntur asperiores distinctio et impedit consectetur quia harum velit corrupti saepe consequatur ipsam eveniet. Cum dolor minus maxime neque non amet repellat, fugit odit ex, obcaecati blanditiis dolorem quam assumenda velit? Enim, nam iusto nostrum unde accusantium inventore incidunt illo perspiciatis in minus temporibus ipsa architecto eos veniam quae impedit error optio eveniet ipsam aliquid? Aliquid, debitis obcaecati asperiores ipsum sit similique illo incidunt animi veniam doloremque laudantium possimus recusandae alias nam, quas est adipisci, enim nulla ab ut? Debitis, nulla quibusdam.',
            p2: 'Nesciunt quidem distinctio dicta totam dolorem nemo, quaerat quas et maiores deleniti in fuga voluptatum, eum omnis, qui dolor culpa eligendi aspernatur fugit asperiores? A molestiae distinctio aperiam quis quidem quisquam dignissimos beatae ex cumque labore fugit nulla, sequi voluptate hic, id quia nobis impedit delectus? Explicabo perspiciatis ducimus eveniet odio expedita reiciendis sapiente beatae corrupti ullam, molestiae quas placeat et aliquam provident distinctio facere quia fugiat alias minima! Deleniti nesciunt doloremque similique quia voluptates necessitatibus vero veniam est, asperiores unde at soluta maiores perspiciatis incidunt, eum ea tempore rem sapiente nobis velit corporis perferendis! Nesciunt, atque nam? Mollitia quo harum voluptates perferendis maiores dignissimos, ducimus, hic debitis voluptatibus laborum temporibus asperiores, rerum error fuga dolor est cumque esse numquam sequi accusamus fugiat illo? Modi, magni quod minus autem neque necessitatibus optio ullam accusantium dignissimos perspiciatis nobis quasi asperiores, ducimus exercitationem nihil, aspernatur esse minima dolorum unde velit deserunt ab rerum! Dolorem, eos sint quia et inventore minus molestiae possimus ad omnis dolores nulla laborum magni libero itaque est dolor cum earum similique sapiente suscipit maiores nesciunt.',
            p3: 'Ea similique amet id a deleniti non ipsum culpa. Quia, libero unde molestias est dignissimos veniam quaerat. Asperiores earum neque ullam ipsa, nulla quae eligendi nam esse, vitae commodi alias facilis rem nemo sit cum veritatis dicta sed mollitia blanditiis. Pariatur asperiores soluta ad architecto ex debitis reiciendis provident, ab officia! Illo quibusdam, deserunt hic corporis possimus cumque facere ratione laudantium fugit! Dicta nemo soluta quidem autem quas enim et animi ex beatae similique, ratione ut repellendus molestiae ea eaque rem architecto assumenda voluptate adipisci ducimus tenetur necessitatibus. Rem deleniti nostrum sit doloribus saepe adipisci voluptatem, corporis, delectus voluptatum quae tempore modi quisquam similique expedita. Voluptate maiores incidunt, recusandae maxime soluta quod eius sit eveniet distinctio eaque quaerat, voluptatem totam hic veritatis non sed asperiores officia adipisci. Minus repudiandae, nobis assumenda praesentium provident, ipsam possimus officiis tempora aliquam doloremque temporibus earum consectetur quos quis similique ipsa? Ratione necessitatibus optio, ea ab eligendi voluptatem? Repellat, magni incidunt! Repudiandae nostrum magni accusantium quis, maiores eum?'
        },
    ];


    // blog handle
    // current blog
    const [currentBlog, setCurrentBlog] = useState<Blog>(blogData[0]);
    const blogDetails = useRef<HTMLDivElement>(null);

    // para visibility
    const [paraVisibility, setParaVisibility] = useState<boolean>(false);
    const showPara = () => {
        if (!paraVisibility) {
            setParaVisibility(true);
        } else {
            setParaVisibility(false);
        }
    }

    // handle function
    const handleBlog = (id: string) => {
        const selectedBlog = blogData.find((b) => b.id === id);
        if (selectedBlog) {
            //set selected blog
            setCurrentBlog(selectedBlog);
            setTimeout(() => {
                blogDetails.current?.scrollIntoView({ behavior: 'smooth' });
            }, 100)

        }
    }


    return (
        <>
            <section
                className={`absolute w-full z-50 transition-all duration-2000 ease-in-out`}
            >
                <NavBar page="blogs" />
            </section>

            <section
                className='bg-primary h-[55dvh] flex items-center justify-center pt-20'>
                <div className="mt-10">
                    <h1 className="font-bold text-[56px] lg:text-7xl justify-center -mt-10 lg:mt-0 items-center text-center leading-tight flex flex-wrap gap-x-2">
                        {"Our Blogs".split(" ").map((word, i) => (
                            <span
                                key={i}
                                className="bg-gradient-to-t from-white to-transparent bg-clip-text text-transparent text-center"
                            >
                                {word}
                            </span>
                        ))}
                    </h1>
                    <p className='text-secondary/20 px-5 md:px-30 lg:px-10 mt-3 lg:w-4/5 text-center mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio, asperiores sapiente aut qui excepturi facilis suscipit modi nesciunt eum.</p>

                    <div className="lg:hidden block mt-5 mb-5 w-5/6 mx-auto lg:hidden">
                        <img src={Walawwa} alt="" />
                    </div>
                </div>
            </section>

            <section className='w-5/6 mx-auto mt-30 h-auto flex items-center justify-center'>
                <div
                    ref={blogDetails}
                    className='h-full w-full flex-col-reverse lg:flex-row flex  gap-10'>
                    <div
                        className='w-full lg:w-8/12 text-center lg:text-left'>
                        <h2 className='text-primary leading-15  lg:text-5xl text-[42px] font-bold mb-3'>{currentBlog.title}</h2>
                        <p className='text-primary/80'>{currentBlog.description}</p>

                        <p className='mt-10 text-primary/60 text-justify'>{currentBlog.p1}</p>

                        <p className='mt-10 text-primary/60 text-justify'>{currentBlog.p2}</p>

                        <p className={`mt-10 text-primary/60 text-justify ${paraVisibility ? '' : 'hidden'}`}>{currentBlog.p3}</p>

                        <button
                            onClick={showPara}
                            className='px-10 justify-self-end py-3 rounded-2xl border-2 border-primary mt-8 hover:cursor-pointer hover:bg-primary hover:text-secondary  '>
                            Read More
                        </button>
                    </div>

                    <div
                        className='lg:w-4/12 flex items-start justify-center lg:pt-20'>
                        <img src={currentBlog.image} alt="" className={`w-full border-20 lg:border-40 border-primary object-cover ${paraVisibility ? 'h-8/12' : 'h-full'}`} />
                    </div>
                </div>
            </section>

            {/* blogs card */}
            <section className='h-auto mt-20 lg:mt-30'>
                <div className='border-2 border-white h-full w-5/6 mx-auto lg:p-2'>
                    <h2 className='text-primary lg:text-left text-center leading-15 h-2/12 lg:text-6xl text-[42px] font-bold mb-3'>Other Blogs</h2>
                    <div
                        className='lg:h-10/12 w-full flex flex-wrap gap-10 mt-10 justify-between'>
                        {/* card */}
                        {blogData.map((blog: Blog) => (
                            <div
                                className='bg-secondary shadow-4xl rounded-2xl flex p-2 w-full lg:w-[600px] gap-3 h-45 lg:h-55'>
                                <img src={blog.image} alt="" className='w-1/3 p-3 rounded-2xl object-cover' />

                                <div className='w-2/3 flex flex-col pt-2'>
                                    <h4 className='mb-3 font-semibold text-lg lg:text-xl'>{blog.title}</h4>
                                    {/* description limit 35 words */}
                                    <p className='hidden md:block text-primary/80 text-sm lg:text-base text-justify'>
                                        {blog.p1.split(' ').slice(0, 20).join(' ')}{blog.p1.split(' ').length > 20 ? '...' : ''}
                                    </p>

                                    <p className='lg:hidden block text-primary/80 text-sm lg:text-base text-justify'>
                                        {blog.p1.split(' ').slice(0, 10).join(' ')}{blog.p1.split(' ').length > 10 ? '...' : ''}
                                    </p>
                                    <Link to="#"
                                        className='flex items-center justify-end pr-2 lg:pr-5'>
                                        <button
                                            onClick={() => handleBlog(blog.id)}
                                            className='px-5 text-sm justify-self-end py-2 lg:py-2 rounded-2xl border-2 border-primary mt-4 lg:mt-8 hover:cursor-pointer hover:bg-primary hover:text-secondary  '>
                                            View Blog
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* footer top */}
            <section className="">
                <div>
                    <img src={FooterTopImage} className='hidden md:block ' />
                    <img src={FootetrtTopImageMobile} className='md:hidden block' />
                </div>

                {/* footer body */}
                <section className="bg-primary relative z-10">
                    <div className="absolute h-11/12 py-5 right-0 opacity-5 scale-x-[-1]">
                        <img src={FooterArt2} alt="" className="h-full w-full hidden lg:block" />
                        <img src={FooterArt} alt="" className="h-140 w-200 hidden" />
                    </div>

                    <Footer />
                </section>
            </section>
        </>
    )
}

export default Blogs