import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from '../Pages/Home'

const AllRouter = () => {
  return (
    <div className='flex flex-col justify-between min-h-[100vh]'>
        

        <div>
            <Navbar/>
            <Routes>

            <Route path='/about'></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/' element={<Home/>}></Route>
        </Routes>
        </div>
        
        <Footer/>
    </div>
  )
}

export default AllRouter