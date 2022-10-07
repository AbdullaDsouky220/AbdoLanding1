import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineDown,AiOutlineMenu} from 'react-icons/ai'
import {GiIciclesFence} from 'react-icons/gi'

function Drawer({dark}) {
    const [showMenu,setShowMenu]=useState(false)

  return (
    <div>
         <div className={`flex  transition py-4 gap-8 pl-8 w-64 z-5  h-full   ${dark?'bg-slate-800':'bg-slate-100'}  top-0  pr-16 flex-col fixed left-0  ease-out md:hidden sm:block z-50 `}>
            <div>
                <GiIciclesFence className='text-3xl'/>
            </div>
            <ul className='flex  flex-col gap-6 '>
                <li className="hover:text-black transition text-gray-500">
                    <Link to='#about'>             
                    About
                    </Link>
                </li>
                <li  className='hover:text-black transition text-gray-500'>
                    <Link to='#blog'>             
                    Blog
                    </Link>
                </li>
                <li className='hover:text-black transition text-gray-500'>
                    <Link className='' to='#Testimonials'>             
                    Testimonials
                    </Link>
                </li>
                <hr />
                <li className=''>
                    <Link to='#Resources' onClick={()=>setShowMenu(!showMenu)} className='hover:text-black transition text-gray-500 reltive flex items-center gap-2'>             
                    Resources  <AiOutlineDown/>
                    </Link>
                    <div className={` flex flex-col gap-2 shadow-lg text-start py-4 absolute  pl-4 pr-16 rounded  bg-white  mt-4 ease-linear ${showMenu?"block":"hidden"}`}>
                        <Link to='#help' className='hover:text-black transition text-gray-500'>
                        Help Center
                        </Link>
                        <Link to='notfound' className='hover:text-black transition text-gray-500 cursor-pointer'>
                            404 page
                        </Link>
                    </div>
                </li>
            </ul>
            <button className={`  w-full  bg-emerald-600 py-2 px-3 rounded text-white hover:bg-emerald-600/80 transition ${showMenu?'mt-20':'mt-5'}`}>
                Request code
            </button>
        </div>

    </div>
  )
}

export default Drawer
