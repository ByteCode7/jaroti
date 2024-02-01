import { CiLocationOn, CiSearch, CiHeart } from "react-icons/ci";
import { MdKeyboardArrowDown, MdMenu } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";

import { useState } from "react";


function Header() {

  const [menuOpen,setMenuOpen] = useState(true)
  return (
    <header>
      <div className=" sticky top-0 flex justify-between py-3 bg-gray-100 items-center">
        <div className="flex ml-4 items-center gap-3">
          <div className="flex items-center hover:text-red-500 cursor-pointer gap-2" >
            <CiSearch className="text-2xl"/>
            <span className="hidden md:block">SEARCH</span>
          </div>
          <div className="flex items-center hover:text-red-400 cursor-pointer gap-2">
            <CiLocationOn className="text-2xl hidden md:block"/>
            <span className=" md:block hidden">FIND A SRORE</span>
          </div>
        </div>
        <h1 className="text-5xl cursor-pointer">JAROTI</h1>
        <div className="flex mr-4 gap-5 items-center">
          <div class>
            <div className=" md:flex items-center hidden hover:text-red-400 cursor-pointer">
              <h3>NEED HELP? </h3>
              <MdKeyboardArrowDown className=""/>
            </div>
            <div className='hidden'>
              <h4>Chat:<span>Let,s Chat</span></h4>
              <h4>Phone:<span>0300-673542</span></h4>
              <h4>Email:<span>zeeshanmuzaffar97@gmail.com</span></h4>
              <h4>Orders: <span>TRACK YOUR ORDER</span></h4>
            </div>
          </div>
          <div>
            <h3 className="hidden md:block  text-2xl hover:text-red-500 cursor-pointer"><FiUser/></h3>
          </div>
          <div className="text-2xl hover:text-red-500 cursor-pointer"><CiHeart/></div>
          <div className="text-2xl hover:text-red-500 cursor-pointer"><BsCart3/></div>
          <div className="text-2xl hover:text-red-500 cursor-pointer  md:hidden" onClick={()=> setMenuOpen(!menuOpen)}><MdMenu/></div>

        </div>
      </div>
      <nav className="bg-gray-200">
        <ul className={`md:flex text-1xl gap-9 justify-center py-4 ml-3 pb-1  ${menuOpen? 'hidden' : 'block'}`}>
          <li className="pb-1 hover:text-red-500">Home</li>
          <li className="pb-1 hover:text-red-500">Jewelry</li>
          <li className="pb-1 hover:text-red-500">Handbags</li>
          <li className="pb-1 hover:text-red-500">Accessories</li>
          <li className="pb-1 hover:text-red-500">Sale</li>
          <li className="pb-1 hover:text-red-500">About Us</li>
          <li className="pb-1 hover:text-red-500">Contact Us</li>
          <li className="pb-1 hover:text-red-500">Blog</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header