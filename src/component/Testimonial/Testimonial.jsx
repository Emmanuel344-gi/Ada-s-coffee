import React from 'react'
import Slider from "react-slick";
import classyw1 from '../../assets/website/classw1.jpg'
import classyw2 from '../../assets/website/classw2.jpg'
import classym1 from '../../assets/website/classym1.jpg'
import classym2 from '../../assets/website/classym2.jpg'

const TestimonialData = [
    {
      id:1,
      name:'emerie',
      letter:'i want to truly testify that this coffee is one of the amazing coffee in Nigeria, it has foreign taste which i can say only once tasted once in a life time in canada.s',
      img: classym1,
    },
    {
      id:2,
      name:'Amara',
      letter:'i want to truly testify that this coffee is one of the amazing coffee in Nigeria, it has foreign taste which i can say only once tasted once in a life time in canada.',
      img:classyw1,
    },
{
      id:3,
      name:'Emmanuel',
      letter:'i want to truly testify that this coffee is one of the amazing coffee in Nigeria, it has foreign taste which i can say only once tasted once in a life time in canada.',
      img:classym2,
    },
{
      id:4,
      name:'Jessy',
      letter:'i want to truly testify that this coffee is one of the amazing coffee in Nigeria, it has foreign taste which i can say only once tasted once in a life time in canada.',
      img: classyw2
    },

]

const Testimonial = () => {
//   this is for react-slick for it configuration
  const settings = {
    dots: true,          // navigation dots
  arrows: false,        // next/prev arrows
  speed: 500,          // transition speed
  autoplay: true,      // auto slide
  autoplaySpeed: 2000, // delay
  slidesToShow: 3,  
  cssEase:"linear" ,  // visible slides
  slidesToScroll: 1, 
  pauseOnHover:true,
  pauseOnFocus: true,
  responsive: [
    {
      breakpoint: 10000,
      settings: { slidesToShow: 3,
        slidesToScroll:1,
        infinite:true,
       }
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2,
        slidesToScroll:1,
        initialSlide:2,
       }
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 ,
        slidesToScroll:1,
      }
    }
  ]  // scroll count
  };

  return (
    <div className='container min-h-[460px] min-w-full bg-white sm:px-20 sm:py-9 overflow-hidden '>
         <div className="testimonial">
            <h3 data-aos="fade-down" className=' text-[25px] sm:text-2xl text-center text-black capitalize font-[pacifico] my-5'>testimonial</h3>
        </div>

        {/* carousel section */}
        <Slider {...settings}>
 {
            TestimonialData.map((data)=>{
                return(
                    <div key={data.id}>
                        <div data-aos="zoom-in" className='bg-[#d8cbc4] shadow mx-2 p-4 relative'>
                             <div className='flex flex-col gap-4'> 
                            <img src={data.img} alt="" className='w-[100px] h-[100px] rounded-full'/>
                      <p className='leading-4 font-light'>{data.letter}</p>
                      <h6 className='font-medium text-2xl font-[pacifico]'>{data.name}</h6>
                      <p className='absolute text-9xl font-serif top-[-5px] right-5 text-black/20'>,,</p>
                        </div>

                        </div>
                       
                      


                    </div>
                )
            })
        }




        </Slider>
        
         
        </div>

 


  )
}

export default Testimonial