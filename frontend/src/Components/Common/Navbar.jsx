import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = ({toggleNavbar}) => {

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

    return (
        <>
            <ul className='text-underLine flex xs:flex-col lg:flex-row xs:items-center lg:items-start flex-wrap lg:gap-x-3 xl:gap-x-4 xs:gap-y-4'>
                {webpages.map((items, index) => {
                    const { id, button, url } = items
                    return (
                        <NavLink
                            key={id}
                            to={url}
                            onClick={toggleNavbar}
                            className={`flex items-center ${items === index ? "active" : ''}`}>
                            <li className='navbar-links xs:text-[1.3em] lg:text-[0.92em] xl:text-[0.94em] rounded-md'> {button} </li>
                        </NavLink>
                    )
                })}
            </ul>
        </>
    )
}

export default Navbar