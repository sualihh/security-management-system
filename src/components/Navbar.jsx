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
  <div className="flex-1">
    <a className="text-xl font-semibold cursor-pointer">
      <img
          className="w-10 h-10 object-cover"
          src={assets.wollo_logo}
          alt="smart"
        />WOLLO</a>
  </div>

  {/* Right Side */}
  <div className="flex items-center gap-3">

    {/* Search Input */}
    <input
      type="text"
      placeholder="Search user "
      className="border border-gray-300 rounded px-2 py-1 w-24 md:w-48 lg:w-68 focus:outline-none focus:ring focus:ring-blue-300"
    />

    {/* Avatar Dropdown */}
    <div className="relative group">

      {/* Avatar Button */}
      <div
        tabIndex={0}
        className="cursor-pointer rounded-full overflow-hidden border hover:border-gray-400"
      >
        <img
          className="w-10 h-10 object-cover"
          src="/"
          alt="smart"
        />
      </div>

      {/* Dropdown Menu */}
      <ul
        className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg hidden group-focus-within:block group-hover:block"
      >
        <li className="px-4 py-2 hover:bg-gray-100 flex justify-between cursor-pointer">
          Profile
          {/* <span className="text-xs bg-blue-600 text-white px-2 rounded">New</span> */}
        </li>

        {/* <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <Link to="/my-a"></Link>
          Settings
        </li> */}

        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          Logout
        </li>
      </ul>

    </div>
  </div>
  
</nav>


  )
}

export default Navbar
