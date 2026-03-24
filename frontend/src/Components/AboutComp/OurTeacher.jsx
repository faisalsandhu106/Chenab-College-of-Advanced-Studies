import React from 'react'
import { motion } from 'motion/react';

//* Our Teacher Data
const OurTeachers = [
    {
        "name": "Sir Azhar Aslam",
        "position": "Teacher",
        "department": "Pakistan studies",
        "imgUrl": "./pic/Azhar Aslam.jpg",
        "rating": 5,
        "description": "He is a dedicated Pakistan Studies teacher known for his commitment to helping students understand the history, culture, geography, and civic development of Pakistan."
    },
    {
        "name": "Sir Waqas Zakir",
        "position": "Teacher",
        "department": "economic theories",
        "imgUrl": "./pic/Waqas Zakir.jpg",
        "rating": 3,
        "description": "He emphasizes core economic concepts, real-world applications, and exam-oriented learning, helping students build strong analytical and critical-thinking skills."
    },
    {
        "name": "Sir Zahid Rasool",
        "position": "Teacher",
        "department": "numerical computing",
        "imgUrl": "./pic/Zahid Rasool.jpg",
        "rating": 4,
        "description": "Sir Zahid Rasool is a teacher of Numerical Computing, specializing in mathematical modeling, computational methods, and problem-solving techniques."
    },
    {
        "name": "Sir Kashif",
        "position": "Teacher",
        "department": "Computer Science",
        "imgUrl": "./pic/Muhammad Kashif.jpg",
        "rating": 4,
        "description": "Teacher with a strong focus on programming fundamentals, problem-solving. Emphasizes practical learning and clear concepts to help students build a solid foundation in computing."
    },
];

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


const OurTeacher = () => {
    return (
        <>
            <div className='light-dark-text flex flex-col items-center justify-center xs:pt-32 md:pt-36 xl:pt-48 md:px-12 lg:px-8 xl:px-20 xs:gap-y-12 md:gap-y-14 xl:gap-y-16 w-full h-auto'>
                <h1 className='light-dark-text flex flex-col items-center xs:text-[1.7em] md:text-[1.9em] font-bold'>
                    Our Teacher`s
                    <div className='title-underline w-[100px]'></div>
                </h1>
                <motion.div
                    initial={"hidden"}
                    whileInView={"show"}
                    variants={DownToUpAnimation}
                    viewport={{ once: true }}
                    className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 md:gap-10 lg:gap-x-7 xl:lg:gap-9 xs:gap-y-7 w-full h-auto rounded-md'>
                    {
                        OurTeachers.map((items, index) => {
                            const { name, position, department, imgUrl, description } = items
                            return (
                                <motion.div key={index} variants={DownToUpAnimation} className='w-full h-full'>
                                    <div className='Card-box flex flex-col items-start justify-start xs:px-4 py-5 h-full rounded-md shadow-lg overflow-hidden'>
                                        <div className='flex items-start justify-start xs:gap-x-3 lg:gap-x-2 xl:gap-x-3'>
                                            <figure className='flex items-center justify-center xs:w-20 xs:h-20 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-full overflow-hidden'>
                                                {/* <FaUser /> */}
                                                <img className='w-full h-auto bg-cover hover:scale-105 duration-300 cursor-pointer' src={imgUrl} alt="advisor_img" />
                                            </figure>
                                            <div className='flex flex-col items-start pt-1 gap-y-[2px] font-medium capitalize'>
                                                <h1 className='xs:text-[1em] md:text-[0.92em] xl:text-[0.96em] font-medium'>
                                                    {name}
                                                </h1>
                                                <p className='text-[0.8em]'>
                                                    {position}
                                                </p>
                                                <p className='text-[0.8em]'>
                                                    {department}
                                                </p>
                                            </div>
                                        </div>
                                        <div className='pt-5 xs:text-[1em] md:text-[0.92em] xl:text-[0.96em]'>
                                            <div className='title-underline mb-2 w-[40px]'></div>
                                            <p>
                                                {description.length > 170 ? description.slice(0, 170) + "..." : description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                </motion.div>
            </div>
        </>
    )
}

export default OurTeacher