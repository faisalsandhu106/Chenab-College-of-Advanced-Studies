import React from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from "@hookform/devtools";
import { hendleError, hendleSuccess } from '../Components/Utils';
import { IoMdLogIn } from "react-icons/io";
import { ToastContainer } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';
import SEO from '../Components/Common/SEO';
import ChenabLogo from '../Components/Common/ChenabLogo';

const Login = () => {
    const currentYear = new Date().getFullYear()

    const Navigate = useNavigate();

    const { register, handleSubmit, formState } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const { errors } = formState;

    const onSubmit = async (data) => {
        try {
            const res = await fetch(`https://chenab-college-backend.vercel.app/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const Apidata = await res.json();
            // console.log('Sign up response -->', data)

            const { success, message, jwtToken, _id } = Apidata;
            if (success) {
                hendleSuccess(message)
                localStorage.setItem('Token', jwtToken)
                localStorage.setItem('AdminId', _id)

                setTimeout(() => {
                    Navigate('/admin/dashboard')
                }, 1000)

            } else if (!success) {
                hendleError(message)
            }

        } catch (error) {
            console.log('Error during sign up:', error);
        }
    };

    return (
        <>
        <SEO title="Login | Chenab College" desc="This is Login Students Chenab College Advanced Studies" />

            <div className='light-dark-text flex items-center justify-center py-20 xl:py-28 xs:px-4 w-full min-h-screen'>
                <div className='grid xs:grid-cols-1 xl:grid-cols-2 gap-y-12 w-full'>
                    <div className='flex flex-col items-center justify-cente xl:px-5 w-full text-center'>
                        <div className='xs:text-[1.5em] md:text-[1.6em] xl:text-[1.7em] uppercase font-extrabold'>
                            Chenab College of Advanced Studies
                        </div>
                        <p className='mt-2 text-[1em] font-medium'>
                            -----Login For Admin Dashboard-----
                        </p>
                        <figure className='chenab-logo-animation mt-5 xs:w-[90px] md:w-[80px] xl:w-[100px]'>
                            <ChenabLogo />
                        </figure>
                    </div>
                    <div className='flex items-center xs:justify-center xl:justify-start xl:pl-14 w-full'>
                        <form onSubmit={handleSubmit(onSubmit)} className='body courseComp card-component-border flex flex-col xs:px-4 md:px-6 pt-8 pb-4 xs:w-full md:w-[350px] lg:w-[400px] xl:w-[400px] h-auto rounded-md'>
                            <div className='flex items-center justify-center pb-12 w-full h-auto '>
                                <h1 className='flex items-center gap-x-1 text-[1.6em] font-bold'>
                                    Login <IoMdLogIn />
                                </h1>
                            </div>
                            <div className='flex flex-col gap-y-5 w-full h-auto'>
                                {/* email */}
                                <div className='flex flex-col gap-y-1'>
                                    <label htmlFor="email" className='contact-inputs-label'>email address *</label>
                                    <input
                                        type="email"
                                        placeholder='enter your email address'
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
                                    {errors.email && <span className='text-[0.95em] text-red-500'>{errors.email?.message}</span>}
                                </div>

                                {/* password */}
                                <div className='flex flex-col gap-y-1'>
                                    <label htmlFor="password" className='contact-inputs-label'>Password *</label>
                                    <input
                                        type="text"
                                        placeholder='enter your password'
                                        id='password'
                                        {...register("password", {
                                            required: 'password is required',
                                        })}
                                        className='contact-inputs' />
                                    {errors.password && <span className='text-[0.95em] text-red-500'>{errors.password?.message}</span>}
                                </div>

                                {/* Don`t have an account */}
                                {/* <div className='flex items-center justify-center gap-x-2 text-[0.96em]'>
                                    <p>
                                        Don't have an account ?
                                    </p>
                                    <NavLink to={'/signup'} className='underline text-blue-500 hover:text-blue-800 text-[0.96em]'>
                                        Sign Up
                                    </NavLink>
                                </div> */}
                            </div>
                            <button type='submit' className='mt-9 py-[9px] text-[0.98em] tracking-[0.5px] font-medium'>
                                Login
                            </button>
                            <p className='flex items-center justify-center mt-8 w-full text-[0.8em] font-medium'>
                                &copy; {currentYear} All Rights Reserved
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Login