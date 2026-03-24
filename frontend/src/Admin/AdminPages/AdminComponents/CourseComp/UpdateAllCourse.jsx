import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { DevTool } from "@hookform/devtools";
import { GrUpdate } from 'react-icons/gr';
import { ToastContainer } from 'react-toastify';
import { hendleError, hendleSuccess } from '../../../../Components/Utils';
import SEO from '../../../../Components/Common/SEO';
import { FaRegEdit } from 'react-icons/fa';

const UpdateAllCourse = () => {
  const { id } = useParams();
  const API = "https://chenab-college-backend.vercel.app/admin"

  //* Get Image & Title Individual Data
  const [isCourseData, setCourseData] = useState({
    title: "",
    image: "",
  })

  //* Get & Update Date From React Hook Form
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({
    defaultValues: async () => {
      const res = await fetch(`${API}/allcourse/${id}`);
      const data = await res.json();
      return {
        title: data.title,
        courseFee: data.courseFee,
        category: data.category,
        duration: data.duration,
        level: data.level,
        description: data.description,
        image: data.image,
        feature: data.feature
      }
    }
  });

  //* Get Image & Title Individual Course Data
  const getCoursedata = async () => {
    try {
      const res = await fetch(`${API}/allCourse/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const data = await res.json();
      setCourseData(data)

    } catch (error) {
      console.log('Error', error);
    }
  };

  //* Update Data In React Hook Form
  const onSubmit = async (data) => {
    try {
      const res = await fetch(`${API}/allcourse/update/${id}`, {
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


  useEffect(() => {
    getCoursedata()

    if (isSubmitSuccessful) {
      reset();
    }

  }, [isCourseData, isSubmitSuccessful, reset])

  return (
    <>
      <SEO title="Edit Course | Chenab College" desc="This is Edit Course Chenab College Advanced Studies" />

      <div className='light-dark-text grid xl:grid-cols-2 md:px-4 lg:px-8 2xl:px-16 md:gap-y-5 w-full h-auto'>
        {/* Course-picture & Title */}
        <div className='relative w-full xs:h-[190px] md:h-[250px] xl:h-[350px] rounded-[5px] overflow-hidden xs:order-1 xl:order-2'>
          {/* Course Bg-Image */}
          <figure className='w-full h-auto'>
            <img className='w-full h-auto bg-cover' src={isCourseData.image} alt="course-img" />
          </figure>

          {/* Layout Div */}
          <div className='absolute top-0 left-0 z-[2] w-full h-full bg-gradient-to-r from-[#884dc261] to-[#cba74371]'>
            <div className='absolute top-0 left-0 z-[3] flex items-center justify-center px-6 w-full h-full bg-[#00000064] xs:text-[1.3em] md:text-[1.4em] xl:text-[1.6em] xs:leading-[1.3em] md:leading-[1.4em] text-white text-center font-semibold capitalize'>
              {
                isCourseData.title ?
                  <>
                    {isCourseData.title}
                  </>
                  :
                  "Loading ...."
              }
            </div>
          </div>
        </div>

        {/* Heading & Update Form */}
        <div className='grid xs:grid-cols-1 xs:px-1 md:pr-60 lg:pr-64 xl:pr-12 xs:py-8 lg:py-12 gap-y-10 w-full xs:text-[0.92em] md:text-[0.9em] xl:text-[0.92em] rounded-md xs:order-2 xl:order-1'>
          {/* Course heading */}
          <div className='flex flex-col'>
            <h1 className='flex items-center gap-x-2 xs:text-[1.3em] md:text-[1.4em] font-semibold'>
              Edit Course
              <FaRegEdit className='text-xl' />
            </h1>
            <div className='title-underline w-[100px]'></div>
          </div>

          {/* Update React Hook Form */}
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-6 w-full'>
            {/* Course Name */}
            <div className='flex flex-col gap-y-1'>
              <label htmlFor="title" className='contact-inputs-label'>Course Name *</label>
              <input
                type="text"
                placeholder='--- --- ---'
                id='title'
                {...register("title", {
                  required: 'Course Name is required',
                })}
                className='admin-inputs' />
              {errors.title && <span className='text-[0.9em] lowercase text-red-500'>{errors.title?.message}</span>}
            </div>

            {/* courseFee */}
            <div className='flex flex-col gap-y-1'>
              <label htmlFor="courseFee" className='contact-inputs-label'>Course Fee *</label>
              <input
                Fee="text"
                placeholder='--- --- ---'
                id='courseFee'
                {...register("courseFee", {
                  required: 'course Fee is required',
                })}
                className='admin-inputs capitalize' />
              {errors.courseFee && <span className='text-[0.9em] lowercase text-red-500'>{errors.courseFee?.message}</span>}
            </div>

            {/* category */}
            <div className='flex flex-col gap-y-1'>
              <label htmlFor="category" className='contact-inputs-label'>Category *</label>
              <input
                type="text"
                placeholder='--- --- ---'
                id='category'
                {...register("category", {
                  required: 'category is required',
                })}
                className='admin-inputs uppercase' />
              {errors.category && <span className='text-[0.9em] lowercase text-red-500'>{errors.category?.message}</span>}
            </div>

            {/* duration */}
            <div className='flex flex-col gap-y-1'>
              <label htmlFor="duration" className='contact-inputs-label'>duration *</label>
              <input
                type="text"
                placeholder='--- --- ---'
                id='duration'
                {...register("duration", {
                  required: 'duration is required',
                })}
                className='admin-inputs' />
              {errors.duration && <span className='text-[0.9em] lowercase text-red-500'>{errors.duration?.message}</span>}
            </div>

            {/* level */}
            <div className='flex flex-col gap-y-1'>
              <label htmlFor="level" className='contact-inputs-label'>level *</label>
              <input
                type="text"
                placeholder='--- --- ---'
                id='level'
                {...register("level", {
                  required: 'level is required',
                })}
                className='admin-inputs capitalize' />
              {errors.level && <span className='text-[0.9em] lowercase text-red-500'>{errors.level?.message}</span>}
            </div>

            {/* image */}
            <div className='flex flex-col gap-y-1'>
              <label htmlFor="image" className='contact-inputs-label'>Course Banner URL *</label>
              <input
                type="text"
                placeholder='--- --- ---'
                id='image'
                {...register("image", {
                  required: 'URL is required',
                })}
                className='admin-inputs' />
              {errors.image && <span className='text-[0.9em] lowercase text-red-500'>{errors.image?.message}</span>}
            </div>

            {/* Featured */}
            <div className='flex flex-col my-5 gap-y-2'>
              <h1 className='contact-inputs-label'>
                Featured *
              </h1>
              <div className='flex items-center gap-x-[25px]'>
                <label htmlFor="True" className='flex gap-x-[5px] xs:text-[0.96em] cursor-pointer'>
                  True
                  <input
                    type="radio"
                    value="true"
                    id='True'
                    {...register("feature", { required: true })}
                    className='cursor-pointer accent-blue-700' />
                </label>
                <label htmlFor="False" className='flex gap-x-[5px] xs:text-[0.96em] cursor-pointer'>
                  False
                  <input
                    type="radio"
                    value="false"
                    id='False'
                    {...register("feature")}
                    className='cursor-pointer accent-blue-700' />
                </label>
              </div>
              {errors.feature && <span className='text-[0.9em] lowercase text-red-500'>Future Value is required</span>}
            </div>

            {/* description */}
            <div className='grid xs:grid-cols-1 md:grid-cols-1 md:col-span-2 gap-y-1 w-full'>
              <label htmlFor="description" className='contact-inputs-label'>description *</label>
              <textarea
                type="text"
                placeholder='--- --- ---'
                id='description'
                {...register("description", {
                  required: 'description is required'
                })}
                className='admin-inputs w-full xs:min-h-[250px] md:min-h-[200px] xl:min-h-[220px] max-h-auto overflow-hidden'>
              </textarea>
              {errors.description && <span className='mt-1 text-[0.9em] lowercase text-red-500'>{errors.description?.message}</span>}
            </div>

            {/* Submit Button */}
            <div className='flex xs:justify-center pt-6 w-full'>
              <button type='submit' className='flex items-center gap-x-2 px-4 py-[8px] text-[0.84em] tracking-[0.5px] font-semibold uppercase hover:bg-blue-400'>
                Update
                <GrUpdate />
              </button>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer />
    </>
  )
}

export default UpdateAllCourse