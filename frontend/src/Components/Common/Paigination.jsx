import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Paigination = (props) => {
    const appRef = useRef(null)
    const stairParentRef = useRef(null)
    const currentPath = useLocation().pathname

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.to(stairParentRef.current, {
            display: 'block'
        })
        tl.from('.stair', {
            height: 0,
            delay: -0.5,
            stagger: {
                amount: -0.24
            }
        })
        tl.to('.stair', {
            y: '100%',
            stagger: {
                amount: -0.22
            }
        })
        tl.to(stairParentRef.current, {
            display: 'none'
        })
        tl.to('.stair', {
            y: '0%'
        })
        gsap.from(appRef.current, {
            opacity: 0,
            delay: 0.5,
            ease: 'power2.out',
        })
    }, [currentPath])

    return (
        <>
            <div ref={stairParentRef} className='flex w-full h-screen fixed top-0 z-[21]'>
                <div className='flex w-full h-full'>
                    <div className='stair w-1/5 h-full bg-black'></div>
                    <div className='stair w-1/5 h-full bg-black'></div>
                    <div className='stair w-1/5 h-full bg-black'></div>
                    <div className='stair w-1/5 h-full bg-black'></div>
                    <div className='stair w-1/5 h-full bg-black'></div>
                    <div className='stair w-1/5 h-full bg-black'></div>
                </div>
            </div>
            <div ref={appRef}>
                {props.children}
            </div>
        </>
    )
}

export default Paigination