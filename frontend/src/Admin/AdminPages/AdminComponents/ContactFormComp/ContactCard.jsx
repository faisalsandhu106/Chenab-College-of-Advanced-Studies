import React from 'react'
import { motion } from 'motion/react'
import { ToastContainer } from 'react-toastify';
import { SlActionRedo } from 'react-icons/sl'
import { NavLink } from 'react-router-dom'
import { MdDelete, MdOutlineDriveFileRenameOutline } from 'react-icons/md'
import { HiOutlineMail } from "react-icons/hi";
import { CgMoreVertical } from 'react-icons/cg'
import { FaPhoneAlt, FaUser } from 'react-icons/fa'
import AdminContactSkeleton from '../../../../Components/Skeleton Animations/AdminContactSkeleton';
import NotFoundData from '../../../../Components/Common/NotFoundData';
import { LuPhone } from 'react-icons/lu';
import { LiaCitySolid } from "react-icons/lia";


//* Animation Variants
const DownToUpAnimation = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            // Stagger children by 0.1s, starting after a 0.2s delay
            delayChildren: 0.1,
            staggerChildren: 0.1,
        },
    },
};

const ContactCard = ({ isContactFormLoading, AllContactForm, filterData, deleteContactForm }) => {
    //* Loading Animation
    if (isContactFormLoading || AllContactForm.length === 0) {
        return (
            <div className='grid xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 justify-items-center md:px-6 lg:px-4 xl:px-10 2xl:px-14 gap-y-4'>
                <AdminContactSkeleton cards={12} />
            </div>
        )
    };

    return (
        <>
            {
                filterData.length === 0 ? (
                    <NotFoundData data="Contact" />
                )
                    :
                    <>
                        <motion.div
                            initial={"hidden"}
                            animate={"show"}
                            variants={DownToUpAnimation}
                            viewport={{ once: true }}
                            className='grid xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 justify-items-center xs:mt-6 md:mt-8 px-1 md:px-2 lg:px-4 xl:px-10 2xl:px-14 md:gap-x-5 lg:gap-x-6 2xl:gap-x-8 xs:gap-y-10 md:gap-y-9'>
                            {
                                filterData.map((curElem, index) => {
                                    const { _id, firstName, cityName, email, created_at } = curElem
                                    return (
                                        <motion.div variants={DownToUpAnimation} key={index} className='flex items-center w-full h-auto'>
                                            <div className='Admin-Card-box card-component-borde grid xs:grid-cols-1 md:grid-cols-4 lg:md:grid-cols-4 xs:px-3 md:px-3 lg:px-5 py-5 gap-y-6 w-full rounded-xl overflow-hidden'>
                                                <div className='flex items-center gap-x-3 w-full h-auto'>
                                                    <div className='flex items-center justify-center xs:w-[50px] xs:h-[50px] md:w-[40px] md:h-[40px] lg:w-[45px] lg:h-[45px] rounded-full bg-[#167CE9] text-amber-50 overflow-hidden'>
                                                        <FaUser className='xs:text-xl md:text-lg' />
                                                    </div>
                                                    <div className='flex flex-col gap-y-1'>
                                                        <h1 className='flex items-center gap-x-1 xs:text-[1em] md:text-[0.84em] lg:text-[0.86em] xl:text-[0.92em] font-medium md:hidde'>
                                                            User Name <MdOutlineDriveFileRenameOutline />
                                                        </h1>
                                                        <div className='xs:text-[1.02em] md:text-[0.84em] lg:text-[0.9em] xl:text-[0.92em]'>
                                                            {firstName}
                                                            {/* {created_at.length > 10 ? created_at.slice(0, 10) : created_at} */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col md:items-center lg:items-start justify-center w-full md:text-center'>
                                                    <div className='flex flex-col items-start gap-y-1'>
                                                        <h1 className='flex items-center gap-x-1 xs:text-[1em] md:text-[0.84em] lg:text-[0.86em] xl:text-[0.92em] font-medium md:hidde'>
                                                            Email Address <HiOutlineMail />
                                                        </h1>
                                                        <div className='xs:text-[1.02em] md:text-[0.84em] lg:text-[0.9em] xl:text-[0.92em]'>
                                                            {email}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col md:items-center justify-center w-full md:text-center'>
                                                    <div className='flex flex-col items-start gap-y-1'>
                                                        <h1 className='flex items-center gap-x-1 xs:text-[1em] md:text-[0.84em] lg:text-[0.86em] xl:text-[0.92em] font-medium md:hidde'>
                                                            City Name <LiaCitySolid  />
                                                        </h1>
                                                        <div className='xs:text-[1.02em] md:text-[0.84em] lg:text-[0.9em] xl:text-[0.92em]'>
                                                            {cityName}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex items-center md:justify-end px-1 xs:pt-1 md:pt-0 gap-x-3'>
                                                    <div className='flex flex-col gap-y-2 min-w-[100px]'>
                                                        <h1 className='flex items-center gap-x-2 xs:text-[1em] md:text-[0.84em] lg:text-[0.86em] xl:text-[0.92em] font-medium md:hidde'>
                                                            Action <SlActionRedo />
                                                        </h1>
                                                        <div className='flex items-center px-1 gap-x-3'>
                                                            <NavLink to={`/admin/contactform/${_id}`}>
                                                                <button className='flex items-center gap-x-[2px] px-2 py-[6px] xs:text-[0.76em] md:text-[0.64em] xl:text-[0.7em] rounded-[3px] tracking-[0.2px] font-medium text-nowrap hover:bg-blue-400'>
                                                                    Read More <CgMoreVertical />
                                                                </button>
                                                            </NavLink>
                                                            <button onClick={() => deleteContactForm(_id)} className='flex items-center gap-x-1 py-[6px] xs:text-[0.76em] md:text-[0.64em] xl:text-[0.7em] rounded-[3px] tracking-[0.2px] font-medium bg-red-500 hover:bg-red-400'>
                                                                Delete <MdDelete className='text-[15px]' />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )
                                })
                            }
                        </motion.div>

                        <ToastContainer />
                    </>
            }
        </>
    )
}

export default ContactCard