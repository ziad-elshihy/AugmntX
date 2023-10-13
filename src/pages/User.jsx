import ContactSec from "../components/ConactUs/ContactSec"
import BasicInfo from "../components/info/BasicInfo"
import Table from "../components/table/Table"

const User = () => {
   return (
      <div className="min-h-screen ">
         <BasicInfo />
         <Table />
         <ContactSec />
      </div>
   )
}

export default User
