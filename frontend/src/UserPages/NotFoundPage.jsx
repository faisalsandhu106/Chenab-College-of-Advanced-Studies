import React from 'react'
import { NavLink } from 'react-router-dom'
import SEO from '../Components/Common/SEO'

const NotFoundPage = () => {
  return (
    <>
      <SEO title="Not Found Page | Chenab College" desc="Not Found page Chenab College Advanced Studies" />

      <div className="grid place-items-center bg-gray-900 px-6 py-24 sm:py-32 lg:px-8 w-full min-h-[100vh]">
        <div className="text-center">
          <p className="text-xl font-semibold text-blue-200">404</p>
          <h1 className="pt-4 pb-3 text-5xl font-semibold tracking-tight text-balance sm:text-6xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            Page not found
          </h1>
          <p className="mt-3 text-lg font-medium text-pretty text-gray-400 sm:text-xl">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <NavLink to={"/home"} className="rounded-md bg-[#167CE9] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus:outline-none">
              Go back home
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage