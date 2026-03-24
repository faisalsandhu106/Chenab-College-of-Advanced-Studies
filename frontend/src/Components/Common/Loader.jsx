import React from 'react'
import { motion, } from 'motion/react';
const Loader = () => {
    return (
        <>
            <motion.div
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: '-100%', opacity: 1 }}
                transition={{ duration: 1.5, delay: 3.3, ease: [0.2, 0.99, 0.2, 0.94] }}
                className='loader fixed top-0 left-0 z-[22] px-4 xs:text-[9.5vw] md:text-[5vw] lg:text-[5.5vw] xl:text-[4vw] 2xl:text-[4vw] font-black leading-[1.09em] text-center text-nowrap'>
                <h1 className='flex items-center justify-center w-full min-h-[500px]'>
                    Welcome
                </h1>
                <h1 className='flex items-center justify-center w-full min-h-[500px]'>
                    To
                </h1>
                <h1 className='flex flex-col items-center justify-center min-h-[400px]'>
                    <span>Chenad College of</span>
                    <span> Advanced Studies</span>
                </h1>
            </motion.div>
        </>
    )
}

export default Loader