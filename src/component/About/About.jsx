import React from 'react'
import coffee1 from '../../assets/website/coffee1-removebg-preview.png'
import coffee2 from '../../assets/website/coffee2-removebg-preview.png'
import bgImage from '../../assets/website/aesthetic1-removebg-preview.png'
import { PiCoffeeBeanFill } from "react-icons/pi";
import { SiBuymeacoffee } from "react-icons/si";
import { FaPlateWheat } from "react-icons/fa6";



const Aboutbg = {
    backgroundImage : `url(${bgImage})`,
    backgroundColor: '#fbfcfa',
    backgroundRepeat: 'no-repeat',
    backgroundPosition:'center',
    backgroundSize :'cover',
    
}
   


function About() {
  return (
    <div style={Aboutbg} className='min-h-[580px] min-w-full p-4 sm:px-20 sm:py-22 overflow-hidden'>
         <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center'>  
        {/* Image Section */}
        <div >
           <img data-aos="zoom-in" src={coffee1} alt="" className='w-[300px]  sm:w-[450px]  sm:scale-110 mx-auto' />
        </div>
        
        {/* writeup section */}
        <div className=''>
        <h2 data-aos="fade-up "  className='font-[pacifico] text-[25px] sm:text-4xl capitalize my-3'>Premium blend coffee</h2>
        <p  data-aos="fade-up " className='my-4'>Our coffee originate from berries produced by the coffee plant.These berries are harvested, processed, dried, and roasted to developed their. </p>

        <div className='flex gap-3 sm:gap-15 mb'>
            <div  > 
            <p  data-aos ="fade-up" data-aos-delay="300" className='flex md:text-[20px] mb-8 gap-5'>
                 <SiBuymeacoffee className='bg-blue-300 rounded p-2 text-[40px]'/>
                  <span>Premium coffee</span>
            </p>
            <p  data-aos ="fade-up" data-aos-delay="500" className='flex md:text-[20px] mb-8 gap-5'>
                <FaPlateWheat className='bg-red-300 rounded p-2 text-[40px]'/>
                <span>cold coffee</span>

            </p>
            <p data-aos ="fade-up" data-aos-delay="700"  className='flex md:text-[20px] mb-8 gap-5'>
                <PiCoffeeBeanFill className='bg-yellow-300 rounded p-2 text-[30px]' />
                  <span>hot coffee</span>
            </p>
            
               
             
                
              
            </div>
            <div data-aos="fade-left" className=' md:max-w-[340px] pl-5 border-l-4  border-amber-950'>
                <h3 className='font-[pacifico]'>Tea Lover</h3>
                <p className='leading-3.5 md:leading-5'>
               For a tea lover, every cup tells a story. Whether it is the bold richness of black tea, the soothing calm of chammomile, or the refreshing lightnesso of green tea, each type offers a unique mood and moment.
                </p>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About