import React from 'react';
import { ArrowSmRightIcon, PhoneIcon } from '@heroicons/react/outline';
import { ChipIcon,SupportIcon } from '@heroicons/react/solid';
import supportImg from '../assets/support.jpg'

function Support() {
  return (
    <div className='w-full  mt-24'>
       <div className='w-full h-[700px] bg-gray-900/90 absolute'> 
         <img  className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt='/'/>
       </div>

       <div className='max-w-[1240px] mx-auto text-white  relative'>
        <div className='px-4 py-12'> 
            <h2 className='pt-8 text-slate-300 text-3xl text-center'>SUPPORT</h2>
            <h3 className='text-center font-bold text-5xl py-6'>Find The Right Team</h3>
            <p className='py-4 text-slate-300 text-3xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  </p>
        </div>
       </div>

       <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
        <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
                <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                <h3 className='font-bold text-2xl my-6'>Sales</h3>
                <p className='text-gray-600 text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <div className=' bg-slate-100 pl-8 py-4'>
                <p className='flex items-center text-indigo-600'> Contact Us <ArrowSmRightIcon className='w-5 ml-2'/></p>
            </div>
        </div>
        <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
                <SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                <p className='text-gray-600 text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
            </div>
            <div className=' bg-slate-100 pl-8 py-4'>
                <p className='flex items-center text-indigo-600'> Contact Us <ArrowSmRightIcon className='w-5 ml-2'/></p>
            </div>
        </div><div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
                <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                <h3 className='font-bold text-2xl my-6'>Media Inquires</h3>
                <p className='text-gray-600 text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
            </div>
            <div className=' bg-slate-100 pl-8 py-4'>
                <p className='flex items-center text-indigo-600'> Contact Us <ArrowSmRightIcon className='w-5 ml-2'/></p>
            </div>
        </div>
       </div>

    </div>
  )
}

export default Support