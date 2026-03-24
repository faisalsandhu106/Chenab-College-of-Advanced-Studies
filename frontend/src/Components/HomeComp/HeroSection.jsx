import React from 'react'
import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import HeroVideo from './HeroVideo';
import { IoIosSend } from 'react-icons/io';
import { SiCoursera } from 'react-icons/si';

//* Animation Variants
const DownToUpAnimation = {
    hidden: {
        opacity: 0,
        y: 110,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delayChildren: 0.2,
            staggerChildren: 0.2,
        },
    },
};

const HeroSection = () => {
    return (
        <>
            <div className='relative w-full h-screen overflow-hidden'>
                <div className='absolute top-0 left-0 z-[1] w-full h-full'>
                    <HeroVideo />
                </div>
                <div className='flex items-center justify-center absolute top-0 left-0 z-[2] md:pl- w-full h-full xl:h-screen bg-[#000000c9] bg-gradient-to-r from-[#884dc261] to-[#cba74371] text-white'>
                    <div className='flex flex-col xs:gap-y-2 md:gap-y-2 text-center drop-shadow-2xl overflow-hidden'>
                        <motion.div
                            initial={"hidden"}
                            animate={"show"}
                            variants={DownToUpAnimation}
                            viewport={{ once: true }}
                            className='flex flex-col xs:text-[7.3vw] md:text-[4.6vw] xl:text-[3.9vw] xs:font-black md:font-extrabold xs:leading-[10vw] md:leading-[5.8vw] xl:leading-[4.6vw] tracking-[-0.2px] uppercase'>
                            <div className='overflow-hidden'>
                                <motion.h1 variants={DownToUpAnimation}
                                >No Nation Can ProsperIn
                                </motion.h1>
                            </div>
                            <div className='overflow-hidden'>
                                <motion.div variants={DownToUpAnimation}>
                                    Life Without Education
                                </motion.div>
                            </div>
                        </motion.div>
                        <p className='px-3 md:px-28 xl:px-[300px] 2xl:px-[350px] text-[0.92em] md:text-[0.9em] xl:text-[1em] tracking-[0.1px]'>
                            At Chenab College of Advanced Studies, we are committed to providing quality education that nurtures innovation, critical thinking, and leadership.
                            {/* Our dynamic academic environment blends knowledge, research, and real-world experience to prepare students for successful careers and meaningful lives. */}
                        </p>
                        <div className='flex items-center justify-center pt-5 xs:gap-x-4 md:gap-x-5 w-auto'>
                            <NavLink to={'/apply-form'}>
                                <button type='button' className='flex items-center gap-x-1 px-[16px] py-2 xs:text-[0.86em] md:text-[0.9em] font-semibold tracking-[0.2px]'>
                                    Apply Now
                                    <IoIosSend className='text-lg' />
                                </button>
                            </NavLink>
                            <NavLink to={'/course'}>
                                <button type='button' className='flex items-center gap-x-1 px-[12px] py-2 xs:text-[0.86em] md:text-[0.9em] font-semibold tracking-[0.2px]'>
                                    View Course
                                    <SiCoursera className='text-lg' />
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection