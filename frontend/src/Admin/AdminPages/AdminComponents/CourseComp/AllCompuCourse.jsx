import React, { useState } from 'react'
import { UseAdminContext } from '../../../AdminContext/AdminContextAPI';
import { FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { MdCreate } from 'react-icons/md';
import ITCourseBlog from './ITCourseBlog';
import { SiCoursera } from 'react-icons/si';

const AllCompuCourse = () => {
    const [search, setSearch] = useState()
    const { isITCourseLoading, AllITCourse, deleteCourseBlog } = UseAdminContext();

    //* Search By Input Method
    const searchCourse = (data) => {
        if (search) {
            return data.CourseName.toLowerCase().includes(search.toLowerCase())
        }
        return data
    };

    //* Search By Input Function  
    const handleInputChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    };

    const filterData = AllITCourse.filter((e) => searchCourse(e));

    return (
        <>
            <div className='xs:mt-28 xl:mt-36 md:px-2 lg:px-4 xl:px-4 2xl:px-8 w-full h-auto'>
                {/* Heading Section*/}
                <div className='py-12 w-full'>
                    <h1 className='flex flex-col items-center text-[1.7em] font-bold text-center'>
                        IT Course Blogs
                        <div className='title-underline w-[110px]'></div>
                    </h1>
                </div>

                {/* Filter Section */}
                <div className='grid xs:grid-cols-1 md:grid-cols-2 pb-6 w-full'>
                    <div className='flex flex-col justify-center'>
                        <form onSubmit={(e) => e.preventDefault()} className=' flex items-center gap-x-1 md:w-[240px] lg:w-[260px] xl:w-[300px]'>
                            <div className='admin-inputs flex items-center justify-center w-12 h-full text-[0.9em] text-gray-500'>
                                <FaSearch />
                            </div>
                            <input
                                name='text'
                                value={search}
                                onChange={handleInputChange}
                                type="text"
                                placeholder='search a blog'
                                className='admin-inputs w-full text-[0.96em] md:text-[0.86em] xl:text-[0.9em] bg-transparent focus:outline-none'
                            />

                        </form>
                        <p className='flex items-center gap-x-1 pl-[2px] pt-2 xs:text-[0.9em] md:text-[0.9em]'>
                            {`${filterData.length > 0 ? filterData.length + " Course Offer" : 'Course Not Found'}`}
                            <SiCoursera className='-mt-[2px]' />
                        </p>
                    </div>
                    <div className='flex items-start justify-end'>
                        <NavLink to={'/admin/ITcourse/create'}>
                            <button className='flex items-center px-3 py-2 gap-x-1 text-[0.8em] font-medium text-amber-50 bg-[#08972a] hover:bg-green-500'>
                                Create New
                                <MdCreate />
                            </button>
                        </NavLink>
                    </div>
                </div>

                {/* All Course Section */}
                <ITCourseBlog
                    isITCourseLoading={isITCourseLoading}
                    AllITCourse={AllITCourse}
                    filterData={filterData}
                    deleteCourseBlog={deleteCourseBlog} />

            </div>
        </>
    )
}

export default AllCompuCourse