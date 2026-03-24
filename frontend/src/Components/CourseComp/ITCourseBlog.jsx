import React from 'react'
import ITCourseCard from './ITCourseCard'

const ITCourseBlog = () => {
    return (
        <section className='xs:pt-28 md:pt-32 xl:pt-44 w-full h-auto'>
            <div className='flex flex-col items-center justify-center xs:px-4 lg:px-8 xl:px-16 gap-y-6 w-full text-center'>
                <h1 className='light-dark-text flex flex-col items-center xs:text-[1.6em] md:text-[1.8em] font-bold'>
                    IT Course Blogs
                    <div className='title-underline w-[140px]'></div>
                </h1>
                <p className='text-[0.97em]'>
                    <b>Since 2010,CCAS</b> has been the leading Institute of Business, Security and Information Technology worldwide. We’ve trained growing number of 1 million students worldwide by providing up-to-date course content, experienced and certified trainers to facilitate our valuable students in achieving professional excellence.
                </p>
            </div>

            <ITCourseCard />
        </section>
    )
}

export default ITCourseBlog