import React from 'react'
import AllCourse from '../.././Admin/AdminPages/AdminComponents/CourseComp/AllCourse'
import AllCompuCourse from '../.././Admin/AdminPages/AdminComponents/CourseComp/AllCompuCourse'
import SEO from '../../Components/Common/SEO'


const Courses = () => {
  return (
    <>
      <SEO title="All Courses | Chenab College" desc="This is Admin Course Chenab College Advanced Studies" />

      {/* All Course Component */}
      <AllCourse />

      {/* IT Course Blogs Component */}
      <AllCompuCourse />
    </>
  )
}

export default Courses