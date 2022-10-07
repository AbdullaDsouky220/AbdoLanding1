import React from 'react'
import { useState } from 'react'

function Card({image}) {
  const [active,setActive]=useState(false)
  return (
    <div className={`${active? 'backdrop-opacity-10 backdrop-invert bg-white/30 ':null} cursor-grabbing relative px-2 flex justify-center items-center rounded h-[350px] min-w-[450px] object-center bg-cover bg-center `} style={{backgroundImage:`url(${image})`} }>
    <button className="btn">
        Learn More
    </button>
    <div className=' cursor-pointer absolute bottom-0 right-0 rounded-full text-white hover:bg-slate-800 py-[7px] px-4 mx-2 transition bg-slate-800/80'>
        Creative Services
    </div>
          </div>
  )
}

export default Card
