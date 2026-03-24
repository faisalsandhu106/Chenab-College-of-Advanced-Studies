import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const AdminContactSkeleton = ({ cards }) => {
    return Array(cards).fill(0).map((_, index) => (
        <div key={index} className='grid xs:grid-cols-1 w-full '>
                <Skeleton className='w-16 h-16 rounded-full' />
        </div>
    ))
}

export default AdminContactSkeleton