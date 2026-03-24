import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from "@hookform/devtools";
import { ToastContainer } from 'react-toastify';
import { MdCreate, MdCreateNewFolder } from 'react-icons/md';
import { hendleError, hendleSuccess } from '../../../../Components/Utils';
import { IoSend } from 'react-icons/io5';

const CreateCompuCourse = () => {
    const API = "https://chenab-college-backend.vercel.app/admin";

    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({
        defaultValues: {
            CourseName: "",
            courseDetail: "",
            imageUrl: "",
            videoUrl: "",
            future: "",
        }
    });

    const onSubmit = async (data) => {
        try {
            const res = await fetch(`${API}/ComputerCourse/createComputerCourse`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const APIdata = await res.json();
            console.log(APIdata)

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


    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    return (
        <>
            <div className='grid xs:grid-cols-1 xs:px-2 md:px-14 lg:px-20 xl:px-32 xs:py-5 md:py-10 gap-y-10 w-full rounded-md'>
                {/* Heading */}
                <div className='flex flex-col'>
                    <h1 className='flex items-center gap-x-2 xs:text-[1.3em] md:text-[1.4em] font-semibold'>
                        Create Blog
                        <MdCreateNewFolder />
                    </h1>
                    <div className='title-underline w-[90px]'></div>
                </div>

                {/* Create Blogs Form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid xs:grid-cols-1 md:grid-cols-2 gap-x-6 xs:gap-y-6 md:gap-y-8 lg:gap-y-10 w-full'>
                        {/* CourseName */}
                        <div className='flex flex-col gap-y-1'>
                            <label htmlFor="CourseName" className='contact-inputs-label'>Course Name *</label>
                            <input
                                type="text"
                                placeholder='course name'
                                id='CourseName'
                                {...register("CourseName", {
                                    required: 'course name is required',
                                })}
                                className='admin-inputs' />
                            {errors.CourseName && <span className='text-[0.9em] lowercase text-red-500'>{errors.CourseName?.message}</span>}
                        </div>

                        {/* image Url */}
                        <div className='flex flex-col gap-y-1'>
                            <label htmlFor="imageUrl" className='contact-inputs-label'>Image Url *</label>
                            <input
                                type="text"
                                placeholder='Url'
                                id='imageUrl'
                                {...register("imageUrl", {
                                    required: 'Url is required',
                                })}
                                className='admin-inputs' />
                            {errors.imageUrl && <span className='text-[0.9em] lowercase text-red-500'>{errors.imageUrl?.message}</span>}
                        </div>

                        {/* video Url */}
                        <div className='flex flex-col gap-y-1'>
                            <label htmlFor="videoUrl" className='contact-inputs-label'>video URL *</label>
                            <input
                                type="text"
                                placeholder='URL'
                                id='videoUrl'
                                {...register("videoUrl", {
                                    required: 'URL is required',
                                })}
                                className='admin-inputs' />
                            {errors.videoUrl && <span className='text-[0.9em] lowercase text-red-500'>{errors.videoUrl?.message}</span>}
                        </div>

                        {/* Featured Value */}
                        <div className='flex flex-col justify-center md:pl-14 xl:pl-20 xs:my-5 md:my-0 gap-y-2'>
                            <h1 className='contact-inputs-label'>
                                Featured *
                            </h1>
                            <div className='flex items-center gap-x-[35px]'>
                                <label htmlFor="True" className='flex gap-x-[6px] xs:text-[0.95em] cursor-pointer'>
                                    True
                                    <input
                                        type="radio"
                                        value="true"
                                        id='True'
                                        {...register("future", { required: true })} />
                                </label>
                                <label htmlFor="False" className='flex gap-x-[6px] xs:text-[0.95em] cursor-pointer'>
                                    False
                                    <input
                                        type="radio"
                                        value="false"
                                        id='False'
                                        {...register("future")} />
                                </label>
                            </div>
                            {errors.future && <span className='text-[0.9em] lowercase text-red-500'>Future Value is required</span>}
                        </div>

                        {/* courseDetail */}
                        <div className='grid xs:grid-cols-1 md:grid-cols-1 md:col-span-2 gap-y-1 w-full'>
                            <label htmlFor="courseDetail" className='contact-inputs-label'>Course Detail *</label>
                            <textarea
                                type="text"
                                placeholder='write course details...'
                                id='courseDetail'
                                {...register("courseDetail", {
                                    required: 'course detail is required'
                                })}
                                className='admin-inputs w-full xs:min-h-[190px] md:min-h-[150px] xl:min-h-[180px] max-h-[400px] leading-[20px] overflow-hidden'>
                            </textarea>
                            {errors.courseDetail && <span className='mt-1 text-[0.9em] lowercase text-red-500'>{errors.courseDetail?.message}</span>}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className='flex xs:justify-center xs:pt-14 md:pt-14 lg:pt-16 w-full'>
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

export default CreateCompuCourse