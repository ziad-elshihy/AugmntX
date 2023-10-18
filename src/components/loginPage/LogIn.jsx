import LogInGoogle from "../LogInGoogle"

const LogIn = () => {

   return (
      <main className="min-h-screen bg-[#f3fafe] py-[70px] grid place-items-center">
         <div className="container flex items-center justify-center flex-col pt-[25px] ">
            <div className=" md:w-[60%] lg:w-[45%] bg-white shadow-2xl rounded-md py-[50px] px-[60px]">
               <h1
                  className="text-[#343f52] font-[700] text-[22px] mb-[25px] leading-8"
               >
                  Sign in to start your<br />session
               </h1>
               <div className="flex flex-col gap-4 mb-2">
                  <input type="text" placeholder="Email" className="shadow px-[20px] w-full text-[#60697b] font-[500] bg-[#fefefe] border rounded-md border-solid border-[#083c8212] outline-none transition-all focus:border-[#afdcf8] placeholder:text-sm" />
                  <input type="password" placeholder="password" className="shadow px-[20px] w-full text-[#60697b] font-[500] bg-[#fefefe] border rounded-md border-solid border-[#083c8212] outline-none transition-all focus:border-[#afdcf8] placeholder:text-sm" />
                  <button className="mt-4">
                     <a href="#" className=' relative text-white bg-[#5271FF] rounded-md text-[16px] font-[700] py-[14px] px-[25px] btn-hire' >
                        Continue
                     </a>
                  </button>
                  <a href="#" className="text-[#5271FF] text-4 font-[700] text-center hover:text-[#343f52]">
                     Forgot password?
                  </a>
               </div>
               <div className="py-[10px] mt-2 flex flex-col items-center justify-center gap-3">
                  <h2 className="font-[700] text-xs text-[#60697b] text-center">
                     Or sign in with
                  </h2>
                     <LogInGoogle />
               </div>
            </div>
         </div>
         <div className="mt-[15px] text-[#60697B] text-[16px] text-center">
            <p>
               Don&apos;t have an account? <a href="#" className="text-[#5271FF]">Sign up</a>
            </p>
            <p>
               Please <a href="#" className="text-[#5271FF]">Contact us</a> if you require any assistance
            </p>
         </div>
      </main>
   )
}

export default LogIn
