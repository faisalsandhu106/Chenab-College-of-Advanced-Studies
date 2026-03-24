import React, { useState } from 'react'
import { motion } from 'motion/react';
import { FaFileWaveform } from 'react-icons/fa6';
import { IoHomeSharp } from 'react-icons/io5';
import { MdDashboard, MdReviews } from 'react-icons/md';
import { RiCloseLargeFill, RiContactsBook2Fill } from 'react-icons/ri';
import { SiCoursera, SiEventbrite } from 'react-icons/si';
import { NavLink } from 'react-router-dom';
import { hendleSuccess } from '../Components/Utils';
import { ToastContainer } from 'react-toastify';
import Theme from '../Components/Common/Theme';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdLogOut } from 'react-icons/io';

const SideBar = () => {
    const [isSidebar, setIsSidebar] = useState(false);

    //* Toggle Sidebar
    const toggleSidebar = () => {
        setIsSidebar(!isSidebar)
    };

    //* Admin Logout Account
    const toggleLogOut = () => {
        localStorage.removeItem("Token")
        localStorage.removeItem("AdminId")
        hendleSuccess('Logout Successfully')
    }

    //* Website Pages Paths
    const webpages = [
        {
            button: 'DashBoard',
            url: '/admin/dashboard',
            icon: <MdDashboard />,
        },
        {
            button: 'Course',
            url: '/admin/allcourses',
            icon: <SiCoursera />,
        },
        {
            button: 'Contact Form',
            url: '/admin/contactform',
            icon: <RiContactsBook2Fill />,
        },
        {
            button: 'Events',
            url: '/admin/allevents',
            icon: <SiEventbrite />,
        },
        {
            button: 'Students Review',
            url: '/admin/studentreviews',
            icon: <MdReviews />,
        },
        {
            button: 'Admission Form',
            url: '/admin/admissionform',
            icon: <FaFileWaveform />,
        },
        {
            button: 'Back To Home',
            url: '/home',
            icon: <IoHomeSharp />,
        }

    ];

    return (
        <>
            <div className='adminbackgroundSidebar fixed top-0 left-0 z-[24] xs:w-full xl:w-auto xl:min-h-screen'>
                <div className='adminbackgroundSidebar flex xl:flex-col items-center xs:justify-between xl:justify-start xs:px-4 md:px-5 lg:px-8 xl:px-0 xs:py-3 lg:py-3 xl:py-0 gap-y-6 xs:w-full xl:w-[70px] xl:min-h-screen'>
                    <div className='flex flex-col items-start'>
                        <div className='flex items-start gap-x-2 xl:hidden'>
                            <figure className='chenab-logo-animation xs:w-[37px] md:w-[37px]'>
                                <img className='w-full h-auto bg-cover' src="/pic/Chenab Logo.webp" alt="Chenab-logo" />
                            </figure>
                            <figcaption className='text-[1em] tracking-[0.4px] font-medium'>
                                CCAS
                            </figcaption>
                        </div>
                    </div>

                    {/* Toggle Btn & Theme Mood */}
                    <div className='flex xs:flex-row xl:flex-col items-center gap-x-5 gap-y-6'>
                        <div onClick={toggleSidebar} className='flex items-center justify-center w-[32px] h-[32px] cursor-pointer rounded-sm text-white bg-[#167CE9] hover:bg-[#3168d7] hover:scale-105 duration-100 xs:order-2 xl:order-1'>
                            <GiHamburgerMenu className='text-[1.45em]' />
                        </div>
                        <div className='xs:order-1 xl:order-2'>
                            <Theme />
                        </div>
                    </div>

                    <ul className='admin-sidebar flex xs:hidden xl:inline-flex flex-col items-center mt-4 xs:gap-y-5 '>
                        {webpages.map((items, index) => {
                            const { url, icon } = items
                            return (
                                <NavLink
                                    key={index}
                                    to={url}
                                    className={`flex items-center ${items === index ? "active" : ''}`}>
                                    <div className='flex items-center justify-center p-2 cursor-pointer rounded-md hover:bg-gray-300 hover:text-gray-800 text-[1.6em]'>
                                        {icon}
                                    </div>
                                </NavLink>
                            )
                        })}
                    </ul>
                </div>
                {
                    isSidebar &&
                    <motion.div
                        initial={{ opacity: 1, x: -1000 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: [0.2, 0.99, 0.2, 0.99] }}
                        className='fixed top-0 z-[26] left-0 flex flex-col items-start w-full min-h-screen bg-[#000000da]'>
                        <div className='adminbackgroundSidebar adminSidebar-scroll xs:px-4 md:px-5 py-5 gap-y-6 xs:w-[90%] sm:w-[60%] md:w-[50%] lg:w-[400px] h-screen shadow-xl overflow-y-auto'>
                            <div className='flex flex-col items-start gap-y-3'>
                                <div className='flex items-start justify-between gap-2 w-full'>
                                    <div className='flex items-start gap-2'>
                                        <figure className='xs:w-[40px] md:w-[40px] xl:w-[px]'>
                                            <img className='w-full h-auto bg-cover' src="/pic/Chenab Logo.webp" alt="logo" />
                                        </figure>
                                        <h1 className='text-[1em] tracking-[0.4px] font-medium'>
                                            CCAS
                                        </h1>
                                    </div>
                                    <div onClick={toggleSidebar} className='flex items-center justify-center w-[30px] h-[30px] cursor-pointer rounded-sm text-white bg-[#167CE9] hover:bg-[#3168d7] hover:scale-105 duration-100 overflow-hidden'>
                                        <RiCloseLargeFill className='text-[1.45em]' />
                                    </div>
                                </div>
                            </div>
                            <ul className='admin-sidebar flex flex-col items-start mt-12 xs:gap-y-5'>
                                {webpages.map((items, index) => {
                                    const { button, url, icon } = items
                                    return (
                                        <NavLink
                                            key={index}
                                            to={url}
                                            onClick={toggleSidebar}
                                            className={`flex items-end pl-2 py-2 gap-x-4 xs:min-w-[220px] md:min-w-[220px] rounded-r-full overflow-hidden hover:bg-gray-300 hover:text-gray-800 ${items === index ? "active" : ''}`}>
                                            <div className='xs:text-[1.65em] md:text-[1.6em]'> {icon} </div>
                                            <div className='xs:text-[1.05em] md:text-[1em] xl:text-[0.98em] font-medium'>{button}</div>
                                        </NavLink>
                                    )
                                })}
                            </ul>
                            <div className='pt-14 w-full h-auto'>
                                <a href="/login" className='inline-block'>
                                    <button onClick={toggleLogOut} className='flex items-center px-3 gap-x-1 text-[0.8em] tracking-[0.3px] font-medium hover:bg-blue-400'>
                                        Logout
                                        <IoMdLogOut className='text-base' />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                }
            </div>
            <ToastContainer />
        </>
    )
}

export default SideBar