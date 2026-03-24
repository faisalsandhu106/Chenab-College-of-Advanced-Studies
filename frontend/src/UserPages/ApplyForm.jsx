import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from "@hookform/devtools";
import { FaBookOpen, FaEdit, FaPhoneAlt, FaTransgender, FaUser } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdDateRange, MdEmail, MdMessage } from 'react-icons/md'
import { UseCourseContext } from '../Components/ContextAPI/UserContext'
import { hendleError, hendleSuccess } from '../Components/Utils';
import { ToastContainer } from 'react-toastify';
import OpenAddmission from '../Components/ApplyFormComp/OpenAddmission';
import { BsFillSendPlusFill } from 'react-icons/bs';
import SEO from '../Components/Common/SEO';

const ApplyForm = () => {
  const addmissionFormFormAPI = "https://chenab-college-backend.vercel.app";

  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      streetName: '',
      cityName: '',
      stateName: '',
      zipCode: '',
      phoneNumber: '',
      date: '',
      month: '',
      year: '',
      courses: '',
      message: '',
      gender: '',
    }
  });

  const { Allcourses } = UseCourseContext();

  // *Fetch Course Title In API------------------------------
  const getCategoryData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property]
    })

    return (newVal = [...new Set(newVal)])
  };

  const categoryData = getCategoryData(Allcourses, "title");
  // console.log("isCourse", categoryData)

  // *Post Addmission Form In React Hook Form
  const onSubmit = async (data) => {

    try {
      const res = await fetch(`${addmissionFormFormAPI}/addmissionForm`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const APIdata = await res.json();
      console.log(APIdata)

      if (res.ok) {
        hendleSuccess('Addmission Form Send Successfully')
      } else if (!res.ok) {
        hendleError('Network response was not ok')
      } else if (res.status(500)) {
        hendleError('Internal server error')
      }


    } catch (error) {
      console.log('Error during sign up:', error);
    }

    // console.log(data)
  };

  // *Reset Form After Submit
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [Allcourses, isSubmitSuccessful, reset])


  return (
    <>
      <SEO title="Admission Form | Chenab College" desc="This is Admission Form Page Students Chenab College Advanced Studies" />

      <div className='pb-20 px-4 md:px-6 lg:px-8 xl:px-8'>
        {/* Addmission Open Information */}
        <div className='xs:pt-16 lg:pt-20'>
          <OpenAddmission />
        </div>

        {/* -----React-Hook_Form------ */}
        <div className='xs:pt-6 md:pt-8 lg:pt-12 xl:pt-20 md:px-5 lg:px-10 xl:px-28 w-full h-auto'>
          <div className='light-dark-text flex items-center gap-x-2 pb-7 border-b-2'>
            <h1 className='text-[1.4em] font-semibold'>
              Apply to Admission
              <div className='title-underline mt-1 w-[60px]'></div>
            </h1>
            <FaEdit className='text-xl' />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className='pt-10 flex flex-col gap-y-10 w-full h-auto'>
            {/* User Name */}
            <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-y-3 w-full h-full'>
              <div>
                <h1 className='flex items-center gap-x-2 text-[1em] font-medium'>
                  Name
                  <FaUser />
                </h1>
              </div>
              <div className='grid xs:grid-cols-1 md:grid-cols-2 md:col-span-2 gap-x-5 gap-y-6 w-full'>
                <div className='flex flex-col gap-y-1'>
                  <input
                    type="text"
                    placeholder='Enter your First Name'
                    id='firstName'
                    {...register("firstName", {
                      required: 'first name is required'
                    })}
                    className='contact-inputs' />
                  <label htmlFor="firstName" className='addmissionForm-inputs-label'>first name *</label>
                  {errors.firstName && <span className='text-[0.9em] text-red-500'>{errors.firstName?.message}</span>}
                </div>
                <div className='flex flex-col gap-y-1'>
                  <input
                    type="text"
                    placeholder='Enter your Last Name'
                    id='lastName'
                    {...register("lastName", {
                      required: 'last name is required'
                    })}
                    className='contact-inputs' />
                  <label htmlFor="lastName" className='addmissionForm-inputs-label'>last name *</label>
                  {errors.lastName && <span className='text-[0.9em] text-red-500'>{errors.lastName?.message}</span>}
                </div>
              </div>
            </div>

            {/* Email */}
            <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-y-3 w-full h-full'>
              <div>
                <h1 className='flex items-center gap-x-2 text-[1em] font-medium'>
                  Email Address <MdEmail />
                </h1>
              </div>
              <div className='grid xs:grid-cols-1 md:grid-cols-1 md:col-span-2 gap-x-5 w-full'>
                <div className='flex flex-col gap-y-1'>
                  <input
                    type="email"
                    placeholder='Enter your email address'
                    id='email'
                    {...register("email", {
                      required: 'email is required',
                      pattern: {
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message: 'invalid email address'
                      },
                      validate: {
                        notAdminEmial: (value) => {
                          return (
                            value !== "admin@example.com" || "Enter a different email address"
                          )
                        },
                        notBlacklistEmial: (value) => {
                          return (
                            !value.endsWith("blacklist.com") || "This domin is not allowed"
                          )
                        }
                      }
                    })}
                    className='contact-inputs' />
                  <label htmlFor="email" className='addmissionForm-inputs-label'>email *</label>
                  {errors.email && <span className='text-[0.9em] text-red-500'>{errors.email?.message}</span>}
                </div>
              </div>
            </div>

            {/* Address */}
            <div className='grid xs:grid-cols-1 md:grid-cols-3 py- gap-y-3 w-full h-full'>
              <div>
                <h1 className='flex items-center gap-x-2 text-[1em] font-medium'>
                  Address <FaLocationDot />
                </h1>
              </div>
              <div className='grid xs:grid-cols-1 md:grid-cols-1 md:col-span-2 gap-y-6 w-full'>
                <div className='grid xs:grid-cols-1 md:grid-cols-1 gap-x-5 w-full'>
                  <div className='flex flex-col gap-y-1'>
                    <input
                      type="text"
                      placeholder='Enter your Street Address'
                      id='streetName'
                      {...register("streetName", {
                        required: "street name is required"
                      })}
                      className='contact-inputs' />
                    <label htmlFor="streetName" className='addmissionForm-inputs-label'>street address *</label>
                    {errors.streetName && <span className='text-[0.9em] text-red-500'>{errors.streetName?.message}</span>}
                  </div>
                </div>

                {/* City & State */}
                <div className='grid xs:grid-cols-1 md:grid-cols-2 md:col-span-2 gap-x-5 gap-y-6 w-full'>
                  <div className='flex flex-col gap-y-1'>
                    <input
                      type="text"
                      placeholder='Enter your city name'
                      id='cityName'
                      {...register("cityName", {
                        required: "city name is required"
                      })}
                      className='contact-inputs' />
                    <label htmlFor="cityName" className='addmissionForm-inputs-label'>city *</label>
                    {errors.cityName && <span className='text-[0.9em] text-red-500'>{errors.cityName?.message}</span>}
                  </div>
                  <div className='flex flex-col gap-y-1'>
                    <input
                      type="text"
                      placeholder='Enter your state name'
                      id='stateName'
                      {...register("stateName", {
                        required: "state name is required"
                      })}
                      className='contact-inputs' />
                    <label htmlFor="stateName" className='addmissionForm-inputs-label'>state *</label>
                    {errors.stateName && <span className='text-[0.9em] text-red-500'>{errors.stateName?.message}</span>}
                  </div>
                </div>

                {/* postal / zip code */}
                <div className='grid xs:grid-cols-1 md:grid-cols-1 gap-x-5 w-full'>
                  <div className='flex flex-col gap-y-1'>
                    <input
                      type="number"
                      placeholder='Enter your postal/zip code'
                      id='zipCode'
                      {...register("zipCode", {
                        valueAsNumber: true,
                        required: "zip code is required"
                      })}
                      className='contact-inputs' />
                    <label htmlFor="zipCode" className='addmissionForm-inputs-label'>postal / zip code *</label>
                    {errors.zipCode && <span className='text-[0.9em] text-red-500'>{errors.zipCode?.message}</span>}
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Number */}
            <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-y-3 w-full h-full'>
              <div>
                <h1 className='flex items-center gap-x-2 text-[1em] font-medium'>
                  Phone Number <FaPhoneAlt />
                </h1>
              </div>
              <div className='grid xs:grid-cols-1 md:grid-cols-1 md:col-span-2 gap-x-5 w-full'>
                <div className='flex flex-col gap-y-1'>
                  <input
                    type="text"
                    placeholder='Enter your Phone Number'
                    id='phoneNumber'
                    {...register("phoneNumber", {
                      // valueAsNumber: true,
                      required: 'phone number is required',
                      // min: { value: 0, message: 'Phone Number must be least 0' },
                      // max: { value: 11, message: 'Phone Number must be at most 11' }
                    })}
                    className='contact-inputs' />
                  <label htmlFor="phoneNumber" className='addmissionForm-inputs-label'>Phone Number *</label>
                  {errors.phoneNumber && <span className='text-[0.9em] text-red-500'>{errors.phoneNumber?.message}</span>}
                </div>
              </div>
            </div>

            {/* Date */}
            <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-y-3 w-full h-full'>
              <div>
                <h1 className='flex items-center gap-x-2 text-[1em] font-medium'>
                  Date of Birth <MdDateRange />
                </h1>
              </div>
              <div className='grid xs:grid-cols-3 md:grid-cols-3 md:col-span-2 gap-x-4 gap-y-6 w-full'>
                <div className='flex flex-col gap-y-1'>
                  <input
                    type="number"
                    placeholder='Enter Date'
                    id='date'
                    {...register("date", {
                      valueAsNumber: true,
                      required: 'date is required',
                      min: { value: 1, message: 'date must be least 1' },
                      max: { value: 31, message: 'date must be at most 31' }
                    })}
                    className='contact-inputs' />
                  <label htmlFor="date" className='addmissionForm-inputs-label'>Date *</label>
                  {errors.date && <span className='text-[0.9em] text-red-500'>{errors.date?.message}</span>}
                </div>
                <div className='flex flex-col gap-y-1'>
                  <input
                    type="number"
                    placeholder='Enter Month'
                    id='month'
                    {...register("month", {
                      valueAsNumber: true,
                      required: 'month is required',
                      min: { value: 1, message: 'month must be least 1' },
                      max: { value: 12, message: 'month must be at most 12' }
                    })}
                    className='contact-inputs' />
                  <label htmlFor="month" className='addmissionForm-inputs-label'>Month *</label>
                  {errors.month && <span className='text-[0.9em] text-red-500'>{errors.month?.message}</span>}
                </div>
                <div className='flex flex-col gap-y-1'>
                  <input
                    type="number"
                    placeholder='Enter Year'
                    id='year'
                    {...register("year", {
                      valueAsNumber: true,
                      required: 'year is required'
                    })}
                    className='contact-inputs' />
                  <label htmlFor="year" className='addmissionForm-inputs-label'>Year *</label>
                  {errors.year && <span className='text-[0.9em] text-red-500'>{errors.year?.message}</span>}
                </div>
              </div>
            </div>

            {/* Course */}
            <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-y-3 w-full h-full'>
              <div>
                <h1 className='flex items-center gap-x-2 text-[1em] font-medium'>
                  Our Courses <FaBookOpen />
                </h1>
              </div>
              <div className='grid xs:grid-cols-1 md:grid-cols-1 md:col-span-2 gap-y-1 w-full'>
                <select id='course' className='contact-inputs cursor-pointer' {...register("courses", {
                  required: true
                })}>
                  {
                    categoryData.map((items, index) => {
                      return (
                        <option key={index} name="courses" value={items} className='body py-1 w-full cursor-pointer'>
                          {items}
                        </option>
                      )
                    })
                  }
                </select>
                <label htmlFor="courses" className='addmissionForm-inputs-label'>select course *</label>
                {errors.courses && <span className=' text-[0.9em] text-red-500'>'please select the course'</span>}
              </div>
            </div>

            {/* Gender */}
            <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-y-3 my-8 w-full h-full'>
              <div>
                <h1 className='flex items-center gap-x-2 text-[1em] font-medium'>
                  Gender
                  <FaTransgender />
                </h1>
              </div>
              <div className='flex flex-col gap-y-1'>
                <div className='flex items-center gap-x-[20px]'>
                  <label htmlFor="Male" className='addmissionForm-inputs-label flex gap-x-[5px] xs:text-[0.96em] cursor-pointer'>
                    Male
                    <input
                      type="radio"
                      value="male"
                      id='Male'
                      {...register("gender", { required: true })} />
                  </label>
                  <label htmlFor="Female" className='addmissionForm-inputs-label flex gap-x-[5px] xs:text-[0.96em] cursor-pointer'>
                    Female
                    <input
                      type="radio"
                      value="female"
                      id='Female'
                      {...register("gender")} />
                  </label>
                </div>
                {errors.gender && <span className='text-[0.9em] text-red-500'>gender is required</span>}
              </div>
            </div>

            {/* Message */}
            <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-y-3 w-full h-full'>
              <div>
                <h1 className='flex items-center gap-x-2 text-[1em] font-medium'>
                  Message <MdMessage />
                </h1>
              </div>
              <div className='grid xs:grid-cols-1 md:grid-cols-1 md:col-span-2 gap-y-1 w-full'>
                <textarea
                  type="text"
                  placeholder='Enter Your Message'
                  id='subject'
                  {...register("message", {
                    required: 'message is required'
                  })}
                  className='contact-inputs w-full xs:min-h-[190px] md:min-h-[150px] xl:min-h-[180px] max-h-[400px] leading-[20px] overflow-hidden'>
                </textarea>
                <label htmlFor="subject" className='addmissionForm-inputs-label'>Message *</label>
                {errors.message && <span className='text-[0.9em] text-red-500'>{errors.message?.message}</span>}
              </div>
            </div>

            {/* Submit Button */}
            <div className='flex xs:justify-center md:justify-start xs:pt-5 md:pt-5 w-full'>
              <button type='submit' className='flex items-center gap-x-2 px-[20px] text-[1em] tracking-[0.4px] font-medium'>
                Submit
                <BsFillSendPlusFill />
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

export default ApplyForm