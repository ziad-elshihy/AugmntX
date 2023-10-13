import Article from "./components/article/Article"
import Aside from "./components/aside/Aside"
import Header from "./components/header/Header"
import Footer from './components/footer/Footerr';
import Features from "./components/features/Features";

const App = () => {
   return (
      <>
         <Header />
         <main className="container flex flex-col-reverse lg:flex-row  w-full pt-[60px]">
               <Aside />
               <Article />
         </main>
         <Features />
         <Footer />
      </>
   )
}

export default App
