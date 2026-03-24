import React from 'react'
import { motion } from 'motion/react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import CardSkeleton from '../Skeleton Animations/CardSkeleton';
import NotFoundData from '../Common/NotFoundData';

//* Animation Variants
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


const EventCards = ({ isEventLoading, AllEvent, filterData }) => {

    //* Loading Animate
    if (isEventLoading || AllEvent.length === 0) {
        return (
            <div className='grid xs:grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 justify-items-center pt-5 md:gap-x-5 lg:gap-x-6 2xl:gap-x-8 gap-y-1'>
                <CardSkeleton cards={9} />
            </div>
        )
    };

    return (
        <>
            {
                filterData.length === 0 ? (
                    <NotFoundData data="Event" />
                )
                    :
                    (
                        <motion.div
                            initial={"hidden"}
                            animate={"show"}
                            variants={DownToUpAnimation}
                            viewport={{ once: true }}
                            className='grid xs:grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 justify-items-center pt-6 md:gap-x-7 2xl:gap-x-8 gap-y-10'>
                            {
                                filterData.map((curElem, index) => {
                                    const { _id, eventTitle, category, longEventDetails, imageUrl, future } = curElem
                                    return (
                                        <motion.div variants={DownToUpAnimation} key={index} className='w-full'>
                                            <div className='Card-box flex flex-col justify-between xl:grid xl:grid-cols-3 xl:py-4 w-full h-full rounded-lg overflow-hidden'>
                                                <div className='xl:px-2 w-full'>
                                                    <figure className='w-full xs:h-[180px] md:h-[135px] lg:h-[150px] xl:h-[82px] xl:rounded-[4px] overflow-hidden'>
                                                        <img className='w-full xs:h-auto bg-cover xl:rounded-[4px]' src={imageUrl[0]} alt="eventg-img" />
                                                    </figure>
                                                    <div className='xl:pt-3 text-[0.8em] font-medium xs:hidden xl:bloc'>
                                                        {future > "false" ? "Coming Up" : "Remember"}
                                                        <div className='title-underline w-[30px]'></div>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col xl:col-span-2 xs:px-3 xl:px-3 py-4 xl:py-0'>
                                                    <div className='flex flex-col'>
                                                        <div className='flex flex-col capitalize font-medium'>
                                                            {/* Only For XS */}
                                                            <h1 className='xs:text-[1.1em] md:hidden'>
                                                                {eventTitle.length > 30 ? eventTitle.slice(0, 30) + '...' : eventTitle}
                                                            </h1>
                                                            {/* For MD & LG Sceen */}
                                                            <h1 className='md:text-[0.98em] lg:text-[1.03em] font-medium xs:hidden md:inline-flex'>
                                                                {eventTitle.length > 20 ? eventTitle.slice(0, 20) + '...' : eventTitle}
                                                            </h1>
                                                            <div className='title-underline w-[50px]'></div>
                                                        </div>
                                                        <div className='flex items-center justify-between py-4 w-full xs:text-[0.86em] md:text-[0.8em] font-medium capitalize'>
                                                            <div>
                                                                {category.length > 12 ? category.slice(0, 12) + ".." : category}
                                                            </div>
                                                            <div>
                                                                {future > "false" ? "Coming Up" : "Remember"}
                                                            </div>
                                                        </div>
                                                        <p className='xs:h-[90px] md:h-[85px] lg:h-[90px] xl:h-[90px] 2xl:h-[105px] xs:text-[0.96em] md:text-[0.84em] lg:text-[0.92em] xl:text-[0.9em]'>
                                                            {longEventDetails.length > 109 ? longEventDetails.slice(0, 109) + '...' : longEventDetails}
                                                        </p>
                                                    </div>
                                                    <div className='flex items-center justify-between xs:pt-6 px-1 py-1 w-full'>
                                                        <div></div>
                                                        <NavLink to={`/event/${_id}/singlePage`}>
                                                            <button type='button' className='px-[8px] py-[4px] xs:text-[0.78em] md:text-[0.65em] xl:text-[0.72em] font-medium rounded-sm'>
                                                                Read More
                                                            </button>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )
                                })
                            }
                        </motion.div>
                    )
            }
        </>
    )
}

export default EventCards