import { AiOutlineMessage, AiOutlineDownload } from 'react-icons/ai'
import { PiShareFat } from 'react-icons/pi'


const Buttons = () => {
   return (
      <div className='mx-auto py-[35px] gap-2 flex justify-between w-full lg:w-[50%]'>
         <button className='hover:translate-y-[-5px] transition delay-100 '>
            <a
               href="#"
               className='w-fit transition delay-100 font-[700] hover:text-white rounded-lg hover:bg-[#5271FF] flex items-center justify-center gap-1 text-[14px] md:text-[16px] lg:text-[16px] px-[20px]'
            >
               <PiShareFat /> Share
            </a>
         </button>
         <button className='hover:translate-y-[-5px] transition delay-100 '>
            <a
               href="#"
               className='w-fit transition delay-100 font-[700] hover:text-white rounded-lg hover:bg-[#5271FF] flex items-center justify-center gap-1 text-[14px] md:text-[16px] lg:text-[186x] px-[20px]'
            >
               <AiOutlineMessage />Hire {name}
            </a>
         </button>
         <button className='hover:translate-y-[-5px] transition delay-100'>
            <a
               href='Sr Python Developer 7 years ,DA R - AXO2408 - AugmntX'
               download='PDF'
               className='w-fit transition delay-100 font-[700]  hover:text-white rounded-lg hover:bg-[#5271FF] flex items-center justify-center gap-1 text-[14px] md:text-[16px] lg:text-[16px] px-[20px]'
            >
               <AiOutlineDownload />Download PDF
            </a>
         </button>
      </div>
   )
}

export default Buttons
