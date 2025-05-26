import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "About me.",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: "I'm a freelance web designer and developer focused on creating clean, responsive websites that help businesses grow. I combine great design with efficient code to bring your ideas to life online — tailored, fast, and user-friendly."
    },
    {
        heading: "Services.",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: "I offer custom web design and development tailored to your needs — from sleek landing pages to full-scale websites. Whether you're starting from scratch or need a refresh, I build fast, responsive, and SEO-friendly solutions that work on any device."
    },
    {
        heading: "Our Works.",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: "Every project is built with care and purpose. From business sites to creative portfolios, I design and develop solutions that look great, perform well, and deliver results. Quality, clarity, and usability are at the core of every build."
    },
]

const Aboutus = () => {
    return (

        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-blue text-lg tracking-widest'>ABOUT ME</h3>
                <h4 className='text-center text-4xl lg:text-65xl font-bold'>Know more about me.</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                            <h4 className='text-4xl font-semibold  text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                            <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4> 
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Aboutus;
