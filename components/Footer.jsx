import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='relative bg-gray-300 border-t-2 border-gray-700 bottom-0'>
      <div className='flex md:flex-row flex-col md:gap-0 gap-2 items-center m-5 mb-0 pb-5 justify-between'>
        <div className='flex gap-2 items-center'>
          <Image src='/images/logo.png' className='rounded-full' width={50} height={50} alt='logo' />
          <p className='text-sm font-semibold'>LogoMakerAI</p>
        </div>
        <p className='md:text-sm text-xs'>LogoMakerAI &copy; 2025 All Rights Reserved</p>
      </div>
      <p className='w-full flex justify-center items-center text-sm text-gray-800 mb-2'>&hearts; Developed by</p>
      <div className='flex justify-center gap-8 pb-8'>
        <Link href={'https://github.com/Adarsh-Kumar001/'}>
          <Image src={'/images/GitHub.png'} width={100} height={30} alt='github-logo' />
        </Link>
        <Link href={'https://www.linkedin.com/in/adarsh-kumar102004/'}>
          <Image src={'/images/LinkedIn.png'} width={100} height={30} alt='linkedin-logo' />
        </Link>
        <Link href={'mailto:adarshkumar102004@gmail.com'}>
          <Image src={'/images/Gmail.png'} width={100} height={30} alt='linkedin-logo' />
        </Link>
      </div>
    </div>
  )
}

export default Footer