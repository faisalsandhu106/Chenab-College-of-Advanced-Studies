import React, { useEffect, useState } from 'react'
import { FaClock, FaFacebookF, FaPhoneVolume } from 'react-icons/fa'
import { IoLocation } from 'react-icons/io5'
import { FaLocationDot, FaShareNodes, FaSquareInstagram } from "react-icons/fa6";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import { NavLink, useParams } from 'react-router-dom'
import { MdCalendarMonth, MdOutlineMail, MdPhotoLibrary } from 'react-icons/md';
import RatingStar from '../Common/RatingStar';
import { CgDetailsMore, CgEventbrite } from 'react-icons/cg';
import SEO from '../Common/SEO';

const SingleEvents = () => {
    const API = "https://chenab-college-backend.vercel.app";
    const { id } = useParams();

    const [isEvent, setIsEvent] = useState({
        eventTitle: "",
        shortEventDetails: "",
        longEventDetails: "",
        date: "",
        future: "",
        imageUrl: "",
        eventFee: "",
        rating: "",
        eventLocation: "",
        socialLink: "",
        eventOrganizer: ""
    });

    // * Get Individual Event Data
    const getIndividualEvent = async () => {
        const res = await fetch(`https://chenab-college-backend.vercel.app/api/event/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })

        const data = await res.json();
        setIsEvent(data);
        // console.log("SingleEvents", data)
    };

    useEffect(() => {
        getIndividualEvent(`${API}/api/event/${id}`)
    }, []);


    const {
        _id: alise,
        eventTitle,
        shortEventDetails,
        longEventDetails,
        // category,
        date,
        future,
        imageUrl,
        eventFee,
        rating,
        eventLocation,
        socialLink,
        // eventOrganizer
    } = isEvent;

    return (
        <>
            <SEO title="Single Event Page | Chenab College" desc="This is Single Event Page Chenab College Advanced Studies" />

            <div className='light-dark-text w-full h-auto'>
                {/* Column No 1 */}
                <div className='relative w-full xs:h-[480px] md:h-[480px] lg:h-[510px] xl:h-[540px] overflow-hidden'>
                    <figure className='flex md:items-start absolute top-0 left-0 z-[1] w-full h-full'>
                        <img className='w-full h-auto bg-cover' src={imageUrl[0]} alt="event_img" />
                    </figure>
                    <div className='flex flex-col items-center justify-end relative top-0 left-0 z-[2] pb-1 w-full h-full bg-[#00000096] bg-gradient-to-r from-[#884dc261] to-[#cba74371] text-white'>
                        <div className='px-5 pb-5 md:w-[400px] xs:text-[1.4em] md:text-[1.5em] xs:leading-[1.35em] md:leading-[1.4em] xl:leading-[1.4em] font-semibold text-center capitalize'>
                            {eventTitle ?
                                <>
                                    {eventTitle}
                                </>
                                :
                                "Loading ...."
                            }
                        </div>
                        <div className='mt-[500px grid grid-cols-1 md:grid-cols-1 xs:mx-2 md:mx-0 xs:p-4 md:p-4 lg:p-5 xs:w-full md:w-[570px] lg:w-[650px] xl:w-[700px] min-h-[100px] rounded-t-md shadow-2xl bg-[#2c2c2cc7] overflow-hidden'>
                            <div className='flex flex-col items-start gap-y-6 w-full h-auto'>
                                <div className='flex justify-between w-full'>
                                    <div className='text-[1.2em]'>
                                        <RatingStar rating={rating} />
                                    </div>
                                    <div className='flex items-center gap-x-4 xs:text-[0.85em] md:text-[0.9em] font-medium capitalize'>
                                        {future > "false" ? "Coming Up" : "Remember"}

                                        {future > "false" ?
                                            <button className='xs:hidden md:inline-flex text-[0.8em] font-medium shadow-md bg-red-500'>
                                                Book a Ticket
                                            </button>
                                            :
                                            ''
                                        }
                                    </div>
                                </div>
                                <div className='flex flex-col w-full gap-y-6'>
                                    <div className='flex flex-col justify-between gap-y-1 w-full h-auto'>
                                        <div className='flex items-center gap-x-2 w-full'>
                                            <div className='text-[1.1em] text-red-500'>
                                                <FaClock />
                                            </div>
                                            <h1 className='text-[0.9em] font-semibold'>
                                                Date and Time
                                            </h1>
                                        </div>
                                        <div className='flex items-center justify-between w-full h-auto text-[0.8em] font-medium capitalize'>
                                            <p>
                                                {date ?
                                                    <>
                                                        {date[0]}, {date[1]}, {date[2]}
                                                    </>
                                                    :
                                                    "--- --- ---"
                                                }
                                            </p>
                                            <p className='flex items-center gap-x-1'>
                                                {date ?
                                                    <>
                                                        {date[3]} To {date[4]} <MdCalendarMonth />
                                                    </>
                                                    :
                                                    "--- --- ---"
                                                }
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-between gap-y-1 w-full h-auto'>
                                        <div className='flex items-center gap-x-1 w-full '>
                                            <div className='text-[1.3em] text-red-500'>
                                                <IoLocation />
                                            </div>
                                            <p className='text-[0.9em] font-semibold'>
                                                Address
                                            </p>
                                        </div>
                                        <div className='flex items-center justify-between w-full h-auto text-[0.8em] font-medium capitalize'>
                                            <p>
                                                {eventLocation ?
                                                    <>
                                                        {eventLocation}
                                                    </>
                                                    :
                                                    "--- --- ---"
                                                }
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-y-2 w-full h-auto'>
                                        <p className='flex items-center gap-x-2 text-[0.8em] font-medium'>
                                            <FaShareNodes />
                                            Share With Friends
                                        </p>
                                        <div className='flex items-center justify-between py-1 w-full h-auto'>
                                            <div className='flex items-center gap-x-3 text-[1em] font-medium'>
                                                <NavLink to={socialLink[0]} target="_blank" className='p-2 bg-gray-100 text-gray-700 rounded-full hover:text-blue-600 duration-100'>
                                                    <FaFacebookF />
                                                </NavLink>
                                                <NavLink to={socialLink[1]} target="_blank" className='p-2 bg-gray-100 text-gray-700 rounded-full hover:text-blue-600 duration-100'>
                                                    <FaSquareInstagram />
                                                </NavLink>
                                                <NavLink to={socialLink[2]} target="_blank" className='p-2 bg-gray-100 text-gray-700 rounded-full hover:text-blue-600 duration-100'>
                                                    <TbBrandWhatsappFilled />
                                                </NavLink>
                                            </div>
                                            {future > "false" ?
                                                <button className='md:hidden text-[0.78em] font-medium shadow-md bg-red-500'>
                                                    Book a Ticket
                                                </button>
                                                :
                                                ''
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Column No 2 */}
                <div className='px-4 md:px-7 lg:px-8 xl:px-20 xs:pt-12 md:pt-16 xl:pt-[-400px]'>
                    {/* Events Details & Contact */}
                    <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6 xl:gap-x-16 justify-items-start gap-y-8 w-full h-auto'>
                        <div className='lg:col-span-2 pb-8 w-full h-auto border-b-2'>
                            <div className='flex flex-col gap-y-7 w-full'>
                                <div className='flex justify-between w-full'>
                                    <div className='flex flex-col'>
                                        <div className='flex items-center gap-x-2 text-[1.35em] font-semibold'>
                                            <h1>Event Details</h1>
                                            <CgDetailsMore className='text-[1.2em]' />
                                        </div>
                                        <div className='title-underline mt-1 w-[90px]'></div>
                                    </div>
                                    <p className='mt-[4px] text-[0.85em] font-medium capitalize'>
                                        {eventFee < "false" ? `Rs: ${eventFee}` : ""}
                                    </p>
                                </div>
                                <div className='flex flex-col gap-y-3 xs:text-[0.98em] md:text-[0.92em] xl:text-[0.96em]'>
                                    <h1 className='flex items-center gap-x-2 text-[1.2em] font-semibold capitalize'>
                                        {eventTitle ?
                                            <>
                                                {eventTitle}
                                            </>
                                            :
                                            "--- --- ---"
                                        }
                                        <CgEventbrite />
                                    </h1>
                                    <p>
                                        {shortEventDetails ?
                                            <>
                                                {shortEventDetails}
                                            </>
                                            :
                                            "--- --- ---"
                                        }
                                    </p>
                                    <p>
                                        {longEventDetails ?
                                            <>
                                                {longEventDetails}
                                            </>
                                            :
                                            "--- --- ---"
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='Card-box flex flex-col px-4 py-6 xs:gap-y-8 md:gap-y-7 rounded-lg'>
                            <div className='flex items-start gap-x-2'>
                                <figure className='w-14'>
                                    <img className='w-full h-auto' src="/pic/Chenab Logo.webp" alt="event_Organizer" />
                                </figure>
                                <h1 className='xs:text-[1.07em] md:text-[0.98em] font-medium'>
                                    Chenab College of Advanced Studies
                                </h1>
                            </div>
                            <div className='flex flex-col items-start gap-y-5'>
                                <div className='flex flex-col gap-y-1'>
                                    <div className='flex items-center gap-x-2'>
                                        <FaPhoneVolume className='text-[1.2em] text-red-500' />
                                        <p target='_blank' className='xs:text-[0.96em] md:text-[0.9em] font-semibold'>
                                            Phone Number
                                        </p>
                                    </div>
                                    <NavLink to="tel:+92304 0343547" target='_blank' className='xs:text-[0.9em] md:text-[0.84em] font-medium'>
                                        +92304 0343547
                                    </NavLink>
                                </div>
                                <div className='flex flex-col gap-y-1'>
                                    <div className='flex items-center gap-x-2'>
                                        <MdOutlineMail className='text-[1.2em] text-red-500' />
                                        <p className='xs:text-[0.96em] md:text-[0.9em] font-semibold'>
                                            Email Address
                                        </p>
                                    </div>
                                    <a href="mailto:info@ccas.edu.pk" target='_blank' className='xs:text-[0.9em] md:text-[0.84em] font-medium'>
                                        info@ccas.edu.pk
                                    </a>
                                </div>
                                <div className='flex flex-col gap-y-1'>
                                    <div className='flex items-center gap-x-2'>
                                        <FaLocationDot className='text-[1.2em] text-red-500' />
                                        <p className='xs:text-[0.96em] md:text-[0.9em] font-semibold'>
                                            Address
                                        </p>
                                    </div>
                                    <NavLink to={"https://maps.app.goo.gl/nuukbZdhWXkvy5Uh8"} target='_blank' className='xs:text-[0.9em] md:text-[0.84em] font-medium'>
                                        Main West Canal Road, Near Abdullah Pur
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Events Photo & Video */}
                    <div className='xs:py-20 xl:py-24 grid xs:grid-cols-1 md:grid-cols-2 w-full'>
                        <div className='flex flex-col gap-y-7 w-full h-auto'>
                            <h1 className='flex items-center gap-x-2 text-[1.3em] font-bold'>
                                Event Photos
                                <MdPhotoLibrary />
                            </h1>
                            {
                                future > "false" ? (
                                    <div className='grid grid-cols-1 w-full'>
                                        <div className='w-[80%] md:w-[100%] xs:h-[160px] md:h-[210px] xl:h-[310px] overflow-hidden rounded-md'>
                                            <img className='w-full h-auto bg-cover rounded-md' src={imageUrl[0]} alt="event-img" />
                                        </div>
                                    </div>
                                )
                                    :


                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-full'>
                                        <div className='w-[80%] md:w-[100%] xs:h-[160px] md:h-[120px] xl:h-[180px] overflow-hidden rounded-md'>
                                            <img className='w-full h-full bg-cover' src={imageUrl[0]} alt="event-img" />
                                        </div>

                                        <div className='w-[80%] md:w-[100%] xs:h-[160px] md:h-[120px] xl:h-[180px] overflow-hidden rounded-md'>
                                            <img className='w-full h-full bg-cover' src={imageUrl[1]} alt="event-img" />
                                        </div>

                                        <div className='w-[80%] md:w-[100%] xs:h-[160px] md:h-[120px] xl:h-[180px] overflow-hidden rounded-md'>
                                            <img className='w-full h-full bg-cover' src={imageUrl[2]} alt="event-img" />
                                        </div>

                                        {/* {
                                    imageUrl.map((item, index) => {
                                        return(
                                            <div key={index} className='w-[80%] md:w-[100%] xs:h-[160px] md:h-[120px] xl:h-[180px] overflow-hidden rounded-md'>
                                                <img className='w-full h-auto bg-cover' src={item} alt="event-img" />
                                            </div>
                                        )
                                    }) 
                                } */}

                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleEvents