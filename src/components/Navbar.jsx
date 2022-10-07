import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {MdOutlineDarkMode} from 'react-icons/md'
import {GiIciclesFence} from 'react-icons/gi'
import {BsSun} from 'react-icons/bs'
import {AiOutlineDown,AiOutlineMenu} from 'react-icons/ai'
import Drawer from './Drawer'
function Navbar({darkButtonHandler,dark}) {
    const [showMenu,setShowMenu]=useState(false)
    const [showDrawer,setshowDrawer]=useState(false)
  return (
    <>
    <nav  className='lg:container flex justify-between py-4 px-5  items-center text-xl '>
        <div className='flex gap-8'>
            <div>
            <GiIciclesFence className='text-3xl'/>

            </div>
            <ul className='md:flex gap-6 hidden'>
                <li className="hover:text-black transition text-gray-500 dark:hover:text-white">
                    <Link to='#about'>             
                    About
                    </Link>
                </li>
                <li  className='hover:text-black transition text-gray-500 dark:hover:text-white'>
                    <Link to='#blog'>             
                    Blog
                    </Link>
                </li>
                <li className='hover:text-black transition text-gray-500  dark:hover:text-white'>
                    <Link className='' to='#Testimonials'>             
                    Testimonials
                    </Link>
                </li>
                <li className=''>
                    <Link to='#Resources' onClick={()=>setShowMenu(!showMenu)} className='hover:text-black dark:hover:text-white transition text-gray-500 reltive flex items-center gap-2'>             
                    Resources  <AiOutlineDown/>
                    </Link>
                    <div className={`mt-2 flex flex-col gap-2 shadow-lg text-start py-4 absolute dark:bg-white  pl-4 pr-16 rounded ${showMenu?"block":"hidden"}`}>
                        <Link to='#help' className='hover:text-black transition text-gray-500'>
                        Help Center
                        </Link>
                        <Link to='notfound' className='hover:text-black transition text-gray-500 cursor-pointer'>
                            404 page
                        </Link>
                    </div>
                </li>
            </ul>
        </div>

        <div className='flex gap-8 items-center'>
            <p>
                {
                    dark?<BsSun className='text-3xl cursor-pointer text-yellow-500 font-bold transition-transform ' onClick={()=>darkButtonHandler()}/>:
                <MdOutlineDarkMode className='text-3xl cursor-pointer' onClick={()=>darkButtonHandler()}/>
                }
            </p>
            <button className=' hidden md:block bg-emerald-400 py-2 px-3 rounded text-white hover:bg-emerald-600/80 transition'>
                Request code
            </button>
            <AiOutlineMenu onClick={()=>setshowDrawer(!showDrawer)} className='text-2xl cursor-pointer sm:block md:hidden' />
        </div>
    </nav>
     {showDrawer? <Drawer class='absolute  ' dark={dark}/>:null}
    </>
  )
}

export default Navbar
