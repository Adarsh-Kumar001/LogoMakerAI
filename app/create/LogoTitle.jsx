"use client"

import React,{useEffect, useState} from 'react'
import { useSearchParams } from 'next/navigation'
import { Input } from '@/components/ui/input'

const LogoTitle = ({handleInputChange}) => {
 
    const searchParams = useSearchParams();
    const [LogoTitle, setLogoTitle] = useState(searchParams?.get("title"))

    useEffect(() => {
      handleInputChange(LogoTitle)
    }, [])
    

  return (
    <div className="mx-auto full w-[92%]">
      <h6 className="mx-auto capitalize text-xl">Enter the title of your Logo</h6>
      <p className="mx-auto capitalize text-sm text-gray-600 italic mt-1">Write a title to name your brand or product.</p>
      <div>
        <Input type="text" placeholder="Title of the logo" defaultValue={LogoTitle} onChange={(e)=>{handleInputChange(e.target.value)}} className="p-4 border-2 rounded-lg mt-5 w-full border-black"/>
      </div>
    </div>
  )
}

export default LogoTitle