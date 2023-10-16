import Buttons from "../Buttons"

import { BsCalendarCheck, BsCodeSlash } from 'react-icons/bs'
import { CgSandClock } from 'react-icons/cg'
import { AiOutlineSetting } from 'react-icons/ai'
import { MdWorkOutline, MdOutlineSchool } from 'react-icons/md'
import { IoLanguageSharp } from 'react-icons/io5'

const Table = () => {
   return (
      <main className='container'>
         <Buttons />
         <div className="border-y border-solid border-slate-300 divide-y divide-slate-300 w-full min-h-screen py-5 ">
            <div className="flex justify-between lg:justify-normal lg:gap-24 lg:px-[70px] py-[15px] mt-[5px] ">
               <span className="font-[700] text-[#343f52] text-[18px] w-[50%] lg:w-[25%] flex items-center gap-3">
                  <BsCalendarCheck />Availability
               </span>
               <span className="text-[#60697b] text-[16px]">Full-time</span>
            </div>


            <div className="flex justify-between lg:justify-normal lg:gap-24 lg:px-[70px] py-[15px] mt-[5px]">
               <span className="font-[700] text-[#343f52] text-[18px] w-[70%] lg:w-[25%]  flex items-center gap-2">
                  <CgSandClock />Total experience
               </span>
               <span className="text-[#60697b] text-[16px]">7 years</span>
            </div>


            <div className="flex flex-col lg:flex-row justify-between lg:justify-normal gap-6 lg:gap-24 items-start lg:px-[70px] py-[15px] mt-[5px]  ">
               <span className="font-[700] text-[#343f52] text-[18px] w-[50%] lg:w-[25%]   flex items-center gap-2">
                  <BsCodeSlash />Technical skills
               </span>
               <span className="flex justify-between w-full lg:w-[60%] lg:gap-10">
                  <span className="text-[#60697b] text-[16px] flex flex-col gap-4 ">
                     <span>
                        Python
                     </span>
                     <span>
                        Flask
                     </span>
                     <span>
                        Django
                     </span>
                     <span>
                        Django REST Framework
                     </span>
                     <span>
                        GraphQL
                     </span>
                  </span>
                  <span className="text-[#60697b] text-[16px] flex flex-col gap-4">
                     <span>
                        7 Years
                     </span>
                     <span>
                        7 Years
                     </span>
                     <span>
                        7 Years
                     </span>
                     <span>
                        7 Years
                     </span>
                     <span>
                        7 Years
                     </span>
                  </span>
               </span>
            </div>


            <div className="flex justify-between lg:justify-normal gap-16 lg:gap-24 lg:px-[70px] py-[15px] mt-[5px] items-start flex-col lg:flex-row ">
               <span className="font-[700] text-[#343f52] text-[18px] w-[50%] lg:w-[25%]   flex items-center gap-2">
                  <AiOutlineSetting />Projects
               </span>
               <span className="text-[#60697b] text-[18px] w-full lg:w-[65%] ">
                  <span>
                     <h3 className="text-black font-[700] mb-[15px] pl-[20px] title">
                        CLEARAGO
                     </h3>
                     <span className=" text-[16px] block leading-7 border-l border-dashed border-l-black pl-[20px] ">
                        <p className='font-[700]'>
                           Description
                        </p>
                        <p>
                           This project is all about all types of waste containers so customers can buy containers on rent throughout Germany. ● This project is built in Backend with Python Django Rest API and Frontend with Angular. ● In this project I'm working on the backend side where I create API and handle the flow of orders creating components and adding new models as per requirements. ● In the backend we used django oscarmode. ● I'm working on binding the API and fixing small issues in angular. ● In this project we crawl competitor website data and compare the pricing and we showed in our project. ● To create Automated backups and Invoice generation and upload invoice on S3 bucket used AWS Lambda. ● To create reports of daily web server logs used AWS Data Pipelines along with AWS S3 bucket. ● Technology Stack: Django REST Framework, PostGreSQL, Celery, Swagger (For Documentation)
                        </p>
                        <p className='font-[700]'>
                           Roles and Responsibilities
                        </p>
                        <p>
                           Worked as a Sr Backend Developer and managed a team of 4 developers. Handle the client communication.
                        </p>
                        <p className='font-[700]'>
                           Technologies:
                           <span className="font-500">
                              Python
                           </span>
                        </p>
                        <p className='font-[700]'>
                           Industry:
                           <span className="font-500">
                              Ecommerce
                           </span>
                        </p>

                     </span>
                  </span>
                  <span>
                     <h3 className="text-black font-[700] my-[15px] pl-[20px] title">
                        Food Delivery App
                     </h3>
                     <span className="text-[16px] block leading-7 border-l border-dashed border-l-black pl-[20px]">
                        <p className='font-[700]'>
                           Description
                        </p>
                        <p>
                           Developed in Django REST Framework, This have developed backend(APIs) of 3 apps (for customer, for vendor, for delivery), Developed only backend using APIs for all the types of scenarios like store-display, calculations, trending products, bill calculations for all 3 apps
                        </p>
                        <p className='font-[700]'>
                           Roles and Responsibilities
                        </p>
                        <p>
                           Worked as a Sr Backend Developer and managed a team of 3 developers. Handle the client communication.
                        </p>
                        <p>
                           Technologies: Django, Django REST Framework, PostGreSQL Celery, Swagger
                        </p>
                        <p className='font-[700]'>
                           Industry:
                           <span className='font-[500]'>
                              Food Delivery
                           </span>
                        </p>
                     </span>
                  </span>
               </span>
            </div>


            <div className="flex justify-between lg:justify-normal lg:gap-24 lg:px-[70px] py-[15px] mt-[5px] ">
               <span className="font-[700] text-[#343f52] text-[18px] w-[50%] lg:w-[25%]  flex items-center gap-2">
                  <MdWorkOutline />Work history
               </span>
               <span className="text-[#60697b] text-[16px]">Sr Python Developer</span>
            </div>

            <div className="flex justify-between items-start lg:justify-normal lg:gap-24 lg:px-[70px] py-[15px] mt-[5px] ">
               <span className="font-[700] text-[#343f52] text-[18px] w-[25%]  flex items-center gap-2">
                  <MdOutlineSchool />Education
               </span>
               <span className="text-[#60697b] text-[16px] flex flex-col lg:flex-row  gap-3 ">
                  <span className="flex flex-col ">
                     <span>
                        Bachelors degree in IT
                     </span>
                     <span className="text-[#aab0bc]">
                        GTU
                     </span>
                     <span className="text-[#aab0bc]">
                        2012 to 2016
                     </span>
                  </span>

               </span>
            </div>

            <div className="flex justify-between lg:justify-normal lg:gap-24 lg:px-[70px] py-[15px] mt-[5px] ">
               <span className="font-[700] text-[#343f52] text-[18px] w-[50%] lg:w-[25%]  flex items-center gap-2">
                  <IoLanguageSharp />Language
               </span>
               <span className="text-[#60697b] text-[16px]">English - Advanced</span>
            </div>
         </div>
         <Buttons />
      </main>
   )
}

export default Table
