import React from 'react'
import InputName from './InputName'
import {CarouselPlugin} from './LogoCarousel'

const Lander = () => {
  return (
    <div className='w-full flex'>
    <div className='w-[65%] flex flex-col'>
     <h1 className='text-black font-bold text-3xl mx-auto mt-[15rem]'>Logo Maker AI</h1>
     <h6 className='text-black font-semibold w-[50rem] text-justify mx-auto mt-5'>LogoMakerAI helps create professional, high-quality logos effortlessly. Just enter your brand name, choose your style and let the AI generate custom logos for you to choose from! — no design skills needed</h6>
     <InputName/>
    </div>
    <CarouselPlugin/>
    </div>
  )
}

export default Lander