// import React from 'react'

import Article from "../components/article/Article"
import Aside from "../components/aside/Aside"
import Features from "../components/features/Features"

const Profiles = () => {
   return (
      <>
         <main className="container flex flex-col-reverse lg:flex-row  w-full pt-[60px]">
            <Aside />
            <Article />
         </main>
         <Features />
      </>
   )
}

export default Profiles
