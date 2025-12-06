import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {assets} from '../assets/assets.js';

const Navbar = () => {
  return (
    // <div className='flex justify-between'>
    //   <Link to="/"> <img className='w-16 h-16' src={assets.wollo_logo} alt="logo" /></Link>
    //   <p className='px-4 bg-blue-600 py-3 text-white rounded-full my-5'>Logout</p>
    // </div>
    <nav className="w-full bg-white shadow-sm px-4 py-3 flex items-center justify-between">
  
  {/* Left Logo */}
  

  {/* Right Side */}
  <div className="flex items-center gap-3">

    {/* Search Input */}
    <input
      type="text"
      placeholder="Search user "
      className="border border-gray-300 rounded px-2 py-1 w-24 md:w-48 lg:w-68 focus:outline-none focus:ring focus:ring-blue-300"
    />

    {/* Avatar Dropdown */}
    
  </div>
  
</nav>


  )
}

export default Navbar
