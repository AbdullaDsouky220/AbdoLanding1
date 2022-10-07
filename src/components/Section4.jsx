import React from 'react'
import image1 from '../assets/element1.jpg'
import image2 from '../assets/element2.jpg'
import image3 from '../assets/element3.jpg'
import iphoneMockup from '../assets/iphone-mockup.png'
function Section4() {
  return (
    <div className='   lg:container  py-16 flex justify-center items-center flex-col '>
    <div className='text-center py-16 px-6 ' >
    <h1 className='text-5xl md:text-[70px] font-bold w-100 md:w-4/5 lg:w-3/5 m-auto'>
    Build and style every element to perfection
    </h1>
    <p className='text-xl  md:text-2xl px-0  md:px-32  mt-8 text-slate-500 lg:w-3/4 m-auto md:w-11/12'>
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.
    </p>
  </div>
  <div className='flex flex-col gap-8  md:flex-row lg:gap:16'>

    <div className='flex justify-center items-center flex-col gap-3 overflow-hidden'>
        <div className='bg-blue-500 rounded-full w-[60px] h-[60px] flex justify-center align-center p-5 '>
           <p className='text-white text-2xl text-center -m-1 font-bold'> 1</p>
        </div>
        <div className='relative  '>
            <img src={image1} alt='element1' className=' w-[244px] h-[518px] mx-5 mt-5 absolute rounded-3xl'/>
            <img className=" z-10 overflow-hidden " src={iphoneMockup} width="284" height="574" alt="iPhone mockup" aria-hidden="true" />
        </div>


    </div>
    <div className='flex justify-center items-center flex-col gap-3'>
        <div className='bg-blue-500 rounded-full w-[60px] h-[60px] flex justify-center align-center p-5 '>
           <p className='text-white text-2xl text-center -m-1 font-bold'> 2</p>
        </div>
        <div className='relative w-full'>
            <img src={image2} alt='element1' className=' w-[244px] h-[518px] mx-5 mt-5 absolute rounded-3xl'/>
            <img className=" z-10 overflow-hidden " src={iphoneMockup} width="284" height="574" alt="iPhone mockup" aria-hidden="true" />
        </div>


    </div>
    <div className='flex justify-center items-center flex-col gap-3'>
        <div className='bg-blue-500 rounded-full w-[60px] h-[60px] flex justify-center align-center p-5 '>
           <p className='text-white text-2xl text-center -m-1 font-bold'> 3</p>
        </div>
        <div className='relative w-full'>
            <img src={image3} alt='element1' className=' w-[244px] h-[518px] mx-5 mt-5 absolute rounded-3xl'/>
            <img className=" z-10 overflow-hidden " src={iphoneMockup} width="284" height="574" alt="iPhone mockup" aria-hidden="true" />
        </div>


    </div>
    <svg className=" max-w-[300px]  md:max-w-[600px] absolute sm:d-none md:d-blcok -z-10" aria-hidden="true" width="" height="634" viewBox="0 0 678 634" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  </div>
  
    </div>
  )
}

export default Section4
