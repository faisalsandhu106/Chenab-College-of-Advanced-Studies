import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from "@hookform/devtools";
import { MdCreate, MdCreateNewFolder } from 'react-icons/md';
import { ToastContainer } from 'react-toastify';
import { hendleError, hendleSuccess } from '../../../../Components/Utils';
import SEO from '../../../../Components/Common/SEO';

const CreateAllCourses = () => {
    const API = "https://chenab-college-backend.vercel.app/admin"

    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({
        defaultValues: {
            title: "",
            courseFee: "",
            category: "",
            duration: "",
            level: "",
            description: "",
            image: "",
            feature: "",
        }
    });

    //* Craete Course In React Hook Form
    const onSubmit = async (data) => {
        try {
            const res = await fetch(`${API}/allcourse/createCourse`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const APIdata = await res.json();
            // console.log(APIdata)

            if (res.ok) {
                hendleSuccess('Created Successfully')
            } else if (!res.ok) {
                hendleSuccess('Created Successfully')
            } else if (res.status()) {
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
    }, [isSubmitSuccessful, reset])

    return (
        <>
        <SEO title="Create Courses | Chenab College" desc="This is Create Courses Chenab College Advanced Studies" />

            <div className='grid xs:grid-cols-1 xs:py-6 md:py-10 xs:px-2 md:px-14 lg:px-20 xl:px-32 gap-y-10 w-full rounded-md'>
                {/* Course Heading */}
                <div className='flex flex-col'>
                    <h1 className='flex items-center gap-x-2 xs:text-[1.3em] md:text-[1.4em] font-semibold'>
                        Add Course
                        <MdCreateNewFolder />
                    </h1>
                    <div className='title-underline w-[70px]'></div>
                </div>

                {/* Create Form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid xs:grid-cols-1 md:grid-cols-2 md:gap-x-12 xl:gap-x-14 xs:gap-y-6 md:gap-y-8 lg:gap-y-10 w-full'>
                        {/* Course Name */}
                        <div className='flex flex-col gap-y-1'>
                            <label htmlFor="title" className='contact-inputs-label'>Course Name *</label>
                            <input
                                type="text"
                                placeholder='Enter Course Name'
                                id='title'
                                {...register("title", {
                                    required: 'Course Name is required',
                                })}
                                className='admin-inputs' />
                            {errors.title && <span className='text-[0.9em] lowercase text-red-500'>{errors.title?.message}</span>}
                        </div>

                        {/* course Fee */}
                        <div className='flex flex-col gap-y-1'>
                            <label htmlFor="courseFee" className='contact-inputs-label'>Course Fee *</label>
                            <input
                                Fee="text"
                                placeholder='Enter course Fee'
                                id='courseFee'
                                {...register("courseFee", {
                                    required: 'course Fee is required',
                                })}
                                className='admin-inputs uppercase' />
                            {errors.courseFee && <span className='text-[0.9em] lowercase text-red-500'>{errors.courseFee?.message}</span>}
                        </div>

                        {/* category */}
                        <div className='flex flex-col gap-y-1'>
                            <label htmlFor="title" className='contact-inputs-label'>Category *</label>
                            <input
                                type="text"
                                placeholder='Enter Course category'
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
                                placeholder='Enter course duration'
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
                                placeholder='Enter course level'
                                id='level'
                                {...register("level", {
                                    required: 'level is required',
                                })}
                                className='admin-inputs' />
                            {errors.level && <span className='text-[0.9em] lowercase text-red-500'>{errors.level?.message}</span>}
                        </div>

                        {/* image */}
                        <div className='flex flex-col gap-y-1'>
                            <label htmlFor="image" className='contact-inputs-label'>course banner URL *</label>
                            <input
                                type="text"
                                placeholder='enter course banner url'
                                id='image'
                                {...register("image", {
                                    required: 'URL is required',
                                })}
                                className='admin-inputs' />
                            {errors.image && <span className='text-[0.9em] lowercase text-red-500'>{errors.image?.message}</span>}
                        </div>

                        {/* Featured */}
                        <div className='flex flex-col xs:my-5 md:my-3 gap-y-2'>
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
                                        className='cursor-pointer accent-blue-700'
                                        {...register("feature", { required: true })} />
                                </label>
                                <label htmlFor="False" className='flex gap-x-[5px] xs:text-[0.96em] cursor-pointer'>
                                    False
                                    <input
                                        type="radio"
                                        value="false"
                                        id='False'
                                        className='cursor-pointer accent-blue-700'
                                        {...register("feature")} />
                                </label>
                            </div>
                            {errors.feature && <span className='text-[0.9em] lowercase text-red-500'>Future Value is required</span>}
                        </div>

                        {/* description */}
                        <div className='grid xs:grid-cols-1 md:grid-cols-1 md:col-span-2 gap-y-1 w-full'>
                            <label htmlFor="description" className='contact-inputs-label'>Course Details *</label>
                            <textarea
                                type="text"
                                placeholder='Enter course details'
                                id='description'
                                {...register("description", {
                                    required: 'description is required'
                                })}
                                className='admin-inputs w-full xs:min-h-[190px] md:min-h-[150px] xl:min-h-[180px] max-h-[400px] leading-[20px] overflow-hidden'>
                            </textarea>
                            {errors.description && <span className='mt-1 text-[0.9em] lowercase text-red-500'>{errors.description?.message}</span>}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className='flex xs:justify-cente pl-1 xs:pt-14 md:pt-16 w-full'>
                        <button type='submit' className='flex items-center gap-x-2 px-4 py-[8px] text-[0.84em] tracking-[0.5px] font-semibold uppercase hover:bg-blue-400'>
                            Create
                            <MdCreate className='text-base' />
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </>
    )
}

export default CreateAllCourses