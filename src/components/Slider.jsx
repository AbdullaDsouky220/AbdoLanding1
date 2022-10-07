import React, { useEffect } from 'react'
import Card from './Card'
import {Swiper,SwiperSlide} from 'swiper/react'
import carsoul from '../assets/carousel-item-01.jpg'
import carsoul2 from '../assets/carousel-item-02.jpg'
import carsoul3 from '../assets/carousel-item-03.jpg'
import carsoul4 from '../assets/carousel-item-04.jpg'
import carsoul5 from '../assets/carousel-item-05.jpg'
import { useState } from 'react';

function Slider() {
    const [mobil,setMobil]=useState(false);
    const [largepc,setLargePc]=useState(false);
    const sliders=[
        {
        id:'slider1',
        image:carsoul
    },
        {
        id:'slider2  ',
        image:carsoul2                   
    },
        {
        id:'slider3',
        image:carsoul3
    },
        {
        id:'slider4',
        image:carsoul4
    },
        {
        id:'slider15',
        image:carsoul5
    },
]
const sizeHandler=()=>{
    
    if(window.innerWidth<900){
        setMobil(true)
        console.log('mobil')
      }else if(window.innerWidth>900){
        if(window.innerWidth>1324){
            setLargePc(true)
                    setMobil(false)

            console.log('notmobil lg')

        }else   if(window.innerWidth<1324){
            setLargePc(false)
                    setMobil(false)

            console.log('notmobil sm',window.innerWidth)

        }
      }
}
useEffect(() => {

    window.addEventListener('resize',sizeHandler)
    
    
    return ()=>{
    window.removeEventListener('resize',sizeHandler)
    }
    
    
},[setMobil])
console.log(window.innerWidth)

  return (
    // <div className='flex justify-center gap-16  snap-x '>
        <Swiper 
       
        spaceBetween={mobil?10:largepc?5:25}
        loop={true}
        initialSlide= {1}
        centeredSlides= {true}
        slidesPerView={mobil?1:largepc?3:2}
        pagination={{
          clickable: true,
        }}
        className='flex flex-row justify-center '>
            {
                sliders.map((slide)=>(
            <SwiperSlide key={slide.id} className='flex flex-row justify-center '>
            <Card image={slide.image}/>          
            </SwiperSlide>

                ))
            }
           
          
     
           
          
           
        </Swiper>

    // </div>
  )
}

export default Slider
