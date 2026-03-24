import React, { useRef, useState } from 'react'
import Navbar from './Navbar'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import Theme from './Theme'
import { RiCloseLargeFill } from 'react-icons/ri'
import ChenabLogo from './ChenabLogo'


//* Website Pages Paths
const webpages = [
    {
        id: '1',
        button: 'Home',
        url: '/home'
    },
    {
        id: '2',
        button: 'About',
        url: '/about'
    },
    {
        id: '3',
        button: 'Our Course',
        url: '/Course'
    },
    {
        id: '4',
        button: 'Our Events',
        url: '/event'
    },
    {
        id: '5',
        button: 'Contact Us',
        url: '/contact'
    },
    {
        id: '6',
        button: 'Admin',
        url: '/admin/dashboard'
    }
];

const Header = () => {
    const currentYear = new Date().getFullYear();

    const [isNav, setIsNav] = useState(false);

    const toggleNavbar = () => {
        setIsNav(!isNav)
    };

    const closeBtnAnimate = useRef(null);
    const NavContent = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.from('.NavStair', {
            height: 0,
            stagger: {
                amount: -0.2
            }
        })

        tl.from(NavContent.current, {
            opacity: 0,
            delay: 0.15,
            duration: 0.4,
            translateY: 50,
        }, [0.3])

    }, [isNav]);

    return (
        <>
            <div className='header-theme fixed top-0 left-0 z-[20] flex items-center justify-between xs:px-4 sm:px-6 lg:px-8 xl:px-10 py-2 w-full h-auto shadow-sm'>
                <NavLink to={'/home'} className='flex gap-x-1 w-auto'>
                    <div className='xs:w-10 md:w-11  h-auto overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="/pic/Chenab Logo.webp" alt="logo" />
                    </div>
                    <p className='text-[0.9em] font-medium tracking-[0.3px]'>
                        CCAS
                    </p>
                </NavLink>
                <div className='flex items-center gap-x-4 w-auto h-auto'>
                    <div className='w-auto lg:pr-3 xl:pr-6 xs:hidden lg:inline-flex'>
                        <Navbar />
                    </div>
                    {/* ------------Dark Light Button--------------- */}
                    <Theme />
                    {/* -----------User Profile DropDown------------- */}

                    <NavLink to={'/apply-form'} className='xs:hidden lg:inline-flex'>
                        <button className='px-3 animate-pulse hover:animate-none'>
                            Apply Now
                        </button>
                    </NavLink>

                    {/*--------- Responsive Navbar-----------  */}
                    <div className='lg:hidden'>
                        <div className='text-[1.8em]'>
                            {
                                !isNav ?
                                    <div onClick={toggleNavbar}>
                                        <GiHamburgerMenu />
                                    </div>
                                    :
                                    <div ref={closeBtnAnimate} onClick={toggleNavbar}>
                                        <RiCloseLargeFill />
                                    </div>
                            }
                        </div>
                        <div className='w-full h-auto overflow-hidden lg:hidden'>
                            {
                                isNav && (
                                    <div className='w-full h-auto'>
                                        <div className='absolute top-16 left-0 z-[18] flex flex-col w-full min-h-screen text-white overflow-hidden'>
                                            {/*------------- NavBar Stair-----------------  */}
                                            <div className='absolute top-0 left-0 w-full h-full'>
                                                <div className='flex w-full h-full'>
                                                    <div className='NavStair w-1/2 h-full header-theme '></div>
                                                    <div className='NavStair w-1/2 h-full header-theme '></div>
                                                    <div className='NavStair w-1/2 h-full header-theme '></div>
                                                    <div className='NavStair w-1/2 h-full header-theme '></div>
                                                    <div className='NavStair w-1/2 h-full header-theme '></div>
                                                    <div className='NavStair w-1/2 h-full header-theme '></div>
                                                </div>
                                            </div>
                                            {/*------------- NavBar Stair-----------------  */}
                                        </div>
                                        {/*------------- NavBar Content-----------------  */}
                                        <div ref={NavContent} className='header-theme fixed top-16 left-0 z-[19] flex flex-col items-center justify-between px-4 pt-10 pb-32 w-full h-screen'>
                                            {/* <div>
                                                <Navbar toggleNavbar={toggleNavbar} />
                                            </div> */}
                                            {/* <NavLink onClick={toggleNavbar} to={'/apply-form'} className='mt-5'>
                                                <button className='px-3'>
                                                    Apply Now
                                                </button>
                                            </NavLink> */}
                                            <div className='flex flex-col gap-y-1 w-full'>
                                                <ul className='text-underLine flex flex-col items-start lg:gap-x-5 xl:gap-x-7 xs:gap-y-4'>
                                                    {webpages.map((items, index) => {
                                                        const { id, button, url } = items
                                                        return (
                                                            <NavLink
                                                                key={id}
                                                                to={url}
                                                                onClick={toggleNavbar}
                                                                className={`flex items-center ${items === index ? "active" : ''}`}>
                                                                <li className='xs:text-[1.15em] font-medium capitalize'>
                                                                    {button}
                                                                </li>
                                                            </NavLink>
                                                        )
                                                    })}
                                                </ul>
                                                <NavLink onClick={toggleNavbar} to={'/apply-form'} className='mt-5'>
                                                    <button className='px-4 font-medium'>
                                                        Apply Now
                                                    </button>
                                                </NavLink>
                                            </div>
                                            <div className="flex flex-col gap-1.5 items-center ">
                                                <div className='w-14 pb-2'>
                                                    <ChenabLogo />
                                                </div>
                                                <div className="relative flex items-center w-full">
                                                    <div className="grow h-px bg-black" />
                                                </div>
                                                <p className="text-muted-foreground text-center">
                                                    {currentYear} © Chenab College - All rights reserved.
                                                </p>
                                            </div>
                                        </div>
                                        {/*------------- NavBar Content-----------------  */}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    {/*--------- Responsive Navbar-----------  */}
                </div>
            </div>
        </>
    )
}

export default Header