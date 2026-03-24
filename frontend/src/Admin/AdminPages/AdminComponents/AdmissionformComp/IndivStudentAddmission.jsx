import React from 'react'
import { motion } from 'motion/react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaTransgender, FaUser } from 'react-icons/fa';
import { MdEmail, MdMessage } from 'react-icons/md';
import { TbListDetails } from 'react-icons/tb';
import { FaBookOpen, FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdDateRange } from 'react-icons/md'
import SEO from '../../../../Components/Common/SEO';
import { SlUserFemale } from 'react-icons/sl';


const IndivStudentAddmission = () => {
    const { id } = useParams();
    const API = "https://chenab-college-backend.vercel.app/admin"

    const [isStudentData, setStudentData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        streetName: '',
        cityName: '',
        stateName: '',
        zipCode: '',
        phoneNumber: '',
        date: '',
        month: '',
        year: '',
        courses: '',
        message: '',
        gender: '',
        created_at: ""
    })

    //* Get Individual Data
    //* ---------------------------
    const Individualdata = async () => {
        const res = await fetch(`${API}/allStudentAddmission/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json()
        setStudentData(data)
    };

    useEffect(() => {
        Individualdata()
    }, [])

    const { _id, firstName, lastName, email, streetName, cityName, stateName, zipCode, phoneNumber, date, month, year, courses, message, gender, created_at } = isStudentData

    return (
        <>
            <SEO title="Admission Form Details | Chenab College" desc="This is Admission Form Details Chenab College Advanced Studies" />

            <div className='flex flex-col xs:px-1 md:px-6 lg:px-12 xl:px-24 xs:py-6 md:py-10 xs:gap-y-5 md:gap-y-12 lg:gap-y-16 w-full'>
                {/*------Heading------- */}
                <div className='flex xs:flex-wrap items-center justify-between gap-y-4 w-full'>
                    <div className='flex flex-col'>
                        <div className='flex items-center gap-x-2 xs:text-[1.3em] md:text-[1.4em] font-semibold'>
                            <h1>Admission Form Details</h1>
                            <TbListDetails />
                        </div>
                        <div className='title-underline w-[150px]'></div>
                    </div>
                    <div className='flex items-center gap-x-2 font-medium'>
                        {created_at.length > 10 ? created_at.slice(0, 10) : "--- --- ---"}
                        <MdDateRange />
                    </div>
                </div>

                {/*------Student Addmission Details------- */}
                <div className='flex flex-col xs:gap-y-3 md:gap-y-9 w-full capitalize xs:text-[0.96em] md:text-[0.9em] xl:text-[0.92em]'>
                    {/* Name */}
                    <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-y-3 w-full h-full'>
                        <div>
                            <div className=' items-center gap-x-2 font-medium xs:hidden md:inline-flex'>
                                <h1>Name</h1>
                                <FaUser />
                            </div>
                        </div>
                        <div className='grid xs:grid-cols-1 md:grid-cols-2 md:col-span-2 gap-x-5 gap-y-6 w-full'>
                            <div className='flex flex-col gap-y-1'>
                                <div className='admin-inputs'>
                                    {firstName ? <>{firstName}</> : "--- --- ---"}
                                </div>
                                <label htmlFor="firstName" className='addmissionForm-inputs-label'>first name</label>
                            </div>
                            <div className='flex flex-col gap-y-1'>
                                <div className='admin-inputs'>
                                    {lastName ? <>{lastName}</> : "--- --- ---"}
                                </div>
                                <label htmlFor="lastName" className='addmissionForm-inputs-label'>last name</label>
                            </div>
                        </div>
                    </div>

                    {/* Email */}
                    <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-y-3 w-full h-full'>
                        <div>
                            <h1 className='flex items-center gap-x-2 font-medium xs:hidden md:inline-flex'>
                                Email Address <MdEmail />
                            </h1>
                        </div>
                        <div className='grid xs:grid-cols-1 md:grid-cols-1 md:col-span-2 gap-x-5 w-full'>
                            <div className='flex flex-col gap-y-1'>
                                <div className='admin-inputs lowercase'>
                                    {email ? <>{email}</> : "--- --- ---"}
                                </div>
                                <label htmlFor="email" className='addmissionForm-inputs-label'>email</label>
                            </div>
                        </div>
                    </div>

                    {/* Address */}
                    <div className='grid xs:grid-cols-1 md:grid-cols-3 py- gap-y-3 w-full h-full'>
                        <div>
                            <h1 className='flex items-center gap-x-2 font-medium xs:hidden md:inline-flex'>
                                Address <FaLocationDot />
                            </h1>
                        </div>
                        <div className='grid xs:grid-cols-1 md:grid-cols-1 md:col-span-2 gap-y-6 w-full'>
                            <div className='grid xs:grid-cols-1 md:grid-cols-1 gap-x-5 w-full'>
                                <div className='flex flex-col gap-y-1'>
                                    <div className='admin-inputs'>
                                        {streetName ? <>{streetName}</> : "--- --- ---"}
                                    </div>
                                    <label htmlFor="streetName" className='addmissionForm-inputs-label'>street address</label>
                                </div>
                            </div>

                            {/* City & State */}
                            <div className='grid xs:grid-cols-1 md:grid-cols-2 md:col-span-2 gap-x-5 gap-y-6 w-full'>
                                <div className='flex flex-col gap-y-1'>
                                    <div className='admin-inputs'>
                                        {cityName ? <>{cityName}</> : "--- --- ---"}
                                    </div>
                                    <label htmlFor="cityName" className='addmissionForm-inputs-label'>city</label>
                                </div>
                                <div className='flex flex-col gap-y-1'>
                                    <div className='admin-inputs'>
                                        {stateName ? <>{stateName}</> : "--- --- ---"}
                                    </div>
                                    <label htmlFor="stateName" className='addmissionForm-inputs-label'>state</label>
                                </div>
                            </div>

                            {/* postal / zip code */}
                            <div className='grid xs:grid-cols-1 md:grid-cols-1 gap-x-5 w-full'>
                                <div className='flex flex-col gap-y-1'>
                                    <div className='admin-inputs'>
                                        {zipCode ? <>{zipCode}</> : "--- --- ---"}
                                    </div>
                                    <label htmlFor="zipCode" className='addmissionForm-inputs-label'>postal / zip code</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-y-3 w-full h-full'>
                        <div>
                            <h1 className='flex items-center gap-x-2 font-medium xs:hidden md:inline-flex'>
                                Phone Number <FaPhoneAlt />
                            </h1>
                        </div>
                        <div className='grid xs:grid-cols-1 md:grid-cols-1 md:col-span-2 gap-x-5 w-full'>
                            <div className='flex flex-col gap-y-1'>
                                <div className='admin-inputs'>
                                    {phoneNumber ? <>{phoneNumber}</> : "--- --- ---"}
                                </div>
                                <label htmlFor="phoneNumber" className='addmissionForm-inputs-label'>Phone Number</label>
                            </div>
                        </div>
                    </div>

                    {/* Date */}
                    <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-y-3 w-full h-full'>
                        <div>
                            <h1 className='flex items-center gap-x-2 font-medium xs:hidden md:inline-flex'>
                                Date of Birth <MdDateRange />
                            </h1>
                        </div>
                        <div className='grid xs:grid-cols-3 md:grid-cols-3 md:col-span-2 gap-x-4 gap-y-6 w-full'>
                            <div className='flex flex-col gap-y-1'>
                                <div className='admin-inputs'>
                                    {date ? <>{date}</> : "--- ---"}
                                </div>
                                <label htmlFor="date" className='addmissionForm-inputs-label'>Date</label>
                            </div>
                            <div className='flex flex-col gap-y-1'>
                                <div className='admin-inputs'>
                                    {month ? <>{month}</> : "--- ---"}
                                </div>
                                <label htmlFor="month" className='addmissionForm-inputs-label'>Month</label>
                            </div>
                            <div className='flex flex-col gap-y-1'>
                                <div className='admin-inputs'>
                                    {year ? <>{year}</> : "--- ---"}
                                </div>
                                <label htmlFor="year" className='addmissionForm-inputs-label'>Year</label>
                            </div>
                        </div>
                    </div>

                    {/* Course */}
                    <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-y-3 w-full h-full'>
                        <div>
                            <h1 className='flex items-center gap-x-2 font-medium xs:hidden md:inline-flex'>
                                Course <FaBookOpen />
                            </h1>
                        </div>
                        <div className='grid xs:grid-cols-1 md:grid-cols-1 md:col-span-2 gap-y-1 w-full'>
                            <div className='admin-inputs'>
                                {courses ? <>{courses}</> : "--- --- ---"}
                            </div>
                            <label htmlFor="courses" className='addmissionForm-inputs-label'>course</label>
                        </div>
                    </div>

                    {/* Gender */}
                    <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-y-3 my-5 w-full h-full'>
                        <div>
                            <h1 className='flex items-center gap-x-2 font-medium xs:hidden md:inline-flex'>
                                Gender
                                <FaTransgender />
                            </h1>
                        </div>
                        <div className='flex flex-col gap-y-1'>
                            <div>
                                {
                                    gender > "female" ?
                                        <div className='flex items-center gap-x-2'>
                                            <div className='flex items-center justify-center xs:w-9 xs:h-9 text-sm rounded-full bg-[#167CE9] text-amber-50'>
                                                <FaUser />
                                            </div>
                                            <h1>Male</h1>
                                        </div>
                                        :

                                        <div className='flex items-center gap-x-2'>
                                            <div className='flex items-center justify-center xs:w-9 xs:h-9 text-sm rounded-full bg-[#167CE9] text-amber-50'>
                                                <SlUserFemale />
                                            </div>
                                            <h1>Female</h1>
                                        </div>
                                }
                            </div>
                            {/* <label htmlFor="courses" className='addmissionForm-inputs-label'>gender</label> */}
                        </div>
                    </div>

                    {/* Message */}
                    <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-y-3 w-full h-full'>
                        <div>
                            <h1 className='flex items-center gap-x-2 font-medium xs:hidden md:inline-flex'>
                                Message <MdMessage />
                            </h1>
                        </div>
                        <div className='grid xs:grid-cols-1 md:grid-cols-1 md:col-span-2 gap-y-1 w-full'>
                            <div className='admin-inputs w-full xs:min-h-[220px] md:min-h-[200px] xl:min-h-[240px] max-h-[450px] normal-case overflow-hidden'>
                                {message ? <>{message}</> : "--- --- ---"}
                            </div>
                            <label htmlFor="subject" className='addmissionForm-inputs-label'>Message</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndivStudentAddmission