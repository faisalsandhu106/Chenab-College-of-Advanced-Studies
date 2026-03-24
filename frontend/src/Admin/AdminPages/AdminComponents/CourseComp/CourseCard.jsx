import React from 'react'
import { motion } from 'motion/react'
import { ToastContainer } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import { RxUpdate } from 'react-icons/rx';
import { MdDelete } from 'react-icons/md';
import CardSkeleton from '../../../../Components/Skeleton Animations/CardSkeleton';
import NotFoundData from '../../../../Components/Common/NotFoundData';

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

const CourseCard = ({ isCourseLoading, AllCourse, filterData, deleteCourse }) => {
    //* Loading Animation
    if (isCourseLoading || AllCourse.length === 0) {
        return (
            <div className='grid xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 justify-items-center md:px-4 lg:px-2 xl:px-10 2xl:px-14 md:gap-x-5 lg:gap-x-5 gap-y-10 w-full'>
                <CardSkeleton cards={12} />
            </div>
        )
    };

    return (
        <>
            {
                filterData.length === 0 ? (
                    <NotFoundData data="Course" />
                )
                    :
                    <>
                        <motion.div
                            initial={"hidden"}
                            animate={"show"}
                            variants={DownToUpAnimation}
                            viewport={{ once: true }}
                            className={`grid xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center xs:px-1 md:px-3 lg:px-5 xl:px-8 2xl:px-14 md:gap-x-7 lg:gap-x-8 xs:gap-y-10 md:gap-y-12 w-full`}>
                            {
                                filterData.map((curElem, index) => {
                                    const { _id, image, title, level, courseFee, description } = curElem;
                                    return (
                                        <motion.div variants={DownToUpAnimation} key={index} className='w-full h-full'>
                                            <div className='Admin-Card-box flex flex-col justify-between w-full h-full rounded-lg overflow-hidden'>
                                                <div className='flex flex-col justify-between gap-y-3 w-full capitalize'>
                                                    <figure className='flex items-start xs:h-[180px] md:h-[140px] lg:h-[155px] xl:h-[160px] overflow-hidden'>
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
                                                            <h1 className='xs:text-[1.1em] md:text-[0.9em] lg:text-[1.05em] xl:text-[1.02em]'>
                                                                {title.length > 25 ? title.slice(0, 25) + '...' : title}
                                                            </h1>
                                                            <div className='title-underline mt-1 w-[50px]'></div>
                                                        </div>
                                                        <p className='xs:text-[0.9em] md:text-[0.78em] lg:text-[0.85em] xl:text-[0.9em]'>
                                                            {description.length > 90 ? description.slice(0, 90) + '...' : description}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='adminbackgroundSidebar flex items-center justify-end mt-8 px-3 py-4 gap-x-3 w-full xs:text-[0.9em] md:text-[0.76em] lg:text-[0.8em]'>
                                                    <NavLink to={`/admin/allcourses/${_id}/edit`}>
                                                        <button className='flex items-center gap-x-1 px-[10px] py-[6px] text-[0.9em] font-medium rounded-[5px] tracking-[0.4px] hover:bg-blue-400'>
                                                            Edit
                                                            <RxUpdate />
                                                        </button>
                                                    </NavLink>
                                                    <button onClick={() => deleteCourse(_id)} className='flex items-center gap-x-1 px-[10px] py-[6px] text-[0.9em] font-medium rounded-[5px] tracking-[0.4px] bg-red-500 hover:bg-red-400'>
                                                        Delete
                                                        <MdDelete className='text-[15px]' />
                                                    </button>
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

export default CourseCard