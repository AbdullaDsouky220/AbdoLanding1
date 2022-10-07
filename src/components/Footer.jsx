import React from 'react'
import { Link } from 'react-router-dom'
import {GiIciclesFence} from 'react-icons/gi'

function Footer() {
    const links = [{
        header: 'products',
        links: ['Drag And Drop', 'Visual Studio X', 'Easy Content']
    },
    {
        header: 'RESOURCES',
        links: ['Industries and tools', 'Use cases', 'Blog', 'Online events ', 'Nostrud exercitation']
    },
    {
        header: 'COMPANY',
        links: ['Diversity & inclusion', 'About us', 'Press', 'Customer stories', 'Nostrud exercitation', 'Online communities']
    },
    {
        header: 'SUPPORT',
        links: ['Documentation', 'Tutorials & guides', 'Webinars', 'Open-source']
    },

    ]
    return (
        <div className='lg:container'>
            <div className='flex flex-col md:flex-row   px-16   ' >
                <div className=''>
                <GiIciclesFence className='text-3xl'/>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 '>
                    {
                        links.map((link) => (
                             <div className='col-span-1 md:mx-8' >
                                <p className='font-semibold mb-4 '>
                                    {link.header}
                                </p>
                                <div className='flex flex-col  font-semibold  gap-2 '>
                                {
                                        link.links.map((ele) => (
                                            <Link to='/'>{ele}</Link>
                                        ))
                                    }
                                </div>

                            </div>)
                        ) }
                </div>
            </div>
        </div>
    )
}

export default Footer
