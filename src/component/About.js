import React from 'react'

function About() {
  return (
    <div className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h1 className='font-bold text-4xl'>Trusted by developers across the world</h1>
                <p className=' py-6 text-3xl text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  </p>
            </div>
        </div>
        <div className='grid md:grid-cols-3 gap-1 px-3 text-center'>
            <div className='border px-12 rounded-xl shadow-xl'>
                <p className='text-indigo-600 font-bold text-6xl'>100%</p>
                <p className='text-gray-600 mt-2'>Completion</p>
            </div>
            <div className='border px-12 rounded-xl shadow-xl'>
                <p className='text-indigo-600 font-bold text-6xl'>24/7</p>
                <p className='text-gray-600 mt-2'>Delivery</p>
            </div>
            <div className='border px-12 rounded-xl shadow-xl'>
                <p className='text-indigo-600 font-bold text-6xl'>100K</p>
                <p className='text-gray-600 mt-2'>Transcation</p>
            </div>
        </div>
    </div>
  )
}

export default About