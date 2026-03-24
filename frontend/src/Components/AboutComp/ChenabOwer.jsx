import React from 'react'

const Chairman_and_Principle = [
    {
        img: './pic/chenab-college-Ower.webp',
        name: 'Mr. Muhammad Ahmad',
        position: '(Chairman BOD)',
        heading_title_1: 'Muhammad Ahmad — Chairman of the Board of Directors (BOD) at Chenab College of Advanced Studies (CCAS), Faisalabad',
        description: 'Muhammad Ahmad serves as the Chairman of the Board of Directors (BOD) at Chenab College of Advanced Studies (CCAS) in Faisalabad, Pakistan. In this leadership role, he provides strategic vision and governance guidance to the college’s administration and stakeholders.',
        heading_title_2: 'Role and Vision:',
        point_1: 'He advocates for an institutional framework that prioritizes quality education, preparing youth to be self-reliant and competitive on both national and international levels.',
        point_2: 'Muhammad Ahmad encourages prospective students and parents to consider CCAS for its commitment to academic excellence and personal development.',
    },
    {
        img: './pic/chenab Principal.jpg',
        name: 'Mr. Muhammad Bilal Sultan',
        position: '(Principal)',
        heading_title_1: 'Muhammad Bilal Sultan — Principal, Chenab College of Advanced Studies (CCAS), Faisalabad',
        description: '              Muhammad Bilal Sultan is the Principal of Chenab College of Advanced Studies (CCAS) in Faisalabad, Pakistan. He leads the college and is responsible for its overall academic leadership and administration. Under his guidance, the institution focuses on providing quality education with a global perspective while remaining affordable for students. He welcomes prospective students and parents to consider CCAS for a bright educational future.',
        heading_title_2: 'Role and Vision:',
        point_1: 'Focuses on creating a rich learning culture where teachers support students in deep understanding and skill development.',
        point_2: 'Encourages students to pursue their academic and professional goals with confidence and preparation for future challenges.',
    },
];

const ChenabOwer = () => {
    return (
        <>
            <div className='light-dark-text flex flex-col xs:pt-28 md:pt-32 xl:pt-48 md:px-3 lg:px-0 gap-y-24 w-full h-auto'>
                {
                    Chairman_and_Principle.map((item, index) => {
                        const { img, name, position, heading_title_1, description, heading_title_2, point_1, point_2 } = item
                        return (
                            <div key={index} className='grid xs:grid-cols-1 lg:grid-cols-3 gap-y-7 w-full h-auto'>
                                <div className='flex flex-col items-center w-full h-auto gap-y-2 text-center'>
                                    <div className='xs:w-[250px] lg:w-[230px] xl:w-[270px] rounded-md overflow-hidden'>
                                        <img className='w-full h-auto bg-cover' src={img} alt="chenab-ower" />
                                    </div>
                                    <div>
                                        <h1 className='xs:text-[1.15em] lg:text-[0.9em] xl:text-[1.4em] font-medium'>
                                            {name}
                                        </h1>
                                        <h2 className='xs:text-[1em] md:text-[0.9em] xl:text-[1.15em]'>
                                            {position}
                                        </h2>
                                    </div>
                                </div>
                                <div className='lg:col-span-2 flex flex-col lg:pr-6 gap-y-2 w-full h-auto'>
                                    <h1 className='xs:text-[1.1em] xl:text-[1.15em] font-medium'>
                                        {heading_title_1}
                                    </h1>
                                    <h1 className='xs:text-[1em] md:text-[0.98em]'>
                                        {description}
                                    </h1>
                                    <p className='xs:text-[1.1em] xl:text-[1.15em] font-medium'>
                                        {heading_title_2}
                                    </p>
                                    <ul className='flex flex-col xs:px-5 sm:px-6 lg:px-8 gap-y-2 xs:text-[1em] md:text-[0.98em] list-disc'>
                                        <li>
                                            {point_1}
                                        </li>
                                        <li>
                                            {point_2}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ChenabOwer