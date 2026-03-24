import React, { useEffect, useState } from 'react'
import { FaPhoneVolume } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdDriveFileRenameOutline, MdOutlineMail } from 'react-icons/md'
import { CgDetailsMore } from "react-icons/cg";
import { NavLink, useParams } from 'react-router-dom'
import WhyChenab from '../HomeComp/WhyChenab';
import OpenAddmission from '../ApplyFormComp/OpenAddmission';
import SEO from '../Common/SEO';
import { VscTypeHierarchySub } from 'react-icons/vsc';
import { SiLevelsdotfyi } from 'react-icons/si';
import { GiDuration, GiLevelEndFlag, GiLevelThreeAdvanced } from 'react-icons/gi';
import { TbFileDescription } from 'react-icons/tb';
import { PiGearFine } from 'react-icons/pi';

const SingleCourse = () => {
    const { id } = useParams();
    const [isCourse, setIsCourse] = useState({
        image: "",
        title: "",
        category: "",
        courseFee: "",
        duration: "",
        level: "",
        description: ""
    });

    //* Get Individual Course Data 
    const getIndividualData = async () => {
        const res = await fetch(`https://chenab-college-backend.vercel.app/api/course/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })

        const data = await res.json();
        setIsCourse(data);
        // console.log("isCourse", data)
    };

    useEffect(() => {
        getIndividualData()
    }, []);

    const { _id: alise, title, image, category, courseFee, duration, level, description } = isCourse;

    return (
        <>
            <SEO title="Single Course Page | Chenab College" desc="This is Single Course Page Chenab College Advanced Studies" />

            <div className='light-dark-text pt-10 pb-10 w-full h-auto'>
                {/* Column No 1 */}
                <div className='relative w-full xs:h-[230px] md:h-[280px] lg:h-[320px] xl:h-[350px] overflow-hidden'>
                    {/* Course Bg-Image */}
                    <figure className='absolute top-0 left-0 z-[1] w-full h-full'>
                        <img className='w-full xs:h-full md:h-auto' src={image} alt="course-img" />
                    </figure>
                    {/* Degree Name */}
                    <div className='flex items-center justify-center absolute top-0 left-0 z-[3] w-full h-full bg-[#00000098] bg-gradient-to-r from-[#884dc261] to-[#cba74371] text-white'>
                        <h1 className='px-10 md:w-[500px] xl:w-[580px] xs:text-[1.4em] md:text-[1.5em] lg:text-[1.65em] xl:text-[2.2em] xs:leading-[1.35em] md:leading-[1.5em] lg:leading-[1.4em] font-bold text-center'>
                            {title ?
                                <>
                                    {title}
                                </>
                                :
                                "Loading..."
                            }
                        </h1>
                    </div>
                </div>

                {/* Column No 2 */}
                <div className='xs:px-4 md:px-7 lg:px-8 xl:px-16 xs:pt-8 lg:pt-10 xl:pt-12'>
                    {/* //* SingleCourse API Data */}
                    <div className='grid grid-cols-1 lg:grid-cols-3 items-start gap-y-10 xl:gap-x-16 w-full xs:text-[0.98em] md:text-[0.92em] xl:text-[0.96em]'>
                        <div className='md:col-span-2 w-full h-auto'>
                            <div className='flex flex-col xs:gap-y-7 md:gap-y-9 w-full'>
                                <div className='flex flex-col'>
                                    <div className='flex items-center gap-x-2 text-[1.35em] font-semibold'>
                                        <h1>Course Details</h1>
                                        <CgDetailsMore className='text-[1.2em]' />
                                    </div>
                                    <div className='title-underline mt-1 w-[90px]'></div>
                                </div>
                                <div className=' flex flex-col gap-y-6 capitalize'>
                                    <div className='flex xs:flex-col gap-y-1 w-full'>
                                        <div className='flex items-center gap-x-1 text-[1.07em] font-semibold'>
                                            Course Name
                                            <MdDriveFileRenameOutline />
                                             </div>
                                        <div className=''>
                                            {title ?
                                                <>
                                                    {title}
                                                </>
                                                :
                                                "--- --- --- ---"
                                            }
                                        </div>
                                    </div>
                                    <div className='flex xs:flex-col gap-y-1 w-full'>
                                        <div className='flex items-center gap-x-1 text-[1.07em] font-semibold'>
                                            Course Fee
                                            <PiGearFine /> 
                                            </div>
                                        <div className=''>
                                            {courseFee ?
                                                <>
                                                    {courseFee}
                                                </>
                                                :
                                                "--- --- --- ---"
                                            }
                                        </div>
                                    </div>
                                    <div className='flex xs:flex-col gap-y-1 w-full'>
                                        <div className='flex items-center gap-x-1 text-[1.07em] font-semibold'>
                                            level
                                            <GiLevelThreeAdvanced  /> 
                                            </div>
                                        <div className=''>
                                            {level ?
                                                <>
                                                    {level}
                                                </>
                                                :
                                                "--- --- --- ---"
                                            }
                                        </div>
                                    </div>
                                    <div className='flex xs:flex-col gap-y-1 w-full'>
                                        <div className='flex items-center gap-x-1 text-[1.07em] font-semibold'>
                                            duration
                                            <GiDuration />
                                             </div>
                                        <div className=''>
                                            {duration ?
                                                <>
                                                    {duration}
                                                </>
                                                :
                                                "--- --- --- ---"
                                            }
                                        </div>
                                    </div>
                                    <div className='flex xs:flex-col gap-y-1 w-full'>
                                        <div className='flex items-center gap-x-1 text-[1.07em] font-semibold'>
                                            description
                                            <TbFileDescription /> 
                                            </div>
                                        <div className=''>
                                            {description ?
                                                <>
                                                    {description}
                                                </>
                                                :
                                                "--- --- --- ---"
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='Card-box flex flex-col xs:px-5 md:px-5 py-5 xs:gap-y-10 lg:gap-y-7 xs:w-full md:w-1/2 lg:w-[300px] rounded-lg'>
                            <div className='flex items-start gap-x-2'>
                                <figure className='xs:w-14 xl:w-16'>
                                    <img className='w-full h-auto' src="/pic/Chenab Logo.webp" alt="course_Organizer" />
                                </figure>
                                <h1 className='xs:text-[1.07em] md:text-[0.98em] font-medium'>
                                    Chenab College of Advanced Studies
                                </h1>
                            </div>
                            <div className='flex flex-col items-start gap-y-5'>
                                <div className='flex flex-col gap-y-1 '>
                                    <div className='flex items-center gap-x-2'>
                                        <FaPhoneVolume className='text-[1.2em] text-red-500' />
                                        <p target='_blank' className='xs:text-[0.98em] md:text-[0.9em] font-semibold'>
                                            Phone Number
                                        </p>
                                    </div>
                                    <NavLink to="tel:+92304 0343547" target='_blank' className='xs:text-[0.9em] md:text-[0.84em] font-medium'>
                                        +92304 0343547
                                    </NavLink>
                                </div>
                                <div className='flex flex-col gap-y-1'>
                                    <div className='flex items-center gap-x-2'>
                                        <MdOutlineMail className='text-[1.2em] text-red-500' />
                                        <p className='xs:text-[0.98em] md:text-[0.9em] font-semibold'>
                                            Email Address
                                        </p>
                                    </div>
                                    <a href="mailto:info@ccas.edu.pk" target='_blank' className='xs:text-[0.9em] md:text-[0.84em] font-medium'>
                                        info@ccas.edu.pk
                                    </a>
                                </div>
                                <div className='flex flex-col gap-y-1'>
                                    <div className='flex items-center gap-x-2'>
                                        <FaLocationDot className='text-[1.2em] text-red-500' />
                                        <p className='xs:text-[0.98em] md:text-[0.9em] font-semibold'>
                                            Address
                                        </p>
                                    </div>
                                    <NavLink to={"https://maps.app.goo.gl/nuukbZdhWXkvy5Uh8"} target='_blank' className='xs:text-[0.9em] md:text-[0.84em] font-medium'>
                                        Main West Canal Road, Near Abdullah Pur
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* //* Why Chenab Coolege */}
                    <div className='xs:pt-16 lg:pt-20'>
                        <WhyChenab />
                    </div>

                    {/* //* Addmission Open Information */}
                    <div className='xs:pt-12 md:pt-16 lg:pt-20 md:px-4'>
                        <OpenAddmission />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleCourse