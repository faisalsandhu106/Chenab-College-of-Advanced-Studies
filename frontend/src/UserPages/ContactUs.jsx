import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from "@hookform/devtools";
import { RiMessage2Fill } from 'react-icons/ri'
import { BsFillSendPlusFill } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { hendleError, hendleSuccess } from '../Components/Utils';
import { PiLinkSimpleBold } from 'react-icons/pi';
import OpenAddmission from '../Components/ApplyFormComp/OpenAddmission';
import SEO from '../Components/Common/SEO';

const contactLinks = [
  {
    contactLinksIcon: <FaFacebookF />,
    contactInfo: 'Our Facebook Account',
    url: 'https://www.facebook.com/share/17zpAWQKkN/',
    bgcolor: '#038DD0'
  },
  {
    contactLinksIcon: <FaInstagram />,
    contactInfo: 'Our Instagram Account',
    url: 'https://www.instagram.com/chenab_collegeofficial?igsh=MWtnczlhd2J2YTVlZg==',
    bgcolor: '#FF6B6B'
  },
  {
    contactLinksIcon: <FaPhoneAlt />,
    contactInfo: '+92 304 0343547',
    url: 'tel:+92 304 0343547',
    bgcolor: '#2CC72C'
  },
  {
    contactLinksIcon: <MdOutlineMailOutline />,
    contactInfo: 'info@ccas.edu.pk',
    url: 'mailto:info@ccas.edu.pk',
    bgcolor: '#FDC501'
  }
];

const ContactUs = () => {
  const contactFormAPI = "https://chenab-college-backend.vercel.app";

  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      cityName: '',
      message: '',
    }
  });

  //* Post Contact Form In React Hook Form
  const onSubmit = async (data) => {
    try {
      const res = await fetch(`${contactFormAPI}/contact/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const Apidata = await res.json();
      // console.log(data)

      if (res.ok) {
        hendleSuccess('Submit Successfully')
      } else if (res.status(404)) {
        hendleError('Network response was not ok')
      } else if (res.status(500)) {
        hendleError('Internal server error')
      }

    } catch (error) {
      console.log('Error during sign up:', error);
    }
  };

  //* Reset Form After Submit
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset])

  return (
    <>
      <SEO title="Contact Us | Chenab College" desc="This is Contact Us Chenab College Advanced Studies" />

      <div className='pt-24 pb-8 xs:px-4 md:px-5 lg:px-8 xl:px-10 w-full h-auto overflow-hidden'>
        {/* //* Contact Form & Social Accounts Info */}
        <div className='grid xs:grid-cols-1 lg:grid-cols-2 xs:mt-4 md:mt-5 lg:mt-7 xl:mt-10 gap-x-5 gap-y-20 w-full h-auto'>
          {/*------- Contact-Form----------- */}
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col md:px-28 lg:px-0 xl:px-5 w-full h-full xs:order-2 lg:order-1'>
            <div className='flex items-center justify-center pb-12 w-full h-auto '>
              <h1 className='flex items-center gap-x-2 text-[1.6em] font-semibold'>
                Contact Us!
                <RiMessage2Fill className='text-[#167CE9]' />
              </h1>
            </div>
            <div className='flex flex-col gap-y-6 w-full h-auto'>
              <div className='grid xs:grid-cols-1 md:grid-cols-2 gap-5 w-full'>
                <div className='flex flex-col gap-y-1'>
                  <label htmlFor="firstName" className='contact-inputs-label'>first name *</label>
                  <input
                    type="text"
                    placeholder='enter your First Name'
                    id='firstName'
                    {...register("firstName", {
                      required: 'first name is required'
                    })}
                    className='contact-inputs' />
                  {errors.firstName && <span className='text-[0.9em] text-red-500'>{errors.firstName?.message}</span>}
                </div>

                <div className='flex flex-col gap-y-1'>
                  <label htmlFor="lastName" className='contact-inputs-label'>last name *</label>
                  <input
                    type="text"
                    placeholder='enter your Last Name'
                    id='lastName'
                    {...register("lastName", {
                      required: 'last name is required'
                    })}
                    className='contact-inputs' />
                  {errors.lastName && <span className='text-[0.9em] text-red-500'>{errors.lastName?.message}</span>}
                </div>
              </div>
              <div className='flex flex-col gap-y-1'>
                <label htmlFor="email" className='contact-inputs-label'>email *</label>
                <input
                  type="email"
                  placeholder='enter your email address'
                  id='email'
                  {...register("email", {
                    required: 'email is required',
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: 'invalid email address'
                    },
                    // validate: {
                    //   notAdminEmial: (value) => {
                    //     return (
                    //       value !== "admin@example.com" || "Enter a different email address"
                    //     )
                    //   },
                    //   notBlacklistEmial: (value) => {
                    //     return (
                    //       !value.endsWith("blacklist.com") || "This domin is not allowed"
                    //     )
                    //   }
                    // }
                  })}
                  className='contact-inputs' />
                {errors.email && <span className='text-[0.9em] text-red-500'>{errors.email?.message}</span>}
              </div>
              <div className='flex flex-col gap-y-1'>
                <label htmlFor="phoneNumber" className='contact-inputs-label'>Phone Number</label>
                <input
                  type="text"
                  placeholder='enter your Phone Number'
                  id='phoneNumber'
                  {...register("phoneNumber")}
                  className='contact-inputs' />
              </div>
              <div className='flex flex-col gap-y-1'>
                <label htmlFor="cityName" className='contact-inputs-label'>City Name *</label>
                <input
                  type="text"
                  placeholder='enter your city'
                  id='cityName'
                  {...register("cityName", {
                    required: "city name is required"
                  })}
                  className='contact-inputs' />
                {errors.cityName && <span className='text-[0.9em] text-red-500'>{errors.cityName?.message}</span>}
              </div>
              <div className='flex flex-col gap-y-1'>
                <label htmlFor="message" className='contact-inputs-label'>Message *</label>
                <textarea
                  type="text"
                  placeholder='Enter Your Message'
                  id='subject'
                  {...register("message", {
                    required: 'message is required'
                  })}
                  className='contact-inputs w-full xs:min-h-[190px] md:min-h-[150px] xl:min-h-[180px] max-h-[400px] leading-[20px] overflow-hidden' />
                {errors.message && <span className='text-[0.9em] text-red-500'>{errors.message?.message}</span>}
              </div>
            </div>
            <button type='submit' className='flex items-center justify-center gap-x-2 mt-7 py-[8px] text-[1.05em] tracking-[0.4px] font-medium'>
              Submit
              <BsFillSendPlusFill />
            </button>
          </form>

          {/* ------Form-Info-Links----- */}
          <div className='flex flex-col items-start justify-start xs:px-[10px] md:px-[30px] lg:px-[45px] xl:px-[60px] xs:gap-y-7 w-full tracking-[px] xs:order-1 lg:order-2'>
            <div className='flex items-center justify-center pb-5 w-full h-auto'>
              <h1 className='flex items-center gap-x-2 text-[1.5em] font-semibold'>
                Our Social Links
                <PiLinkSimpleBold className='text-[#167CE9]' />
              </h1>
            </div>
            {contactLinks.map((items, index) => {
              const { contactLinksIcon, contactInfo, url, bgcolor } = items;
              return (
                <div key={index} className='flex items-center justify-start w-full gap-x-3'>
                  <div className='w-[50px] h-full'>
                    <NavLink style={{ backgroundColor: bgcolor, color: "#ffff" }} to={url} target='_blank' className='flex items-center justify-center w-[46px] h-[46px] text-xl rounded-full'>
                      {contactLinksIcon}
                    </NavLink>
                  </div>
                  <NavLink to={url} target='_blank' className=' hover:text-blue-500 duration-100'>
                    {contactInfo}
                  </NavLink>
                </div>
              )
            })}
          </div>
        </div>

        {/* //* Google Map */}
        <div className='grid grid-cols-1 md:grid-cols-1 xs:mt-14 md:mt-14 xl:mt-20 gap-5 w-full xs:h-[350px] md:h-[310px] xl:h-[420px]'>
          <div className='flex items-center justify-center w-full h-full rounded-md overflow-hidden'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1202.223034536321!2d73.10929985241404!3d31.4234284155285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392268153fc0774d%3A0x7af0a06c3ac14097!2sChenab%20College%20of%20Advance%20Studies!5e1!3m2!1sen!2s!4v1769613323188!5m2!1sen!2s" width="100%" height="100%" loading="lazy"></iframe>
          </div>
        </div>

        {/* //* Addmission Open Information */}
        <div className='xs:pt-10 md:pt-16 xl:pt-24'>
          <OpenAddmission />
        </div>
      </div>

      <ToastContainer />
    </>
  )
}

export default ContactUs