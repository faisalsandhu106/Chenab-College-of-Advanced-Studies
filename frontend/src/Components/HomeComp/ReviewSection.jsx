import React from 'react'
import CountUp from 'react-countup';
import { SiCoursera } from "react-icons/si";
import { MdSentimentSatisfiedAlt } from 'react-icons/md';
import { PiStudentBold } from "react-icons/pi";
import { FaStaffSnake } from "react-icons/fa6";

//* Data For Review Section
const detailCards = [
    {
        icon: <MdSentimentSatisfiedAlt />,
        title: 'Course Completed',
        count: '500',
        iconText: '#666',
        bgIconColor: '#e1d4f1',
        bgColor: '#8338ec'
    },
    {
        icon: <FaStaffSnake />,
        title: 'Teachers and Staff',
        count: '50',
        iconText: '#666',
        bgIconColor: '#fff1d6',
        bgColor: '#fdc500'
    },
    {
        icon: <SiCoursera />,
        title: 'Enrollment Course',
        count: '12',
        iconText: '#666',
        bgIconColor: '#FFEEF3',
        bgColor: '#ff6b6b'
    },
    
    {
        icon: <PiStudentBold />,
        title: 'Total Students',
        count: '1500',
        iconText: '#666',
        bgIconColor: '#d0fbf3',
        bgColor: '#00a8e8'
    },
];

const ReviewSection = () => {
    return (
        <>
            <div className='grid xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-items-center xs:gap-y-5 md:gap-5 lg:gap-7 w-full h-auto'>
                {
                    detailCards.map((items, index) => {
                        const { icon, iconText, bgIconColor, title, count, bgColor } = items
                        return (
                            <div key={index} style={{ backgroundColor: bgColor }} className='courseComp flex items-center justify-center flex-col xs:pl-4 md:pl-5 lg:pl-4 xl:pl-5 py-4 gap-y-1 xs:w-full md:w- md:min-h-[100px] lg:w-full xl:w-[290px] rounded-lg shadow-sm hover:shadow-none duration-100 text-white'>
                                <div className='flex w-full'>
                                    <div style={{ color: iconText, backgroundColor: bgIconColor }} className='flex items-center justify-center w-11 h-11 text-[1.4em] rounded-full'>
                                        {icon}
                                    </div>
                                </div>
                                <p className='mt-2 w-full xs:text-[1.1em] md:text-[1.05em] lg:text-[1.12em] xl:text-[1.2em] font-medium capitalize'>
                                    {title}
                                </p>
                                <div className='flex w-full'>
                                    <h1 className='xs:text-[1em] md:text-[1.05em] xl:text-[1.1em] font-medium'>
                                        <CountUp
                                            end={count}
                                            separator=','
                                            suffix='+'
                                            duration={4}
                                            enableScrollSpy={true}
                                            scrollSpyOnce={true}
                                        />
                                    </h1>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ReviewSection