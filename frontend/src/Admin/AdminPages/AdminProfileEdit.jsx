import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { hendleError, hendleSuccess } from '../../Components/Utils';
import { useForm } from 'react-hook-form';
import { GrUpdate } from 'react-icons/gr';
import { MdDelete } from 'react-icons/md';
import { ImProfile } from "react-icons/im";
import SEO from '../../Components/Common/SEO';

const AdminProfileEdit = () => {
  const { id } = useParams();
  const API = "https://chenab-college-backend.vercel.app"
  const navgate = useNavigate();


  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({
    defaultValues: async () => {
      const res = await fetch(`${API}/admin/adminProfile/${id}`);
      const data = await res.json();
      return {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        isAdmin: data.isAdmin,
      }
    }
  });

  //* Update Data In React Hook Form
  const onSubmit = async (data) => {
    try {
      const res = await fetch(`${API}/admin/adminProfile/update/${id}`, {
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

  }, [API, id, reset, isSubmitSuccessful]);


  //! Delete Contact Form in Admin Panel
  //! -----------------------------
  const deletelAdmin = async (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete your account');
    if (!isConfirmed) {
      return;
    };

    const res = await fetch(`${API}/admin/adminProfile/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const Apidata = await res.json()
    // console.log(Apidata)

    localStorage.removeItem("Token")
    localStorage.removeItem("AdminId")

    if (res.ok) {
      hendleSuccess('Delete Admin Successfully')
      navgate('/login',
        setTimeout(() => {
          window.location.reload();
        }, 1500)
      )
    } else if (!res.ok) {
      hendleError('Delete Admin error')
    }
  };


  return (
    <>
    <SEO title="Edit Profile | Chenab College" desc="This is Edit Profile Chenab College Advanced Studies" />

      <div className='flex flex-col gap-y-6 w-full h-auto'>
        {/* Img & Title */}
        <div className='relative w-full xs:h-[160px] md:h-[250px] xl:h-[350px] rounded-[5px] overflow-hidden'>
          {/* Course Bg-Image */}
          {/* <img className='w-full h-auto' src={isCourseData.image} alt="course-img" /> */}
          {/* Layout Div */}
          <div className='absolute top-0 left-0 z-[2] w-full h-full bg-gradient-to-r from-[#884dc261] to-[#cba74371]'>
            <div className='absolute top-0 right-0 z-[3] flex items-end justify-end p-4 w-full h-full bg-[#00000064]'>
            </div>
          </div>
        </div>

        {/* Heading & Form */}
        <div className='grid xs:grid-cols-1 xs:px-2 md:pl-6 lg:pl-8 xl:pl-20 xs:py-3 md:py-5 lg:py-8 gap-y-8 w-full'>
          <div className='flex flex-col'>
            <div className='flex items-center gap-x-2 xs:text-[1.3em] md:text-[1.4em] font-semibold'>
              <h1>Edit Profile</h1>
              <ImProfile className='text-lg' />
            </div>
            <div className='title-underline w-[100px]'></div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className='light-dark-text grid xs:grid-cols-1 xs:gap-y-5 md:gap-y-6 xs:w-[100%] md:w-[50%] lg:w-[45%] xl:w-[40%] xs:text-[0.96em] md:text-[0.9em] xl:text-[0.94em]'>
            {/* first name */}
            <div className='flex flex-col gap-y-1'>
              <label htmlFor="firstName" className='contact-inputs-label'>First Name *</label>
              <input
                type="text"
                placeholder='First Name'
                id='firstName'
                {...register("firstName", {
                  required: 'first Name is required',
                })}
                className='admin-inputs text-[0.98em]' />
              {errors.firstName && <span className='text-[0.9em] lowercase text-red-500'>{errors.firstName?.message}</span>}
            </div>

            {/* last name */}
            <div className='flex flex-col gap-y-1'>
              <label htmlFor="lastName" className='contact-inputs-label'>last Name *</label>
              <input
                type="text"
                placeholder='Last Name'
                id='lastName'
                {...register("lastName", {
                  required: 'last Name is required',
                })}
                className='admin-inputs text-[0.98em]' />
              {errors.lastName && <span className='text-[0.9em] lowercase text-red-500'>{errors.lastName?.message}</span>}
            </div>

            {/* email */}
            <div className='flex flex-col gap-y-1'>
              <label htmlFor="email" className='contact-inputs-label'>Email Address *</label>
              <input
                type="email"
                placeholder='email address'
                id='email'
                {...register("email", {
                  required: 'email is required',
                })}
                className='admin-inputs lowercase text-[0.98em]' />
              {errors.email && <span className='text-[0.9em] lowercase text-red-500'>{errors.email?.message}</span>}
            </div>

            {/* admin profile pic */}
            <div className='flex flex-col items-start gap-y-1'>
              <label htmlFor="profilePic" className='contact-inputs-label'>Profile Img *</label>
              <input
                type="file"
                placeholder='profile picture'
                id='profilePic'
                {...register("profilePic")}
                className='admin-inputs text-[0.9em] cursor-pointer' />
              {/* {errors.profilePic && <span className='text-[0.9em] lowercase text-red-500'>{errors.profilePic?.message}</span>} */}
            </div>

            {/* Submit & Delete Button */}
            <div className='flex justify-center pt-6 gap-x-5 w-full'>
              <button type='submit' className='flex items-center gap-x-2 px-[9px] py-[8px] text-[0.8em] tracking-[0.3px] font-bold uppercase hover:bg-blue-400'>
                Update
                <GrUpdate />
              </button>
              <button type="button" className='flex items-center gap-x-1 px-[9px] py-[8px] text-[0.8em] tracking-[0.3px] font-bold bg-red-500 text-white rounded-md uppercase hover:bg-red-400' onClick={() => deletelAdmin(id)}>
                Delete
                <MdDelete className='text-[15px]' />
              </button>
            </div>
          </form>

        </div>
      </div>

      <ToastContainer />
    </>
  )
}

export default AdminProfileEdit