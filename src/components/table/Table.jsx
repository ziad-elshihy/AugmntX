/* eslint-disable react/prop-types */
import Buttons from "../Buttons"

import { BsCalendarCheck, BsCodeSlash } from 'react-icons/bs'
import { CgSandClock } from 'react-icons/cg'
import { AiOutlineSetting } from 'react-icons/ai'
import { MdWorkOutline, MdOutlineSchool, MdKeyboardArrowLeft } from 'react-icons/md'
import { IoLanguageSharp } from 'react-icons/io5'
import { CiShare1 } from 'react-icons/ci'
import { RiSettingsLine } from 'react-icons/ri'
import { BsPatchCheck } from 'react-icons/bs'

const Table = ({ data }) => {
   console.log(data.experience?.title)

   return (
      <main className='container leading-7'>
         <Buttons
            id={data.profile_info?.id}
            u_id={data.profile_info?.unique_id}
            p_url={data.profile_info?.profile_url}
            f_name={data.profile_info?.first_name}
            l_name={data.profile_info?.last_name}
         />
         <div className="border-y border-solid border-slate-300 divide-y divide-slate-300 w-full min-h-screen py-5 ">
            <div className="flex items-center justify-between lg:justify-normal lg:gap-24 lg:px-[70px] py-[15px] mt-[5px] ">
               <span className="font-[700] text-[#343f52] text-[18px] w-[50%] lg:w-[25%] flex items-center gap-3">
                  <BsCalendarCheck />Availability
               </span>
               <span className="text-[#60697b] text-[16px]">{data.profile_info?.comittment}</span>
            </div>


            <div className="flex items-center justify-between lg:justify-normal lg:gap-24 lg:px-[70px] py-[15px] mt-[5px]">
               <span className="font-[700] text-[#343f52] text-[18px] w-[70%] lg:w-[25%]  flex items-center gap-2">
                  <CgSandClock />Total experience
               </span>
               <span className="text-[#60697b] text-[16px]">
                  {data.profile_info?.experience == 0
                     ? <span className=" flex items-center gap-1"><MdKeyboardArrowLeft />1 years</span>
                     : `${data.profile_info?.experience} years`
                  }
               </span>
            </div>


            <div className="flex flex-col lg:flex-row justify-between lg:justify-normal gap-8 lg:gap-24 items-start lg:px-[70px] py-[15px] mt-[5px]  ">
               <span className="font-[700] text-[#343f52] text-[18px] w-[50%] lg:w-[25%]   flex items-center gap-2">
                  <BsCodeSlash />Technical skills
               </span>
               <span className="flex justify-between w-full lg:w-[40%] lg:gap-10">
                  <span className="text-[#60697b] text-[16px] flex flex-col gap-4 ">
                     {
                        data.skills?.map((skill) => {
                           return <span key={skill.id}>
                              {skill.name}
                           </span>
                        })
                     }
                  </span>
                  <span className="text-[#60697b] text-[16px] flex flex-col gap-4">
                     {
                        data.skills?.map((skill) => {
                           return <span key={skill.id}>
                              {skill.year > 0 && `${skill.year} Years`}
                              {skill.year > 0 && skill.month > 0 && ' & '}
                              {skill.month > 0 && `${skill.month} Months`}
                           </span>
                        })
                     }
                  </span>
               </span>
            </div>


            <div className="flex justify-between lg:justify-normal gap-2 lg:gap-24 lg:px-[70px] py-[15px] mt-[5px] items-start flex-col lg:flex-row ">
               <span className="font-[700] text-[#343f52] text-[18px] w-[50%] lg:w-[25%]   flex items-center gap-2">
                  <AiOutlineSetting />Projects
               </span>
               <span className="text-[#60697b] text-[18px] w-full lg:w-[65%] ">
                  {
                     data.projects?.map((project) => {
                        return (
                           <span key={project.id}>
                              <h3 className="flex gap-3 text-black font-[700] mt-[25px] mb-[10px] pl-[20px] title">
                                 {project.title}
                                 {
                                    project.url !== ''
                                    && <a
                                       target="_blanc"
                                       href={project.url}
                                       className="flex items-center gap-1 text-[14px] text-[#5271FF] font-[400]">
                                       View project<CiShare1 />
                                    </a>
                                 }
                              </h3>
                              {
                                 project.pro_start && project.pro_end !== ''
                                 && <p className="text-[16px] text-[#AAB0BC] font-[500] px-5 mb-[15px]">
                                    {project.pro_start} to {project.pro_end}
                                 </p>
                              }
                              <span className=" text-[16px] leading-7 border-l border-dashed border-l-black pl-[20px] flex flex-col gap-3 ">
                                 <p className='font-[700]'>
                                    Description
                                 </p>
                                 <p>
                                    {project.description}
                                 </p>
                                 <p className='font-[700]'>
                                    Roles and Responsibilities
                                    <p className="font-[500]">
                                       {project.responsibilities}
                                    </p>
                                 </p>
                                 <p >
                                    <span className='font-[700]'>
                                       Technologies:&nbsp;
                                    </span>
                                    <span className="font-500">
                                       {project.technologies}
                                    </span>
                                 </p>
                                 <p >
                                    <span className='font-[700]'>
                                       Industry:&nbsp;
                                    </span>
                                    <span className="font-500">
                                       {project.industry}
                                    </span>
                                 </p>
                              </span>
                           </span>
                        )
                     })
                  }
               </span>
            </div>

            {
               data?.experience === null
                  ? ''
                  : <div
                     className="flex flex-col lg:flex-row justify-between lg:justify-normal gap-6 lg:gap-24 lg:px-[70px] py-[15px] mt-[5px] "
                  >
                     <span
                        className="font-[700] text-[#343f52] text-[18px] w-[50%] lg:w-[25%]  flex items-center gap-2"
                     >
                        <MdWorkOutline />Work history
                     </span>
                     {
                        data.experience?.map((item) => {
                           return (
                              <div key={item.id}>
                                 <span
                                    className="text-[#60697b] text-[16px] block"
                                 >
                                    {item.title}
                                    {
                                       item.start !== ''
                                       && ` • ${item.start}`
                                    }
                                    {
                                       item.end !== '' && ` to ${item.end}`
                                    }
                                 </span>
                                 {
                                    item.description !== ''
                                    && <span className="text-[#60697b] text-[16px] block">
                                       Description: {item.description}
                                    </span>
                                 }
                              </div>
                           )
                        })
                     }
                  </div>
            }

            {
               data.profile_info?.soft_skill !== ''
               && <div className="flex flex-col lg:flex-row justify-between lg:justify-normal gap-6 lg:gap-24 lg:px-[70px] py-[15px] mt-[5px] ">
                  <span className="font-[700] text-[#343f52] text-[18px] w-[50%] lg:w-[25%]  flex items-center gap-2">
                     <RiSettingsLine />Soft Skills
                  </span>
                  <span className="flex flex-wrap gap-3">
                     {
                        data.profile_info?.soft_skill.split(',').map((skill) => {
                           return (
                              <span
                                 key={skill}
                                 className="w-fit cursor-pointer rounded-lg text-[#60697b] text-[14px] p-[10px] border border-solid border-[#d3d3d3] transition-all hover:bg-[#5271ff] hover:text-white"
                              >
                                 {skill}
                              </span>
                           )
                        })
                     }
                  </span>
               </div>}

            {
               data.certifications !== null
               && <div
                  className="flex flex-col lg:flex-row justify-between lg:justify-normal gap-6 lg:gap-24 lg:px-[70px] py-[15px] mt-[5px] "
               >
                  <span className="font-[700] text-[#343f52] text-[18px] w-[50%] lg:w-[25%]  flex items-center gap-2">
                     <BsPatchCheck />Certifications
                  </span>
                  {data.certifications?.map((item) => {
                     return (
                        <span
                           key={item.id}
                           className="text-[#60697b] text-[16px] flex flex-col lg:flex-row  gap-3 "
                        >
                           <span className="flex flex-col ">
                              <span>
                                 {item.name} {item.issuer !== '' ? `by ${item.issuer}` : ''}
                              </span>
                              <span className="text-[#aab0bc]">
                                 {item.year == 0 ? '' : item.year}
                              </span>
                           </span>
                        </span>
                     )
                  })}
               </div>
            }

            <div className="flex flex-col lg:flex-row justify-between lg:justify-normal gap-6 lg:gap-24 lg:px-[70px] py-[15px] mt-[5px] ">
               <span className="font-[700] text-[#343f52] text-[18px] w-[50%] lg:w-[25%]  flex items-center gap-2">
                  <MdOutlineSchool />Education
               </span>
               <span className="text-[#60697b] text-[16px] flex flex-col lg:flex-row  gap-3 ">
                  <span className="flex flex-col ">
                     <span>
                        {data.education?.map((item) => item.degree)} degree in {data.education?.map((item) => item.major)}
                     </span>
                     <span className="text-[#aab0bc]">
                        {data.education?.map((item) => item.univ)}
                     </span>
                     <span className="text-[#aab0bc]">
                        {data.education?.map((item) => item.edu_start)} to {data.education?.map((item) => item.edu_end)}
                     </span>
                  </span>

               </span>
            </div>

            <div className="flex flex-col lg:flex-row justify-between lg:justify-normal gap-4 lg:gap-24 lg:px-[70px] py-[15px] mt-[5px] ">
               <span className="font-[700] text-[#343f52] text-[18px] w-[50%] lg:w-[25%]  flex items-center gap-2">
                  <IoLanguageSharp />Language
               </span>
               <span className="text-[#60697b] text-[16px]">English - {data.profile_info?.english}</span>
            </div>
         </div>
         <Buttons
            id={data.profile_info?.id}
            u_id={data.profile_info?.unique_id}
            p_url={data.profile_info?.profile_url}
            f_name={data.profile_info?.first_name}
            l_name={data.profile_info?.last_name}
         />
      </main>
   )
}

export default Table
