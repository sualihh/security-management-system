import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Allstudent from './pages/Allstudent';
import Allstaff from './pages/Allstaff';
import Alldevice from './pages/Alldevice';


const App = () => {
  return (
    <div className=''>
      <Navbar />
      <ToastContainer />

      <div className='flex gap-2.5'>
      <div className='hidden md:block md:w-1/5'>
        <Sidebar />
      </div>
      <div className='w-full'>
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/student-list' element={<Allstudent />} />
           <Route path='/staff-list' element={<Allstaff />} />
           <Route path='/device-list' element={<Alldevice />} />
       </Routes>
      </div>
    </div>
      
    </div>
  )
}

export default App
