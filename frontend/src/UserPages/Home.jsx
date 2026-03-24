import React from 'react'
import StudentReview from '../Components/HomeComp/StudentReview';
import ReviewSection from '../Components/HomeComp/ReviewSection';
import ComingEventSection from '../Components/HomeComp/ComingEventSection';
import WhyChenab from '../Components/HomeComp/WhyChenab';
import FutureITCourse from '../Components/HomeComp/FutureITCourse';
import HeroSection from '../Components/HomeComp/HeroSection';
import FutureCourse from '../Components/HomeComp/FutureCourse';
import SEO from '../Components/Common/SEO';
import OverviewSection from '../Components/HomeComp/OverviewSection';

const Home = () => {
  return (
    <>
      <SEO title="Home | Chenab College" desc="This is Home Page Chenab College Advanced Studies" />

      <section className='pb-20 w-full h-auto overflow-hidden'>
        {/* Home Hero Section */}
        <HeroSection />

        <div className='px-4'>
          {/* Why CCAS */}
          <WhyChenab />

          {/* Featured Your Course */}
          <div className='xs:pt-20 md:pt-24 lg:pt-28 xl:pt-40'>
            {/* Feture Course Heading */}
            <div className='flex flex-col items-center md:px-3 lg:px-6 xl:px-16 2xl:px-24 xs:gap-y-7 w-full h-auto text-center'>
              <div className='flex flex-col items-center xs:text-[1.7em] md:text-[1.9em] font-bold'>
                <h1>Featured Courses</h1>
                <div className='title-underline w-[130px]'></div>
              </div>
              <p className='text-[0.97em]'>
                The future college course plan is designed to prepare students for a rapidly changing global environment shaped by technological advancement, societal transformation, and evolving career demands. This plan emphasizes flexibility, interdisciplinary learning, practical skills, and lifelong adaptability, ensuring that graduates are not only knowledgeable but also innovative, ethical, and resilient problem-solvers.
              </p>
            </div>
            <FutureCourse />
          </div>

          {/* React Count */}
          <div className='xs:pt-24 md:pt-32 xl:pt-40 md:px-6 lg:px-10 xl:px-12 2xl:px-28 w-full'>
            {/* <ReviewSection /> */}
            <OverviewSection />
          </div>

          {/* Comming Up Event Section */}
          <div className='xs:pt-20 md:pt-24 lg:pt-28 xl:pt-36'>
            {/* Comming Up Evemts Heading */}
            <div className='flex flex-col items-center md:px-3 lg:px-6 xl:px-16 2xl:px-24 xs:gap-y-4 lg:gap-y-5 w-full h-auto text-center'>
              <div className='flex flex-col items-center xs:text-[1.6em] md:text-[1.8em] font-bold'>
                <h1>Coming Up Events</h1>
                <div className='title-underline w-[110px]'></div>
              </div>
              <p className='text-[0.97em]'>
                The college regularly organizes academic, co-curricular and extracurricular activities like sports galas, cultural festivals, project showcases, etc. These events are designed to encourage student participation and enhance skills beyond classroom learning.
              </p>
            </div>
            <ComingEventSection />
          </div>

          {/* Whats Students Says */}
          <div>
            <StudentReview />
          </div>

          {/* Future Up Computer Courses */}
          <div className='xs:pt-32 md:pt-28 lg:pt-32 xl:pt-40 w-full h-auto'>
            {/* Comming Up IT Blogs Heading */}
            <div className='flex flex-col items-center md:px-5 lg:px-8 xl:px-20 xs:gap-y-4 lg:gap-y-5 w-full h-auto text-center'>
              <div className='flex flex-col items-center xs:text-[1.6em] md:text-[1.8em] font-bold'>
                <h1>IT Course Blogs</h1>
                <div className='title-underline w-[100px]'></div>
              </div>
              <p className='text-[0.97em]'>
                Chenab College Of Advanced Studies (CCAS) is a private higher‑education college in Faisalabad, Punjab, Pakistan. It provides undergraduate, graduate and postgraduate programs across business, science, humanities and technology fields. The college is affiliated with local academic authorities and emphasizes modern teaching methods, qualified faculty, and equipped labs.
              </p>
            </div>
            <FutureITCourse />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home