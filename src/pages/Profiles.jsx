import UserList from "../components/user list/UserList"
import Aside from "../components/aside/Aside"
import Features from "../components/features/Features"

const Profiles = () => {
   return (
      <>
         <main className="container flex flex-col-reverse lg:flex-row  w-full pt-[60px]">
            <Aside />
            <UserList />
         </main>
         <Features />
      </>
   )
}

export default Profiles
