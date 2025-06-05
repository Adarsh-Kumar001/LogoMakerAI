"use client"

import React,{useEffect, useState} from 'react'
import Design from './Design'
import Image from 'next/image'

const LogoDesign = ({handleInputChange, formDesign}) => {

   const [chosenDesign, setchosenDesign] = useState()

   useEffect(() => {
    setchosenDesign(formDesign)
   }, [])
   
  return (
    <div className="mx-auto w-[92%]">
      <h6 className="mx-auto capitalize text-xl">Choose a design</h6>
      <p className="mx-auto capitalize text-sm text-gray-600 italic mt-1">Select a design type for your logo</p>
      <div className='grid grid-cols-2 gap-5 mt-5 md:grid-cols-3'>
        {Design.map((design,index)=>(
            <div key={index} onClick={()=>{setchosenDesign(design); handleInputChange(design)}} className={`flex flex-col p-1 justify-center content-center hover:cursor-pointer ${chosenDesign?.title==design.title&&'border-[1.5px] border-black'}`}>
             <h5 className='mb-2 text-xs mx-auto'>{design.title}</h5>
             <Image src={`/images/designs${design.image}`} width={300} height={200} alt={`design ${index+1}`} className='mx-auto md:h-[150px] h-[80px] object-cover'/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default LogoDesign