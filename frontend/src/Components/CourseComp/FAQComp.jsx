import React, { useState } from 'react'
import { motion } from 'motion/react';
import FAQList from './FAQList';

//* DownToUp Animation Motion JS
const DownToUpAnimation = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      // Stagger children by 0.1s, starting after a 0.2s delay
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

//* FAQs List
const FAQs = [
  {
    id: "1",
    qestion: "How can I apply for admission?",
    answer: "You can apply online through the official admission portal or submit your application at the admissions office."
  },
  {
    id: "2",
    qestion: "What documents are required for admission?",
    answer: "Generally, the following documents are required: Academic transcripts / certificates, CNIC or B-Form copyPassport-size photographs, and Domicile certificate (if required)"
  },
  {
    id: "3",
    qestion: "Is there an admission test?",
    answer: " Some programs may require an entry test or interview. Details are provided during the admission process."
  },
  {
    id: "4",
    qestion: "When does the admission cycle start?",
    answer: "Admissions usually open before the start of the fall and spring semesters. Please check the announcements section for exact dates."
  },
  {
    id: "5",
    qestion: "What programs does the college offer?",
    answer: "The college offers undergraduate and possibly postgraduate programs in different academic disciplines."
  },
  {
    id: "6",
    qestion: "What is the duration of undergraduate programs?",
    answer: "Most undergraduate programs are 4 years (8 semesters)."
  },
  {
    id: "7",
    qestion: "Is the college affiliated with a university?",
    answer: "Yes, the college is affiliated with the relevant regulatory university/body as per the program requirements."
  },
  {
    id: "8",
    qestion: "What is the fee structure?",
    answer: "Fee structure varies by program. Detailed information is available on the Fee Structure page."
  },
  {
    id: "9",
    qestion: "Are scholarships available?",
    answer: "Yes, merit-based and need-based scholarships may be available for eligible students."
  },
  {
    id: "10",
    qestion: "Can fees be paid in installments?",
    answer: "In some cases, students may request installment plans through the administration."
  },
  {
    id: "11",
    qestion: "Is there a library on campus?",
    answer: "Yes, the campus has a library with academic books, journals, and study spaces."
  },
  {
    id: "12",
    qestion: "How can I contact the college?",
    answer: "You can contact the administration through: Phone: +92 304 0343547, Email: info@ccas.edu.pk, and Address: Main West Canal Road, Near Abdullah Pur"
  }
];

const FAQComp = () => {
  const [isActive, setIsActive] = useState(false);

  const hendleButton = (id) => {
    setIsActive((prev) => (prev === id ? false : id))
  };

  return (
    <>
      <section className='flex flex-col xs:pt-28 md:pt-32 xl:pt-44 xs:gap-y-10 md:gap-y-14 lg:gap-y-16 w-full h-auto'>
        <div className='xs:px-3 md:px-8 lg:px-14 xl:px-20 text-center'>
          <h1 className='xs:text-[1.7em] md:text-[1.8em] lg:text-[2em] font-bold leading-[1.4em] capitalize'>
            requently asked questions
          </h1>
          <p className='mt-4 text-[1em]'>
            Welcome to the Frequently Asked Questions (FAQs) page of Chenab College of Advanced Studies. Here you will find answers to common questions about admissions, programs, fees, and campus facilities.
          </p>
        </div>
        <motion.ul
          initial={"hidden"}
          whileInView={"show"}
          variants={DownToUpAnimation}
          viewport={{ once: true }}
          className='flex flex-col items-center xs:px-3 md:px-12 lg:px-20 xl:px-44 gap-y-6 w-full'>
          {
            FAQs.map((items) => {
              return <FAQList
                key={items.id}
                FAQ={items}
                isActive={isActive === items.id}
                onToggle={() => hendleButton(items.id)}
              />
            })
          }
        </motion.ul>
      </section>
    </>
  )
}

export default FAQComp