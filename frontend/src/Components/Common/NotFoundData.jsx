import React from 'react'

const NotFoundData = ({ data }) => {
    return (
        <>
            <div className="grid place-items-center px-3 py-14 w-full min-h-[300px]">
                <div className="text-center">
                    <h1 className="pt-4 pb-3 xs:text-3xl md:text-3xl xl:text-4xl font-semibold tracking-tight text-balance bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                        {data} Not Found
                    </h1>
                    <p className="text-base font-medium text-pretty text-gray-400">
                        Sorry, we couldn’t find the {data} you’re looking for.
                    </p>
                </div>
            </div>
        </>
    )
}

export default NotFoundData