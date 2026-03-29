import React from 'react'
import footerbg from '../../assets/website/footerc.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const Footerbg = {
    backgroundImage : `url(${footerbg})`,
    backgroundColor: '#fbfcfa',
    backgroundRepeat: 'no-repeat',
    backgroundPosition:'center',
    backgroundSize :'cover',
    
}

function Footer() {
  return (
    <div style={Footerbg} className='min-h-[580px] min-w-full px-5 py-4 sm:px-20 sm:py-22 overflow-hidden '>
        <div className='flex flex-col md:flex-row md:gap-42 text-white'>
            {/* coffee section */}
            <div>
                <h3  data-aos="fade-down" className='font-[pacifico] text-4xl font-bold mb-2'>coffee cafe</h3>
                <p data-aos="fade-down" className='max-w-[300px] capitalize font-semibold'>i just love the result of all the codes i have writing it give me fun and it makes me happy</p>

                <button data-aos="fade-right" data-aos-delay="400" className='bg-amber-800 border-1 border-white hover:bg-amber-900 mt-3 rounded py-1 font-semibold px-3'>visit my linkin</button>

            </div>
           {/* section main  */}
           <div className='flex gap-15'>
            <div className=''>
                
            <ul data-aos="zoom-in">
                <h5 className='font-bold text-lg'>important links</h5>
                <li className='mb-5 font-semibold'><a href="">Home</a></li>
                <li className='mb-5 font-semibold'><a href="">About</a></li>
                <li className='mb-5 font-semibold'><a href="">Contact</a></li>
                <li className='mb-5 font-semibold'><a href="">Bog</a></li>
                <li className='mb-5 font-semibold'><a href="">Service</a></li>
            </ul>
            </div>
            <div>
            
            <ul  data-aos="zoom-in">
                 <h5 className='font-bold text-lg'>Quick links</h5>
                <li className='mb-5 font-semibold'><a href="">Home</a></li>
                <li className='mb-5 font-semibold'><a href="">About</a></li>
                <li className='mb-5 font-semibold'><a href="">Contact</a></li>
                <li className='mb-5 font-semibold'><a href="">Bog</a></li>
                <li className='mb-5 font-semibold'><a href="">Service</a></li>
            </ul>

            </div>
           </div>


           {/* other section */}
           <div>
            <h2 data-aos="fade-left"  className='font-bold text-lg' font-semibold>Address</h2>
            <h3 data-aos="fade-left" >Lagos, Nigeria</h3>
            <p data-aos="fade-right"  className='flex gap-1.5 text-2xl mt-2.5'>
                <FaFacebook />
                <FaLinkedin />
                <FaInstagram />

            </p>

           </div>




        </div>


    </div>
  )
}

export default Footer