import React from 'react'
import { motion } from 'motion/react'
import { ToastContainer } from 'react-toastify'
import { NavLink } from 'react-router-dom'
import { MdDelete } from 'react-icons/md'
import { CgCalendarDates, CgMoreVertical } from 'react-icons/cg'
import { SlUserFemale } from 'react-icons/sl'
import RatingStudents from '../../../../Components/Common/RatingStudents';
import CardSkeleton from '../../../../Components/Skeleton Animations/CardSkeleton';
import { FaUser } from 'react-icons/fa';
import NotFoundData from '../../../../Components/Common/NotFoundData'

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

const ReviewCard = ({ isStudentReviewLoading, AllStudentReview, filterData, deletereview }) => {

    //* Loading Animation
    if (isStudentReviewLoading || AllStudentReview.length === 0) {
        return (
            <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-items-center md:gap-x-6 lg:gap-x-7 2xl:gap-x-8 xs:gap-y-10'>
                <CardSkeleton cards={12} />
            </div>
        )
    };

    return (
        <>
            {
                filterData.length === 0 ? (
                    <NotFoundData data="Review" />
                )
                    :
                    <>
                        <motion.div
                            initial={"hidden"}
                            animate={"show"}
                            variants={DownToUpAnimation}
                            viewport={{ once: true }}
                            className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center xs:mt-6 md:mt-7 px-1 md:px-4 lg:px-8 xl:px-10 2xl:px-14 md:gap-x-10 lg:gap-x-12 xl:gap-x-10 2xl:gap-x-8 xs:gap-y-10 md:gap-y-11'>
                            {
                                filterData.map((curElem, index) => {
                                    const { _id, firstName, lastName, email, gender, rating, rollNo, created_at } = curElem
                                    return (
                                        <motion.div variants={DownToUpAnimation} key={index} className='w-full h-full'>
                                            <div className='Admin-Card-box flex flex-col gap-y-6 w-full h-full rounded-xl overflow-hidden'>
                                                <div className='flex flex-col px-4 py-6 gap-x-4 gap-y-5 w-full'>
                                                    <div className='flex items-start gap-x-3'>
                                                        {
                                                            gender > "female" ?
                                                                <div className='flex items-center justify-center xs:w-12 xs:h-12 md:w-11 md:h-11 rounded-full bg-[#167CE9] text-amber-50'>
                                                                    <FaUser className='text-lg' />
                                                                </div>
                                                                :
                                                                <div className='flex items-center justify-center xs:w-12 xs:h-12 md:w-11 md:h-11 rounded-full bg-[#167CE9] text-amber-50'>
                                                                    <SlUserFemale className='text-lg' />
                                                                </div>
                                                        }
                                                        <div className='flex flex-col gap-y-[2px]'>
                                                            <h1 className='flex gap-x-1 xs:text-[1.02em] md:text-[0.92em] lg:text-[0.96em] font-medium'>
                                                                <div> {firstName} </div>
                                                                <div> {lastName} </div>
                                                            </h1>
                                                            <div className='flex gap-x-1 pl-[2px] text-[0.7em] font-medium'>
                                                                {created_at.length > 10 ? created_at.slice(0, 10) : created_at}
                                                                <CgCalendarDates className='mt-[2px]' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col gap-y-3'>
                                                        <div className='flex items-center'>
                                                            <div className='w-[80px] xs:text-[1em] md:text-[0.92em] lg:text-[0.98em] xl:text-[0.9em] font-medium'>
                                                                Email:
                                                            </div>
                                                            <div className='xs:text-[0.98em] md:text-[0.88em] xl:text-[0.96em]'>
                                                                {email}
                                                            </div>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <div className='w-[80px] xs:text-[1em] md:text-[0.92em] lg:text-[0.98em] xl:text-[0.9em] font-medium'>
                                                                Roll No:
                                                            </div>
                                                            <div className='xs:text-[0.98em] md:text-[0.88em] xl:text-[0.96em]'>
                                                                {rollNo}
                                                            </div>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <div className='w-[80px] xs:text-[1em] md:text-[0.92em] lg:text-[0.98em] xl:text-[0.9em] font-medium'>
                                                                Star:
                                                            </div>
                                                            <div className='xs:text-[1.1em] md:text-[1em] xl:text-[1.05em]'>
                                                                {<RatingStudents rating={rating} />}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='adminbackgroundSidebar flex items-center justify-end px-4 py-4 gap-x-3'>
                                                        <NavLink to={`/admin/studentreviews/${_id}`}>
                                                            <button className='flex items-center gap-x-[2px] px-[8px] py-[6px] text-[0.7em] rounded-[3px] tracking-[0.2px] font-medium hover:bg-blue-400'>
                                                                Read More <CgMoreVertical />
                                                            </button>
                                                        </NavLink>
                                                        <button onClick={() => deletereview(_id)} className='flex items-center gap-x-1 px-[8px] py-[6px] text-[0.7em] rounded-[3px] tracking-[0.2px] font-medium bg-red-500 hover:bg-red-400'>
                                                            Delete <MdDelete className='text-[15px]' />
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

export default ReviewCard