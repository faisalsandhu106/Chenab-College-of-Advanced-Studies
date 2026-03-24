import React from 'react'
import { motion } from 'motion/react';
import { ToastContainer } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import { RxUpdate } from 'react-icons/rx';
import { MdDelete } from 'react-icons/md';
import CardSkeleton from '../../../../Components/Skeleton Animations/CardSkeleton';
import NotFoundData from '../../../../Components/Common/NotFoundData';

//* Animation variants
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
            delayChildren: 0.1,
            staggerChildren: 0.1,
        },
    },
};

function EventCard({ isEventLoading, AllEvent, filterData, deleteEvent }) {
    //* Loading Animation
    if (isEventLoading || AllEvent.length === 0) {
        return (
            <div className='grid xs:grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 justify-items-center md:px-2 lg:px-4 xl:px-10 2xl:px-14 md:gap-x-5 lg:gap-x-5 xl:gap-x-6 gap-y-10'>
                <CardSkeleton cards={12} />
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
                    <>
                        <motion.div
                            initial={"hidden"}
                            animate={"show"}
                            variants={DownToUpAnimation}
                            viewport={{ once: true }}
                            className='grid xs:grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 justify-items-center md:px-2 lg:px-4 xl:px-10 2xl:px-14 md:gap-x-7 xl:gap-x-8 xs:gap-y-10 md:gap-y-12'>
                            {
                                filterData.map((curElem, index) => {
                                    const { _id, eventTitle, category, longEventDetails, imageUrl, future } = curElem
                                    return (
                                        <motion.div variants={DownToUpAnimation} key={index} className='w-full h-full'>
                                            <div className='Admin-Card-box card-component-borde grid xs:grid-cols-1 xl:grid-cols-3 xl:py-5 w-full h-full rounded-lg overflow-hidden'>
                                                <div className='xl:px-2 w-full'>
                                                    <figure className='w-full xs:h-[180px] md:h-[130px] lg:h-[145px] xl:h-[82px] xl:rounded-[4px] overflow-hidden'>
                                                        <img className='w-full xs:h-auto bg-cover xl:rounded-[4px]' src={imageUrl[0]} alt="eventg-img" />
                                                    </figure>
                                                    <div className='text-[0.8em] font-medium xs:hidden xl:block'>
                                                        {future > "false" ? "Coming Up" : "Remember"}
                                                        <div className='title-underline w-[30px]'></div>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col items-start justify-between xl:col-span-2 px-3 py-4 xl:py-0'>
                                                    <div className='flex flex-col'>
                                                        <div className='flex flex-col xs:text-[1em] capitalize font-medium'>
                                                            {/* Only For XS */}
                                                            <h1 className='xs:text-[1.1em] md:hidden'>
                                                                {eventTitle.length > 30 ? eventTitle.slice(0, 30) + '...' : eventTitle}
                                                            </h1>
                                                            {/* For MD & LG Sceen */}
                                                            <h1 className='md:text-[0.95em] lg:text-[1.03em] font-medium xs:hidden md:inline-flex'>
                                                                {eventTitle.length > 25 ? eventTitle.slice(0, 25) + '...' : eventTitle}
                                                            </h1>
                                                            <div className='title-underline mt-1 w-[50px]'></div>
                                                        </div>
                                                        <div className='flex items-center justify-between py-3 w-full text-[0.8em] font-medium capitalize'>
                                                            <div className='xl:hidden'>
                                                                {future > "false" ? "Coming Up" : "Remember"}
                                                            </div>
                                                            <div>
                                                                {category.length > 16 ? category.slice(0, 12) + ".." : category}
                                                            </div>
                                                        </div>
                                                        <p className='xs:h-[110px] md:h-[120px] lg:h-[115px] xl:h-[120px] 2xl:h-[110px] xs:text-[0.97em] md:text-[0.8em] lg:text-[0.9em] xl:text-[0.9em]'>
                                                            {longEventDetails.length > 109 ? longEventDetails.slice(0, 109) + '...' : longEventDetails}
                                                        </p>
                                                    </div>
                                                    <div className='flex items-center justify-end gap-x-3 w-full xs:text-[0.9em] md:text-[0.7em] xl:text-[0.76em]'>
                                                        <NavLink to={`/admin/allevents/${_id}/edit`}>
                                                            <button className='flex items-center gap-x-1 px-[10px] py-[6px] text-[0.9em] font-medium rounded-[5px] tracking-[0.4px] hover:bg-blue-400'>
                                                                Edit
                                                                <RxUpdate />
                                                            </button>
                                                        </NavLink>
                                                        <button onClick={() => deleteEvent(_id)} className='flex items-center gap-x-1 px-[10px] py-[6px] text-[0.9em] font-medium rounded-[5px] tracking-[0.4px] bg-red-500 hover:bg-red-400'>
                                                            Delete
                                                            <MdDelete className='text-[15px]' />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )
                                })
                            }
                        </motion.div>

                        <ToastContainer />
                    </>
            }
        </>
    )
}

export default EventCard