import React from 'react'
import { motion } from 'motion/react';
import ChenabLogo from '../Common/ChenabLogo';

const DownToUpAnimation = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            // Stagger children by 0.1s, starting after a 0.2s delay
            delayChildren: 0.2,
            staggerChildren: 0.1,
        },
    },
};

const VisionMisssion = () => {
    return (
        <>
            <motion.div
                initial={"hidden"}
                whileInView={"show"}
                variants={DownToUpAnimation}
                viewport={{ once: true }}
                className='light-dark-text grid xs:grid-cols-1 lg:grid-cols-3 justify-center xs:pt-10 md:pt-12 md:px-3 lg:px-5 xl:px-12 xs:gap-y-12 md:gap-y-8 w-full h-auto overflow-hidden'>
                <div className='overflow-hidden'>
                    <motion.div variants={DownToUpAnimation} className='w-full'>
                        <h1 className='pb-3 text-[1.3em] font-bold'>
                            Our Vision
                            <div className='title-underline w-[50px]'></div>
                        </h1>
                        <p className='text-[0.99em]'>
                            Our vision is to be an internationally acclaimed College in Leadership and Research by providing exemplary education and research facilities with a commitment to achieve the academic excellence & polish the student’s qualities in such a way that they can be able to think logically, communicate clearly live ethically and be able to accept modern world challenges
                        </p>
                    </motion.div>
                </div>
                <div className='flex flex-col items-center justify-start w-full'>
                    <h1 className='lg:mr-2 text-[1.2em] font-bold'>
                        CCAS
                    </h1>
                    <figure className='chenab-logo-animation lg:mr-2 xs:w-[110px] md:w-[100px] xl:w-[90px]'>
                        <ChenabLogo />
                    </figure>
                </div>
                <div className='overflow-hidden'>
                    <motion.div variants={DownToUpAnimation} className='w-full'>
                        <h1 className='pb-3 text-[1.3em] font-bold'>
                            Our Mission
                            <div className='title-underline w-[50px]'></div>
                        </h1>
                        <p className='text-[0.99em]'>
                            The Chenab College of Advaenced Studies prepare students to understand, contribute, and succeed in a rapidly changing society, thus making the world a better. We will ensure that our students develop both the skills that a sound education provides, competencies essential for success and leadership in the emerging creative economy.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}

export default VisionMisssion