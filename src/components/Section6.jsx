import React from 'react'
import reviewer1 from '../assets/reviewer1.jpg'
import reviewer2 from '../assets/reviewer2.jpg'
import reviewer3 from '../assets/reviewer3.jpg'
import reviewer4 from '../assets/reviewer4.jpg'
function Section6() {
    const reviews=[
        {
            id:1,
            name:'—Andy Croll,',
            image:reviewer1,
            review:'“ This is a great app and the value is amazing. Since I purchased it I have been using it everyday! Highly recommend it. “',
        },
        {
            id:2,
            name:'—Patricia Lepisov,',
            image:reviewer2,
            review:'“ This is a great app and the value is amazing. Since I purchased it I have been using it everyday! Highly recommend it. “',
        },
        {
            id:3,
            name:'—Zhenya Ritz,',
            image:reviewer3,
            review:'“ This is a great app and the value is amazing. Since I purchased it I have been using it everyday! Highly recommend it. “',
        },
        {
            id:4,
            name:'—Andy Croll,',
            image:reviewer4,
            review:'“ This is a great app and the value is amazing. Since I purchased it I have been using it everyday! Highly recommend it. “            ',
        },

    ]
  return (
    <div className='lg:container py-16  '>
      <div className='flex flex-col justify-center items-center md:flex-row md:flex-wrap'>
    {
        reviews.map((review)=>(
            <div key={review.id} className=' py-2  text-center max-w-[350px] flex flex-col justify-center items-center gap-6 rounded px-2'>
            <div>
                <img src={review.image} alt="reviwer1" className='rounded-full w-[62px]'/>
            </div>
            <p className='text-lg text-slate-400'>
          {review.review}
            </p>
            <p className='font-bold text-md'>
          {review.name}
            </p>
        </div>
        ))
    }
      </div>
    </div>
  )
}

export default Section6
