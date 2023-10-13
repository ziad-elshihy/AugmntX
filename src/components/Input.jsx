import { useState } from 'react'

const Input = ({ setSearchValue }) => {

   return (
      <input
         type="text"
         className=" mb-4 ser rounded-md border-solid border-2 w-full p-[15px] outline-none"
         placeholder="Search for skills"
         onChange={(e) => setSearchValue(e.target.value)}
      />
   )
}

export default Input



