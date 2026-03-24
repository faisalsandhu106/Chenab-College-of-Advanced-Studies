import React from 'react'
import SideBar from '../SideBar'
import { Outlet } from 'react-router-dom'

const AdminPanel = () => {
    return (
        <>
            <div className='adminbackgroundColor absolute top-0 left-0 z-[23] flex xs:px-4 xs:pt-20 lg:pt-24 xl:pt-8 pb-20 xl:pl-20 w-full min-h-[160vh]'>
                <SideBar />
                <div className='w-full min-h-screen'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default AdminPanel