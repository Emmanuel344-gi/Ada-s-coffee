import React from 'react'
import teapan from '../../assets/website/teapan.jpg'
import tealogo from '../../assets/website/realtea-removebg-preview.png'
import { BsCupHot } from "react-icons/bs";

const Menulist =[
    {
        id:1,
        name:'Home',
        link: '/Home'
    },    {
        id:2,
        name:'Service',
        link: '/service'
    },
     {
        id:3,
        name:'About',
        link: '/about'
    },
     {
        id:4,
        name:'Contact',
        link: '/contact'
    }

]

function Navbar() {
  return (
    <div className=''>
        <div className="container bg-amber-900  min-w-full px-3 sm:px-12 flex items-center justify-between ">
            {/* navbar icon and name */}
            <div data-aos="fade-down"  className='flex  justify-between sm:items-center gap-2'>
                <div className="img ">
                    <img src={tealogo} alt="" className='w-[50px] sm:max-w-20' />
                </div>
                <p className='text-white font-bold  text-[20px] sm:text-3xl font-[pacifico] pt-3'>coffee cafe</p>

            </div>

            {/* navbar list items */}
            <div>
                <div data-aos="fade-down" data-aos-delay="700" className='flex '>
                     <ul className='flex '>
                       {Menulist.map((item)=>{
                        return(
                            <li className='mx-4 hidden md:flex'>
                                <a href={item.link} className='text-white font-semibold'>{item.name}</a>
                            </li>
                        )
                       })}
                            <div className='flex p-1 rounded-full bg-amber-800 border-1 border-white hover:bg-amber-900 '>
                    <button className='text-white font-semibold mr-2'>Order</button>
               
                <BsCupHot className='text-2xl text-white' />
              </div>
                     </ul>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar