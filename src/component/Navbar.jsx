import React from 'react'
import logo from "../assets/logo.svg"
import menu from "../assets/icon-menu.svg"
import menuclose from "../assets/icon-menu-close.svg"
import { useState } from 'react'
export default function Navbar() {
    const[showNavbar, setShowNavbar] = useState(false)
    const handleShowNavbar=()=>{
        setShowNavbar(!showNavbar)
      }
  return (
    <nav>
      <div className='flex items-center justify-between w-full'>
        <img src={logo} alt="" />
        {/* {showNavbar ?
        <img src={menu} alt="" onClick={handleShowNavbar}  className="absolute"/>
        :
        <img src={menuclose} alt="" onClick={handleShowNavbar} className="absolute"/>
         } */}
        <div className='flex w-full justify-end'>
          <ul className='bg-offWhite flex justify-between w-2/5'>
            <li>Business</li>
            <li>Science</li>
            <li>Sports</li>
            <li>Entertainment</li>
            <li>Technology</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
