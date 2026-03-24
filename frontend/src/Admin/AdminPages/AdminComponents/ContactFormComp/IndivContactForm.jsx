import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaCalendarAlt, FaCity, FaIdBadge, FaPhoneAlt, FaUser } from 'react-icons/fa';
import { MdEmail, MdMessage } from 'react-icons/md';
import { TbListDetails } from 'react-icons/tb';
import SEO from '../../../../Components/Common/SEO';

const IndivContactForm = () => {
  const { id } = useParams();
  const API = "https://chenab-college-backend.vercel.app/admin";

  const [isContactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cityName: "",
    message: "",
    created_at: ""
  });

  //* Get Individual Contact Form 
  //* ---------------------------
  const IndividualContactForm = async () => {
    const res = await fetch(`${API}/allContactForm/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await res.json()
    setContactData(data)
  };

  useEffect(() => {
    IndividualContactForm()
  }, [API]);

  const { _id, firstName, lastName, email, phoneNumber, cityName, message, created_at } = isContactData;

  return (
    <>
      <SEO title="User Contact Details | Chenab College" desc="This is User Details Chenab College Advanced Studies" />

      <div className='light-dark-text flex flex-col xs:px-1 md:pl-5 lg:md:pl-7 xl:md:pl-16 md:px-[180px] lg:pr-[200px] xl:pr-[400px] xs:py-5 md:py-8 xs:gap-y-10 md:gap-y-12 w-full'>
        {/*------Heading------- */}
        <div className='flex flex-col'>
          <div className='flex items-center gap-x-2 xs:text-[1.3em] md:text-[1.3em] font-semibold'>
            <h1>User Contact Details</h1>
            <TbListDetails />
          </div>
          <div className='title-underline w-[120px]'></div>
        </div>

        {/*------User Details------- */}
        <div className='flex flex-col xs:gap-y-6 md:gap-y-8 w-full xs:text-[0.92em] md:text-[0.9em] xl:text-[0.94em]'>
          {/* User ID */}
          <div className='flex xs:flex-col md:flex-row gap-y-2 w-full'>
            <div className='flex items-center gap-x-2 md:min-w-[175px] xl:min-w-[200px] font-medium'>
              <FaIdBadge className='xs:text-lg md:text-xl' />
              <h1>User ID & Date</h1>
            </div>
            <div className='flex flex-wrap gap-y-2 gap-x-2'>
              <h1>
                {_id ? <>{_id}</> : "--- --- ---"}
              </h1>
              /
              <div className='flex items-center gap-x-1 font-medium'>
                {created_at.length > 10 ? created_at.slice(0, 10) : "--- --- ---"}
                <FaCalendarAlt className='-mt-[2px]' />
              </div>
            </div>
          </div>

          {/* User Name */}
          <div className='flex xs:flex-col md:flex-row gap-y-2 w-full'>
            <div className='flex items-center gap-x-2 md:min-w-[175px] xl:min-w-[200px] font-medium'>
              <FaUser className='xs:text-lg md:text-xl' />
              <h1>Full Name</h1>
            </div>
            <div className='admin-inputs py- flex items-center gap-x-1 capitalize w-full'>
              <div> {firstName ? <>{firstName}</> : "--- --- ---"} </div>
              <div> {lastName ? <>{lastName}</> : "--- --- ---"} </div>
            </div>
          </div>

          {/* Email */}
          <div className='flex xs:flex-col md:flex-row gap-y-2 w-full'>
            <div className='flex items-center gap-x-2 md:min-w-[175px] xl:min-w-[200px] font-medium'>
              <MdEmail className='xs:text-lg md:text-xl' />
              <h1>Email Address</h1>
            </div>
            <div className='admin-inputs py- w-full lowercase'>
              {email ? <>{email}</> : "--- --- --- ---"}
            </div>
          </div>

          {/* Phone Number */}
          <div className='flex xs:flex-col md:flex-row gap-y-2 w-full'>
            <div className='flex items-center gap-x-2 md:min-w-[175px] xl:min-w-[200px] font-medium'>
              <FaPhoneAlt className='xs:text-lg md:text-xl' />
              <h1>Phone Number</h1>
            </div>
            <div className='admin-inputs py- w-full'>
              {phoneNumber ? <>{phoneNumber}</> : "--- --- --- ---"}
            </div>
          </div>

          {/* City Name */}
          <div className='flex xs:flex-col md:flex-row gap-y-2 w-full'>
            <div className='flex items-center gap-x-2 md:min-w-[175px] xl:min-w-[200px] font-medium'>
              <FaCity className='xs:text-lg md:text-xl' />
              <h1>City Name</h1>
            </div>
            <div className='admin-inputs py- w-full capitalize'>
              {cityName ? <>{cityName}</> : "--- --- --- ---"}
            </div>
          </div>

          {/* Message */}
          <div className='flex xs:flex-col md:flex-row gap-y-2 w-full'>
            <div className='flex gap-x-2 md:min-w-[175px] xl:min-w-[200px] font-medium'>
              <MdMessage className='mt-[5px] xs:text-lg md:text-xl' />
              <h1>Message</h1>
            </div>
            <div className='admin-inputs py- p-3 w-full min-h-[250px] rounded-md overflow-hidden'>
              {message ? <>{message}</> : "--- --- --- ---"}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndivContactForm