import React from 'react'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { UseAdminContext } from '../../../AdminContext/AdminContextAPI'
import ReviewCard from './ReviewCard';
import { MdReviews } from 'react-icons/md';

const AllStudentReview = () => {
    const [search, setSearch] = useState()
    const { isStudentReviewLoading, AllStudentReview, deletereview } = UseAdminContext();

    //* Search By Input Method
    const searchCourse = (data) => {
        if (search) {
            return data.firstName.toLowerCase().includes(search.toLowerCase())
        }
        return data
    };

    const filterData = AllStudentReview.filter((e) => searchCourse(e));

    //* Search By Input Function
    const handleInputChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value)
    };

    return (
        <>
            {/* Heading Section*/}
            <div className='xs:pt-5 xl:pt-8 xs:pb-10 md:pb-12 w-full'>
                <div className='flex flex-col items-center xs:text-[1.65em] font-bold capitalize text-center'>
                    <h1>
                        Student Reviews
                    </h1>
                    <div className='title-underline w-[115px]'></div>
                </div>
            </div>

            {/* Filter Section */}
            <div className='grid xs:grid-cols-1 md:grid-cols-2 md:px-4 lg:px-8 xl:px-10 2xl:px-14 w-full'>
                <form onSubmit={(e) => e.preventDefault()} className='flex items-center gap-x-1 md:w-[270px] lg:w-[300px] xl:w-[350px]'>
                    <div className='admin-inputs flex items-center justify-center w-12 h-full text-[0.9em] text-gray-500'>
                        <FaSearch />
                    </div>
                    <input
                        name='text'
                        value={search}
                        onChange={handleInputChange}
                        type="text"
                        placeholder='search a review'
                        className='admin-inputs w-full text-[0.96em] md:text-[0.86em] xl:text-[0.9em] bg-transparent focus:outline-none'
                    />
                </form>
                <div className='flex items-center justify-end gap-x-1 pr-[2px] pt-2 xs:text-[0.96em] md:text-[0.9em]'>
                    {`${filterData.length > 0 ? filterData.length + " Student Review" : 'Review Not Found'} `}
                    <MdReviews />
                </div>
            </div>

            {/* ----------Student Reviews API---------- */}
            <ReviewCard
                isStudentReviewLoading={isStudentReviewLoading}
                AllStudentReview={AllStudentReview}
                filterData={filterData}
                deletereview={deletereview} />

        </>
    )
}

export default AllStudentReview