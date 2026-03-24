import React, { useState } from 'react'
import { UseCourseContext } from '../ContextAPI/UserContext';
import { SiCoursera } from 'react-icons/si';
import FilterSection from './FilterSection';
import GridCourseComp from './GridCourseComp';
import ListCourseComp from './ListCourseComp';

const AllCourse = () => {
    const [grid, setGrid] = useState(true);
    const [search, setSearch] = useState();
    const [filter, setFilter] = useState("all");
    const [category, setCategory] = useState("all");

    const { isLoading, Allcourses } = UseCourseContext();

    //* Search By Input Method--------------------------------
    const searchCourse = (data) => {
        if (search) {
            return data.title.toLowerCase().includes(search.toLowerCase())
        }
        return data
    };

    //* Search By Sorting Method------------------------------
    const sortCourse = (a, b) => {
        if (filter == "all") {
            return filter
        }

        // if (filter == "lowest") {
        //   return a.price - b.price
        // }

        // if (filter == "highest") {
        //   return b.price - a.price
        // }

        if (filter == "a-z") {
            return a.title.localeCompare(b.title)
        }

        if (filter == "z-a") {
            return b.title.localeCompare(a.title)
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

    const categoryData = getCategoryData(Allcourses, "category");

    const filterCourse = Allcourses.filter((course) => searchCourse(course) && searchCategory(course) && Allcourses.sort(sortCourse));
    // console.log(categoryData)


    return (
        <div className='w-full'>
            {/* Filter Section*/}
            <div className='w-full h-auto overflow-hidden'>
                <FilterSection
                    filterCourse={filterCourse}
                    grid={grid}
                    setGrid={setGrid}
                    search={search}
                    setSearch={setSearch}
                    setFilter={setFilter}
                    category={category}
                    setCategory={setCategory}
                    categoryData={categoryData}
                />
            </div>

            {/* All Course Section */}
            <div className='flex flex-col xs:px-5 md:px-5 lg:px-8 xl:px-12 2xl:px-16 w-full h-auto'>
                <div className='flex items-center gap-x-2 py-4 w-full text-[0.9em] font-medium'>
                    {`${filterCourse.length > 0 ? filterCourse.length + " Course Available" : 'Course Not Found'} `}
                    <SiCoursera className='-mt-[2px]' />
                </div>

                {
                    grid ?
                        <GridCourseComp
                            isLoading={isLoading}
                            Allcourses={Allcourses}
                            filterCourse={filterCourse} />
                        :
                        <ListCourseComp
                            isLoading={isLoading}
                            Allcourses={Allcourses}
                            filterCourse={filterCourse} />
                }
            </div>
        </div>
    )
}

export default AllCourse