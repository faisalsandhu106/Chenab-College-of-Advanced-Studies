import React, { useState } from 'react'
import { motion } from 'motion/react';
import { MdOutlineSlowMotionVideo } from 'react-icons/md';
import { RiCloseLargeFill } from 'react-icons/ri';


const DownToUpAnimation = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.35,
            // Stagger children by 0.1s, starting after a 0.2s delay
            delayChildren: 0.2,
            staggerChildren: 0.1,
        },
    },
};


const CollegeVideo = () => {
    const [isVideo, setIsVideo] = useState(false);

    const handleVideoToggle = () => {
        setIsVideo(!isVideo)
    }
    return (
        <>
            <div className='flex flex-col items-center xs:pt-10 md:pt-12 lg:pt-16 xl:pt-20 gap-y-5 w-full h-auto text-center'>
                <motion.div
                    initial={"hidden"}
                    whileInView={"show"}
                    variants={DownToUpAnimation}
                    viewport={{ once: true }}
                    className='overflow-hidden'>
                    <motion.h1 variants={DownToUpAnimation} className='light-dark-text flex flex-col items-center xs:text-[7vw] md:text-[4vw] lg:text-[3.8vw] xl:text-[3vw] font-black'>
                        Chenab College of Advanced Studies
                        <div className='title-underline mt-1 xs:w-[100px] md:w-[250px] xs:hidden md:inline-flex'></div>
                    </motion.h1>
                </motion.div>
                <p className='text-[0.99em]'>
                    The Chenab College of Advanced Studies (CCAS), Faisalabad is located on the Main West Canal Road, Near Royalton Hotel, Abdullah Pur, Faisalabad
                </p>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    viewport={{ once: true }}
                    className='relative z-[4] mt-1 w-full h-auto overflow-hidden'>
                    <figure className='relative z-[1] flex flex-col items-center justify-center gap-y-1 w-full xs:h-[220px] md:h-[260px] lg:h-[350px] xl:h-[400px] xs:order-1 md:order-2 overflow-hidden'>
                        <img className='xs:w-full xs:h-full md:h-auto bg-cover' src="./pic/chenab-college-pic.jpg" alt="chenab-pic" />
                    </figure>
                    {
                        !isVideo ? (
                            <div className='absolute top-0 left-0 z-[2] flex items-center justify-center gap-y-3 w-full h-full bg-[#00000058] bg-gradient-to-r from-[#884dc261] to-[#cba74371]'>
                                <div onClick={handleVideoToggle} className='xs:p-3 md:p-3 lg:p-4 rounded-full cursor-pointer hover:scale-110 duration-200 bg-[#167CE9] animate-pulse hover:animate-none'>
                                    <MdOutlineSlowMotionVideo className='text-4xl text-amber-50' />
                                </div>
                            </div>
                        )
                            :
                            <div className='fixed top-0 left-0 z-[3] flex flex-col items-center justify-center gap-y-3 w-full h-screen bg-[#000000b7]'>
                                <div className='flex items-center justify-end xs:w-[92%] md:w-[85%] lg:w-[80%] xl:w-[50%] h-auto'>
                                    <button type='button' className='p-1 text-white cursor-pointer hover:text-gray-300 hover:scale-[0.95] duration-100'>
                                        <RiCloseLargeFill onClick={handleVideoToggle} className='text-2xl' />
                                    </button>
                                </div>
                                <div className='xs:w-[92%] md:w-[85%] lg:w-[80%] xl:w-[50%] xs:h-[40%] xl:h-auto'>
                                    <video className='w-full h-auto object-cover rounded-sm' autoPlay loop controls src="./pic/ccas-video-4.mp4" />
                                </div>
                            </div>
                    }
                </motion.div>
            </div>
        </>
    )
}

export default CollegeVideo