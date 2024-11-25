import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import png1 from '../assets/Bike Photos/Remove bg/png1.png'
import png2 from '../assets/Bike Photos/Remove bg/png2.png'
import png3 from '../assets/Bike Photos/Remove bg/png3.jpg'
import png4 from '../assets/Bike Photos/Remove bg/png4.png'
import png5 from '../assets/Bike Photos/Remove bg/png5.png'
import png6 from '../assets/Bike Photos/Remove bg/png6.png'
import png7 from '../assets/Bike Photos/Remove bg/png7.png'
import Slide from './Slide';


const PopularBike = () => {
  return (
    <div className='bg-gray-50'>
        <div>
            <h1 className='text-2xl sm:text-4xl font-medium text-red-600 m-4 pt-3'>Trending Bikes</h1>
        </div>
        <div>
        <Swiper
        slidesPerView={3}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Slide img={png1} text="Aprilla Pegaso"></Slide></SwiperSlide>
        <SwiperSlide><Slide img={png2} text="Apache TVS"></Slide></SwiperSlide>
        <SwiperSlide><Slide img={png3} text="Hero HF Delux"></Slide></SwiperSlide>
        <SwiperSlide><Slide img={png4} text="Pusler 250"></Slide></SwiperSlide>
        <SwiperSlide><Slide img={png5} text="Bajaj Discover"></Slide></SwiperSlide>
        <SwiperSlide><Slide img={png6} text="Benelli TRK"></Slide></SwiperSlide>
        <SwiperSlide><Slide img={png7} text="Escort Rajdoot"></Slide></SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default PopularBike