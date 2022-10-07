import React from 'react'
import vediobg from '../assets/video-thumb.jpg'
import buttonPlay from '../assets/play-button.svg'
import { useState } from 'react'
function Section3() {
  const ideas=[
    {
    id:0,
    name:'Get Started',
    content:[
      {
        name:'Using index pages',
        dur:'2 Min'
      },
    {
      name:'Working with content',
      dur:'4 Min'
  },
    {
     name: 'Using cover pages',
     dur:'7 Min'
    },
    {
      name:'Intro to the style} model',
      dur:'9 Min'
    },
  ]

  },
    {
    id:1,
    name:'Collection List',
    content:[
      {
        name:'Exploring collections',
        dur:'12 Min'
      },
    {
      name:'Working with content',
      dur:'4 Min'
  },
    {
     name: 'Understand hierarchy',
     dur:'7 Min'
    },
    {
      name:'Customisations',
      dur:'9 Min'
    },
  ]

  },
    {
    id:2,
    name:'Element hierarchy',
    content:[
      {
        name:'Using cover pages',
        dur:'12 Min'
      },
    {
      name:'Understand hierarchy',
      dur:'4 Min'
  },
    {
     name: 'Image galleries',
     dur:'7 Min'
    },
   
  ]

  },
    {
    id:3,
    name:'Styling Basics',
    content:[
      {
        name:'Intro to the style model',
        dur:'12 Min'
      },
      {
        name:'Customisations',
        dur:'11 Min'
      },
   
   
  ]

  },
    {
    id:4,
    name:'Image Field',
    content:[
      {
        name:'Exploring collections',
        dur:'12 Min'
      },
      {
        name:'Image galleries',
        dur:'11 Min'
      },
      {
        name:'Sorting images',
        dur:'11 Min'
      },
      {
        name:'Filters',
        dur:'11 Min'
      },
   
   
  ]

  },

  ]
    const [currentIdea,setCurrentIdea]=useState(0)
  return (
    <div className='   lg:container  py-16 flex justify-center items-center flex-col '>
        <div className='text-center py-16 px-6 ' >
        <h1 className='text-5xl md:text-[70px] font-bold w-100 md:w-4/5 lg:w-3/5 m-auto  '>
        Turn your ideas into reality in seconds
        </h1>
        <p className='text-xl  md:text-2xl px-0  md:px-32  mt-8 text-slate-500 lg:w-3/4 m-auto md:w-11/12'>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.
        </p>
      </div>
      <div class='flex flex-col lg:grid lg:grid-cols-3 justify-center ' >
        <div className='flex gap-4 lg:ml-32 lg:items-start  col-span-1 lg:justify-center lg:w-[380px] justify-center items-center flex-wrap lg:flex-nowrap lg:flex-col  lg:gap-2 '>
          {
            ideas.map((idea)=>(
              <div key={idea.id} onClick={()=>setCurrentIdea(idea.id)} 
              className={`${currentIdea===idea.id?' bg-emerald-400 text-slate-100':'dark:bg-white'} shadow-sm  w-[200px] p-2 px-8 rounded text-slate-800 font-semibold  cursor-pointer   `}>
              {idea.name}
          </div>
            ))
          }
         
          
        </div>
        <div className='flex flex-col  mt-6 gap-8 col-span-2  md:flex-row md:flex-wrap justify-center items-center lg:grid lg:grid-cols-2  '>
    {
      ideas[currentIdea].content.map((ele)=>(
        <div key={ele} className='h-[250px] col-span-1 w-[350px] flex justify-center items-center  relative  bg-center   rounded bg-cover' style={{backgroundImage:`url(${vediobg})`}}>
    <img src={buttonPlay}  className='cursor-pointer rounded-full hover:bg-slate-50/80 tranistion'width="96" height="96" alt="Play"/>
        <div className='absolute bg-slate-100/90 px-2  flex  justify-between w-full bottom-0 py-2'>
            <p>
            {ele.name}
            </p>
            <div className='bg-slate-800 p-2 rounded-full text-white'>
               {ele.dur}
            </div>

        </div>
    </div>
      ))
    }
   
        </div>
      </div>
    </div>
  )
}

export default Section3
