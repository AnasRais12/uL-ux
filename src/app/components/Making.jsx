import React from 'react'
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Making = () => {
   var settings = {
        dots: true,
         infinite: true,
        width: '30%',
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
   }
      

  return (
    <>
    <div className='w-full py-20 px-10 bg-gray-300 mb-[80px] hidden sm:block '>
     <div className='slide text-center   py-5 font-bold text-[30px] px-20 w-full ' style={{  margin: '0 auto'  }}>
       <Slider {...settings}>  
       <div className='flex justify-center items-center px-[48%] '>
        <h1  className='text-green-950 '>Ole</h1>
        </div>
        <h3 className=' text-orange-800 '>Discover Comfort, Discover Confidence</h3>
        <h3 className='text-yellow-900'>Crafted with Care Designed for You</h3>
        <h3 className='text-blue-950'>Elevating Everyday Essentials</h3>
        <h3 className='text-slate-900'>Where Quality Meets Style</h3>
        <h3 className='text-slate-950'>Empowering Your Lifestyle Choices</h3>
        <h3 className='text-red-950'>Inspiring Every Moment</h3>
       
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Making