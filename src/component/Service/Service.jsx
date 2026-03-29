import React from 'react'
import img from '../../assets/website/teapan-removebg-preview.png'


const Display = [
    {
        id:1,
        img:img,
        title:"Filter Coffee",
        write:'This coffee is ont of the world most popular beverages, made from roasted seeds of the coffee plant. it is rich aroma, bold flavor, and stimulating effects from caffeine have made it a daily ritual for millions.',
        aosDelay: "100",
    },
    {
        id:2,
        img:img,
        title:"Americano Coffee",
        write:'This coffee is ont of the world most popular beverages, made from roasted seeds of the coffee plant. it is rich aroma, bold flavor, and stimulating effects from caffeine have made it a daily ritual for millions.',
         aosDelay: "300",
    },
    {
        id:3,
        img:img,
        title:"Irish Coffee",
        write:'This coffee is ont of the world most popular beverages, made from roasted seeds of the coffee plant. it is rich aroma, bold flavor, and stimulating effects from caffeine have made it a daily ritual for millions.',
         aosDelay: "700",
    },


]


const Service = () => {
  return (
    <div className='container min-h-[560px] min-w-full bg-white xlg:px-20 py-9 overflow-hidden '>
        <div className="servicewrite">
            <h3 data-aos="fade-down" data-aos-delay="700" className=' sm:text-2xl text-[25px] text-center text-black capitalize font-[pacifico] mb-10'>best coffee for you</h3>
        </div>
  
        {/* display sercices */}
        <div className="displayContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  justify-center items-center ">
              {
                Display.map((item)=>{
                  return <div key={item.id} className=' sm:h-full sm:m-5  group p-4'>
                      <div data-aos="fade-down" data-aos-delay={item.aosDelay}  className='group-hover:bg-amber-200 bg-[#fbfcfa] p-4 shadow-2xl'>
                        <div className=' rounded group-hover:bg-amber-900'>
                            <img src={item.img} alt="" className='max-h-[200px] mx-auto group-hover:rotate-6 duration-300'/>
                        
                        <div className='text-center p-2'>
                            <h3 className='text-amber-900 md:text-2xl font-bold capitalize group-hover:text-white'>{item.title}</h3>
                            <p className='group-hover:text-white '>{item.write}</p>
                        </div>
                        </div>
                        </div>
                    </div>
                })
              }
        </div>

    </div>
  )
}

export default Service