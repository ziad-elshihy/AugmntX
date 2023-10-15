import Header from "./components/header/Header"
import Footer from './components/footer/Footerr';
import Profiles from "./pages/Profiles";
import User from "./pages/User";
import { Route, Routes } from "react-router-dom";
import FixedButtons from "./components/FixedButtons";

const App = () => {
   return (
      <>
         <Header />
         <Routes>
            <Route path="/" element={<Profiles />} />
            <Route path="/user" element={<User />} />
         </Routes>
         <FixedButtons />
         <Footer />
      </>
   )
}

export default App
