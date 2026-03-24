import React from 'react'
import { motion } from 'motion/react';
import { UseCourseContext } from '../ContextAPI/UserContext';
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
            delayChildren: 0.2,
            staggerChildren: 0.1,
        },
    },
};

const ITCourseCard = () => {
    const { isITcourseLoading, ITcourse } = UseCourseContext();

    //* Loading State
    if (isITcourseLoading || ITcourse.length === 0) {
        return (
            <div className='grid xs:grid-cols-1 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center pt-6 xs:px-4 lg:px-6 xl:px-20 md:gap-x-6 xl:gap-x-8 gap-y-10 w-full'>
                <CardSkeleton cards={9} />
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
                className='grid xs:grid-cols-1 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center pt-7 xs:px-5 md:px-8 lg:px-10 xl:px-24 2xl:m-32 md:gap-x-7 xl:gap-x-9 xs:gap-y-10 md:gap-y-12 w-full'>
                {
                    ITcourse.map((items) => {
                        const { _id, CourseName, courseDetail, imageUrl, videoUrl } = items;
                        return (
                            <motion.div variants={DownToUpAnimation} key={_id} className='w-full h-full'>
                                <div className='Card-box flex flex-col items-start justify-between w-full h-full rounded-md overflow-hidden'>
                                    <div className='flex flex-col justify-between gap-y-4 w-full'>
                                        <figure className='flex items-start w-full xs:h-[180px] md:h-[130px] lg:h-[140px] xl:h-[190px] overflow-hidden'>
                                            <img className='w-full h-auto bg-cover' src={imageUrl} alt="course_img" />
                                        </figure>
                                        <div className='flex flex-col gap-y-2 px-3'>
                                            <div className='flex flex-col font-medium capitalize'>
                                                {/* For XS & XL Sceen */}
                                                <h1 className='xs:text-[1.1em] xl:text-[1.1em] md:hidden xl:inline-flex'>
                                                    {CourseName.length > 30 ? CourseName.slice(0, 30) + '...' : CourseName}
                                                </h1>
                                                {/* For MD & LG Sceen */}
                                                <h1 className='md:text-[0.97em] lg:text-[1.05em] xs:hidden md:inline-flex xl:hidden'>
                                                    {CourseName.length > 20 ? CourseName.slice(0, 20) + '...' : CourseName}
                                                </h1>
                                                <div className='title-underline mt-1 w-[50px]'></div>
                                            </div>
                                            <p className='xs:text-[0.9em] md:text-[0.8em] lg:text-[0.9em] xl:text-[0.96em]'>
                                                {courseDetail.length > 155 ? courseDetail.slice(0, 155) + '...' : courseDetail}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-start w-full px-4 pt-8 pb-6'>
                                        <NavLink to={videoUrl} target='_black' >
                                            <button className='flex items-center gap-x-1 px-[10px] py-[4px] text-[0.75em] rounded-sm tracking-[0.2px] font-medium'>
                                                <span>Wetch</span>
                                                <FaLongArrowAltRight className='text-sm' />
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

export default ITCourseCard