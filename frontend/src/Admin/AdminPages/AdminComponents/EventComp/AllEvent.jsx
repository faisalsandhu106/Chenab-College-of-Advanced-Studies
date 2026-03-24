import React from 'react'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { MdCreate } from 'react-icons/md'
import { UseAdminContext } from '../../../AdminContext/AdminContextAPI'
import EventCard from './EventCard'
import { CgEventbrite } from 'react-icons/cg'

const AllEvent = () => {
    const [search, setSearch] = useState()
    const [category, setCategory] = useState("all")

    const { isEventLoading, AllEvent, deleteEvent } = UseAdminContext();

    //* Search By Input Method
    const searchCourse = (data) => {
        if (search) {
            return data.eventTitle.toLowerCase().includes(search.toLowerCase())
        }
        return data
    };

    //* Search By Category Method
    const searchCategory = (categ) => {
        if (category === "all") return categ
        return categ.category === category
    };

    //* Fetch Category In API
    const getCategoryData = (data, property) => {
        let newVal = data.map((curElem) => {
            return curElem[property]
        })

        return (newVal = ["all", ...new Set(newVal)])
    };

    const categoryData = getCategoryData(AllEvent, "category");

    const filterData = AllEvent.filter((e) => searchCourse(e) && searchCategory(e));

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
            {/* Filter Section */}
            <div className='flex flex-col md:px-3 lg:px-5 gap-y-4 w-full'>
                <div className='adminbackgroundSidebar button flex items-center xs:justify-start xl:justify-center px-3 py-5  gap-x-4 text-nowrap w-auto overflow-x-scroll scrollbar-hide'>
                    {
                        categoryData.map((item, index) => {
                            return (
                                <button
                                    key={index}
                                    type='button'
                                    name="category"
                                    value={item}
                                    onClick={handleCategoryChange}
                                    className={`px-2 py-1 capitalize xs:text-[0.8em] md:text-[0.8em] xl:text-[0.9em] rounded-md font-medium ${item === category ? "active" : 'unactive'}  text-inherit`}>
                                    {item}
                                </button>
                            )
                        })
                    }
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
                                placeholder='search a event'
                                className='admin-inputs w-full text-[0.96em] md:text-[0.86em] xl:text-[0.9em] bg-transparent focus:outline-none'
                            />

                        </form>
                        <p className='flex items-center gap-x-1 pl-[2px] pt-2 xs:text-[0.9em] md:text-[0.9em]'>
                            {`${filterData.length > 0 ? filterData.length + " Events Avaliable" : 'Event Not Found'}`}
                            <CgEventbrite className='-mt-[2px]' />
                        </p>
                    </div>
                    <div className='flex items-start justify-end'>
                        <NavLink to={'/admin/allevents/create'}>
                            <button className='flex items-center px-3 gap-x-1 text-[0.8em] font-medium text-amber-50 bg-[#08972a] hover:bg-green-500'>
                                Create New
                                <MdCreate />
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* Heading Section*/}
            <div className='py-12 w-full'>
                <h1 className='flex flex-col items-center xs:text-[1.65em] font-bold capitalize text-center'>
                    Our All Events
                    <div className='title-underline w-[100px]'></div>
                </h1>
            </div>

            {/* ----------Event API Data---------- */}
            <EventCard
                isEventLoading={isEventLoading}
                AllEvent={AllEvent}
                filterData={filterData}
                deleteEvent={deleteEvent} />
        </>
    )
}

export default AllEvent