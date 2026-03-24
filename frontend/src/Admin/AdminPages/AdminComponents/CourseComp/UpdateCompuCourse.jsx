import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { DevTool } from "@hookform/devtools";
import { hendleError, hendleSuccess } from '../../../../Components/Utils';
import { ToastContainer } from 'react-toastify';
import { GrUpdate } from 'react-icons/gr';
import SEO from '../../../../Components/Common/SEO';
import { FaEdit, FaRegEdit } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';

const UpdateCompuCourse = () => {
  const { id } = useParams();
  const API = "https://chenab-college-backend.vercel.app/admin"

  //* Get imageUrl & CourseName Individual Event Data
  const [isCourseData, setCourseData] = useState({
    CourseName: "",
    imageUrl: "",
  });

  //* Get & Update Date From React Hook Form
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({
    defaultValues: async () => {
      const res = await fetch(`${API}/allComputerCourse/${id}`);
      const data = await res.json();
      return {
        CourseName: data.CourseName,
        courseDetail: data.courseDetail,
        imageUrl: data.imageUrl,
        videoUrl: data.videoUrl,
        future: data.future
      }
    }
  });

  //* Get imageUrl & CourseName Individual Course Data
  const getCoursedata = async () => {
    try {
      const res = await fetch(`${API}/allComputerCourse/${id}`, {
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
      const res = await fetch(`${API}/ComputerCourse/update/${id}`, {
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
    if (isSubmitSuccessful) {
      reset();
    }
    getCoursedata()

  }, [isSubmitSuccessful, reset])

  return (
    <>
      <SEO title="Edit Blog | Chenab College" desc="This is Edit Course Blog Chenab College Advanced Studies" />

      <div className='light-dark-text grid xl:grid-cols-2 md:px-4 lg:px-8 2xl:px-16 md:gap-y-5 w-full h-auto'>
        {/* Blog-picture & Title */}
        <div className='relative w-full xs:h-[190px] md:h-[250px] xl:h-[350px] rounded-[5px] overflow-hidden xs:order-1 xl:order-2'>
          {/* Course Bg-Image */}
          <figure className='w-full h-auto'>
            <img className='w-full h-auto bg-cover' src={isCourseData.imageUrl} alt="ITcourse-img" />
          </figure>

          {/* Layout Div */}
          <div className='absolute top-0 left-0 z-[2] w-full h-full bg-gradient-to-r from-[#884dc261] to-[#cba74371]'>
            <div className='absolute top-0 left-0 z-[3] flex items-center justify-center px-6 w-full h-full bg-[#00000070] xs:text-[1.2em] md:text-[1.4em] xl:text-[1.5em] xs:leading-[1.3em] md:leading-[1.4em] text-white text-center font-semibold capitalize'>
              {
                isCourseData.CourseName ?
                  <>
                    {isCourseData.CourseName}
                  </>
                  :
                  "Loading ...."
              }
            </div>
          </div>
        </div>

        {/* Heading & Form */}
        <div className='grid xs:grid-cols-1 xs:px-1 md:pr-60 lg:pr-64 xl:pr-12 xs:py-8 lg:py-10 gap-y-10 w-full xs:text-[0.92em] md:text-[0.9em] xl:text-[0.92em] rounded-md xs:order-2 xl:order-1'>
          <div className='flex flex-col'>
            <h1 className='flex items-center gap-x-2 xs:text-[1.3em] md:text-[1.4em] font-semibold'>
              Edit Course Blog
              <FaRegEdit className='text-xl' />
            </h1>
            <div className='title-underline w-[100px]'></div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col xs:gap-y-6 md:gap-y-7 w-full'>
            {/* Blog Title */}
            <div className='flex flex-col gap-y-1'>
              <label htmlFor="CourseName" className='contact-inputs-label'>Blog Title *</label>
              <input
                type="text"
                placeholder='--- ---- ---'
                id='CourseName'
                {...register("CourseName", {
                  required: 'course name is required',
                })}
                className='admin-inputs' />
              {errors.CourseName && <span className='text-[0.9em] lowercase text-red-500'>{errors.CourseName?.message}</span>}
            </div>

            {/* Picture Url */}
            <div className='flex flex-col gap-y-1'>
              <label htmlFor="imageUrl" className='contact-inputs-label'>Banner URL *</label>
              <input
                type="text"
                placeholder='--- --- ---'
                id='imageUrl'
                {...register("imageUrl", {
                  required: 'URL is required',
                })}
                className='admin-inputs' />
              {errors.imageUrl && <span className='text-[0.9em] lowercase text-red-500'>{errors.imageUrl?.message}</span>}
            </div>

            {/* video Url */}
            <div className='flex flex-col gap-y-1'>
              <label htmlFor="videoUrl" className='contact-inputs-label'>Blog URL *</label>
              <input
                type="text"
                placeholder='--- --- ---'
                id='videoUrl'
                {...register("videoUrl", {
                  required: 'URL is required',
                })}
                className='admin-inputs' />
              {errors.videoUrl && <span className='text-[0.9em] lowercase text-red-500'>{errors.videoUrl?.message}</span>}
            </div>

            {/* Featured */}
            <div className='flex flex-col my-5 gap-y-2'>
              <h1 className='contact-inputs-label'>
                Featured *
              </h1>
              <div className='flex items-center gap-x-[30px]'>
                <label htmlFor="True" className='flex gap-x-[6px] text-[0.95em] cursor-pointer'>
                  True
                  <input
                    type="radio"
                    value="true"
                    id='True'
                    {...register("future", { required: true })}
                    className='cursor-pointer accent-blue-700' />
                </label>
                <label htmlFor="False" className='flex gap-x-[6px] text-[0.95em] cursor-pointer'>
                  False
                  <input
                    type="radio"
                    value="false"
                    id='False'
                    {...register("future")}
                    className='cursor-pointer accent-blue-700' />
                </label>
              </div>
              {errors.future && <span className='text-[0.9em] lowercase text-red-500'>Future Value is required</span>}
            </div>

            {/* Blog Detail */}
            <div className='grid xs:grid-cols-1 md:grid-cols-1 md:col-span-2 gap-y-1 w-full'>
              <label htmlFor="courseDetail" className='contact-inputs-label'>Blog Descrition *</label>
              <textarea
                type="text"
                placeholder='--- ---- ---'
                id='courseDetail'
                {...register("courseDetail", {
                  required: 'course detail is required'
                })}
                className='admin-inputs p-4 w-full xs:min-h-[250px] md:min-h-[200px] xl:min-h-[220px] max-h-auto overflow-hidden'>
              </textarea>
              {errors.courseDetail && <span className='mt-1 text-[0.9em] lowercase text-red-500'>{errors.courseDetail?.message}</span>}
            </div>

            {/* Submit Button */}
            <div className='flex xs:justify-center pt-7 w-full'>
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

export default UpdateCompuCourse