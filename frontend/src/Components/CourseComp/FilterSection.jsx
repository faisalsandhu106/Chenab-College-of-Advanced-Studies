import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaListUl } from 'react-icons/fa'
import { MdGridView } from 'react-icons/md'

const FilterSection = ({ filterCourse, grid, setGrid, search, setSearch, setFilter, category, setCategory, categoryData }) => {

    const handleInputChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value)
    };

    const handleSortChange = (event) => {
        event.preventDefault();
        setFilter(event.target.value)
    };

    const handleCategoryChange = (event) => {
        event.preventDefault();
        setCategory(event.target.value)
    };

    return (
        <>
            <div className='relative w-full xs:min-h-[340px] lg:min-h-[380px] xl:min-h-[410px] overflow-hidden'>
                <div className='absolute xs:top-16 md:top-10 z-[1] flex md:items-start w-full h-auto'>
                    <img className='w-full xs:scale-[2.8] md:scale-[1] bg-cover:' src="https://petroknowledge.com/wp-content/uploads/2025/10/MG172-min-scaled-image-1.jpg" alt="bg_img" />
                </div>
                <div className='absolute top-0 z-[2] flex flex-col items-center justify-end px-2 pb-2 gap-y-2 w-full h-full bg-[#18181894]'>
                    <div className='flex items-center xs:py-5 md:py-5 xl:py-7 xs:w-full md:w-[470px] lg:w-[500px] xl:w-[650px] 2xl:w-[7500px] h-auto rounded-md bg-gradient-to-r from-blue-600 to-cyan-600 text-amber-50 overflow-hidden'>
                        <div className='flex flex-col xs:px-4 md:px-7 xl:px-8 w-full h-auto'>
                            <p className='text-[0.78em] md:text-[0.86em] text-gray-100'>
                                Know what you're after?
                            </p>
                            <div className='flex items-center justify-between mt-1 w-full'>
                                <h1 className='pb-1 md:pb-2 xs:text-[1.5em] md:text-[1.4em] xl:text-[1.6em] font-medium'>
                                    Explore Our Courses
                                </h1>
                                <p className='xs:text-[0.84em] md:text-[0.88em] xl:text-[0.9em] text-gray-100 xs:hidden md:inline-flex'>
                                    {`${filterCourse.length > 0 ? filterCourse.length + " Course Available" : 'Course Not Found'} `}
                                </p>
                            </div>
                            <form onSubmit={(e) => e.preventDefault()} className='flex items-center px-2 w-full rounded-sm bg-white text-black'>
                                <input
                                    name='text'
                                    value={search}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder='Type a course you want to study'
                                    className='py-[8px] md:py-[7px] lg:py-[9px] w-full text-[0.99em] md:text-[1em] lg:text-[1.05em] text-gray-700 focus:outline-none overflow-hidden'
                                />
                                <div className='w-auto h-full text-gray-700'>
                                    <FaSearch className='text-[1.1em] lg:text-[1.2em]' />
                                </div>
                            </form>
                            <div className='flex items-center pt-2 gap-x-1 text-[0.78em] sm:text-[0.8em]'>
                                <p>
                                    Just Browsing?
                                </p>
                                <p className='underline'>
                                    See all courses
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='contact-inputs flex items-center xs:justify-center md:justify-between xs:px-2 md:px-4 py-2 xs:w-full md:w-[600px] lg:w-[700px] xl:w-[1000px] 2xl:w-[1100px] rounded-[4px]'>
                        <div className='button flex items-center justify-center gap-x-3 xs:hidden md:inline-flex'>
                            <div className={`p-[7px] rounded-md ${grid ? 'active' : 'unactive'}`} onClick={() => setGrid(true)}>
                                <MdGridView onClick={() => setGrid(true)} />
                            </div>
                            <div className={`p-[7px] rounded-md ${!grid ? 'active' : 'unactive'}`} onClick={() => setGrid(false)}>
                                <FaListUl onClick={() => setGrid(false)} />
                            </div>
                        </div>
                        <div className='button flex xs:gap-x-3 md:gap-x-4'>
                            {/* overflow-x-scroll scrollbar-hide */}
                            {
                                categoryData.map((item, index) => {
                                    return (
                                        <button
                                            key={index}
                                            type='button'
                                            name="category"
                                            value={item}
                                            onClick={handleCategoryChange}
                                            className={`px-2 py-1 capitalize xs:text-[0.8em] md:text-[0.6em] xl:text-[0.7em] rounded-md font-medium  ${item === category ? "active" : 'unactive'} bg-transparent text-inherit`}>
                                            {item}
                                        </button>
                                    )
                                })
                            }
                        </div>
                        <div
                            // onClick={handleSortChange}
                            className='card-component-borde p-1 rounded-md text-[0.9em] bg-transparent xs:hidden md:inline-flex'>
                            {/* <option value="all">All</option>
                            <option value="a-z">Name (A-Z)</option>
                            <option value="z-a">Name (Z-A)</option> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterSection