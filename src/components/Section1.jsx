import React from 'react'
import mockup from '../assets/mockup-image-01.jpg'
import iphoneMockup from '../assets/iphone-mockup.png'
import buttonPlay from '../assets/play-button.svg'
import { BsArrowReturnRight } from 'react-icons/bs'
import { InView, inView } from 'react-intersection-observer';
function Section1() {
    const [inView, setInView] = React.useState(false);

    return (
       <InView onChange={setInView}>
         <>
        <div  className={`lg:container   bg-transparent grid grid-cols-1 gap-32 md:gap-0 md:grid-cols-2  pt-32  px-6 py-10 ${inView?'showSection ':'hideSection'}`}>
            <div className=' mt-8 col-span-1 gap-5 flex flex-col text-bold items-center text-center md:items-start md:text-start'>
                <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold '>Your website, reimagined</h1>
                <p className='text-slate-500'>
                    Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
                </p>
                <form action=" " className='flex'>
                    <input type='text' className='border  px-4 mr-2 focus:outline-emerald-600' placeholder='Phone Number' name='phone' />
                    <button className={`  w-full  bg-emerald-600 py-2 px-3 rounded text-white hover:bg-emerald-600/80 transition `}>
                        Request code
                    </button>
                </form>
                <ul>
                    <li className='mt-2 flex gap-2 text-teal-400 '>
                        <svg className="text-teal-400 w-4 " viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path  d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" fill="currentColor"></path>
                        </svg>
                        <p className='text-slate-500'>
                            Lorem ipsum is placeholder text commonly.
                        </p>

                    </li>
                    <li className='mt-2 flex gap-2 text-teal-400 '>
                        <svg className="text-teal-400 w-4 " viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path  d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" fill="currentColor"></path>
                        </svg>
                        <p className='text-slate-500'>
                            Lorem ipsum is placeholder text commonly.
                        </p>

                    </li>
                    <li className='mt-2 flex gap-2 text-teal-400 '>
                        <svg className="text-teal-400 w-4 " viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path  d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" fill="currentColor"></path>
                        </svg>
                        <p className='text-slate-500'>
                            Lorem ipsum is placeholder text commonly.
                        </p>

                    </li>
                </ul>
            </div>
            <div className='col-span-1  w- my-64 '>
              <div className='relative   flex justify-center items-center '>
              <svg className=" max-w-[600px] absolute" aria-hidden="true" width="" height="634" viewBox="0 0 678 634" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="240" cy="394" r="240" fill="url(#piphoneill_paint0_radial)" fillOpacity=".4"></circle>
                    <circle cx="438" cy="240" r="240" fill="url(#piphoneill_paint1_radial)" fillOpacity=".6"></circle>
                    <defs>
                        <radialGradient id="piphoneill_paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 -77 317) scale(189.054)">
                            <stop stopColor="#667EEA"></stop>
                            <stop offset="1" stopColor="#667EEA" stopOpacity=".01"></stop>
                        </radialGradient>
                        <radialGradient id="piphoneill_paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 99 339) scale(189.054)">
                            <stop stopColor="#9F7AEA"></stop>
                            <stop offset="1" stopColor="#9F7AEA" stopOpacity=".01"></stop>
                        </radialGradient>
                    </defs>
                </svg>
                <img className="absolute ml-0 mt-0 " src={mockup} width="289" height="624"  alt="Features illustration" />
                <img className="absolute z-10" src={iphoneMockup} width="344" height="674" alt="iPhone mockup" aria-hidden="true" />
                <a className="absolute my-64 mx-32" href="#0" aria-controls="modal">
                    <img src={buttonPlay} width="96" height="96" alt="Play"/>
                </a>
              </div>

            </div>
        </div>
        
        <div className=' lg:container  py-32 px-3 grid grid-cols-2 md:grid-cols-4 gap-3'>
        <div className='shadow-xl  col-span-1  py-6 text-center rounded   '>
                <p className='text-5xl font-bold'>2.4M</p>
                <p className='text-slate-500'>Days turn around</p>

            </div>
        <div className='shadow-xl col-span-1  py-6 text-center rounded   '>
                <p className='text-5xl font-bold'>7M</p>
                <p className='text-slate-500'>Days turn around</p>

            </div>
            
        <div className='shadow-xl  col-span-1  py-6 text-center rounded   '>
                <p className='text-5xl font-bold'>7.4M</p>
                <p className='text-slate-500'>Days turn around</p>

            </div>
        <div className='shadow-xl col-span-1 py-6  text-center rounded '>
                <p className='text-5xl font-bold'>49M</p>
                <p className='text-slate-500'>Days turn around</p>

            </div>
            </div>
            </>
       </InView>

    )
}

export default Section1