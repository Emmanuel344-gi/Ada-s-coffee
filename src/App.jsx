
import Navbar from './component/Navbar/Navbar'
import Home from './component/Home/Home'
import Service from './component/Service/Service.jsx'
import About from './component/About/About.jsx'
import Store from './component/Store/Store.jsx'
import Testimonial from './component/Testimonial/Testimonial.jsx'
import Footer from './component/Footer/Footer.jsx'
 import { useEffect } from 'react'
import AOS from "aos"
 import "aos/dist/aos.css"



function App() {
   useEffect(()=>{
    AOS.init({
      offset:100,
      delay:100,
      duration:700,
      easing: "ease-in"
    })
   })
    return(
      <div className='overflow-x-hidden'>
<Navbar/>
<Home/>
<Service/>
<About/>
<Store/>
<Testimonial/>
<Footer/>
</div>
    )


  
}

export default App
