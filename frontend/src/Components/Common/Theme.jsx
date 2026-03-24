import React, { useContext, useEffect } from 'react'
import { CiLight } from 'react-icons/ci'
import { ThemeContext } from '../ContextAPI/ThemeProvider'
import { IoMoonOutline } from 'react-icons/io5'

const Theme = () => {
    const { storedValue, setStoredValue } = useContext(ThemeContext)

    useEffect(() => {

        if (storedValue === "dark") {
            document.documentElement.setAttribute("data-theme", storedValue)
        } else {
            document.documentElement.setAttribute("data-theme", storedValue)
        }

    }, [storedValue])
    return (
        <>
            <div className='flex items-center w-fit h-auto xs:text-[1.3em] md:text-[1.3em]'>
                {storedValue === "dark" ? (
                    <div
                        onClick={() => setStoredValue("")}
                        className='px-2 py-[7px] rounded-md cursor-pointer hover:bg-[#333]'>
                        <CiLight />
                    </div>
                )
                    :
                    (
                        <div
                            onClick={() => setStoredValue("dark")}
                            className='px-2 py-[7px] rounded-md cursor-pointer hover:bg-[#E5E7EB]'>
                            <IoMoonOutline  />
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Theme