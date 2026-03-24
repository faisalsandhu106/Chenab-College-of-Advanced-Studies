import React from 'react'
import { CgEventbrite } from 'react-icons/cg';
import { FaSearch } from 'react-icons/fa';

const FilterEvents = ({ search, setSearch, setFilter, category, setCategory, categoryData, filterData }) => {
    const handleInputChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value)
    };

    const handleFilterChange = (event) => {
        // event.preventDefault();
        setFilter(event.target.value)
    };

    const handleCategoryChange = (event) => {
        // event.preventDefault();
        setCategory(event.target.value)
    };

    return (
        <>
            <div className='grid md:grid-cols-3 xs:gap-x-8 w-full'>
                <form onSubmit={(e) => e.preventDefault()} className='flex items-center gap-x-1 xs:w-full md:w-[210px] lg:w-[230px] xl:w-[280px]'>
                    <div className='contact-inputs flex items-center justify-center w-12 h-full text-[0.9em] text-gray-500'>
                        <FaSearch />
                    </div>
                    <input
                        name='text'
                        value={search}
                        onChange={handleInputChange}    
                        type="text"
                        placeholder='search a event'
                        className='contact-inputs w-full xs:text-[0.96em] md:text-[0.86em] xl:text-[0.9em] '
                    />
                </form>
                <div className='xs:hidden md:inline-flex flex items-center justify-center gap-x-1 md:text-[0.92em]'>
                    {`${filterData.length > 0 ? filterData.length + " Event Avaliable" : 'Event Not Found'}`} <CgEventbrite />
                </div>
                {/* <div className='flex justify-end w-full xs:hidden md:flex'>
                    <select onClick={handleFilterChange} className='card-component-border px-2 py-1 xs:w-full md:w-[110px] text-[0.96em] md:text-[0.82em] xl:text-[0.94em] bg-transparent rounded-md'>
                        <option value="All">All</option>
                        <option value="a-z">Name (a-z)</option>
                        <option value="z-a">Name (z-a)</option>
                    </select>
                </div> */}
            </div>
            <div className='button flex items-center xs:justify-start xl:justify-center px-2 xs:pt-5 md:pt-7 xl:pt-8 gap-x-4 text-nowrap w-auto overflow-x-scroll scrollbar-hide'>
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
        </>
    )
}

export default FilterEvents