import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { MdCreate } from 'react-icons/md';
import { SiCoursera } from 'react-icons/si';
import { NavLink } from 'react-router-dom';

const AllCoursesFilter = ({ filterData, search, setSearch, category, setCategory, categoryData }) => {

    //* Search By Input Function
    const handleInputChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value)
    };

    //* Search By Category Function
    const handleCategoryChange = (event) => {
        event.preventDefault();
        setCategory(event.target.value)
    };

    return (
        <>
            <div className='flex flex-col gap-y-4 w-full'>
                <div className='adminbackgroundSidebar p-3 w-full h-auto shadow-md'>
                    <div className='button flex items-center justify-center gap-x-5 w-full rounded-[4px] overflow-x-scroll scrollbar-hide'>
                        {
                            categoryData.map((item, index) => {
                                return (
                                    <button
                                        key={index}
                                        type='button'
                                        name="category"
                                        value={item}
                                        onClick={handleCategoryChange}
                                        className={`px-2 py-1 capitalize cursor-pointer xs:text-[0.88em] md:text-[0.84em] rounded-md font-medium  ${item === category ? "active" : 'unactive'} bg-transparent text-inherit`}>
                                        {item}
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='grid xs:grid-cols-1 md:grid-cols-2 w-full'>
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
                                placeholder='search a course'
                                className='admin-inputs w-full text-[0.96em] md:text-[0.86em] xl:text-[0.9em] bg-transparent focus:outline-none'
                            />

                        </form>
                        <p className='flex items-center gap-x-1 pl-[2px] pt-2 xs:text-[0.9em] md:text-[0.9em]'>
                            {`${filterData.length > 0 ? filterData.length + " Course Offer" : 'Course Not Found'}`}
                            <SiCoursera className='-mt-[2px]' />
                        </p>
                    </div>
                    <div className='flex items-start justify-end'>
                        <NavLink to={'/admin/allcourses/create'}>
                            <button className='flex items-center px-3 py-2 gap-x-1 text-[0.8em] font-medium text-amber-50 bg-[#08972a] hover:bg-green-500'>
                                Create New
                                <MdCreate />
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllCoursesFilter