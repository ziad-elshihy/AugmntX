import { useEffect, useState } from 'react'
import axios from 'axios';


import { AiOutlineMessage, AiOutlineDownload } from 'react-icons/ai'
import image from '../../assets/noimage.jpg'
import Input from '../Input'
import { useNavigate } from 'react-router-dom'

const Article = () => {
   const [data, setData] = useState([])
   const [searchValue, setSearchValue] = useState("")
   const navigate = useNavigate()

   const fetchData = async () => {
      try {
         const { data } = await axios.get('https://augmntx.com/api/profile_list')
         setData(data)
      } catch (err) {
         console.log(err)
      }
   }

   useEffect(() => {
      fetchData()
   }, [])

   const goUser = (unique_id) => {
      navigate(`profile/${unique_id}`)
   }
   return (
      <section className='w-[100%] lg:w-[75%] py-[50px] px-[15px]'>
         <Input
            setSearchValue={setSearchValue}
         />
         <div className='grid gap-8 grid-cols-1 lg:grid-cols-2'>
            {
               data.filter((item) => {
                  return searchValue.toLowerCase() === '' || item.skills.some((skill) => {
                     return skill.toLowerCase().includes(searchValue.toLowerCase());
                  });
               }).map((item) => {
                  const { unique_id, id, first_name, last_name, bio, experience, primary_title, userPhoto, profile_url, profile_industries, skills } = item
                  return (
                     <div
                        key={id}
                        className='shadow cursor-pointer'
                     >
                        <div
                           onClick={() => goUser(unique_id)}
                        >
                           <div className='flex gap-6'
                           >
                              <div className='max-w-[80px] max-h-[80px] rounded-full  img-shadow'>
                                 <img src={userPhoto === true ? userPhoto : image} alt="profile" className='w-full rounded-full' />
                              </div>
                              <div className='flex flex-col gap-2'>
                                 <span className='flex gap-1 items-center'>
                                    <p className='font-[700]'>{first_name} {last_name}</p>
                                    <p className='text-[10px] text-[#e2626b]'>{unique_id}</p>
                                 </span>
                                 <p className='text-[14px] font-[700]'>{primary_title}, {experience} years</p>
                                 <div className='flex gap-2 '>
                                    {
                                       skills.map((skill, index) => {
                                          return <span key={index} className=' overflow-x-hidden text-[10px] px-[8px] rounded-lg border-solid border border-blue-400'>{skill.slice(0,7)}..</span>
                                       }).slice(0, 3)
                                    }
                                 </div>
                              </div>
                           </div>
                           <p className='text-[12px] mt-3 space-y-1'>{bio.slice(0, 140)}..</p>
                           <p className='text-[12px] mt-5'>Industries:
                              {
                                 profile_industries.map((item, index) => {
                                    return (
                                       <span key={index} >
                                          <span className='underline'>
                                             {item},&nbsp;
                                          </span>
                                       </span>
                                    )
                                 }).slice(0, 4)
                              }
                           </p>
                        </div>
                        <div className='mt-[10px] flex w-full'>
                           <button className='w-[50%]'>
                              <a
                                 href="#"
                                 className='text-[#5271FF] flex items-center justify-center gap-1 text-[12px] px-[15px]'
                              >
                                 <AiOutlineMessage />Hire {first_name} {last_name}
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
                  )
               })
            }
         </div>
      </section>
   )
}

export default Article;
