import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from "@hookform/devtools";
import { IoShareSocialSharp } from 'react-icons/io5'
import { ToastContainer } from 'react-toastify';
import { hendleError, hendleSuccess } from '../../../../Components/Utils';
import { SiFuturelearn } from 'react-icons/si';
import { IoIosCreate, IoIosInformationCircle } from 'react-icons/io';
import { CgEventbrite } from 'react-icons/cg';
import { BsCalendar2DateFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { FaFileImage } from 'react-icons/fa';
import SEO from '../../../../Components/Common/SEO';
import { MdCreate } from 'react-icons/md';


const CreateEvent = () => {
  const API = "https://chenab-college-backend.vercel.app/admin";

  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({
    defaultValues: {
      eventTitle: "",
      shortEventDetails: "",
      longEventDetails: "",
      category: "",
      date: "",
      imageUrl: "",
      eventFee: "",
      rating: "",
      eventLocation: "",
      socialLink: "",
      eventOrganizer: "",
      future: ""
    }
  });

  //* Create Event In React Hook Form
  const onSubmit = async (data) => {
    try {
      const res = await fetch(`${API}/event/createEvent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const APIdata = await res.json();
      console.log(APIdata)

      if (res.ok) {
        hendleSuccess('Create Event Successfully')
      } else if (!res.ok) {
        hendleSuccess('Create Event Successfully')
      } else if (res.status(404)) {
        hendleError('Internal server error')
      }

    } catch (error) {
      console.log('Error', error);
    }
  };

  //* Reset Form After Submit
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <SEO title="Create Event  | Chenab College" desc="This is Create Even Chenab College Advanced Studies" />

      <div className='light-dark-text grid xs:grid-cols-1 xs:px-2 md:px-6 lg:px-8 xl:px-24 xs:py-8 lg:py-10 xs:gap-y-5 md:gap-y-12 w-full rounded-md'>
        {/*------Heading------- */}
        <div className='flex flex-col'>
          <h1 className='flex items-center gap-x-2 xs:text-[1.3em] md:text-[1.4em] font-semibold'>
            Add Event
            <IoIosCreate />
          </h1>
          <div className='title-underline w-[80px]'></div>
        </div>

        {/* -----React-Hook_Form------ */}
        <form onSubmit={handleSubmit(onSubmit)} className='md:py-1 flex flex-col xs:gap-y-10 md:gap-y-14 xl:gap-y-16 w-full h-auto xs:text-[0.96em] md:text-[0.9em] xl:text-[0.92em]'>
          {/* Event Details */}
          <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-y-5 w-full h-full'>
            <div>
              <div className='flex items-center gap-x-1  font-medium xs:hidden md:flex'>
                <h1>Event Details</h1>
                <CgEventbrite />
              </div>
            </div>
            <div className='grid xs:grid-cols-1 md:grid-cols-2 md:col-span-2 gap-x-5 gap-y-6 w-full'>
              <div className='flex flex-col gap-y-1'>
                <label htmlFor="firstName" className='contact-inputs-label'>event title *</label>
                <input
                  type="text"
                  placeholder='enter event title'
                  id='eventTitle'
                  {...register("eventTitle", {
                    required:'event title is required',
                  })}
                  className='admin-inputs xs:text-[0.99em] md:text-[0.94em]' />
                {errors.eventTitle && <span className='text-[0.9em] lowercase text-red-500'>{errors.eventTitle?.message}</span>}
              </div>

              <div className='flex flex-col gap-y-1'>
                <label htmlFor="category" className='contact-inputs-label'>Category *</label>
                <input
                  type="text"
                  placeholder='enter event category'
                  id='category'
                  {...register("category", {
                    required: 'category is required',
                  })}
                  className='admin-inputs xs:text-[0.99em] md:text-[0.94em] capitalize  ' />
                {errors.category && <span className='text-[0.9em] lowercase text-red-500'>{errors.category?.message}</span>}
              </div>

              <div className='flex flex-col gap-y-1'>
                <label htmlFor="eventLocation" className='contact-inputs-label'>Location *</label>
                <input
                  type="text"
                  placeholder='enter event location'
                  id='eventLocation'
                  {...register("eventLocation", {
                    required: 'location is required',
                  })}
                  className='admin-inputs xs:text-[0.99em] md:text-[0.94em]' />
                {errors.eventLocation && <span className='text-[0.9em] lowercase text-red-500'>{errors.eventLocation?.message}</span>}
              </div>

              <div className='flex flex-col gap-y-1'>
                <label htmlFor="eventFee" className='contact-inputs-label'>event Fee *</label>
                <input
                  type="number"
                  placeholder='enter event Fee'
                  id='eventFee'
                  {...register("eventFee", {
                    required: 'event Fee is required',
                  })}
                  className='admin-inputs xs:text-[0.99em] md:text-[0.94em] capitalize  ' />
                {errors.eventFee && <span className='text-[0.9em] lowercase text-red-500'>{errors.eventFee?.message}</span>}
              </div>

              <div className='flex flex-col gap-y-1'>
                <label htmlFor="rating" className='contact-inputs-label'>event rating *</label>
                <input
                  type="text"
                  placeholder='enter event rating'
                  id='rating'
                  {...register("rating", {
                    required: 'event rating is required',
                  })}
                  className='admin-inputs xs:text-[0.99em] md:text-[0.94em] capitalize  ' />
                {errors.rating && <span className='text-[0.9em] lowercase text-red-500'>{errors.rating?.message}</span>}
              </div>
            </div>
          </div>

          {/* Date & Time */}
          <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-y-5 w-full h-full'>
            <div>
              <h1 className='flex items-center gap-x-1 text-[0.96em] font-medium xs:hidden md:flex'>
                Date & Time
                <BsCalendar2DateFill />
              </h1>
            </div>
            <div className='grid xs:grid-cols-2 md:grid-cols-3 md:col-span-2 gap-x-5 gap-y-6 w-full'>
              <div className='flex flex-col gap-y-1'>
                <label htmlFor="date.[0]" className='contact-inputs-label'>Month *</label>
                <input
                  type="text"
                  placeholder='enter month'
                  id='date.[0]'
                  {...register("date.[0]", {
                    required: "month is required",
                  })}
                  className='admin-inputs xs:text-[0.99em] md:text-[0.94em] capitalize' />
                {errors.date?.[0]?.message && (<span className="text-[0.9em] lowercase text-red-500">{errors.date[0].message}</span>)}
              </div>

              <div className='flex flex-col gap-y-1'>
                <label htmlFor="date.[1]" className='contact-inputs-label'>Date *</label>
                <input
                  type="number"
                  placeholder='enter Date'
                  id='date.[1]'
                  {...register("date.[1]", {
                    required: 'date is required',
                    min: { value: 1, message: 'Date must be le ast 1' },
                    max: { value: 31, message: 'Date must be at most 31' }
                  })}
                  className='admin-inputs xs:text-[0.99em] md:text-[0.94em]' />
                {errors.date?.[1]?.message && (<span className="text-[0.9em] lowercase text-red-500">{errors.date[1].message}</span>)}
              </div>

              <div className='flex flex-col gap-y-1'>
                <label htmlFor="date.[2]" className='contact-inputs-label'>Year *</label>
                <input
                  type="number"
                  placeholder='enter Year'
                  id='date.[2]'
                  {...register("date.[2]", {
                    required: 'year is required',
                  })}
                  className='admin-inputs xs:text-[0.99em] md:text-[0.94em]' />
                {errors.date?.[2]?.message && (<span className="text-[0.9em] lowercase text-red-500">{errors.date[2].message}</span>)}
              </div>

              <div className='flex flex-col gap-y-1'>
                <label htmlFor="date.[3]" className='contact-inputs-label'>Start Time *</label>
                <input
                  type="text"
                  placeholder='enter Start Time'
                  id='date.[3]'
                  {...register("date.[3]", {
                    required: 'start time is required',
                  })}
                  className='admin-inputs xs:text-[0.99em] md:text-[0.94em] uppercase' />
                {errors.date?.[3]?.message && (<span className="text-[0.9em] lowercase text-red-500">{errors.date[3].message}</span>)}
              </div>

              <div className='flex flex-col gap-y-1'>
                <label htmlFor="date.[4]" className='contact-inputs-label'>End Time *</label>
                <input
                  type="text"
                  placeholder='enter End Time'
                  id='date.[4]'
                  {...register("date.[4]", {
                    required: 'end time is required',
                  })}
                  className='admin-inputs xs:text-[0.99em] md:text-[0.94em] uppercase' />
                {errors.date?.[4]?.message && (<span className="text-[0.9em] lowercase text-red-500">{errors.date[4].message}</span>)}
              </div>

            </div>
          </div>

          {/* eventOrganizer */}
          <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-y-5 w-full h-full'>
            <div>
              <h1 className='flex items-center gap-x-1 text-[0.96em] font-medium xs:hidden md:flex'>
                Event Organizer
                <FaBarsStaggered />
              </h1>
            </div>
            <div className='grid xs:grid-cols-1 md:grid-cols-2 md:col-span-2 gap-x-5 gap-y-6 w-full'>

              <div className='flex flex-col gap-y-1'>
                <label htmlFor="eventOrganizer.[0]" className='contact-inputs-label'>Name *</label>
                <input
                  type="text"
                  placeholder='enter organizer name'
                  id='eventOrganizer.[0]'
                  {...register("eventOrganizer.[0]", {
                    required: 'organizer name is required',
                  })}
                  className='admin-inputs xs:text-[0.99em] md:text-[0.94em]' />
                {errors.eventOrganizer?.[0]?.message && (<span className="text-[0.9em] lowercase text-red-500">{errors.eventOrganizer[0].message}</span>)}
              </div>

              <div className='flex flex-col gap-y-1'>
                <label htmlFor="eventOrganizer.[1]" className='contact-inputs-label'>Phone Number*</label>
                <input
                  type="text"
                  placeholder='enter organizer phone number'
                  id='eventOrganizer.[1]'
                  {...register("eventOrganizer.[1]", {
                    required: 'organizer number is required',
                  })}
                  className='admin-inputs xs:text-[0.99em] md:text-[0.94em]' />
                {errors.eventOrganizer?.[1]?.message && (<span className="text-[0.9em] lowercase text-red-500">{errors.eventOrganizer[1].message}</span>)}
              </div>

              <div className='flex flex-col gap-y-1'>
                <label htmlFor="eventOrganizer.[2]" className='contact-inputs-label'>email address *</label>
                <input
                  type="email"
                  placeholder='enter organizer email address'
                  id='eventOrganizer.[2]'
                  {...register("eventOrganizer.[2]", {
                    required: 'organizer email is required',
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: 'invalid email address'
                    },
                  })}
                  className='admin-inputs xs:text-[0.99em] md:text-[0.94em]' />
                {errors.eventOrganizer?.[2]?.message && (<span className="text-[0.9em] lowercase text-red-500">{errors.eventOrganizer[2].message}</span>)}
              </div>

              <div className='flex flex-col gap-y-1'>
                <label htmlFor="eventOrganizer.[3]" className='contact-inputs-label'>Location *</label>
                <input
                  type="text"
                  placeholder='enter organizer location'
                  id='eventOrganizer.[3]'
                  {...register("eventOrganizer.[3]", {
                    required: 'organizer location is required',
                  })}
                  className='admin-inputs xs:text-[0.99em] md:text-[0.94em] uppercase' />
                {errors.eventOrganizer?.[3]?.message && (<span className="text-[0.9em] lowercase text-red-500">{errors.eventOrganizer[3].message}</span>)}
              </div>
            </div>
          </div>

          {/* socialLink */}
          <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-y-5 w-full h-full'>
            <div>
              <h1 className='flex items-center gap-x-1 text-[0.96em] font-medium xs:hidden md:flex'>
                Social Links
                <IoShareSocialSharp />
              </h1>
            </div>
            <div className='grid xs:grid-cols-1 md:grid-cols-1 md:col-span-2 gap-x-5 gap-y-6 w-full'>
              <div className='flex flex-col gap-y-1'>
                <label htmlFor="socialLink.[0]" className='contact-inputs-label'>facebook URL *</label>
                <input
                  type="text"
                  placeholder='enter facebook URL'
                  id='socialLink.[0]'
                  {...register("socialLink.[0]", {
                    required: 'facebook URL is required',
                  })}
                  className='admin-inputs xs:text-[0.99em] md:text-[0.94em]' />
                {errors.socialLink?.[0]?.message && (<span className="text-[0.9em] lowercase text-red-500">{errors.socialLink[0].message}</span>)}
              </div>

              <div className='flex flex-col gap-y-1'>
                <label htmlFor="socialLink.[1]" className='contact-inputs-label'>instagram URL *</label>
                <input
                  type="text"
                  placeholder='enter instagram URL'
                  id='socialLink.[1]'
                  {...register("socialLink.[1]", {
                    required: 'instagram URL is required',
                  })}
                  className='admin-inputs xs:text-[0.99em] md:text-[0.94em]' />
                {errors.socialLink?.[1]?.message && (<span className="text-[0.9em] lowercase text-red-500">{errors.socialLink[1].message}</span>)}
              </div>

              <div className='flex flex-col gap-y-1'>
                <label htmlFor="socialLink.[2]" className='contact-inputs-label'>whatsapp URL *</label>
                <input
                  type="text"
                  placeholder='enter whatsapp URL'
                  id='socialLink.[2]'
                  {...register("socialLink.[2]", {
                    required: 'whatsapp URL is required',
                  })}
                  className='admin-inputs xs:text-[0.99em] md:text-[0.94em]' />
                {errors.socialLink?.[2]?.message && (<span className="text-[0.9em] lowercase text-red-500">{errors.socialLink[2].message}</span>)}
              </div>

            </div>
          </div>

          {/* imageUrl */}
          <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-y-5 w-full h-full'>
            <div>
              <h1 className='flex items-center gap-x-1 text-[0.96em] font-medium xs:hidden md:flex'>
                Image links
                <FaFileImage />
              </h1>
            </div>
            <div className='grid xs:grid-cols-1 md:grid-cols-1 md:col-span-2 gap-x-5 gap-y-6 w-full'>
              <div className='flex flex-col gap-y-1'>
                <label htmlFor="imageUrl.[0]" className='contact-inputs-label'>Event Image 1 *</label>
                <input
                  type="text"
                  placeholder='Event image URL'
                  id='imageUrl.[0]'
                  {...register("imageUrl.[0]", {
                    required: '1 image URL is required',
                  })}
                  className='admin-inputs xs:text-[0.99em] md:text-[0.94em]' />
                {errors.imageUrl?.[0]?.message && (<span className="text-[0.9em] lowercase text-red-500">{errors.imageUrl[0].message}</span>)}
              </div>

              <div className='flex flex-col gap-y-1'>
                <label htmlFor="imageUrl.[1]" className='contact-inputs-label'>Event Image 2 *</label>
                <input
                  type="text"
                  placeholder='Event image URL'
                  id='imageUrl.[1]'
                  {...register("imageUrl.[1]", {
                    required: '2 image URL is required',
                  })}
                  className='admin-inputs xs:text-[0.99em] md:text-[0.94em]' />
                {errors.imageUrl?.[1]?.message && (<span className="text-[0.9em] lowercase text-red-500">{errors.imageUrl[1].message}</span>)}
              </div>

              <div className='flex flex-col gap-y-1'>
                <label htmlFor="imageUrl.[2]" className='contact-inputs-label'>Event Image 3 *</label>
                <input
                  type="text"
                  placeholder='Event image URL'
                  id='imageUrl.[2]'
                  {...register("imageUrl.[2]", {
                    required: '3 image URL is required',
                  })}
                  className='admin-inputs xs:text-[0.99em] md:text-[0.94em]' />
                {errors.imageUrl?.[2]?.message && (<span className="text-[0.9em] lowercase text-red-500">{errors.imageUrl[2].message}</span>)}
              </div>
            </div>
          </div>

          {/* Featured */}
          <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-y-5 py-3 w-full h-full'>
            <div>
              <h1 className='flex items-center gap-x-2 text-[0.96em] font-medium xs:hidde md:flex'>
                Featured
                <SiFuturelearn />
              </h1>
            </div>
            <div className='flex flex-col'>
              <div className='flex items-center gap-x-[30px]'>
                <label htmlFor="Remember" className='contact-inputs-label flex gap-x-[6px] xs:text-[0.95em] cursor-pointer'>
                  Remember
                  <input
                    type="radio"
                    value="false"
                    id='Remember'
                    className='cursor-pointer accent-blue-700'
                    {...register("future", { required: true })} />
                </label>
                <label htmlFor="Coming" className='contact-inputs-label flex gap-x-[6px] xs:text-[0.95em] cursor-pointer'>
                  Coming Up
                  <input
                    type="radio"
                    value="true"
                    id='Coming'
                    className='cursor-pointer accent-blue-700'
                    {...register("future")} />
                </label>
              </div>
              {errors.future && <span className='mt-1 text-[0.95em] lowercase text-red-500'>Future Value is required</span>}
            </div>
          </div>

          {/* informatiom */}
          <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-y-5 w-full h-full'>
            <div>
              <h1 className='flex items-center gap-x-2 text-[0.96em] font-medium xs:hidden md:flex'>
                Event Information <IoIosInformationCircle />
              </h1>
            </div>
            <div className='grid xs:grid-cols-1 md:col-span-2 gap-y-10 w-full'>
              <div className='flex flex-col gap-y-1'>
                <label htmlFor="shortEventDetails" className='contact-inputs-label'>short Event Details *</label>
                <textarea
                  type="text"
                  placeholder='enter event details'
                  id='shortEventDetails'
                  {...register("shortEventDetails", {
                    required: 'short detail is required'
                  })}
                  className='admin-inputs xs:text-[0.99em] md:text-[0.94em] w-full xs:min-h-[100px] lg:min-h-[90px] max-h-auto overflow-hidden'>
                </textarea>
                {errors.shortEventDetails && <span className='text-[0.9em] lowercase text-red-500'>{errors.shortEventDetails?.message}</span>}
              </div>
              <div className='flex flex-col gap-y-1'>
                <label htmlFor="longEventDetails" className='contact-inputs-label'>More Event Details *</label>
                <textarea
                  type="text"
                  placeholder='enter event details'
                  id='longEventDetails'
                  {...register("longEventDetails", {
                    required: 'more detail is required'
                  })}
                  className='admin-inputs xs:text-[0.99em] md:text-[0.94em] w-full xs:min-h-[200px] md:min-h-[170px] xl:min-h-[200px] max-h-auto overflow-hidden'>
                </textarea>
                {errors.longEventDetails && <span className='text-[0.9em] lowercase text-red-500'>{errors.longEventDetails?.message}</span>}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className='flex xs:justify-center md:justify-start xs:pt-2 md:pt-6 xl:pt-12 w-full'>
            <button type='submit' className='flex items-center gap-x-2 px-4 py-[8px] text-[0.9em] tracking-[0.5px] font-semibold uppercase hover:bg-blue-400'>
              Create
              <MdCreate className='text-base' />
            </button>
          </div>
        </form>
        {/* <DevTool control={control} placement='top-left' /> */}
      </div>
      <ToastContainer />
    </>
  )
}

export default CreateEvent