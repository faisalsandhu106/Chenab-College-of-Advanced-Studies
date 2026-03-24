import React from 'react'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { UseAdminContext } from '../../../AdminContext/AdminContextAPI'
import ContactCard from './ContactCard'
import { SiCoursera } from 'react-icons/si'
import { RiContactsBook3Fill } from 'react-icons/ri'

const AllContactForm = () => {
    const [search, setSearch] = useState()
    const { isContactFormLoading, AllContactForm, deleteContactForm } = UseAdminContext();

    //* Search By Input Method
    const searchCourse = (data) => {
        if (search) {
            return data.firstName.toLowerCase().includes(search.toLowerCase())
        }
        return data
    };

    const filterData = AllContactForm.filter((e) => searchCourse(e));

    //* Search By Input Function
    const handleInputChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value)
    };

    return (
        <>
            {/* Heading Section*/}
            <div className='xs:pt-5 xl:pt-8 xs:pb-12 lg:pb-14 w-full'>
                <div className='flex flex-col items-center xs:text-[1.7em] font-bold capitalize text-center'>
                    <h1>
                        Contact Form
                    </h1>
                    <div className='title-underline w-[90px]'></div>
                </div>
            </div>

            {/* Filter Section */}
            <div className='grid xs:grid-cols-1 md:grid-cols-2 md:px-2 lg:px-4 xl:px-10 2xl:px-14 w-full'>
                <form onSubmit={(e) => e.preventDefault()} className='flex items-center gap-x-1 md:w-[270px] lg:w-[300px] xl:w-[370px]'>
                    <div className='admin-inputs flex items-center justify-center w-12 h-full text-[0.9em] text-gray-500'>
                        <FaSearch />
                    </div>
                    <input
                        name='text'
                        value={search}
                        onChange={handleInputChange}
                        type="text"
                        placeholder='search a contact'
                        className='admin-inputs w-full text-[0.96em] md:text-[0.86em] xl:text-[0.9em] bg-transparent focus:outline-none'
                    />
                </form>
                <div className='flex items-center justify-end gap-x-1 pr-[2px] pt-2 xs:text-[0.96em] md:text-[0.9em]'>
                    {`${filterData.length > 0 ? filterData.length + " Contacts Form" : 'Contact Not Found'} `}
                    <RiContactsBook3Fill />
                </div>
            </div>

            {/* ----------Contact Form API---------- */}
            <ContactCard
                isContactFormLoading={isContactFormLoading}
                AllContactForm={AllContactForm}
                filterData={filterData}
                deleteContactForm={deleteContactForm} />
        </>
    )
}

export default AllContactForm