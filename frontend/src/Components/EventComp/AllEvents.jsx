import React, { useState } from 'react'
import { UseCourseContext } from '../ContextAPI/UserContext';
import FilterEvents from './FilterEvents';
import EventCards from './EventCards';


const AllEvents = () => {
    const [search, setSearch] = useState()
    const [filter, setFilter] = useState("All")
    const [category, setCategory] = useState("all")

    const { isEventLoading, AllEvent, getIndividualEvent } = UseCourseContext();

    //* Search By Input Method
    const searchData = (data) => {
        if (search) {
            return data.eventTitle.toLowerCase().includes(search.toLowerCase())
        }
        return data
    };

    //* Search By Sorting Method------------------------------
    const sortProduct = (a, b) => {
        if (filter == "All") {
            return filter
        }

        if (filter == "a-z") {
            return a.eventTitle.localeCompare(b.eventTitle)
        }

        if (filter == "z-a") {
            return b.eventTitle.localeCompare(a.eventTitle)
        }
    };

    // *Search By Category Method-----------------------------
    const searchCategory = (categ) => {
        if (category === "all") return categ
        return categ.category === category
    };

    // *Fetch Category In API---------------------------------
    const getCategoryData = (data, property) => {
        let newVal = data.map((curElem) => {
            return curElem[property]
        })

        return (newVal = ["all", ...new Set(newVal)])
    };

    const categoryData = getCategoryData(AllEvent, "category");
    // console.log(categoryData)

    const filterData = AllEvent.filter((event) => searchData(event) && searchCategory(event) && AllEvent.sort(sortProduct));

    return (
        <>
            <div className='pt-10 pb-1 w-full h-auto'>
                {/* ---------Heading Section-------- */}
                <div className='flex flex-col items-center xs:px-4 md:px-6 xl:px-16 2xl:px-28 gap-y-5 w-full h-auto text-center'>
                    <h1 className='flex flex-col items-center xs:text-[1.7em] md:text-[1.9em] font-bold'>
                        Our Events
                        <div className='title-underline w-[90px]'></div>
                    </h1>
                    <p className='text-[0.97em]'>
                        Chenab College of Advanced Studies (CCAS) always participate and arrange a lot of events that entertain students and provides them a great vision whether it could be  co curriculum or extra curricular activities
                    </p>
                </div>

                {/* ---------Filter Section-------- */}
                <div className='Card-box xs:p-3 md:p-4 lg:p-5 xs:mx-3 md:mx-4 lg:mx-6 xl:mx-5 md:px-2 lg:px-6 xl:px-6 mt-6 rounded-lg'>
                    <FilterEvents
                        search={search}
                        setSearch={setSearch}
                        setFilter={setFilter}
                        category={category}
                        setCategory={setCategory}
                        filterData={filterData}
                        categoryData={categoryData} />
                </div>

                {/* ----------Events API---------- */}
                <div className='xs:px-5 md:px-6 lg:px-8 xl:px-10 w-full h-auto'>
                    <EventCards
                        isEventLoading={isEventLoading}
                        AllEvent={AllEvent}
                        filterData={filterData}
                        getIndividualEvent={getIndividualEvent} />
                </div>
            </div>
        </>
    )
}

export default AllEvents