import React from 'react'
import ChenabLogo from '../Common/ChenabLogo'

const WhyChenab = () => {
    return (
        <>
            <div className={'grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 items-center justify-items-center sm:px-6 lg:px-1 xs:pt-12 md:pt-14 xl:pt-16 gap-y-5 w-full h-auto'}>
                <p className='lg:col-span-3 xl:col-span-4 lg:pl-3 xl:pl-9 w-full text-[0.97em] xs:text-center lg:text-left xs:order-2 lg:order-1'>
                    Chenab College of Advanced Studies, Faisalabad (CCAS) is a well-known college of Faisalabad providing quality education to the youth of city. There are countless reasons why CCAS could be the right place for you, including our award-winning academics, state-of-the-art facilities, and unbeatable campus life. But the thing people love most about the college is the community. Our well education staff and students have built together to make our college a warm and welcoming place to study and prosper. CCAS provides professional employment experiences for students, giving them the opportunity to test-drive a career before they enter the workforce. The benefits are obvious—during their time at CCAS, students can participate in any of students club to enhance and thrust their true capabilities. At CCAS we connect our students with professionals and brings their Handon experience
                </p>
                <figure className='flex flex-col items-center justify-center gap-y-3 xs:w-[25%] md:w-[95px] xl:w-[110px] xs:order-1 lg:order-2'>
                    <ChenabLogo />
                    <figcaption className='flex flex-col items-center text-xl font-black text-center text-nowrap'>
                        Why Chenab
                        <div className='title-underline mt-1 w-[60px] '></div>
                    </figcaption>
                </figure>
            </div>
        </>
    )
}

export default WhyChenab