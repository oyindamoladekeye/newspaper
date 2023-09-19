import React from 'react'
import logo from "../assets/logo.svg"
import menu from "../assets/icon-menu.svg"
import menuclose from "../assets/icon-menu-close.svg"
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    const[showNavbar, setShowNavbar] = useState(true)
    const handleShowNavbar=()=>{
        setShowNavbar(!showNavbar)
      }
  return (
    <nav className='flex w-full justify-between pb-6'>
      <div className='flex items-center justify-between w-full gap-56'>
        <img src={logo} alt="" />
        {showNavbar ?
        <img src={menu} alt="" onClick={handleShowNavbar}  className="sm:hidden"/>
        :
        <img src={menuclose} alt="" onClick={handleShowNavbar} className="sm:hidden"/>
         }
        <div className='flex w-2/5'>
          <ul className={showNavbar?"hidden sm:flex sm:justify-between sm:w-full":"sm:bg-offWhite sm:flex sm:justify-between sm:w-full absolute -left-0 top-16 w-full h-45vh z-5 bg-darkBlue text-offWhite flex py-12 justify-around flex-col pl-4"} onClick={handleShowNavbar}>
            <Link to ="/">Home</Link>
            <Link to ="/category/science">Science</Link>
            <Link to ="/category/sports">Sports</Link>
            <Link to ="/category/entetainment">Entertainment</Link>
            <Link to ="/category/technology">Technology</Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}
