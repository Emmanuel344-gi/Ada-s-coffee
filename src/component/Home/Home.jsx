import React from 'react'
import teapan from '../../assets/website/teapan-removebg-preview.png'


function Home() {
  return (<>
     
    <div className=' min-h-[440px] grid  grid-cols-1 sm:grid-cols-2  bg-[#522b12]  min-h-[450px] min-w-full px-2 sm:px-20 py-[60px] sm:py-22 overflow-hidden'>
        
       {/* home write up */}
        <div className="write order-2 md:order-1">
            <h3 data-aos="fade-up" className='font-bold text-white text-3xl sm:text-6xl max-w-[500px] px-2'>
                we serve the richest <span className='text-amber-800 font-[pacifico]'>coffee</span> in the city
            </h3>
            <button data-aos="fade-up" data-aos-delay="700"  className='bg-amber-900 rounded-full p-1 text-white px-2 mt-5 capitalize font-semibold mx-3 '>coffe and code</button>




          {/* 
       home image */}
        </div>
        <div data-aos="zoom-in" className="image relative order-1 sm:order-2">
          <img  src={teapan} alt="" className='w-[300px] w-[400px]   sm:scale-110 mx-auto spin' />

          <div className="imagebutton">
              <button data-aos="fade-left" data-aos-delay="700" className='bg-amber-900 rounded md:hidden p-1 text-white px-2 mt-5 capitalize font-semibold absolute left-0 top-[-30px] md:left-10 md:top-10 xl:block'>best coffee</button>

            <button data-aos="fade-right" data-aos-delay="700" className='bg-amber-900 rounded p-1 text-white px-2 mt-5 capitalize font-semibold absolute right-0 bottom-0.5  md:right-10 md:bottom-10 md:hidden xl:flex'>chef kachi</button>

          </div>
        </div>
    </div>
    </>
  )
}

export default Home