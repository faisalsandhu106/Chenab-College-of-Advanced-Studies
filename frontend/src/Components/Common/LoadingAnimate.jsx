import React from 'react'

const LoadingAnimate = () => {
    return (
        <>
            <div id='loading-animation-container' className='flex items-center justify-center gap-x-2 w-full min-h-[400px]'>
                <div id='loading-animation' className='w-[5px] h-8 bg-blue-700'></div>
                <div id='loading-animation' className='w-[5px] h-8 bg-blue-700'></div>
                <div id='loading-animation' className='w-[5px] h-8 bg-blue-700'></div>
                <div id='loading-animation' className='w-[5px] h-8 bg-blue-700'></div>
                <div id='loading-animation' className='w-[5px] h-8 bg-blue-700'></div>
            </div>
        </>
    )
}

export default LoadingAnimate