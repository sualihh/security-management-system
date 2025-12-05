import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='h-screen border-r-4 border-gray-300 bg-white'>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
            
            
            <NavLink to="/staff-list" className="   bg-gray-200 py-2 px-6 border-3 border-gray-300 flex items-center border-r-0  rounded-l">
            <p>Home</p>
            </NavLink>
            <NavLink to="/device-list" className="   bg-gray-200 py-2 px-6 border-3 border-gray-300 flex items-center border-r-0  rounded-l">
            <p>Home</p>
            </NavLink>
            
        </div>
    </div>
  )
}

export default Sidebar
