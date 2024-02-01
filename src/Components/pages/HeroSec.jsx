import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import banner1 from '../../assets/banner-3.jpg'
import banner2 from '../../assets/banner-4.jpg'

function HeroSec() {
  return (
    <div>
      <div className='md:flex justify-between items-center mt-4'>
          <div className='text-center md:mx-20'>
            <h2 className='text-3xl font-extrabold '>Rings Packs And <br/> Matching Sets</h2>
            <p className='py-3'>NOW ONLY $7 - LIMITED TIME ONLY</p>
            <button className='text-white bg-black py-2 px-5  rounded-full mb-4'>Shop Now</button>
          </div>
          <div className='flex gap-3 mb-4'>
            <div>
              <img src={banner1} alt="product"/>
            </div>
            <div>
              <img src={banner2} alt="product" />
            </div>
          </div>  
      </div>

    </div>
  )
}

export default HeroSec