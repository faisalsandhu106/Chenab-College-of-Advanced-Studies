import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from "@hookform/devtools";
import { ToastContainer } from 'react-toastify';
import { hendleError, hendleSuccess } from '../Utils';
import { PiStudentFill } from 'react-icons/pi';
import { FaStar } from 'react-icons/fa';
import { BsFillSendPlusFill } from 'react-icons/bs';

const ReviewStudentForm = () => {
    const studentFormAPI = "https://chenab-college-backend.vercel.app/contact";
    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            UniName: '',
            gender: '',
            rollNo: '',
            semester: '',
            rating: '',
            department: '',
            review: ''
        }
    });

    //* Post Review In React Hook Form
    const onSubmit = async (data) => {
        try {
            const res = await fetch(`${studentFormAPI}/reviewform`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const APIdata = await res.json();
            // console.log(APIdata)

            if (res.ok) {
                hendleSuccess('Form Send Successfully')
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

    //* Reset Form After Submit
    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset])

    return (
        <>
            <div className='flex flex-col xs:pt-28 md:pt-32 xl:pt-40 md:px-4 lg:px-4 xl:px-10 md:pr-60 lg:pr-0 gap-y-6 w-full h-auto'>
                <div className='w-full'>
                    <h1 className='pb-3 xs:text-[1.5em] md:text-[1.4em] font-medium'>
                        Students Review Form
                        <div className='w-[70px] h-[3px] bg-amber-300'></div>
                    </h1>
                    <p className='flex items-center gap-x-2 xs:text-[0.9em]'>
                        Only For Our Students
                        <PiStudentFill className='animate-pulse' />
                    </p>
                </div>
                <div className='grid xs:grid-cols-1 lg:grid-cols-2 lg:gap-12 xl:gap-24 w-full'>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col py-5 gap-y-6 w-full h-full'>
                        {/* First Name & Last Name */}
                        <div className='grid xs:grid-cols-1 md:grid-cols-2 md:col-span-2 gap-x-5 gap-y-6 w-full'>
                            <div className='flex flex-col gap-y-1'>
                                <label htmlFor="firstName" className='contact-inputs-label'>first name *</label>
                                <input
                                    type="text"
                                    placeholder='Enter your First Name'
                                    id='firstName'
                                    {...register("firstName", {
                                        required: 'first name is required'
                                    })}
                                    className='contact-inputs' />
                                {errors.firstName && <span className='text-[0.9em] lowercase text-red-500'>{errors.firstName?.message}</span>}
                            </div>
                            <div className='flex flex-col gap-y-1'>
                                <label htmlFor="lastName" className='contact-inputs-label'>last name *</label>
                                <input
                                    type="text"
                                    placeholder='Enter your Last Name'
                                    id='lastName'
                                    {...register("lastName", {
                                        required: 'last name is required'
                                    })}
                                    className='contact-inputs' />
                                {errors.lastName && <span className='text-[0.9em] lowercase text-red-500'>{errors.lastName?.message}</span>}
                            </div>
                        </div>

                        {/* Email */}
                        <div className='flex flex-col gap-y-1'>
                            <label htmlFor="email" className='contact-inputs-label'>email *</label>
                            <input
                                type="email"
                                placeholder='enter your email'
                                id='email'
                                {...register("email", {
                                    required: 'email is required',
                                    pattern: {
                                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                        message: 'invalid email address'
                                    }
                                })}
                                className='contact-inputs' />
                            {errors.email && <span className='text-[0.9em] lowercase text-red-500'>{errors.email?.message}</span>}
                        </div>

                        {/* Roll Number & Semester Number*/}
                        <div className='grid xs:grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5'>
                            <div className='flex flex-col gap-y-1'>
                                <label htmlFor="rollNo" className='contact-inputs-label'>Roll Number *</label>
                                <input
                                    type="text"
                                    placeholder='Roll Number'
                                    id='rollNo'
                                    {...register("rollNo", { required: 'roll number is required' })}
                                    className='contact-inputs' />
                                {errors.rollNo && <span className='text-[0.9em] lowercase text-red-500'>{errors.rollNo?.message}</span>}
                            </div>

                            <div className='flex flex-col gap-y-1'>
                                <label htmlFor="semester" className='contact-inputs-label'>Semester *</label>
                                <input
                                    type="number"
                                    placeholder='semester'
                                    id='semester'
                                    {...register("semester", {
                                        required: 'semester is required',
                                        min: { value: 1, message: 'semester must be at least 1' },
                                        max: { value: 8, message: 'semester must be at most 8' }
                                    })}
                                    className='contact-inputs' />
                                {errors.semester && <span className='text-[0.9em] lowercase text-red-500'>{errors.semester?.message}</span>}
                            </div>
                        </div>

                        {/* Department Name*/}
                        <div className='flex flex-col gap-y-1'>
                            <label htmlFor="department" className='contact-inputs-label'>Department *</label>
                            <input
                                type="text"
                                placeholder='Enter your department'
                                id='department'
                                {...register("department", {
                                    required: 'department is required',
                                })}
                                className='contact-inputs' />
                            {errors.department && <span className='text-[0.9em] lowercase text-red-500'>{errors.department?.message}</span>}
                        </div>

                        {/*University Name Gender*/}
                        <div className='grid xs:grid-cols-2 py-5 gap-x-5 gap-y-7'>
                            <div className='flex flex-col gap-y-2'>
                                <h1 className='contact-inputs-label'>
                                    University Name *
                                </h1>
                                <div className='flex items-center gap-x-[25px]'>
                                    <label htmlFor="Gomal" className='flex gap-x-[5px] text-[0.94em] cursor-pointer'>
                                        Gomal
                                        <input
                                            type="radio"
                                            value="gomal"
                                            id='Gomal'
                                            className='cursor-pointer'
                                            {...register("UniName", { required: true })} />
                                    </label>
                                    <label htmlFor="GC" className='flex gap-x-[5px] text-[0.94em] cursor-pointer'>
                                        GC
                                        <input
                                            type="radio"
                                            value="gc"
                                            id='GC'
                                            className='cursor-pointer'
                                            {...register("UniName")} />
                                    </label>
                                </div>
                                {errors.UniName && <span className='text-[0.9em] lowercase text-red-500'>Uni Name is required</span>}
                            </div>

                            <div className='flex flex-col gap-y-2'>
                                <h1 className='contact-inputs-label'>
                                    Gender *
                                </h1>
                                <div className='flex items-center gap-x-[20px]'>
                                    <label htmlFor="Male" className='flex gap-x-[5px] text-[0.94em] cursor-pointer'>
                                        Male
                                        <input
                                            type="radio"
                                            value="male"
                                            id='Male'
                                            {...register("gender", { required: true })} />
                                    </label>
                                    <label htmlFor="Female" className='flex gap-x-[5px] text-[0.94em] cursor-pointer'>
                                        Female
                                        <input
                                            type="radio"
                                            value="female"
                                            id='Female'
                                            {...register("gender")}
                                            className='cursor-pointer' />
                                    </label>
                                </div>
                                {errors.UniName && <span className='text-[0.9em] lowercase text-red-500'>gender is required</span>}
                            </div>
                        </div>

                        {/* Review */}
                        <div className='grid xs:grid-cols-1 md:grid-cols-1 md:col-span-2 gap-y-1 w-full'>
                            <label htmlFor="review" className='contact-inputs-label'>Review *</label>
                            <textarea
                                type="text"
                                placeholder='write your review'
                                id='review'
                                {...register("review", {
                                    required: 'review is required'
                                })}
                                className='contact-inputs w-full xs:min-h-[190px] md:min-h-[150px] xl:min-h-[180px] max-h-[400px] leading-[20px] overflow-hidden'>
                            </textarea>
                            {errors.review && <span className='mt-1 text-[0.9em] lowercase text-red-500'>{errors.review?.message}</span>}
                        </div>

                        {/* Rating */}
                        <div className='flex flex-col py-4 w-full'>
                            <label htmlFor="department" className='contact-inputs-label'>rating *</label>
                            <div className='flex flex-col justify-start mt-3 gap-y-4 w-full'>
                                <div className='flex items-center gap-x-2'>
                                    <input
                                        type="radio"
                                        id='rating5'
                                        value='5'
                                        {...register("rating", {
                                            required: 'rating is required',
                                        })}
                                        className='cursor-pointer text-[2em]' />
                                    <label htmlFor="rating5" className='flex gap-x-1 contact-inputs-label cursor-pointer'>
                                        <FaStar className='text-lg text-yellow-500' />
                                        <FaStar className='text-lg text-yellow-500' />
                                        <FaStar className='text-lg text-yellow-500' />
                                        <FaStar className='text-lg text-yellow-500' />
                                        <FaStar className='text-lg text-yellow-500' />
                                    </label>
                                </div>
                                <div className='flex items-center gap-x-2'>
                                    <input
                                        type="radio"
                                        id='rating4'
                                        value='4'
                                        {...register("rating", {
                                            required: 'rating is required',
                                        })}
                                        className='cursor-pointer' />
                                    <label htmlFor="rating4" className='flex gap-x-1 contact-inputs-label cursor-pointer'>
                                        <FaStar className='text-lg text-yellow-500' />
                                        <FaStar className='text-lg text-yellow-500' />
                                        <FaStar className='text-lg text-yellow-500' />
                                        <FaStar className='text-lg text-yellow-500' />
                                    </label>
                                </div>
                                <div className='flex items-center gap-x-2'>
                                    <input
                                        type="radio"
                                        id='rating3'
                                        value='3'
                                        {...register("rating", {
                                            required: 'rating is required',
                                        })}
                                        className='cursor-pointer' />
                                    <label htmlFor="rating3" className='flex gap-x-1 contact-inputs-label cursor-pointer'>
                                        <FaStar className='text-lg text-yellow-500' />
                                        <FaStar className='text-lg text-yellow-500' />
                                        <FaStar className='text-lg text-yellow-500' />
                                    </label>
                                </div>
                                <div className='flex items-center gap-x-2'>
                                    <input
                                        type="radio"
                                        id='rating2'
                                        value='2'
                                        {...register("rating", {
                                            required: 'rating is required',
                                        })}
                                        className='cursor-pointer' />
                                    <label htmlFor="rating2" className='flex gap-x-1 contact-inputs-label cursor-pointer'>
                                        <FaStar className='text-lg text-yellow-500' />
                                        <FaStar className='text-lg text-yellow-500' />
                                    </label>
                                </div>
                                <div className='flex items-center gap-x-2'>
                                    <input
                                        type="radio"
                                        id='rating1'
                                        value='1'
                                        {...register("rating", {
                                            required: 'rating is required',
                                        })}
                                        className='cursor-pointer' />
                                    <label htmlFor="rating1" className='flex gap-x-1 contact-inputs-label cursor-pointer'>
                                        <FaStar className='text-lg text-yellow-500' />
                                    </label>
                                </div>
                            </div>
                            {errors.rating && <span className='mt-2 text-[0.9em] lowercase text-red-500'>{errors.rating?.message}</span>}
                        </div>

                        {/* Submit Button */}
                        <div className='flex xs:justify-center xs:pt-6 md:pt-7 w-full'>
                            <button type='submit' className='flex items-center gap-x-2 px-[20px] py-[8px] text-[0.94em] font-medium'>
                                Submit
                                <BsFillSendPlusFill />
                            </button>
                        </div>
                    </form>
                    <div className='relative mt-10 w-full lg:h-[600px] xl:h-[635px] rounded-md overflow-hidden xs:hidden lg:inline-block'>
                        <img className='w-full h-auto bg-cover rounded-md' src="https://images.unsplash.com/photo-1681453980860-abf1551b1bfe?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D" alt="form-img" />
                        <div className='absolute top-0 left-0 z-[2] flex items-center justify-center gap-y-3 w-full h-full bg-[#00000054] bg-gradient-to-r from-[#b8aec34a] to-[#be9f5134]'>
                        </div>
                    </div>
                </div >
                {/* <DevTool control={control} placement='top-right' /> */}
            </div>
            <ToastContainer />
        </>
    )
}

export default ReviewStudentForm