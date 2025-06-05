"use client"

import Logo from '../public/images/logo.png'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { SignInButton, SignOutButton, UserButton, useUser } from '@clerk/nextjs';


export default function  Navbar() {

   const {user} = useUser();

  return (
    <div className="bg-white w-[100%] h-[3.5rem] border-b-2 border-black flex justify-between fixed top-0 z-50">
      <div className='ml-5 hover:cursor-pointer'>
        <Link href="/" className='flex gap-2 h-[100%]'>
        <Image className='w-[2rem] h-[1.5rem] my-auto hover:cursor-pointer' src={Logo} alt="logo"/>
        <h2 className='my-auto font-bold hidden md:block'>LogoMakerAI</h2>
       </Link>
      </div>
      {user? 
      <div className='flex'>
        <div className="flex flex-wrap items-center gap-2 mr-5">
        <Button onClick={()=>{window.location.href='/dashboard'}} variant='outline' className="hover:cursor-pointer">Dashboard</Button>
      </div>
      <div className='mr-5 h-full flex items-center'>
      <UserButton afterSwitchSessionUrl='/'/>
      </div>
      </div>
      :
      <div className='flex'>
        <div className="flex flex-wrap items-center gap-2 mr-5">
        <Button onClick={()=>{window.location.href='/dashboard'}} variant='outline' className="hover:cursor-pointer">Dashboard</Button>
      </div>
      <SignInButton mode='modal' forceRedirectUrl='/'>
       <div className="flex flex-wrap items-center gap-2 mr-5">
        <Button className="hover:cursor-pointer">Login</Button>
      </div>
      </SignInButton>
      </div>
      }
    </div>
  );
}