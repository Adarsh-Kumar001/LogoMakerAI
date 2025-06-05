import Navbar from '@/components/Navbar'
import React from 'react'
import Header from './Header'
import LogoList from './LogoList'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className='w-full'>
        <Navbar/>
        <div className='bg-gray-100 md:w-[65%] w-[90%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:mt-[10rem] mt-[7rem] mb-[12rem] rounded-sm mx-auto'>
        <Header/>
        <LogoList/>
        </div>
        <Footer/>
    </div>
  )
}

export default page