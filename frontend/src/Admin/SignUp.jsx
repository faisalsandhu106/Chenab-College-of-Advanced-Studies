import React from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from "@hookform/devtools";
import { hendleError, hendleSuccess } from '../Components/Utils';
import { VscAccount } from "react-icons/vsc";
import { ToastContainer } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';
import SEO from '../Components/Common/SEO';
import ChenabLogo from '../Components/Common/ChenabLogo';

const SignUp = () => {
  const currentYear = new Date().getFullYear()

  const Navigate = useNavigate();

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  });

  const { errors } = formState;

  const onSubmit = async (data) => {
    try {
      const res = await fetch(`https://chenab-college-backend.vercel.app/auth/signUp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const Apidata = await res.json();
      // console.log('Sign up response -->', Apidata)

      const { success, message, jwtToken, _id } = Apidata;

      if (success) {
        hendleSuccess(message)
        localStorage.setItem('Token', jwtToken)
        localStorage.setItem('AdminId', _id)

        setTimeout(() => {
          Navigate('/admin/dashboard')
        }, 2000)

      } else if (!success) {
        hendleError(message)
      } else if (res.status(500)) {
        hendleError('Internal server error')
      }
      
    } catch (error) {
      console.log('Error during sign up:', error);
    }
  };

  return (
    <>
    <SEO title="SignUp | Chenab College" desc="This is SignUp Students Chenab College Advanced Studies" />

      <div className='light-dark-text flex items-center justify-center py-20 xl:py-28 xs:px-4 w-full min-h-screen'>
        <div className='grid xs:grid-cols-1 xl:grid-cols-2 gap-y-12 w-full'>
          <div className='flex flex-col items-center justify-cente xl:px-5 w-full text-center'>
            <div className='xs:text-[1.5em] md:text-[1.6em] xl:text-[1.7em] uppercase font-extrabold'>
              Chenab College of Advanced Studies
            </div>
            <p className='mt-2 text-[1em] font-medium'>
              -----Sign-Up For Admin Dashboard-----
            </p>
            <figure className='chenab-logo-animation mt-5 xs:w-[90px] md:w-[80px] xl:w-[100px]'>
              <ChenabLogo />
            </figure>
          </div>
          <div className='flex items-center xs:justify-center xl:justify-start w-full'>
            <form onSubmit={handleSubmit(onSubmit)} className='body courseComp card-component-border flex flex-col xs:px-3 md:px-6 pt-8 pb-4 xs:w-full md:w-[400px] lg:w-[450px] xl:w-[500px] h-auto rounded-md'>
              <div className='flex items-center justify-center pb-12 w-full h-auto '>
                <h1 className='flex items-center gap-x-2 text-[1.6em] font-bold'>
                  Sign-Up
                  <VscAccount />
                </h1>
              </div>
              <div className='flex flex-col gap-y-5 w-full h-auto'>
                {/* first & last name */}
                <div className='grid xs:grid-cols-1 md:grid-cols-2 gap-5 w-full'>
                  <div className='flex flex-col gap-y-1'>
                    <label htmlFor="firstName" className='contact-inputs-label'>first name *</label>
                    <input
                      type="text"
                      placeholder='First Name'
                      id='firstName'
                      {...register("firstName", {
                        required: 'first name is required'
                      })}
                      className='contact-inputs' />
                    {errors.firstName && <span className='text-[0.95em] text-red-500'>{errors.firstName?.message}</span>}
                  </div>
                  <div className='flex flex-col gap-y-1'>
                    <label htmlFor="lastName" className='contact-inputs-label'>last name *</label>
                    <input
                      type="text"
                      placeholder='Last Name'
                      id='lastName'
                      {...register("lastName", {
                        required: 'last name is required'
                      })}
                      className='contact-inputs' />
                    {errors.lastName && <span className='text-[0.95em] text-red-500'>{errors.lastName?.message}</span>}
                  </div>
                </div>

                {/* email */}
                <div className='flex flex-col gap-y-1'>
                  <label htmlFor="email" className='contact-inputs-label'>email *</label>
                  <input
                    type="email"
                    placeholder='email'
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
                    className='contact-inputs lowercase' />
                  {errors.email && <span className='text-[0.95em] text-red-500'>{errors.email?.message}</span>}
                </div>

                {/* password */}
                <div className='flex flex-col gap-y-1'>
                  <label htmlFor="password" className='contact-inputs-label'>Password *</label>
                  <input
                    type="number"
                    placeholder='password'
                    id='password'
                    {...register("password", {
                      required: 'password is required'
                    })}
                    className='contact-inputs' />
                  {errors.password && <span className='text-[0.95em] text-red-500'>{errors.password?.message}</span>}
                </div>

                {/* have an account */}
                {/* <div className='flex items-center justify-center gap-x-2 text-[0.96em]'>
                  <p>
                    Already have an account ?
                  </p>
                  <NavLink to={'/login'} className={'underline text-blue-500 hover:text-blue-800 text-[0.96em]'}>
                    Login
                  </NavLink>
                </div> */}
              </div>
              <button type='submit' className='mt-9 py-[9px] text-[0.98em] tracking-[0.5px] font-medium'>
                Sign Up
              </button>
              <p className='flex items-center justify-center mt-8 w-full text-[0.8em] font-medium'>
                &copy; {currentYear} All Rights Reserved
              </p>
            </form>
            {/* <DevTool control={control} placement='top-left' /> */}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default SignUp