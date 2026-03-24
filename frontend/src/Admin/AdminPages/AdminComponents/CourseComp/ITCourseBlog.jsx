import React from 'react'
import { motion } from 'motion/react'
import { ToastContainer } from 'react-toastify'
import { MdDelete } from 'react-icons/md';
import { RxUpdate } from 'react-icons/rx';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import CardSkeleton from '../../../../Components/Skeleton Animations/CardSkeleton';
import NotFoundData from '../../../../Components/Common/NotFoundData';

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

const ITCourseBlog = ({ isITCourseLoading, AllITCourse, filterData, deleteCourseBlog }) => {
    //* Loading Animation
    if (isITCourseLoading || AllITCourse.length === 0) {
        return (
            <div className='grid xs:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 justify-items-center md:gap-x-5 gap-y-10 w-full h-auto'>
                <CardSkeleton cards={12} />
            </div>
        )
    };

    return (
        <>
            {
                filterData.length === 0 ? (
                    <NotFoundData data="Blog" />
                )
                    :
                    <>
                        <motion.div
                            initial={"hidden"}
                            animate={"show"}
                            variants={DownToUpAnimation}
                            viewport={{ once: true }}
                            className={`grid xs:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 justify-items-center md:gap-x-7 xs:gap-y-11 md:gap-y-12 w-full h-auto`}>
                            {
                                filterData.map((curElem, index) => {
                                    const { _id, CourseName, courseDetail, imageUrl, videoUrl, future } = curElem
                                    return (
                                        <motion.div key={index} variants={DownToUpAnimation} className='w-full h-full'>
                                            <div className='Admin-Card-box flex flex-col items-start justify-between gap-y-8 w-full h-full rounded-md overflow-hidden'>
                                                <div className='flex flex-col justify-between gap-y-3 w-full'>
                                                    <figure className='flex items-start w-full xs:h-[190px] md:h-[135px] lg:h-[155px] xl:h-[165px] overflow-hidden'>
                                                        <img className='w-full h-auto bg-cover' src={imageUrl} alt="course_img" />
                                                    </figure>
                                                    <div className='flex flex-col gap-y-2 px-3'>
                                                        <div className='flex items-center justify-e pb-2 w-full text-[0.82em] font-semibold'>
                                                            {/* <div className='py-1'>
                                                                {future > "false" ? "Coming Up" : "Offer"}
                                                            </div> */}
                                                            <NavLink to={videoUrl} target='_blank' className='adminbackgroundSidebar card-component-borde flex items-center px-2 py-1 gap-x-1 rounded-sm hover:text-blue-500 duration-100'>
                                                                <span>Wetch</span>
                                                                <FaLongArrowAltRight className='text-sm' />
                                                            </NavLink>
                                                        </div>
                                                        <div className='flex flex-col'>
                                                            {/* For XS & XL Sceen */}
                                                            <h1 className='xs:text-[1.1em] xl:text-[0.98em] font-medium capitalize md:hidden xl:inline-flex'>
                                                                {CourseName.length > 30 ? CourseName.slice(0, 30) + '...' : CourseName}
                                                            </h1>
                                                            {/* For MD & LG Sceen */}
                                                            <h1 className='md:text-[0.98em] lg:text-[1.02em] font-medium capitalize xs:hidden md:inline-flex xl:hidden'>
                                                                {CourseName.length > 22 ? CourseName.slice(0, 22) + '...' : CourseName}
                                                            </h1>
                                                            <div className='title-underline my-[1px] w-[60px]'></div>
                                                        </div>
                                                        <p className='xs:text-[0.94em] md:text-[0.89em] lg:text-[0.92em] xl:text-[0.92em]'>
                                                            {courseDetail.length > 115 ? courseDetail.slice(0, 115) + '...' : courseDetail}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='adminbackgroundSidebar flex items-center justify-end px-3 py-4 gap-x-3 w-full xs:text-[0.9em] md:text-[0.76em] lg:text-[0.8em]'>
                                                    <NavLink to={`/admin/ITcourse/${_id}/edit`}>
                                                        <button className='flex items-center gap-x-1 px-[10px] py-[6px] text-[0.9em] font-medium rounded-[5px] tracking-[0.4px] hover:bg-blue-400'>
                                                            Edit
                                                            <RxUpdate />
                                                        </button>
                                                    </NavLink>
                                                    <button onClick={() => deleteCourseBlog(_id)} className='flex items-center gap-x-1 px-[10px] py-[6px] text-[0.9em] font-medium rounded-[5px] tracking-[0.4px] bg-red-500 hover:bg-red-400'>
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

export default ITCourseBlog