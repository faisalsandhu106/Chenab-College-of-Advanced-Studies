import React from 'react'

const HistoryFsd = () => {
    return (
        <div className='grid xs:grid-cols-1 lg:grid-cols-3 xs:pt-28 md:pt-32 xl:pt-48 md:px-3 lg: gap-y-7 w-full h-auto'>
            <div className='flex flex-col items-center w-full h-auto gap-y-2 text-center'>
                <div className='xs:w-[250px] lg:w-[230px] xl:w-[270px] rounded-md overflow-hidden'>
                    <img className='w-full h-auto bg-cover' src='./pic/clock-tower_faisalabad-241x300.webp' alt="chenab-ower" />
                </div>
                <div className='light-dark-text flex flex-col items-center text-2xl font-black text-center text-nowrap'>
                    History of Faisalabad
                    <div className='title-underline mt-2 w-[140px] '></div>
                </div>
            </div>
            <div className='lg:col-span-2 flex flex-col lg:pr-6 gap-y-2 w-full h-auto'>
                <h1 className='xs:text-[1.1em] xl:text-[1.15em] font-medium'>
                </h1>
                <p className='xs:text-[0.98em] xl:text-[0.96em]'>
                    History of Faisalabad Chak #212 RB present clock tower and eight bazaar area established in 1892 as a small village. Chak#212 RB becomes Tehsil of district Jhang in 1896, and renamed Chenab colony district on 1st December 1904 and given the name of Lyallpur in memory of Lieutenant Governor Punjab (1887 – 1892). Sir James Broadwood Lyall. Lyallpur district was attached to Multan division in 1904. The district became part of Sargodha division in 1960. In 1977, the name of district changed as Faisalabad to pay tribute to Shah Faisal of Saudi Arabia – a sincere friend of Pakistan. Faisalabad became division in 1982 and its tehsil Toba Tek Singh was declared as a separate district.
                </p>
            </div>
        </div>
    )
}

export default HistoryFsd