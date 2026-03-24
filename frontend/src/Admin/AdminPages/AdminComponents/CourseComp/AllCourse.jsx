import React, { useState } from 'react'
import { UseAdminContext } from '../../../AdminContext/AdminContextAPI';
import AllCoursesFilter from '../CourseComp/AllCoursesFilter';
import CourseCard from './CourseCard';

const AllCourses = () => {
    const [search, setSearch] = useState()
    const [category, setCategory] = useState("all")

    const { isCourseLoading, AllCourse, deleteCourse } = UseAdminContext();

    //* Search By Input Method
    const searchCourse = (data) => {
        if (search) {
            return data.title.toLowerCase().includes(search.toLowerCase())
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

    const categoryData = getCategoryData(AllCourse, "category");
    const filterData = AllCourse.filter((course) => searchCourse(course) && searchCategory(course));

    return (
        <>
            {/* Filter Data Component */}
            <div className='md:px-3 lg:px-5 w-full'>
                <AllCoursesFilter
                    search={search}
                    setSearch={setSearch}
                    category={category}
                    setCategory={setCategory}
                    categoryData={categoryData}
                    filterData={filterData} />
            </div>

            {/* Heading Section*/}
            <div className='py-12 w-full'>
                <div className='flex flex-col items-center xs:text-[1.6em] lg:text-[1.7em] font-bold text-center'>
                    <h1>What We Offer</h1>
                    <div className='title-underline w-[100px]'></div>
                </div>
            </div>

            {/* ------------API Data------------- */}
            <CourseCard
                isCourseLoading={isCourseLoading}
                AllCourse={AllCourse}
                filterData={filterData}
                deleteCourse={deleteCourse} />
        </>
    )
}

export default AllCourses