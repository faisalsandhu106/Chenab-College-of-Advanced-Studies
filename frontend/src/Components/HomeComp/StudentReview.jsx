import React, { useState } from 'react'
import { UseCourseContext } from '../ContextAPI/UserContext';
import { MdOutlineRateReview } from 'react-icons/md';
import StudentReviewSilder from './StudentReviewSilder';
import { FaSearch } from 'react-icons/fa';

const StudentReview = () => {
    const [search, setSearch] = useState();
    const { isStudentsReviewLoading, StudentsReview } = UseCourseContext();

    //* Search By Input Method
    const searchData = (data) => {
        if (search) {
            return data.rollNo.toLowerCase().includes(search.toLowerCase())
        }
        return data
    };

    const handleInputChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    };

    const filterData = StudentsReview.filter((e) => searchData(e));

    return (
        <>
            <div className='flex flex-col items-center justify-center xs:pt-28 md:pt-32 xl:pt-44 lg:px-5 xl:px-10 w-full h-auto'>
                <div className='flex flex-col xs:gap-y-12 xl:gap-y-14 w-full'>
                    <h1 className='flex flex-col items-center xs:text-[1.7em] md:text-[1.9em] font-bold'>
                        What Our Students Say
                        <div className='title-underline w-[150px]'></div>
                    </h1>
                    <div className='grid xs:grid-cols-1 md:grid-cols-2 w-full'>
                        <form onSubmit={(e) => e.preventDefault()} className='flex items-center gap-x-1 md:w-[260px] lg:w-[280px] xl:w-[320px]'>
                            <div className='contact-inputs flex items-center justify-center w-12 h-full text-[0.9em] text-gray-500'>
                                <FaSearch />
                            </div>
                            <input
                                name='text'
                                value={search}
                                onChange={handleInputChange}
                                type="text"
                                placeholder='search by roll number'
                                className='contact-inputs w-full text-[0.96em] md:text-[0.86em] xl:text-[0.9em] bg-transparent focus:outline-none'
                            />
                        </form>
                        <div className='flex items-center justify-end gap-x-1 pr-[2px] pt-2 xs:text-[0.96em] md:text-[0.9em]'>
                            {`${filterData.length > 0 ? filterData.length + " Student Review" : 'Review Not Found'} `}
                            {/* <RiContactsBook3Fill /> */}
                        </div>
                    </div>
                </div>

                <StudentReviewSilder
                    isStudentsReviewLoading={isStudentsReviewLoading}
                    StudentsReview={StudentsReview}
                    filterData={filterData} />

            </div>
        </>
    )
}

export default StudentReview