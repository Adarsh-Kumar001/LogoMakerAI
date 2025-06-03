"use client"

import Logo from '../public/images/logo.png'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link';


export default function Navbar() {
  return (
    <div className="bg-white w-[100%] h-[3.5rem] border-b-2 border-black flex justify-between fixed top-0 z-50">
      <div className='ml-5 hover:cursor-pointer'>
        <Link href="/" className='flex gap-2 h-[100%]'>
        <Image className='w-[2rem] h-[1.5rem] my-auto hover:cursor-pointer' src={Logo} alt="logo"/>
        <h2 className='my-auto font-bold'>LogoMakerAI</h2>
       </Link>
      </div>
      <div className="flex flex-wrap items-center gap-2 mr-5">
        <Link href="/create">
        <Button className="hover:cursor-pointer">Get Started</Button>
        </Link>
      </div>
    </div>
  );
}