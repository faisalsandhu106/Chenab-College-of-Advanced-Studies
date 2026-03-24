import React from 'react'
import AllStudentAddmission from './AdminComponents/AdmissionformComp/AllStudentAddmission'
import SEO from '../../Components/Common/SEO'

const AdmissionForm = () => {
  return (
    <>
      <SEO title="Admission Form | Chenab College" desc="This is Admission Form Page Chenab College Advanced Studies" />

      <AllStudentAddmission />
    </>
  )
}

export default AdmissionForm