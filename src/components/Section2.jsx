import React from 'react'
import Slider from './Slider'
function Section2() {
  return (
    <div className='lg:container py-16 '>
      <div className='text-center py-16 px-6'>
        <h1 className='text-5xl md:text-[70px] font-bold w-100 lg:w-3/5 m-auto'>
        From rough design files, to powerful products
        </h1>
        <p className='text-xl  md:text-2xl px-0  md:px-32  mt-8 text-slate-500 lg:w-3/4 m-auto md:w-11/12'>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.
        </p>
      </div>
      <Slider/>
    </div>
  )
}

export default Section2
