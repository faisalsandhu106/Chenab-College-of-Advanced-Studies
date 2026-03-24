import React from 'react'
import CollegeVideo from '../Components/AboutComp/CollegeVideo'
import VisionMisssion from '../Components/AboutComp/VisionMisssion'
import ReviewStudentForm from '../Components/AboutComp/ReviewStudentForm'
import ChenabOwer from '../Components/AboutComp/ChenabOwer'
import OurTeacher from '../Components/AboutComp/OurTeacher'
import HistoryFsd from '../Components/AboutComp/HistoryFsd'
import SEO from '../Components/Common/SEO'

const About = () => {
  return (
    <>
      <SEO title="Adout | Chenab College" desc="This is Adout Page Chenab College Advanced Studies" />

      <div className='xs:pt-14 md:pt-10 pb-16 px-4 w-full h-auto overflow-hidden'>
        {/* See Chenab College Of Advanced */}
        <CollegeVideo />

        {/* Vision % Mission */}
        <VisionMisssion />

        {/* Chairman and Principle */}
        <ChenabOwer />

        {/* Our Advisor */}
        <OurTeacher />

        {/* History Of Faisalabad */}
        <HistoryFsd />

        {/* Reviews For Student */}
        <ReviewStudentForm />
      </div>
    </>
  )
}

export default About