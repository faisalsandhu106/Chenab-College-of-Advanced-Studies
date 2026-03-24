import React from 'react'
import ReviewSection from '../../Components/HomeComp/ReviewSection';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaCamera } from 'react-icons/fa6';
import { AiFillEdit } from 'react-icons/ai';
import SEO from '../../Components/Common/SEO';

const AdminDashboard = () => {
    const API = "https://chenab-college-backend.vercel.app"

    const [adminID, setAdminID] = useState();           //* State to hold logged-in user's id 
    const [adminData, setAdminData] = useState({});    //* State to hold logged-in user's data

    //* Get Admin Data By ID
    const getAdminData = async () => {
        try {
            const res = await fetch(`${API}/admin/adminProfile/${adminID}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const APIdata = await res.json();
            setAdminData(APIdata);
            // console.log(APIdata)

        } catch (error) {
            console.log('Error', error);
        }
    };

    useEffect(() => {
        setAdminID(localStorage.getItem("AdminId"));
        getAdminData();

    }, [adminID, API]);

    return (
        <>
        <SEO title="Admin Dashboard | Chenab College" desc="This is Admin Dashboard Chenab College Advanced Studies" />

            <div className='w-full h-auto'>
                <div className='grid xs:grid-cols-1 md:grid-cols-3 py-5 w-full'>
                    {/*-----------Welcome Admin Box----------- */}
                    <div className='md:col-span-2'>

                    </div>
                    <div className='flex flex-col px-4 py-3 pb-4 gap-y-4 xs:w-[100%] md:w- lg:w-[270px] xl:w-[350px] rounded-lg shadow-sm text-amber-50 bg-[#635BFF]'>
                        <div className='flex items-center justify-between w-full h-auto'>
                            <div className='w-full h-auto'>
                                <h1 className='xs:text-[1.08em] md:text-[0.8em] xl:text-[1.07em] font-semibold'>
                                    Welcome To Dashboard
                                </h1>
                                <h1 className='w-full xs:text-[0.9em] md:text-[0.66em] xl:text-[0.86em] font-medium text-[#efebff]'>
                                    {`${adminData.firstName ? adminData.firstName : "-- --"}`}
                                </h1>
                            </div>
                            <figure className='xs:w-[80px] xs:h-[80px] md:w-[65px] md:h-[65px] xl:w-[75px] xl:h-[75px] rounded-full overflow-hidden'>
                                <img src={adminData.profileImage ? adminData.profileImage : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="Admin Profile" className='w-full h-auto object-cover' />
                            </figure>
                        </div>
                        <div className='flex items-center justify-between w-full h-auto'>
                            <p className='xs:text-[0.8em] md:text-[0.7em] xl:text-[0.8em] font-medium text-[#efebff]'>
                                {`${adminID ? "Hi, Admin" : "Please, Login"}`}
                            </p>
                            <NavLink to={`/admin/edit-profile/${adminID}`}>
                                <button className='flex items-center justify-center gap-x-1 px-[8px] text-[0.8em] rounded-md text-nowrap font-bold text-[#7E3BE2] bg-blue-50 hover:bg-[#eadcfd]'>
                                    Edit <AiFillEdit className='text-[1.1em]' />
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className='xs:py-16 md:px-8 lg:px-10 xl:px-8 w-full'>
                    <ReviewSection />
                </div>
            </div>
        </>
    )
}

export default AdminDashboard