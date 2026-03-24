import React from 'react'
import OpenAddmission from '../Components/ApplyFormComp/OpenAddmission';
import AllCourse from '../Components/CourseComp/AllCourse';
import SEO from '../Components/Common/SEO';
import ITCourseBlog from '../Components/CourseComp/ITCourseBlog';
import FAQComp from '../Components/CourseComp/FAQComp';

const Course = () => {

  return (
    <>
      <SEO title="Our Course | Chenab College" desc="This is Our Course Chenab College Advanced Studies" />

      <div className='xs:pb-20 md:pb-24 xl:pb-28 w-full h-auto overflow-hidden'>
        {/* Subject Course`s Data */}
        <AllCourse />

        {/* FAQ  */}
        <FAQComp />

        {/* IT Course Blogs API Data */}
        <ITCourseBlog />

        {/* Addmission Open Information */}
        {/* <div className='xs:pt-16 md:pt-20 lg:pt-28 xs:px-4 md:px-6 lg:px-7 xl:px-10'>
          <OpenAddmission />
        </div> */}
      </div>
    </>
  )
}

export default Course