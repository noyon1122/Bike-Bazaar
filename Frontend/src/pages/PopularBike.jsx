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


const PopularBike = () => {
  return (
    <div>
        <div>
            <h1>Trending Bikes for this month</h1>
        </div>
        <div>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>{png1}</SwiperSlide>
        <SwiperSlide>{png2}</SwiperSlide>
        <SwiperSlide>{png3}</SwiperSlide>
        <SwiperSlide>{png4}</SwiperSlide>
        <SwiperSlide>{png5}</SwiperSlide>
        <SwiperSlide>{png6}</SwiperSlide>
        <SwiperSlide>{png7}</SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default PopularBike