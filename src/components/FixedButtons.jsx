import { BiMessage } from 'react-icons/bi'
import { IoLogoWhatsapp } from 'react-icons/io5'
import { GrMail } from 'react-icons/gr'
import { FaLongArrowAltUp } from 'react-icons/fa'
import { useEffect, useState } from 'react'


const FixedButtons = () => {
   const [show, setShow] = useState(false)
   const [scroll, setScroll] = useState(0)

   const showButton = () => {
      if (window.scrollY > 100) {
         setShow(true)
      } else {
         setShow(false)
      }
   }

   const scrollToTop = () => {
      scrollTo({
         top: 0,
         behavior: 'smooth'
      })
   }
   const calcScroll = () => {
      const ScrollValue = document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const lastValue = Math.round((ScrollValue * 100) / height)
      setScroll(lastValue)
   }


useEffect(() => {
   window.addEventListener('scroll', showButton)
   window.addEventListener('scroll', calcScroll)
}, [])

   const style = {
      background: `conic-gradient(#5271ff ${scroll}% , #f1eaea ${scroll}%)`
   }

   return (
      <>
         <div className='icon-1 fixed z-50 bottom-[20%] right-9 flex flex-col items-center'>
            <div className='show'>
               <span className=' bg-gradient-to-r from-[#4ECDC4] to-[#556270] text-white block cursor-pointer rounded-[40%] p-[5px]'>
                  <GrMail size={30} className='' />
               </span>
               <span className='bg-green-400 text-white block cursor-pointer rounded-[40%] p-[5px]'>
                  <IoLogoWhatsapp size={30} />
               </span>
            </div>
            <div className='p-[5px] icon rounded-[40%] mt-5 text-[#5271ff] cursor-pointer'>
               <BiMessage size={30} />
            </div>
         </div>
         <div onClick={scrollToTop} style={style} className={`cursor-pointer fixed z-50 bottom-[10%] transition-all ${show ? 'right-9' : 'right-[-10%]'}  w-11 h-11 hidden md:grid lg:grid  place-items-center rounded-full`}>
            <span className=' relative block bg-white rounded-full p-5'>
               <FaLongArrowAltUp className='text-[#5271ff] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] ' />
            </span>
         </div>
      </>
   )
}

export default FixedButtons
