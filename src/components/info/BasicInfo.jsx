import { useState } from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'

import image from '../../assets/noimage.jpg'
import data from '../../data'
const BasicInfo = () => {
   const [devData, setDevData] = useState(data)

   return (
      <main className='container py-[90px] flex flex-col gap-7 justify-start'>
         <div className='flex items-center gap-1 text-[16px] text-[#AAB0BC]'>
            <span><FaLongArrowAltLeft /> </span>
            <span><a href="#" className='text-[#5271FF] font-[700]'>Home / </a></span>
            <span><a href="#" className='text-[#5271FF] font-[700]'>Developers / </a></span>
            <span>{devData[1].number}</span>
         </div>
         <div className='flex flex-col lg:flex-row gap-8 items-start justify-between '>
            <div className='w-full h-full lg:w-[350px] lg:h-[350px]  '>
               <img src={image} alt="profile" className='w-full h-full' />
            </div>
            <div className='w-full lg:w-[730px] flex flex-col gap-3'>
               <div className='flex items-center gap-3'>
                  <span className='text-[18px] text-[#AAB0Bc] font-[700]'>
                     {devData[1].name}
                  </span>
                  <span className='text-[12px] text-[#FF0000]'>
                     {devData[1].number}
                  </span>
                  <span className='text-[12px] text-[#45C4A0]'>
                     {devData[1].status}
                  </span>
               </div>
               <h3 className='text-[20px] font-[500]'>
                  {devData[1].jobTitle}
               </h3>
               <p className='text-[17px] text-[#60697b] leading-7'>
                  {devData[1].description}
               </p>
            </div>
         </div>
         <div className='flex flex-wrap gap-3'>
            <span className=' cursor-pointer py-[2px] px-3 border-solid border-2 border-blue-400 rounded-full hover:bg-gray-100 '>
               {devData[1].skills.skillOne}
            </span>
            <span className=' cursor-pointer py-[2px] px-3 border-solid border-2 border-blue-400 rounded-full hover:bg-gray-100 '>
               {devData[1].skills.skillTow}
            </span>
            <span className=' cursor-pointer py-[2px] px-3 border-solid border-2 border-blue-400 rounded-full hover:bg-gray-100 '>
               {devData[1].skills.skillThree}
            </span>
            <span className=' cursor-pointer py-[2px] px-3 border-solid border-2 border-blue-400 rounded-full hover:bg-gray-100 '>
               {devData[1].skills.skillOne}
            </span>
            <span className=' cursor-pointer py-[2px] px-3 border-solid border-2 border-blue-400 rounded-full hover:bg-gray-100 '>
               {devData[1].skills.skillTow}
            </span>
            <span className=' cursor-pointer py-[2px] px-3 border-solid border-2 border-blue-400 rounded-full hover:bg-gray-100 '>
               {devData[1].skills.skillThree}
            </span>
         </div>
         <div>
            <p className='text-[20px] font-[700] mt-5'>Industries :
               <span className='underline font-[500] text-[#60697b]'> {devData[1].industries.inOne}</span>
               ,
               <span className='underline font-[500] text-[#60697b]'>{devData[1].industries.inTow}</span>
            </p>
         </div>
      </main >
   )
}

export default BasicInfo
