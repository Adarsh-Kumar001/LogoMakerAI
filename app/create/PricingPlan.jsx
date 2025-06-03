import Image from 'next/image'
import React,{useEffect} from 'react'
import { Button } from '@/components/ui/button'
import { SignInButton, useUser } from '@clerk/nextjs'

const PricingPlan = ({formData}) => {

    const {user} = useUser();

   //save formData to localStorage
   useEffect(() => {
     if(formData?.title && typeof window!=undefined){
        localStorage.setItem('formData',JSON.stringify(formData));
     }
   }, [formData])
   

  return (
    <div className="mx-auto w-[92%]">
      <h6 className="mx-auto capitalize text-xl">Pricing Plan</h6>
      <p className="mx-auto capitalize text-sm text-gray-600 italic mt-1">Select a price plan to generate logos for free or paid.</p>
      <div className='w-[100%] gap-2 mt-4 flex'>
        <div className='w-[50%] border-2 border-black flex flex-col rounded-sm'>
          <h6 className='mx-auto font-semibold mt-2'>Free Plan</h6>
          <Image src='/images/free.png' width={60} height={60} alt='free-tier' className='mx-auto mt-2 mb-2'/>
          <ul className='text-sm list-disc pl-6'>
            <li>Generate logos for free</li>
            <li>Longer wait time</li>
          </ul>
          {user?<div className="flex flex-wrap items-center gap-2 mx-auto mt-5 mb-5">
                    <Button onClick={()=>{window.location.href='/generate-logo?type=free'}} className="hover:cursor-pointer">Generate For Free</Button>
            </div>:
            <SignInButton mode='modal' forceRedirectUrl='/generate-logo?type=free'>
                <div className="flex flex-wrap items-center gap-2 mx-auto mt-5 mb-5">
                    <Button className="hover:cursor-pointer">Login and Generate For Free</Button>
            </div>
            </SignInButton>
            }
        </div>
        <div className='w-[50%] border-2 border-black flex flex-col rounded-sm'>
          <h6 className='mx-auto font-semibold mt-2'>Paid Plan</h6>
          <Image src='/images/paid.png' width={67} height={67} alt='paid-tier' className='mx-auto mt-2 mb-2'/>
          <ul className='text-sm list-disc pl-6'>
            <li>Shorter wait time</li>
            <li>takes one credit</li>
          </ul>
           {user?<div className="flex flex-wrap items-center gap-2 mx-auto mt-5 mb-5">
                    <Button onClick={()=>{window.location.href='/generate-logo?type=paid'}} className="hover:cursor-pointer">Generate For 1 Credit</Button>
            </div>:
            <SignInButton mode='modal' forceRedirectUrl='/generate-logo?type=paid'>
                <div className="flex flex-wrap items-center gap-2 mx-auto mt-5 mb-5">
                    <Button className="hover:cursor-pointer">Login and Generate For 1 Credit</Button>
            </div>
            </SignInButton>
            }
        </div>
      </div>
    </div>
  )
}

export default PricingPlan