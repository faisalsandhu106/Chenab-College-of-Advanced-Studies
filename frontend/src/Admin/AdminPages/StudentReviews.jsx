import React from 'react'
import AllStudentReview from './AdminComponents/studentreviewsComp/AllStudentReview'
import SEO from '../../Components/Common/SEO'

const StudentReviews = () => {
  return (
    <>
      <SEO title="Student Review | Chenab College" desc="This is Student Reviews Page Chenab College Advanced Studies" />

      <AllStudentReview />
    </>
  )
}

export default StudentReviews