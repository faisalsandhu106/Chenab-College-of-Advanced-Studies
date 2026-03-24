import React from 'react'
import CountUp from 'react-countup';
import { SiCoursera } from "react-icons/si";
import { MdSentimentSatisfiedAlt } from 'react-icons/md';
import { PiStudentBold } from "react-icons/pi";
import { FaStaffSnake } from "react-icons/fa6";

//* Data For Review Section
const detailCards = [
    {
        id: "1",
        icon: <MdSentimentSatisfiedAlt />,
        title: 'Course Completed',
        count: '500',
        iconText: '#666',
        bgIconColor: '#e1d4f1',
        bgColor: '#8338ec'
    },
    {
        id: "2",
        icon: <FaStaffSnake />,
        title: 'Teachers and Staff',
        count: '50',
        iconText: '#666',
        bgIconColor: '#fff1d6',
        bgColor: '#fdc500'
    },
    {
        id: "3",
        icon: <SiCoursera />,
        title: 'Enrollment Course',
        count: '12',
        iconText: '#666',
        bgIconColor: '#FFEEF3',
        bgColor: '#ff6b6b'
    },

    {
        id: "4",
        icon: <PiStudentBold />,
        title: 'Total Students',
        count: '1500',
        iconText: '#666',
        bgIconColor: '#d0fbf3',
        bgColor: '#00a8e8'
    },
];

const OverviewSection = () => {
    return (
        <>
            <div className='Card-box grid xs:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 py-10 gap-y-10 justify-items-center w-full h-auto rounded-lg'>
                {
                    detailCards.map((items) => {
                        const { id, title, count } = items
                        return (
                            <div key={id} className=' flex items-center justify-center flex-col gap-y-1'>
                                <h1 className='xs:text-[1.85em] md:text-[1.8em] lg:text-[1.8em] xl:text-[2.05em] font-[font1]'>
                                    <CountUp
                                        end={count}
                                        separator=','
                                        suffix='+'
                                        duration={4}
                                        enableScrollSpy={true}
                                        scrollSpyOnce={true}
                                    />
                                </h1>
                                <p className='xs:text-[0.9em] md:text-[0.9em] xl:text-[0.94em] font-medium capitalize'>
                                    {title}
                                </p>

                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default OverviewSection