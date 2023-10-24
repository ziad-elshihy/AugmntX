import Header from "./components/header/Header"
import Footer from './components/footer/Footerr';
import Profiles from "./pages/Profiles";
import User from "./pages/User";
import { Route, Routes } from "react-router-dom";
import FixedButtons from "./components/FixedButtons";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import ForgotPwd from "./pages/ForgotPwd";

const App = () => {
   return (
      <>
         <Header />
         <Routes>
            <Route path="/" element={<Profiles />} />
            <Route path="profile">
               <Route path=":profile_url/:unique_id" element={<User />} />
            </Route>
            <Route path="/login" element={<LogIn />} />
            <Route path="/hire" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPwd />} />
         </Routes>
         <FixedButtons />
         <Footer />
      </>
   )
}

export default App
