import React from 'react'
import { motion } from 'motion/react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import CardSkeleton from '../Skeleton Animations/CardSkeleton';

//* DownToUp Animation Motion JS
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

const ListCourseComp = ({ isLoading, Allcourses, filterCourse }) => {

    //* Loading Animate
    if (isLoading || Allcourses.length === 0) {
        return (
            <div className='grid grid-cols-1 md:gap-y-9 w-full'>
                <CardSkeleton cards={8} />
            </div>
        )
    };

    return (
        <>
            <motion.div
                initial={"hidden"}
                whileInView={"show"}
                variants={DownToUpAnimation}
                viewport={{ once: true }}
                className='grid grid-cols-1 gap-y-10 w-full'>
                {
                    filterCourse.map((curElem, index) => {
                        const { _id, image, title, duration, courseFee, level, description } = curElem;
                        return (
                            <div key={index} className='w-full h-full'>
                                <div className='Card-box grid md:grid-cols-5 lg:grid-cols-4 md:py-5 w-full h-full rounded-lg'>
                                    <div className='flex xs:items-center md:items-start justify-center w-full'>
                                        <figure className='xs:w-full md:w-[115px] lg:w-[150px] xl:w-[250px] rounded-sm overflow-hidden'>
                                            <img className='w-full h-auto bg-cover rounded-[4px]' src={image} alt="product_img" />
                                        </figure>
                                    </div>
                                    <div className='flex flex-col justify-start md:col-span-4 lg:col-span-3 md:gap-y-2 xl:gap-y-3 w-full md:text-[0.7em] xl:text-[0.92em]'>
                                        <div className='flex justify-start gap-x-[6px] capitalize'>
                                            <p className='md:min-w-[90px] lg:min-w-[100px] xl:min-w-[120px] font-medium'>Name:</p>
                                            <div>
                                                {title}
                                            </div>
                                        </div>
                                        <div className='flex justify-start gap-x-[6px] capitalize'>
                                            <p className='md:min-w-[90px] lg:min-w-[100px] xl:min-w-[120px] font-medium'>Duration:</p>
                                            <div>
                                                {duration}
                                            </div>
                                        </div>
                                        <div className='flex justify-start gap-x-[6px] capitalize'>
                                            <p className='md:min-w-[90px] lg:min-w-[100px] xl:min-w-[120px] font-medium'>Level:</p>
                                            <div>
                                                {level}
                                            </div>
                                        </div>
                                        <div className='xs:hidden md:inline-flex flex items-start pr-4 gap-x-[6px]'>
                                            <p className='md:min-w-[90px] lg:min-w-[100px] xl:min-w-[120px] font-medium'>Description:</p>
                                            <div>
                                                {description}
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-end px-6 mt-8 gap-x-4 w-full font-medium'>
                                            <div className='text-[0.88em] '>
                                                Rs: {courseFee}
                                            </div>
                                            <NavLink to={`/course/${_id}/singlePage`} >
                                                <button type='button' className='px-[9px] py-[7px] text-[0.8em] rounded-sm'>
                                                    <span>Read More</span>
                                                </button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </motion.div>
        </>
    )
}

export default ListCourseComp