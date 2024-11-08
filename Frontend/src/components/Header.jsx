import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react'
import Banner from '../assets/Bike Photos/Banner.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='flex flex-col md:flex-row bg-[#010005] text-white'>
      <div className='w-full sm:w-1/2 flex flex-col justify-center items-center gap-1 sm:gap-3'>
        <p className='mt-4 sm:mt-0 text-xl sm:text-2xl'>Ride and Live</p>
        <h1 className='text-3xl sm:text-5xl font-medium' >Enjoy The Ride</h1>
        <Link><button className="btn btn-outline btn-secondary mt-5">Explore Ride</button></Link>
      </div>
      <div>
        <img src={Banner} alt="" />
       
        
      </div>
    </div>
  )
}

export default Header