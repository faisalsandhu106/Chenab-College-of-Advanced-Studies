import React from 'react'
import ChenabLogo from '../Common/ChenabLogo'

const OpenAddmission = () => {
    return (
        <>
            <div className='light-dark-text grid xs:grid-cols-1 xl:grid-cols-2 py-10 gap-y-8 w-full h-auto'>
                <div className='flex flex-col gap-y-5 w-full'>
                    <div className='flex items-center gap-x-2'>
                        <h1 className='text-[1.5em] font-semibold'>
                            Admission Open
                            <div className='title-underline w-[60px]'></div>
                        </h1>
                        <figure className='w-[35px]'>
                            <ChenabLogo />
                        </figure>
                    </div>
                    <ul className='flex flex-col xl:pr-4 gap-y-3 text-[0.99em]'>
                        <li>
                            Chenab College of Advanced Studies (CCAS), Faisalabad, is now accepting admissions for the upcoming academic session. CCAS is committed to academic excellence, character building, and career-oriented education in a supportive and modern learning environment.
                        </li>
                        <li>
                            With experienced faculty, well-equipped classrooms, and a student-focused approach, CCAS aims to prepare learners for higher education and professional success. Our institution emphasizes quality education, discipline, and skill development to meet the demands of today’s competitive world.
                        </li>
                    </ul>
                </div>
                <div className='w-full h-auto md:px-20 lg:px-20 xl:px-5'>
                    <figure className='relative w-full h-auto rounded-md overflow-hidden'>
                        <img className='w-full h-auto bg-cover' src="/pic/chenab-addmission-pic.png" alt="addmission-bannar" />
                    </figure>
                </div>
            </div>
        </>
    )
}

export default OpenAddmission