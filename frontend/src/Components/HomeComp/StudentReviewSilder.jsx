import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaUniversity, FaUser } from 'react-icons/fa';
import { SlUserFemale } from "react-icons/sl";
import { FcDepartment } from "react-icons/fc";
import { LuScrollText } from "react-icons/lu";
import { BsBarChartSteps } from 'react-icons/bs';
import { MdDateRange, MdOutlineDoNotDisturb } from 'react-icons/md';
import RatingStudents from '../Common/RatingStudents';
import LoadingAnimate from '../Common/LoadingAnimate';
import NotFoundData from '../Common/NotFoundData';

const StudentReviewSilder = ({ isStudentsReviewLoading, StudentsReview, filterData }) => {

    //* Loading Animate
    if (isStudentsReviewLoading || StudentsReview.length === 0) {
        return (
            <LoadingAnimate />
        )
    };

    //* React Silder Settings
    var settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 912,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            {
                filterData.length === 0 ? (
                    <NotFoundData data="Review" />
                )
                    :
                    (
                        <Slider {...settings} className='slider-container Card-box xs:mt-4 md:mt-6 flex items-center justify-center mb-1 w-full min-h-[200px] rounded-md shadow-[0_4px_15px_rgba(0,0,0,0.20)]'>
                            {
                                filterData.map((items) => {
                                    const { _id, firstName, lastName, email, UniName, gender, rollNo, semester, rating, department, review, created_at } = items
                                    return (
                                        <div key={_id} className='xs:px-3 md:px-6 xl:px-10 xs:py-6 lg:py-8 xl:py-10 w-full h-full cursor-grab overflow-hidden duration-150'>
                                            <div className='flex flex-col gap-y-7 w-full h-auto'>
                                                <div className='flex items-center xs:gap-x-2 md:gap-x-3'>
                                                    <div className='flex items-center gap-x-4'>
                                                        {
                                                            gender > "female" ?
                                                                <div className='flex items-center justify-center w-11 h-11 rounded-full overflow-hidden bg-[#167CE9] text-amber-50'>
                                                                    <FaUser className='text-lg' />
                                                                </div>
                                                                :
                                                                <div className='flex items-center justify-center w-11 h-11 rounded-full overflow-hidden bg-[#167CE9] text-amber-50'>
                                                                    <SlUserFemale className='text-lg' />
                                                                </div>
                                                        }
                                                    </div>
                                                    <div className='flex flex-col w-full'>
                                                        <div className='flex items-start justify-between'>
                                                            <div className='flex items-center gap-x-[5px] text-[1.05em] font-medium capitalize'>
                                                                {firstName}
                                                                <div className='xs:hidden md:flex'>
                                                                    {lastName}
                                                                </div>
                                                            </div>
                                                            <div className='flex  gap-x-1 xs:text-[0.8em] md:text-[0.9em]'>
                                                                {created_at.length > 10 ? created_at.slice(0, 10) : created_at}
                                                                <MdDateRange className='mt-[2px]' />
                                                            </div>
                                                        </div>
                                                        <div className='text-[0.88em] lowercase'>
                                                            {email}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex items-center flex-nowrap xs:gap-x-7 md:gap-x-12 xl:gap-x-16 w-full xs:text-[0.76em] md:text-[0.84em] xl:text-[0.86em] font-medium'>
                                                    <div className='flex flex-col items-start gap-y-1 capitalize'>
                                                        <h1 className='flex items-center gap-x-[4px]'> University <FaUniversity className='xs:hidden md:inline-flex' /> </h1>
                                                        <div className=''>
                                                            {UniName}
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col items-start gap-y-1'>
                                                        <h1 className='flex items-center gap-x-[4px]'> Department <FcDepartment className='xs:hidden md:inline-flex' /> </h1>
                                                        <div className='uppercase'>
                                                            {department.length > 5 ? department.slice(0, 5) : department}
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col items-start gap-y-1'>
                                                        <h1 className='flex items-center gap-x-[4px]'> Roll No <LuScrollText className='xs:hidden md:inline-flex' /> </h1>
                                                        <div className='uppercase'>
                                                            {rollNo}
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col items-start gap-y-1'>
                                                        <h1 className='flex items-center gap-x-[4px]'> Semester <BsBarChartSteps className='xs:hidden md:inline-flex' /> </h1>
                                                        <div className=''>
                                                            {semester}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mt-7 w-full text-[1.1em] xl:text-[1.2em]'>
                                                <RatingStudents rating={rating} />
                                            </div>
                                            <div className='mt-3 xs:text-[0.94em] lg:text-[0.94em] xl:text-[0.98em] md:pr-10 xl:pr-20'>
                                                {review.length > 350 ? review.slice(0, 350) + "..." : review}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    )
            }
        </>
    )
}

export default StudentReviewSilder