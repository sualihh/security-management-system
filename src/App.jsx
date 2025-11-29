import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Navbar from './assets/components/Navbar';


const App = () => {
  return (
    <div className=''>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<h1 >Home Page</h1>} />
      </Routes>
    </div>
  )
}

export default App
