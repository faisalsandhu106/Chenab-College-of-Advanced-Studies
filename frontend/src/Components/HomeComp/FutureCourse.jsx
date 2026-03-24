import React from 'react'
import { motion } from 'motion/react';
import { UseCourseContext } from '../ContextAPI/UserContext'
import { NavLink } from 'react-router-dom';
import CardSkeleton from '../Skeleton Animations/CardSkeleton';

const FutureCourse = () => {
    const { isLoading, featureCourse } = UseCourseContext();

    //* Loading Animation
    if (isLoading || featureCourse.length === 0) {
        return (
            <div className='grid xs:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center pt-6 md:px-4 lg:px-6 xl:px-12 md:gap-x-5 xl:gap-x-6 xs:gap-y-10 w-full'>
                <CardSkeleton cards={12} />
            </div>
        )
    };

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
                delayChildren: 0.2,
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <>
            {/* API Data */}
            <motion.div
                initial={"hidden"}
                whileInView={"show"}
                variants={DownToUpAnimation}
                viewport={{ once: true }}
                className='grid xs:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center pt-6 xs:px-1 md:px-3 lg:px-5 xl:px-10 md:gap-x-7 xs:gap-y-10 md:gap-y-12 w-full'>
                {
                    featureCourse.map((item) => {
                        const { _id, image, title, courseFee, level, description } = item;
                        return (
                            <motion.div variants={DownToUpAnimation} key={_id} className='w-full h-full'>
                                <div className='Card-box flex flex-col justify-between w-full h-full rounded-md overflow-hidden'>
                                    <div className='flex flex-col justify-between gap-y-3 w-full capitalize'>
                                        <figure className='flex items-start xs:h-[180px] md:h-[135px] lg:h-[155px] xl:h-[160px] overflow-hidden'>
                                            <img className='w-full h-auto bg-cover' src={image} alt="course_img" />
                                        </figure>
                                        <div className='flex flex-col gap-y-2 px-3'>
                                            <div className='flex items-center justify-between text-[0.8em] font-medium'>
                                                <span>
                                                    {level.length > 10 ? level.slice(0, 10) : level}
                                                </span>
                                                <div className='flex items-center gap-x-1'>
                                                    <span>Rs:</span>
                                                    {courseFee}
                                                </div>
                                            </div>
                                            <div className='flex flex-col font-medium capitalize'>
                                                {/* XS & XL Sceen */}
                                                <h1 className='xs:text-[1.1em] xl:text-[1.02em] md:hidden xl:inline-flex'>
                                                    {title.length > 30 ? title.slice(0, 30) + '...' : title}
                                                </h1>
                                                {/* For MD & LG Sceen */}
                                                <h1 className='md:text-[0.9em] lg:text-[1.05em] xs:hidden md:inline-flex xl:hidden'>
                                                    {title.length > 25 ? title.slice(0, 25) + '...' : title}
                                                </h1>
                                                <div className='title-underline mt-1 w-[50px]'></div>
                                            </div>
                                            <p className='xs:text-[0.9em] md:text-[0.78em] lg:text-[0.85em] xl:text-[0.9em]'>
                                                {description.length > 90 ? description.slice(0, 90) + '...' : description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-end px-4 pt-8 pb-4'>
                                        <NavLink to={`/course/${_id}/singlePage`} >
                                            <button className='px-[8px] py-[4px] text-[0.7em] rounded-ms font-medium'>
                                                <span>Read More</span>
                                            </button>
                                        </NavLink>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </motion.div>
        </>
    )
}

export default FutureCourse