import React from 'react'
import AllEvents from '../Components/EventComp/AllEvents'
import VisionMisssion from '../Components/AboutComp/VisionMisssion'
import SEO from '../Components/Common/SEO'

const Events = () => {
    return (
        <>
            <SEO title="Our Event | Chenab College" desc="This is Event Page Chenab College Advanced Studies" />

            <div className='pt-16 pb-20 w-full h-auto overflow-hidden'>
                {/* All Event Section */}
                <AllEvents />

                {/* Vision % Mission */}
                <div className='xs:pt-16 md:pt-20 xl:pt-28 xs:px-4'>
                    <VisionMisssion />
                </div>
            </div>
        </>
    )
}

export default Events