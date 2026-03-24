import React from 'react'

const EventImage = ({ imageUrl = [{url: [0] }] }) => {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-full'>
                {
                    imageUrl.map((item, index) => {
                        return (
                            <img key={index} className='w-full h-auto bg-cover' src={item.url} alt="event-img" />
                        )
                    })
                }
            </div>
        </>
    )
}

export default EventImage


//TODO Empty Component