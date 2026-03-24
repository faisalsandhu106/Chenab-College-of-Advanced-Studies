import React from 'react'
import { motion } from 'motion/react'
import { FaCaretDown, FaSortUp } from 'react-icons/fa'

const FAQList = ({ FAQ, isActive, onToggle }) => {
  const { qestion, answer } = FAQ
  return (
    <>
      <li
        className='Card-box flex flex-col justify-center xs:gap-y-4 md:gap-y-6 xs:px-3 sm:px-5 lg:px-6 w-full rounded-md'>
        <div onClick={onToggle} className='flex items-start justify-between xs:py-5 md:py-6 lg:py-7 gap-x-2 w-full bg-amber-30 cursor-pointer'>
          <h1 className='xs:text-[1.05em] md:text-[1.07em] xl:text-[1.25em] font-medium'>
            {qestion}
          </h1>
          <button onClick={onToggle} className='xs:text-[1em] md:text-[1.1em]'>
            {
              isActive ? <FaSortUp onClick={onToggle} /> : <FaCaretDown onClick={onToggle} />
            }
          </button>
        </div>
        {/* <motion.p
          initial={{ opacity: 0, y: 400 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className=' xl:text-[1em]'>
          {isActive && answer}
        </motion.p> */}
        <p className={`pb-7 xs:text-[0.92em] md:text-[0.96em] lg:text-[1em] xl:text-[1.05em] ${!isActive && "hidden" }`}>{answer}</p>
      </li>
    </>
  )
}

export default FAQList