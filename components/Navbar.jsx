import Logo from '../public/images/logo.png'
import Image from 'next/image'
import { Button } from "@/components/ui/button"


export default function Navbar() {
  return (
    <div className="bg-white w-[100%] h-[3.5rem] border-b-2 border-black flex justify-between fixed z-50">
      <div className='flex gap-2 ml-5'>
        <Image className='w-[2rem] h-[1.5rem] my-auto hover:cursor-pointer' src={Logo} alt="logo"/>
        <h2 className='my-auto font-bold'>LogoMakerAI</h2>
      </div>
      <div className="flex flex-wrap items-center gap-2 mr-5">
        <Button className="hover:cursor-pointer">Get Started</Button>
      </div>
    </div>
  );
}