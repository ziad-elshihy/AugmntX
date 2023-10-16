/* eslint-disable react/prop-types */
import Buttons from "../Buttons"

import { BsCalendarCheck, BsCodeSlash } from 'react-icons/bs'
import { CgSandClock } from 'react-icons/cg'
import { AiOutlineSetting } from 'react-icons/ai'
import { MdWorkOutline, MdOutlineSchool } from 'react-icons/md'
import { IoLanguageSharp } from 'react-icons/io5'

const Table = ({ data }) => {

   return (
      <main className='container'>
         <Buttons />
         <div className="border-y border-solid border-slate-300 divide-y divide-slate-300 w-full min-h-screen py-5 ">
            <div className="flex justify-between lg:justify-normal lg:gap-24 lg:px-[70px] py-[15px] mt-[5px] ">
               <span className="font-[700] text-[#343f52] text-[18px] w-[50%] lg:w-[25%] flex items-center gap-3">
                  <BsCalendarCheck />Availability
               </span>
               <span className="text-[#60697b] text-[16px]">{data.profile_info?.comittment}</span>
            </div>


            <div className="flex justify-between lg:justify-normal lg:gap-24 lg:px-[70px] py-[15px] mt-[5px]">
               <span className="font-[700] text-[#343f52] text-[18px] w-[70%] lg:w-[25%]  flex items-center gap-2">
                  <CgSandClock />Total experience
               </span>
               <span className="text-[#60697b] text-[16px]">{data.profile_info?.experience} years</span>
            </div>


            <div className="flex flex-col lg:flex-row justify-between lg:justify-normal gap-6 lg:gap-24 items-start lg:px-[70px] py-[15px] mt-[5px]  ">
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
                              {skill.year} Years
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
                              <h3 className="text-black font-[700] my-[15px] pl-[20px] title">
                                 {project.title}
                              </h3>
                              <span className=" text-[16px] block leading-7 border-l border-dashed border-l-black pl-[20px] ">
                                 <p className='font-[700]'>
                                    Description
                                 </p>
                                 <p>
                                    {project.description}
                                 </p>
                                 <p className='font-[700]'>
                                    Roles and Responsibilities
                                 </p>
                                 <p>
                                    {project.responsibilities}
                                 </p>
                                 <p className='font-[700]'>
                                    Technologies:&nbsp;
                                    <span className="font-500">
                                       {project.technologies}
                                    </span>
                                 </p>
                                 <p className='font-[700]'>
                                    Industry:&nbsp;
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


            <div className="flex justify-between lg:justify-normal lg:gap-24 lg:px-[70px] py-[15px] mt-[5px] ">
               <span className="font-[700] text-[#343f52] text-[18px] w-[50%] lg:w-[25%]  flex items-center gap-2">
                  <MdWorkOutline />Work history
               </span>
               <span className="text-[#60697b] text-[16px]">
                  {
                     data.experience === null
                        ? 'None'
                        : data.experience?.map((item) => item.title)
                  }
               </span>
            </div>

            <div className="flex justify-between items-start lg:justify-normal lg:gap-24 lg:px-[70px] py-[15px] mt-[5px] ">
               <span className="font-[700] text-[#343f52] text-[18px] w-[25%]  flex items-center gap-2">
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

            <div className="flex justify-between lg:justify-normal lg:gap-24 lg:px-[70px] py-[15px] mt-[5px] ">
               <span className="font-[700] text-[#343f52] text-[18px] w-[50%] lg:w-[25%]  flex items-center gap-2">
                  <IoLanguageSharp />Language
               </span>
               <span className="text-[#60697b] text-[16px]">English - {data.profile_info?.english}</span>
            </div>
         </div>
         <Buttons />
      </main>
   )
}

export default Table
