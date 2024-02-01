import React from 'react';
import Img from '../assets/footerbanner.jpg';
import Img2 from '../assets/payments.png';



function Footer() {
  return (
    <footer className='bg-black text-white px-5'>
        <div className='md:flex py-7 border-b' >
            <div className='md:w-max'>
                <h1 className="text-5xl cursor-pointer pb-4">JAROTI</h1>
                <p className='md:w-9/12'>
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.
                </p>
            </div>
            <div className='md:w-4/5'>
                <h2 className='text-2xl font-bold py-5 md:py-4'>NEWSLETTER SIGN UP</h2>
                <p>Enjoy 15% off* your first order when you sign up to our newsletter</p>
                <div className='relative w-full mt-3'>
                    <input type='text' placeholder='Your e-mail address' className='bg-gray-500 w-full p-3 rounded-full outline-none' ></input>
                    <button className='bg-black py-2 px-3 rounded-full absolute top-1 right-2 hover:bg-white hover:text-black '>SUBSCRIBE</button>
                </div>
            </div>
        </div>
        <div className='py-10 md:flex gap-20 flex-wrap'>
            <div className='pb-8'>
                <ul className='cursor-pointer'>
                    <li><h2 className='pb-3 text-1xl font-bold'>DELIVERY & RETURN</h2></li>
                    <li className='pb-2 hover:text-gray-400'>Check Order</li>
                    <li className='pb-2 hover:text-gray-400'>Delivery & Collection</li>
                    <li className='pb-2 hover:text-gray-400'>Careers</li>
                    <li className='pb-2 hover:text-gray-400'>Delivery Return</li>
                </ul>
            </div>
            <div className='pb-8'>
                <ul className='cursor-pointer'>
                    <li><h2 className='pb-3 text-1xl font-bold'>ABOUT</h2></li>
                    <li className='pb-2 hover:text-gray-400'>Our Brand </li>
                    <li className='pb-2 hover:text-gray-400'>Charity</li>
                    <li className='pb-2 hover:text-gray-400'>CSR</li>
                    <li className='pb-2 hover:text-gray-400'>Careers</li>
                </ul>
            </div>
            <div className='pb-8'>
                <ul className='cursor-pointer'>
                    <li><h2 className='pb-3 text-1xl font-large'>CUSTOMER SERVICES</h2></li>
                    <li className='pb-2 hover:text-gray-400'>Terms & Policies</li>
                    <li className='pb-2 hover:text-gray-400'>Contact Us</li>
                    <li className='pb-2 hover:text-gray-400'>Opening Hours</li>
                    <li className='pb-2 hover:text-gray-400'>Size Guides</li>
                    <li className='pb-2 hover:text-gray-400'>Gift Cards</li>
                </ul>
            </div>
            <div className='grow relative'>
                <div className='group'>
                    <img src={Img} className=' w-full h-60  object-cover md:h-50  transform hover:scale-105 transition duration-300 ease-in'/>
                </div>
                <div className=' w-1/2 absolute top-6 left-7'>
                    <h4 className='text-2xl font-large'>10% off For New Revolve Customers</h4>
                    <p>Free Express Shipping</p>
                    <button className='bg-black outline-none text-white p-3 rounded-full mt-7'>SHOP NOW </button>
                </div>
            </div>
        </div>
        <div className='border-t py-4 md:flex justify-between'>
            <div>
                © Jaroti. All Rights Reserved.
            </div>
            <div className='hidden md:block mr-7 '>
                <img src={Img2} alt='payment' />
            </div>
        </div>
    </footer>
  )
}

export default Footer