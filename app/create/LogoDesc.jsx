"use client"

import React from 'react'
import { Input } from '@/components/ui/input'

const LogoDesc = ({handleInputChange, formDesc}) => {

  return (
    <div className="mx-auto w-[92%]">
      <h6 className="mx-auto capitalize text-xl">Enter the description of your Logo</h6>
      <p className="mx-auto capitalize text-sm text-gray-600 italic mt-1">Describe your Logo in few words</p>
      <div>
        <Input type="text" defaultValue={formDesc} placeholder="Description of the logo" onChange={(e)=>{handleInputChange(e.target.value)}} className="p-4 border-2 rounded-lg mt-5 w-full border-black"/>
      </div>
    </div>
  )
}

export default LogoDesc