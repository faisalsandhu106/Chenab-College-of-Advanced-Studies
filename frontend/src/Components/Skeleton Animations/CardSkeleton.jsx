import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CardSkeleton = ({ cards }) => {
    return Array(cards).fill(0).map((_, index) => (
        <div key={index} className='w-full h-[250px] rounded-md'>
            <Skeleton className='w-full h-[120px] rounded-md' />
            <div className='mt-2 w-[80%]'>
                <Skeleton count={4} />
            </div>
        </div>
    ))

}



export default CardSkeleton