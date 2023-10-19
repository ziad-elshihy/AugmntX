/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import BasicInfo from "../components/info/BasicInfo"
import TableDetails from "../components/TableDetails"
import ContactSec from "../components/Contact/ContactSec"

const User = () => {
   const params = useParams()
   const [data, setData] = useState({})

   const fetchUserData = async () => {
      try {
         const { data } = await axios.get(`https://augmntx.com/api/profile/${params.unique_id}`)
         setData(data)
      } catch (err) {
         console.log("Error" + err)
      }
   }
   
   useEffect(() => {
      fetchUserData()
   }, [params.unique_id])



   return (
      <div className="min-h-screen ">
         <BasicInfo data={data} />
         <TableDetails data={data} />
         <ContactSec />
      </div>
   )
}

export default User
