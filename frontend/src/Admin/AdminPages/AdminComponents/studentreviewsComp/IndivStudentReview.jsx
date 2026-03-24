import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaCalendarAlt, FaOrcid, FaTransgender, FaUniversity, FaUser } from 'react-icons/fa';
import { MdEmail, MdReviews } from 'react-icons/md';
import { TbListDetails } from 'react-icons/tb';
import RatingStudents from '../../../../Components/Common/RatingStudents';
import { SiLevelsdotfyi } from 'react-icons/si';
import { FcDepartment } from 'react-icons/fc';
import { FaIdBadge } from 'react-icons/fa6';
import SEO from '../../../../Components/Common/SEO';

const IndivStudentReview = () => {
    const { id } = useParams();
    const API = "https://chenab-college-backend.vercel.app/admin"

    const [isStudentData, setStudentData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        UniName: '',
        gender: "",
        created_at: ""
    })

    //* Get Individual Data
    //* ---------------------------
    const Individualdata = async () => {
        const res = await fetch(`${API}/allStudentReview/${id}`, {
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
    }, [API])

    const { _id, firstName, lastName, email, UniName, gender, rollNo, semester, rating, department, review, created_at } = isStudentData;

    return (
        <>
        <SEO title="Student Review Details | Chenab College" desc="This is Student Review Details Chenab College Advanced Studies" />
        
            <div className='light-dark-text flex flex-col xs:px-1 md:pl-5 lg:md:pl-10 xl:pl-16 md:px-[100px] lg:pr-[120px] xl:pr-[380px] xs:py-5 md:py-8 xs:gap-y-8 md:gap-y-12 w-full rounded-md'>
                {/*------Heading------- */}
                <div className='flex flex-col'>
                    <div className='flex items-center gap-x-2 xs:text-[1.3em] md:text-[1.3em] font-semibold'>
                        <h1>Student Review Details</h1>
                        <TbListDetails />
                    </div>
                    <div className='title-underline w-[120px]'></div>
                </div>

                {/*------Student Details------- */}
                <div className='flex flex-col xs:gap-y-6 md:gap-y-8 w-full xs:text-[0.96em] md:text-[0.9em] xl:text-[0.94em] capitalize'>
                    {/* Student ID */}
                    <div className='flex xs:flex-col md:flex-row gap-y-2 w-full'>
                        <div className='flex items-center gap-x-2 md:min-w-[175px] xl:min-w-[200px] font-medium'>
                            <FaIdBadge className='xs:text-lg md:text-xl' />
                            <h1>Student ID & Date</h1>
                        </div>
                        <div className='flex xs:flex-wrap items-center justify-between gap-y-3 w-full'>
                            <div className='flex items-center gap-x-3'>
                                {_id ? <>{_id}</> : "--- --- ---"}
                            </div>
                            <div className='flex items-center gap-x-2'>
                                <div className='flex items-center gap-x-1 font-medium'>
                                    {created_at.length > 10 ? created_at.slice(0, 10) : "--- --- ---"}
                                    <FaCalendarAlt className='-mt-[2px]' />
                                </div>
                                /
                                <div className='text-[1.2em]'>
                                    <RatingStudents rating={rating} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* User Name */}
                    <div className='flex xs:flex-col md:flex-row gap-y-2 w-full'>
                        <div className='flex items-center gap-x-2 md:min-w-[175px] xl:min-w-[200px] font-medium'>
                            <FaUser className='xs:text-lg md:text-xl' />
                            <h1>Full Name</h1>
                        </div>
                        <div className='admin-inputs flex items-center gap-x-1 w-full'>
                            <div> {firstName ? <>{firstName}</> : "--- --- ---"} </div>
                            <div> {lastName ? <>{lastName}</> : "--- --- ---"} </div>
                        </div>
                    </div>

                    {/* Email */}
                    <div className='flex xs:flex-col md:flex-row gap-y-2 w-full'>
                        <div className='flex items-center gap-x-2 md:min-w-[175px] xl:min-w-[200px] font-medium'>
                            <MdEmail className='xs:text-lg md:text-xl' />
                            <h1>Email Address</h1>
                        </div>
                        <div className='admin-inputs w-full lowercase'>
                            {email ? <>{email}</> : "--- --- ---"}
                        </div>
                    </div>

                    {/* University Name  */}
                    <div className='flex xs:flex-col md:flex-row gap-y-2 w-full'>
                        <div className='flex items-center gap-x-2 md:min-w-[175px] xl:min-w-[200px] font-medium'>
                            <FaUniversity className='xs:text-lg md:text-xl' />
                            <h1>University Name</h1>
                        </div>
                        <div className='admin-inputs w-full'>
                            {UniName ? <>{UniName}</> : "--- --- ---"}
                        </div>
                    </div>

                    {/* Gender */}
                    <div className='flex xs:flex-col md:flex-row gap-y-2 w-full'>
                        <div className='flex items-center gap-x-2 md:min-w-[175px] xl:min-w-[200px] font-medium'>
                            <FaTransgender className='xs:text-lg md:text-xl' />
                            <h1>Gender</h1>
                        </div>
                        <div className='admin-inputs w-full'>
                            {gender ? <>{gender}</> : "--- --- ---"}
                        </div>
                    </div>

                    {/* Roll No */}
                    <div className='flex xs:flex-col md:flex-row gap-y-2 w-full'>
                        <div className='flex items-center gap-x-2 md:min-w-[175px] xl:min-w-[200px] font-medium'>
                            <FaOrcid className='xs:text-lg md:text-xl' />
                            <h1>Roll No</h1>
                        </div>
                        <div className='admin-inputs w-full uppercase'>
                            {rollNo ? <>{rollNo}</> : "--- --- ---"}
                        </div>
                    </div>

                    {/* Semester */}
                    <div className='flex xs:flex-col md:flex-row gap-y-2 w-full'>
                        <div className='flex items-center gap-x-2 md:min-w-[175px] xl:min-w-[200px] font-medium'>
                            <SiLevelsdotfyi className='xs:text-lg md:text-xl' />
                            <h1>Semester</h1>
                        </div>
                        <div className='admin-inputs w-full'>
                            {semester ? <>{semester + " Semester"}</> : "--- --- ---"}
                        </div>
                    </div>

                    {/* Department */}
                    <div className='flex xs:flex-col md:flex-row gap-y-2 w-full'>
                        <div className='flex items-center gap-x-2 md:min-w-[175px] xl:min-w-[200px] font-medium'>
                            <FcDepartment className='xs:text-lg md:text-xl' />
                            <h1>Department</h1>
                        </div>
                        <div className='admin-inputs w-full'>
                            {department ? <>{department}</> : "--- --- ---"}
                        </div>
                    </div>

                    {/* Review */}
                    <div className='flex xs:flex-col md:flex-row gap-y-2 w-full'>
                        <div className='flex gap-x-2 md:min-w-[175px] xl:min-w-[200px] font-medium'>
                            <MdReviews className='mt-[5px] xs:text-lg md:text-xl' />
                            <h1>Review</h1>
                        </div>
                        <div className='admin-inputs p-3 w-full min-h-[250px] rounded-md overflow-hidden'>
                            {review ? <>{review}</> : "--- --- ---"}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndivStudentReview