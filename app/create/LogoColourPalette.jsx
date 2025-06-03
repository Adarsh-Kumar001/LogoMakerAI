"use client"

import React,{useEffect, useState} from 'react'
import Colors from '../Lookup/Colors'

const LogoColourPalette = ({handleInputChange, formPalette}) => {

   const [chosenPalette, setchosenPalette] = useState()

   useEffect(() => {
     setchosenPalette(formPalette)
   }, [])
   
  return (
    <div className="mx-auto w-[92%]">
      <h6 className="mx-auto capitalize text-xl">Choose a colour palette</h6>
      <p className="mx-auto capitalize text-sm text-gray-600 italic mt-1">A colour palette defines the colour scheme of your logo</p>
      <div className='grid grid-cols-2 gap-5 mt-5 md:grid-cols-3'>
        {Colors.map((palette,paletteIndex)=>(
           <div className={`flex p-1 hover:cursor-pointer ${chosenPalette==palette.name&&'border-[1.5px] border-black'}`} key={paletteIndex}>
            {palette?.colors.map((colour,index)=>(
              <div className='h-24 w-full'
              key={index}
              onClick={()=>{setchosenPalette(palette.name);
                handleInputChange(palette.name)
              }}
              style={
                {
                    backgroundColor:colour,
                }
              }
              >
              </div>
            ))}
           </div> 
        ))}
      </div>
    </div>
  )
}

export default LogoColourPalette