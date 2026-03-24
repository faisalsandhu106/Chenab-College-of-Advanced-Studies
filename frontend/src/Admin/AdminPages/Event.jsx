import React from 'react'
import AllEvents from '../.././Admin/AdminPages/AdminComponents/EventComp/AllEvent'
import SEO from '../../Components/Common/SEO'

const Event = () => {
  return (
    <>
      <SEO title="Events | Chenab College" desc="This is Events Page Chenab College Advanced Studies" />

      <AllEvents />
    </>
  )
}

export default Event