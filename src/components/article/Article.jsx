import { useState } from 'react'

import { AiOutlineMessage, AiOutlineDownload } from 'react-icons/ai'
import image from '../../assets/noimage.jpg'
import data from '../../data'
import Input from '../Input'
import { Link } from 'react-router-dom'

const Article = () => {
   const [devData, setDevData] = useState(data)
   const [searchValue, setSearchValue] = useState("")


   return (
      <section className='w-[100%] lg:w-[75%] py-[50px] px-[15px]'>
         <Input
            setSearchValue={setSearchValue}
         />
         <div className='grid gap-8 grid-cols-1 lg:grid-cols-2'>
            {
               devData.filter((item) => {
                  const { skillOne, skillTow, skillThree } = item.skills
                  return searchValue.toLocaleLowerCase() === ''
                     ? item
                     : skillOne.toLocaleLowerCase().includes(searchValue)
               }).map((item, index) => {
                  const { name, number, status, jobTitle, description, skills, industries } = item
                  const { skillOne, skillTow, skillThree } = skills
                  const { inOne, inTow } = industries
                  return (
                     <Link
                        key={index}
                        to='/user'
                     >
                        <div className='shadow '>
                           <div className='flex gap-6 '>
                              <div className='w-[80px] h-[80px] rounded-full  img-shadow'>
                                 <img src={image} alt="profile" className='w-full rounded-full' />
                              </div>
                              <div className='flex flex-col gap-2'>
                                 <span className='flex gap-1 items-center'>
                                    <p className='font-[700]'>{name}</p>
                                    <p className='text-[10px] text-[#e2626b]'>{number}</p>
                                 </span>
                                 <p className='text-[14px] font-[700]'>{jobTitle}</p>
                                 <div className='flex gap-2 '>
                                    <span className='text-[10px] px-[8px] rounded-lg border-solid border border-blue-400'>{skillOne}</span>
                                    <span className='text-[10px] px-[8px] rounded-lg border-solid border border-blue-400'>{skillTow}</span>
                                    <span className='text-[10px] px-[8px] rounded-lg border-solid border border-blue-400'>{skillThree}</span>
                                 </div>
                              </div>
                           </div>
                           <p className='text-[12px] mt-3 space-y-1'>{description.slice(0, 138)}..</p>
                           <p className='text-[12px] mt-5'>Industries:
                              <span className='underline'>{inOne}</span>
                              ,
                              <span className='underline'>{inTow}</span>
                           </p>
                           <div className='mt-[10px] flex w-full'>
                              <button className='w-[50%]'>
                                 <a
                                    href="#"
                                    className='text-[#5271FF] flex items-center justify-center gap-1 text-[12px] px-[15px]'
                                 >
                                    <AiOutlineMessage />Hire {name}
                                 </a>
                              </button>
                              <button className='w-[50%]'>
                                 <a
                                    href='Sr Python Developer 7 years ,DA R - AXO2408 - AugmntX'
                                    download='PDF'
                                    className='text-[#5271FF] flex items-center justify-center gap-1 text-[12px] px-[15px]'
                                 >
                                    <AiOutlineDownload />Download PDF
                                 </a>
                              </button>
                           </div>
                        </div>
                     </Link>
                  )
               })
            }
         </div>
      </section>
   )
}

export default Article;
