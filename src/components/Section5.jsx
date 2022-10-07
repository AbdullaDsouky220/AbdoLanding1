import React from 'react'

function Section5() {
    const prices = [
        {
            price: 27,
            color: 'bg-green-800',
            dur: 'Yearly',
            billed: 'billed yearly'
        },
        {
            price: 47,
            color: 'bg-pink-600',
            dur: 'Monthly',
            billed: 'billed yearly'

        },
        {
            price: 127,
            color: 'bg-pink-600',
            dur: 'Monthly',
            billed: 'one-time'

        },
    ]
    const commonFeatures = ['Unlimited domains', 'Unlimited web pages', 'Conversion analytics', 'A/B testing', 'Exclusive channels', 'Free resources', 'Landing page builder', 'Smart forms and reports']
    return (
        <div className='bg-slate-800'>
            <div className="lg:container py-16 ">
                <div className='text-center py-16 px-6 ' >
                    <h1 className='text-xl  text-slate-100 leading-[80px] md:text-[55px] font-bold w-100 md:w-4/5 lg:w-3/5 m-auto '>
                        Start building for free, then add a plan to go live
                    </h1>
                    <p className='text-xl  md:text-2xl px-0  md:px-32  mt-8 text-slate-500 lg:w-3/4 m-auto md:w-11/12'>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.
                    </p>
                </div>
                <div className='px-2 md:px-20  flex flex-col justify-center items-center gap-6 md:grid md:grid-cols-2 xl:flex xl:flex-row'>
                    <div className='col-span-1  text-start'>
                        <p className='font-bold text-xl text-white'>
                            All plans include:
                        </p>
                        {
                            commonFeatures.map((feature) => (
                                <p key={feature} className='text-slate-300 flex gap-2 mt-2'>
                                    <svg className="text-teal-400 w-4 " viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" fill="currentColor"></path>
                                    </svg>
                                    {feature}
                                </p>
                            ))
                        }

                    </div>
                    {
                        prices.map(price => (
                            <div key={price.price} className='  col-span-1 gap-2  p-4 bg-white w-[350px]  md:w-[305px]   lg:w-[350px] rounded  h-[300px]'>
                                <div className='flex justify-between relative text-slate-800  '>
                                    <p className='font-bold text-3xl' >{price.billed}</p>
                                    <div className='bg-green-400/80  text-white p-2 rounded-full '>
                                        -{price.price}%
                                    </div>
                                </div>
                                <p>
                                    <span className='text-4xl font-bold text-slate-600'>$</span>
                                    <span className='text-5xl font-bold text-slate-700'>{price.price}</span>
                                    <span className='text-slate-700'>{price.billed}</span>


                                </p>
                                <p className='text-slate-600 text-xl my-2'>
                                    — Lorem ipsum dolor amet sit consect adipiscing.
                                </p>
                                <div className={`btn w-48 mt-20 text-center  bottom-0 mb-4 ${price.color}`}>
                                    Go Premium
                                </div>
                            </div>
                        ))
                    }
                </div>


            </div>

        </div>
    )
}

export default Section5
