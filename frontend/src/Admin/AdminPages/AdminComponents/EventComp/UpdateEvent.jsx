import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { DevTool } from "@hookform/devtools";
import { IoShareSocialSharp } from 'react-icons/io5'
import { ToastContainer } from 'react-toastify';
import { GrUpdate } from 'react-icons/gr';
import { hendleError, hendleSuccess } from '../../../../Components/Utils';
import { SiFuturelearn } from 'react-icons/si';
import { IoIosInformationCircle } from 'react-icons/io';
import { CgEventbrite } from 'react-icons/cg';
import { BsCalendar2DateFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { FaFileImage } from 'react-icons/fa';
import SEO from '../../../../Components/Common/SEO';


const UpdateEvent = () => {
  const { id } = useParams();
  const API = "https://chenab-college-backend.vercel.app/admin"

  //* Get Image & Title Individual Event Data
  const [isEventData, setEventData] = useState({
    eventTitle: "",
    imageUrl: "",
  })

  //* Get & Update Date From React Hook Form
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({
    defaultValues: async () => {
      const res = await fetch(`${API}/allevent/${id}`);
      const data = await res.json();
      return {
        eventTitle: data.eventTitle,
        shortEventDetails: data.shortEventDetails,
        longEventDetails: data.longEventDetails,
        category: data.category,
        date: data.date,
        imageUrl: data.imageUrl,
        eventFee: data.eventFee,
        rating: data.rating,
        eventLocation: data.eventLocation,
        socialLink: data.socialLink,
        eventOrganizer: data.eventOrganizer,
        future: data.future
      }
    }
  });


  //* Get Image & Title Individual Event Data
  const getEventdata = async () => {
    try {
      const res = await fetch(`${API}/allevent/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const data = await res.json();
      setEventData(data)

    } catch (error) {
      console.log('Error', error);
    }
  };

  //* Update Data In React Hook Form
  const onSubmit = async (data) => {
    try {
      const res = await fetch(`${API}/event/update/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const APIdata = await res.json();
      // console.log(APIdata)

      if (res.ok) {
        hendleSuccess('Updated Successfully')
      } else if (!res.ok) {
        hendleError('Network response was not ok')
      } else if (res.status(500)) {
        hendleError('Internal server error')
      }

    } catch (error) {
      console.log('Error', error);
    }
  };

  //* Reset Form After Submit And Get Individual Data
  useEffect(() => {
    getEventdata()

    if (isSubmitSuccessful) {
      reset();

    }
  }, [isSubmitSuccessful, reset])

  return (
    <>
      <SEO title="Edit Event | Chenab College" desc="This is Edit Even Chenab College Advanced Studies" />

      <div className='flex flex-col gap-y-6 w-full h-auto'>
        {/* Column No 1 */}
        <div className='relative w-full xs:h-[180px] md:h-[250px] xl:h-[350px] rounded-md overflow-hidden'>
          {/* Course Bg-Image */}
          <figure className='w-full h-auto'>
            <img className='w-full h-auto bg-cover' src={isEventData.imageUrl[0]} alt="event-img" />
          </figure>

          {/* Layout Div */}
          <div className='absolute top-0 left-0 z-[2] w-full h-full bg-gradient-to-r from-[#884dc261] to-[#cba74371]'>
            <div className='absolute top-0 left-0 z-[3] flex items-center justify-center px-6 w-full h-full bg-[#00000089] xs:text-[1.1em] md:text-[1.4em] xl:text-[1.6em] text-white text-center font-semibold capitalize'>
              {
                isEventData.eventTitle ?
                  <>
                    {isEventData.eventTitle}
                  </>
                  :
                  "Loading ...."
              }
            </div>
          </div>
        </div>

        {/* Column No 2 */}
        <div className='light-dark-text grid xs:grid-cols-1 xs:px-1 md:px-6 lg:px-8 xl:px-24 xs:py-2 md:py-8 xs:gap-y-3 md:gap-y-12 w-full'>
          {/*------Heading------- */}
          <div className='flex flex-col'>
            <h1 className='flex items-center gap-x-2 xs:text-[1.25em] md:text-[1.3em] font-semibold'>
              Edit Event Details
              <GrUpdate className='text-md' />
            </h1>
            <div className='title-underline mt-1 w-[100px]'></div>
          </div>

          {/* -----React-Hook_Form------ */}
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col xs:gap-y-10 md:gap-y-14 xl:gap-y-16 w-full h-auto xs:text-[0.96em] md:text-[0.9em] xl:text-[0.92em]'>
            {/* Event Details */}
            <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-y-5 w-full h-full'>
              <div>
                <div className='flex items-center gap-x-1 font-medium xs:hidden md:flex'>
                  <h1>Event</h1>
                  <CgEventbrite />
                </div>
              </div>
              <div className='grid xs:grid-cols-1 md:grid-cols-2 md:col-span-2 gap-x-5 gap-y-6 w-full'>
                <div className='flex flex-col gap-y-1'>
                  <label htmlFor="firstName" className='contact-inputs-label'>event title *</label>
                  <input
                    type="text"
                    placeholder='--- --- ---'
                    id='eventTitle'
                    {...register("eventTitle", {
                      required: 'event title is required',
                    })}
                    className='admin-inputs' />
                  {errors.eventTitle && <span className='text-[0.9em] lowercase text-red-500'>{errors.eventTitle?.message}</span>}
                </div>

                <div className='flex flex-col gap-y-1'>
                  <label htmlFor="category" className='contact-inputs-label'>Category *</label>
                  <input
                    type="text"
                    placeholder='--- --- ---'
                    id='category'
                    {...register("category", {
                      required: 'category is required',
                    })}
                    className='admin-inputs capitalize  ' />
                  {errors.category && <span className='text-[0.9em] lowercase text-red-500'>{errors.category?.message}</span>}
                </div>

                <div className='flex flex-col gap-y-1'>
                  <label htmlFor="eventLocation" className='contact-inputs-label'>Location *</label>
                  <input
                    type="text"
                    placeholder='--- --- ---'
                    id='eventLocation'
                    {...register("eventLocation", {
                      required: 'location is required',
                    })}
                    className='admin-inputs' />
                  {errors.eventLocation && <span className='text-[0.9em] lowercase text-red-500'>{errors.eventLocation?.message}</span>}
                </div>

                <div className='flex flex-col gap-y-1'>
                  <label htmlFor="eventFee" className='contact-inputs-label'>event Fee *</label>
                  <input
                    type="number"
                    placeholder='--- --- ---'
                    id='eventFee'
                    {...register("eventFee", {
                      required: 'event Fee is required',
                    })}
                    className='admin-inputs capitalize  ' />
                  {errors.eventFee && <span className='text-[0.9em] lowercase text-red-500'>{errors.eventFee?.message}</span>}
                </div>

                <div className='flex flex-col gap-y-1'>
                  <label htmlFor="rating" className='contact-inputs-label'>event rating *</label>
                  <input
                    type="text"
                    placeholder='--- --- ---'
                    id='rating'
                    {...register("rating", {
                      required: 'event rating is required',
                    })}
                    className='admin-inputs capitalize' />
                  {errors.rating && <span className='text-[0.9em] lowercase text-red-500'>{errors.rating?.message}</span>}
                </div>
              </div>
            </div>

            {/* Date & Time */}
            <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-y-5 w-full h-full'>
              <div>
                <div className='flex items-center gap-x-1 font-medium xs:hidden md:flex'>
                  <h1>Date & Time</h1>
                  <BsCalendar2DateFill />
                </div>
              </div>
              <div className='grid xs:grid-cols-2 md:grid-cols-3 md:col-span-2 gap-x-5 gap-y-6 w-full'>
                <div className='flex flex-col gap-y-1'>
                  <label htmlFor="date.[0]" className='contact-inputs-label'>Month *</label>
                  <input
                    type="text"
                    placeholder='--- --- ---'
                    id='date.[0]'
                    {...register("date.[0]", {
                      required: "month is required",
                    })}
                    className='admin-inputs capitalize' />
                  {errors.date?.[0]?.message && (<span className="text-[0.9em] lowercase text-red-500">{errors.date[0].message}</span>)}
                </div>

                <div className='flex flex-col gap-y-1'>
                  <label htmlFor="date.[1]" className='contact-inputs-label'>Date *</label>
                  <input
                    type="number"
                    placeholder='--- --- ---'
                    id='date.[1]'
                    {...register("date.[1]", {
                      required: 'date is required',
                      min: { value: 1, message: 'Date must be le ast 1' },
                      max: { value: 31, message: 'Date must be at most 31' }
                    })}
                    className='admin-inputs' />
                  {errors.date?.[1]?.message && (<span className="text-[0.9em] lowercase text-red-500">{errors.date[1].message}</span>)}
                </div>

                <div className='flex flex-col gap-y-1'>
                  <label htmlFor="date.[2]" className='contact-inputs-label'>Year *</label>
                  <input
                    type="number"
                    placeholder='--- --- ---'
                    id='date.[2]'
                    {...register("date.[2]", {
                      required: 'year is required',
                    })}
                    className='admin-inputs' />
                  {errors.date?.[2]?.message && (<span className="text-[0.9em] lowercase text-red-500">{errors.date[2].message}</span>)}
                </div>

                <div className='flex flex-col gap-y-1'>
                  <label htmlFor="date.[3]" className='contact-inputs-label'>Start Time *</label>
                  <input
                    type="text"
                    placeholder='--- --- ---'
                    id='date.[3]'
                    {...register("date.[3]", {
                      required: 'start time is required',
                    })}
                    className='admin-inputs uppercase' />
                  {errors.date?.[3]?.message && (<span className="text-[0.9em] lowercase text-red-500">{errors.date[3].message}</span>)}
                </div>

                <div className='flex flex-col gap-y-1'>
                  <label htmlFor="date.[4]" className='contact-inputs-label'>End Time *</label>
                  <input
                    type="text"
                    placeholder='--- --- ---'
                    id='date.[4]'
                    {...register("date.[4]", {
                      required: 'end time is required',
                    })}
                    className='admin-inputs uppercase' />
                  {errors.date?.[4]?.message && (<span className="text-[0.9em] lowercase text-red-500">{errors.date[4].message}</span>)}
                </div>

              </div>
            </div>

            {/* eventOrganizer */}
            <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-y-5 w-full h-full'>
              <div>
                <div className='flex items-center gap-x-1 font-medium xs:hidden md:flex'>
                  <h1>Event Organizer</h1>
                  <FaBarsStaggered />
                </div>
              </div>
              <div className='grid xs:grid-cols-1 md:grid-cols-2 md:col-span-2 gap-x-5 gap-y-6 w-full'>

                <div className='flex flex-col gap-y-1'>
                  <label htmlFor="eventOrganizer.[0]" className='contact-inputs-label'>Name *</label>
                  <input
                    type="text"
                    placeholder='--- --- ---'
                    id='eventOrganizer.[0]'
                    {...register("eventOrganizer.[0]", {
                      required: 'organizer name is required',
                    })}
                    className='admin-inputs' />
                  {errors.eventOrganizer?.[0]?.message && (<span className="text-[0.9em] lowercase text-red-500">{errors.eventOrganizer[0].message}</span>)}
                </div>

                <div className='flex flex-col gap-y-1'>
                  <label htmlFor="eventOrganizer.[1]" className='contact-inputs-label'>Number*</label>
                  <input
                    type="text"
                    placeholder='--- --- ---'
                    id='eventOrganizer.[1]'
                    {...register("eventOrganizer.[1]", {
                      required: 'organizer number is required',
                    })}
                    className='admin-inputs' />
                  {errors.eventOrganizer?.[1]?.message && (<span className="text-[0.9em] lowercase text-red-500">{errors.eventOrganizer[1].message}</span>)}
                </div>

                <div className='flex flex-col gap-y-1'>
                  <label htmlFor="eventOrganizer.[2]" className='contact-inputs-label'>email address *</label>
                  <input
                    type="email"
                    placeholder='--- --- ---'
                    id='eventOrganizer.[2]'
                    {...register("eventOrganizer.[2]", {
                      required: 'organizer email is required',
                      pattern: {
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message: 'invalid email address'
                      },
                    })}
                    className='admin-inputs' />
                  {errors.eventOrganizer?.[2]?.message && (<span className="text-[0.9em] lowercase text-red-500">{errors.eventOrganizer[2].message}</span>)}
                </div>

                <div className='flex flex-col gap-y-1'>
                  <label htmlFor="eventOrganizer.[3]" className='contact-inputs-label'>Location *</label>
                  <input
                    type="text"
                    placeholder='--- --- ---'
                    id='eventOrganizer.[3]'
                    {...register("eventOrganizer.[3]", {
                      required: 'organizer location is required',
                    })}
                    className='admin-inputs uppercase' />
                  {errors.eventOrganizer?.[3]?.message && (<span className="text-[0.9em] lowercase text-red-500">{errors.eventOrganizer[3].message}</span>)}
                </div>
              </div>
            </div>

            {/* Event Image */}
            <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-y-5 w-full h-full'>
              <div>
                <div className='flex items-center gap-x-1 font-medium xs:hidden md:flex'>
                  <h1>Image links</h1>
                  <FaFileImage />
                </div>
              </div>
              <div className='grid xs:grid-cols-1 md:grid-cols-1 md:col-span-2 gap-x-5 gap-y-6 w-full'>
                <div className='flex flex-col gap-y-1'>
                  <label htmlFor="imageUrl.[0]" className='contact-inputs-label'>Event Image 1 *</label>
                  <input
                    type="text"
                    placeholder='--- --- ---'
                    id='imageUrl.[0]'
                    {...register("imageUrl.[0]", {
                      required: '1 image URL is required',
                    })}
                    className='admin-inputs' />
                  {errors.imageUrl?.[0]?.message && (<span className="text-[0.9em] lowercase text-red-500">{errors.imageUrl[0].message}</span>)}
                </div>

                <div className='flex flex-col gap-y-1'>
                  <label htmlFor="imageUrl.[1]" className='contact-inputs-label'>Event Image 2 *</label>
                  <input
                    type="text"
                    placeholder='--- --- ---'
                    id='imageUrl.[1]'
                    {...register("imageUrl.[1]", {
                      required: '2 image URL is required',
                    })}
                    className='admin-inputs' />
                  {errors.imageUrl?.[1]?.message && (<span className="text-[0.9em] lowercase text-red-500">{errors.imageUrl[1].message}</span>)}
                </div>

                <div className='flex flex-col gap-y-1'>
                  <label htmlFor="imageUrl.[2]" className='contact-inputs-label'>Event Image 3 *</label>
                  <input
                    type="text"
                    placeholder='--- --- ---'
                    id='imageUrl.[2]'
                    {...register("imageUrl.[2]", {
                      required: '3 image URL is required',
                    })}
                    className='admin-inputs' />
                  {errors.imageUrl?.[2]?.message && (<span className="text-[0.9em] lowercase text-red-500">{errors.imageUrl[2].message}</span>)}
                </div>
              </div>
            </div>

            {/* socialLink */}
            <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-y-5 w-full h-full'>
              <div>
                <div className='flex items-center gap-x-1 font-medium xs:hidden md:flex'>
                  <h1>Social Links</h1>
                  <IoShareSocialSharp />
                </div>
              </div>
              <div className='grid xs:grid-cols-1 md:grid-cols-1 md:col-span-2 gap-x-5 gap-y-6 w-full'>
                <div className='flex flex-col gap-y-1'>
                  <label htmlFor="socialLink.[0]" className='contact-inputs-label'>facebook URL *</label>
                  <input
                    type="text"
                    placeholder='--- --- ---'
                    id='socialLink.[0]'
                    {...register("socialLink.[0]", {
                      required: 'facebook URL is required',
                    })}
                    className='admin-inputs' />
                  {errors.socialLink?.[0]?.message && (<span className="text-[0.9em] lowercase text-red-500">{errors.socialLink[0].message}</span>)}
                </div>

                <div className='flex flex-col gap-y-1'>
                  <label htmlFor="socialLink.[1]" className='contact-inputs-label'>instagram URL *</label>
                  <input
                    type="text"
                    placeholder='--- --- ---'
                    id='socialLink.[1]'
                    {...register("socialLink.[1]", {
                      required: 'instagram URL is required',
                    })}
                    className='admin-inputs' />
                  {errors.socialLink?.[1]?.message && (<span className="text-[0.9em] lowercase text-red-500">{errors.socialLink[1].message}</span>)}
                </div>

                <div className='flex flex-col gap-y-1'>
                  <label htmlFor="socialLink.[2]" className='contact-inputs-label'>whatsapp URL *</label>
                  <input
                    type="text"
                    placeholder='--- --- ---'
                    id='socialLink.[2]'
                    {...register("socialLink.[2]", {
                      required: 'whatsapp URL is required',
                    })}
                    className='admin-inputs' />
                  {errors.socialLink?.[2]?.message && (<span className="text-[0.9em] lowercase text-red-500">{errors.socialLink[2].message}</span>)}
                </div>

              </div>
            </div>

            {/* Featured */}
            <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-y-5 py-3 w-full h-full'>
              <div>
                <div className='flex items-center gap-x-2 font-medium xs:hidde md:flex'>
                  <h1>Featured</h1>
                  <SiFuturelearn />
                </div>
              </div>
              <div className='flex flex-col'>
                <div className='flex items-center gap-x-[30px]'>
                  <label htmlFor="Remember" className='contact-inputs-label flex gap-x-[6px] xs:text-[0.95em] cursor-pointer'>
                    Remember
                    <input
                      type="radio"
                      value="false"
                      id='Remember'
                      className='cursor-pointer'
                      {...register("future", { required: true })} />
                  </label>
                  <label htmlFor="Coming" className='contact-inputs-label flex gap-x-[6px] xs:text-[0.95em] cursor-pointer'>
                    Coming Up
                    <input
                      type="radio"
                      value="true"
                      id='Coming'
                      className='cursor-pointer'
                      {...register("future")} />
                  </label>
                </div>
                {errors.future && <span className='mt-1 text-[0.95em] lowercase text-red-500'>Future Value is required</span>}
              </div>
            </div>

            {/* Event Details */}
            <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-y-5 w-full h-full'>
              <div>
                <div className='flex items-center gap-x-1 font-medium xs:hidden md:flex'>
                  <h1>Event Details</h1>
                  <IoIosInformationCircle />
                </div>
              </div>
              <div className='grid xs:grid-cols-1 md:col-span-2 gap-y-10 w-full'>
                {/* shortEventDetails */}
                <div className='flex flex-col gap-y-1'>
                  <label htmlFor="shortEventDetails" className='contact-inputs-label'>short Event Details *</label>
                  <textarea
                    type="text"
                    placeholder='--- --- ---'
                    id='shortEventDetails'
                    {...register("shortEventDetails", {
                      required: 'short detail is required'
                    })}
                    className='admin-inputs w-full xs:min-h-[100px] lg:min-h-[90px] max-h-auto overflow-hidden'>
                  </textarea>
                  {errors.shortEventDetails && <span className='text-[0.9em] lowercase text-red-500'>{errors.shortEventDetails?.message}</span>}
                </div>

                {/* longEventDetails */}
                <div className='flex flex-col gap-y-1'>
                  <label htmlFor="longEventDetails" className='contact-inputs-label'>More Event Details *</label>
                  <textarea
                    type="text"
                    placeholder='--- --- ---'
                    id='longEventDetails'
                    {...register("longEventDetails", {
                      required: 'more detail is required'
                    })}
                    className='admin-inputs w-full xs:min-h-[200px] xl:min-h-[250px] max-h-auto overflow-hidden'>
                  </textarea>
                  {errors.longEventDetails && <span className='text-[0.9em] lowercase text-red-500'>{errors.longEventDetails?.message}</span>}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className='flex xs:justify-center md:justify-start xs:pt-4 md:pt-6 xl:pt-10 w-full'>
              <button type='submit' className='flex items-center gap-x-2 px-4 py-[8px] text-[0.9em] tracking-[0.5px] font-bold uppercase hover:bg-blue-400'>
                Update
                <GrUpdate />
              </button>
            </div>
          </form>
          {/* <DevTool control={control} placement='top-left' /> */}
        </div>
      </div>

      <ToastContainer />
    </>
  )
}

export default UpdateEvent