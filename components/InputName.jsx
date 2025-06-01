'use client'

import React,{useState} from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link";

const InputName = () => {

const [brandName, setbrandName] = useState(null)

  return (
    <div className="w-full flex gap-2 justify-center mt-8">
     <Input type="text" onChange={(e)=>{setbrandName(e.target.value)}} placeholder="Brand or Buisness Name" className="w-[60%] h-[2.4rem] bg-white"/>
     <div className="flex flex-wrap items-center">
        <Link href={`/create?title=${brandName}`}>
        <Button className="hover:cursor-pointer h-[2.4rem]">Create Logo</Button>
        </Link>
      </div>
    </div>
  )
}

export default InputName