import React from 'react'

function Section8() {
  return (
    <div className='lg:container  py-16 '>
<div className='bg-slate-800 flex  flex-col gap-8 md:flex-row  items-center py-[120px] px-6'>
    <p className='text-5xl lg:text-6xl md:text-start leading-[80px] max-w-[850px] text-white  font-bold text-center '>
    Free until you’re ready to launch
    </p>
    <form className='flex  gap-8 flex-col items-center md:flex-row px-6 '>
        <input type='text' placeholder='Phone number ' className='bg-slate-800 p-4 rounded w-80 border'/>
        <div className="btn w-[300px] md:w-[180px] py-4  text-center">
            Request code 
        </div>
    </form>
</div>
    </div>
  )
}

export default Section8
