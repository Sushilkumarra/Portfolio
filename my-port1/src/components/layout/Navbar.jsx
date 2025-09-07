import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import {NavLink } from 'react-router-dom';
import { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState(false)
  return (
    <>
    
   <div className='flex container top-0 left-0 w-full p-3  border-b-2 md:px-14 shadow-md ' >

   <div className=''>
     <a className="navbar-brand text-3xl" href="#">
      Sushil Kumar</a>
     </div>
     <div className=''>
      <ul className="hidden md:flex text-lg mx-80  space-x-6 ">
        <li className="nav-item hover:text-blue-600  ">
          <NavLink className="nav-link" exact to='/'>
          Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link hover:text-blue-600" exact to='/about'>
          About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link hover:text-blue-600" exact to='/Skills'>
          Skills</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link hover:text-blue-600" exact to='/Education'>
          Education</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link hover:text-blue-600" exact to='/Projects'>
          Projects</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link hover:text-blue-600" exact to='/contact'>
          Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link hover:text-blue-600 " exact to='/Resume'>
          Resume</NavLink>
        </li>
        
      </ul>
      <div className="flex p-2 file:"><div onClick={() =>setMenu(!menu)} className="md:hidden">
      {menu?<IoMdMenu />:<IoCloseSharp />}
      </div>
      </div>
      
    </div>

   <div>
   <ul className=" md:hidden text-lg ml-0 h-screen flex flex-col items-center justify-center space-y-2 ">
        <li className="nav-item hover:text-blue-600  ">
          <NavLink className="nav-link " exact to='/'
          >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link hover:text-blue-600" exact to='/about'>
          About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link hover:text-blue-600" exact to='/Skills'>
          Skills</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link hover:text-blue-600" exact to='/Education'>
          Education</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link hover:text-blue-600" exact to='/Projects'>
          Projects</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link hover:text-blue-600" exact to='/contact'>
          Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link hover:text-blue-600 " exact to='/Resume'>
          Resume</NavLink>
        </li>
        
      </ul>
   </div>

   </div>
  
    </>
  )
}

export default Navbar;