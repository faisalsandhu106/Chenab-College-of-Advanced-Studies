import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";
import { IoMail } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import { MdLocalPhone, MdLocationPin } from 'react-icons/md';
import { FaBuildingColumns } from 'react-icons/fa6';
import ChenabLogo from './ChenabLogo';

//* contact links
const contactLinks = [
    {
        icon: <MdLocationPin />,
        title: " located on Main West Canal Road, Near Abdullah Pur",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1202.2263508576416!2d73.10920229630727!3d31.423169725212286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392268153fc0774d%3A0x7af0a06c3ac14097!2sChenab%20College%20of%20Advance%20Studies!5e1!3m2!1sen!2s!4v1769237906984!5m2!1sen!2s",
    },
    {
        icon: <MdLocalPhone />,
        title: "+92304 0343547",
        url: 'tel:+92304 0343547'
    },
    {
        icon: <IoMail />,
        title: "info@ccas.edu.pk",
        url: 'mailto:info@ccas.edu.pk'
    },
];

//* Website Pages Paths
const webpages = [
    {
        id: '1',
        button: 'Home',
        url: '/home'
    },
    {
        id: '2',
        button: 'about',
        url: '/about'
    },
    {
        id: '3',
        button: 'Course',
        url: '/Course'
    },
    {
        id: '4',
        button: 'Events',
        url: '/event'
    },
    {
        id: '5',
        button: 'Contact',
        url: '/contact'
    },
    {
        id: '6',
        button: 'Admin',
        url: '/admin/dashboard'
    }
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const GoMoveToTop = () => {
        window, scrollTo({ top: 0, left: 0, behavior: "smooth" })
    };

    return (
        <>
            <footer className='relative flex flex-col w-full xs:min-h-[1120px] md:min-h-[430px] lg:min-h-[440px] xl:min-h-[470px] overflow-hidden '>
                <div className='absolute top-0 left-0 z-[2] w-full h-full'>
                    <img className='w-full xs:scale-[100] md:scale-[1] bg-cover :'src="https://petroknowledge.com/wp-content/uploads/2025/10/MG172-min-scaled-image-1.jpg" alt="footer-bgPic" />
                </div>
                <div className='flex flex-col justify-between absolute top-0 left-0 z-[2] w-full h-full text-amber-50 bg-[#181818ee]'>
                    <div className='grid xs:grid-cols-1 md:grid-cols-5 xs:gap-y-12 md:justify-items-center xs:pt-10 lg:pt-12 xs:px-4 md:px-6 lg:px-10 xl:px-12 w-full h-auto'>
                        <div className='flex flex-col items-start md:col-span-1'>
                            <div className='xs:pb-4 md:pb-4 xl:pb-6 xs:text-[1.1em] md:text-[1em] font-medium'>
                                {/* <div className='title-underline mb-[4px] w-6 h-[1px]'></div> */}
                                <div className='flex items-center gap-x-2'>
                                    <h1>Chenab College</h1>
                                    <FaBuildingColumns />
                                </div>
                            </div>
                            <div className='flex flex-col xs:gap-y-4 lg:gap-y-5'>
                                <p className='xs:text-[0.92em] md:text-[0.76em] xl:text-[0.9em]'>
                                    Focused on academic learning and overall personal development.
                                </p>
                            </div>
                        </div>
                        <div className='md:col-span-2 w-full md:pl-10 xl:pl-20'>
                            <h3 className='xs:pb-4 md:pb-4 xl:pb-6 xs:text-[1.1em] md:text-[1em] font-medium'>
                                {/* <div className='title-underline mb-[4px] w-6 h-[1px]'></div> */}
                                Recent Blogs
                            </h3>
                            <div className='flex flex-col gap-y-7 w-full min-h-[200px] xs:text-[0.92em] md:text-[0.8em] xl:text-[0.9em]'>
                                <div className='flex items-start gap-x-3'>
                                    <figure className='xs:w-32 xl:w-32 h-16 rounded-md overflow-hidden'>
                                        <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" alt="blog-img" />
                                    </figure>
                                    <div className='flex flex-col gap-y-2'>
                                        <h1 className='font-medium'>
                                            Mobile App Development
                                        </h1>
                                        <p>
                                            Mobile App Development is the process of designing and building applications....
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-start gap-x-3'>
                                    <figure className='xs:w-32 xl:w-32 h-16 rounded-md overflow-hidden'>
                                        <img src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7" alt="blog-img" />
                                    </figure>
                                    <div className='flex flex-col gap-y-2'>
                                        <h1 className='font-medium'>
                                            Artificial Intelligence
                                        </h1>
                                        <p>
                                            DevOps Engineering focuses on integrating software development and IT operations....
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className='xs:pb-4 md:pb-4 xl:pb-6 xs:text-[1.1em] md:text-[1em] font-medium'>
                                {/* <div className='title-underline mb-[4px] w-6 h-[1px]'></div> */}
                                Site Links
                            </h1>
                                <ul className='text-underLine flex flex-col items-start gap-y-3 w-14 xs:text-[0.86em] md:text-[0.6em] lg:text-[0.8em] xl:text-[0.96em]'>
                                    {webpages.map((items, index) => {
                                        const { id, button, url } = items
                                        return (
                                            <NavLink
                                                key={id}
                                                to={url}
                                                // onClick={toggleNavbar}
                                                className={`flex items-center ${items === index ? "active" : ''}`}>
                                                <li className='xs:text-[1.3em] lg:text-[0.92em] capitalize hover:text-blue-400 duration-150'> {button} </li>
                                            </NavLink>
                                        )
                                    })}
                                </ul>
                        </div>
                        <div>
                            <h1 className='xs:pb-4 md:pb-4 xl:pb-6 xs:text-[1.1em] md:text-[1em] font-medium'>
                                {/* <div className='title-underline mb-[4px] w-6 h-[1px]'></div> */}
                                Have a Questions?
                            </h1>
                            <div className='flex flex-col xs:gap-y-3 lg:gap-y-4 w-auto'>
                                {
                                    contactLinks.map((val, index) => {
                                        const { icon, title, url } = val;
                                        return (
                                            <div key={index} className='flex items-start xs:gap-x-4 m:gap-x-2 lg:gap-x-3 w-auto'>
                                                <div className='xs:text-[1.5em] md:text-[1.2em] lg:text-[1.4em]'>
                                                    {icon}
                                                </div>
                                                <a href={url} target='_' className='xs:text-[0.9em] md:text-[0.8em] xl:text-[0.9em] hover:text-blue-400 duration-100'>
                                                    {title}
                                                </a>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-between xs:px-3 md:px-5 lg:px-7 xl:px-10 py-4 text-wrap border-t-2 border-gray-300'>
                        <NavLink to='/home'>
                            <figure className='xs:w-8 lg:w-9 xl:w-10 h-auto overflow-hidden'>
                                <ChenabLogo />
                            </figure>
                        </NavLink>
                        <p className='xs:w-[80%] md:w-auto xs:text-[0.86em] md:text-[0.8em] xl:text-[0.9em] text-gray-200'>
                            Copyright &copy; {currentYear} All Rights Reserved || Code By Faisal
                        </p>
                        <div onClick={GoMoveToTop} className='xs:hidden md:inline-flex flex items-center justify-center w-[32px] h-[32px] text-lg cursor-pointer text-black bg-white rounded-full animate-bounce'>
                            <FaLongArrowAltUp />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer