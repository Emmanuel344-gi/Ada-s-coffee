import React from 'react'
import seed from '../../assets/website/seed1.jpg'
import Store1 from '../../assets/website/store1-removebg-preview.png'
import Store2 from '../../assets/website/appstore1-removebg-preview.png'


const Storebg = {
    backgroundImage : `url(${seed})`,
    backgroundColor: '#fbfcfa',
    backgroundRepeat: 'no-repeat',
    backgroundPosition:'center',
    backgroundSize :'cover',
    
}
function Store() {
  return (
    <div  style={Storebg} className =' h-[350px] min-w-full px-6 sm:px-20 sm:py-22 py-4 overflow-hidden'>
        <div data-aos="fade-up">
            <h4 className='text-white text-3xl font-bold'>Coffee  cafe is available for <br />Android and Ios</h4>

            <div className='flex '>
                <img className='h-[200px] w-[200px]' src={Store1} alt="" />
            </div>
        </div>


    </div>
  )
}

export default Store