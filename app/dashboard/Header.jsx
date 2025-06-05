"use client"

import React,{useContext} from 'react'
import { UserDetailsContext } from '../_context/UserDetailsContext'
import { Button } from '@/components/ui/button'

const Header = () => {

    const {userDetails, setuserDetails} = useContext(UserDetailsContext);

    console.log(userDetails)
  return (
    <div className='pt-5 pl-5'>
    <div className='flex flex-col md:flex-row justify-between'>
    <h5 className='md:text-2xl text-sm md:ml-3 mx-auto mb-4 md:mb-0 font-semibold'>Welcome, {userDetails?.name}</h5>
    <Button onClick={() => {window.location.href='/create'}} className='hover:cursor-pointer mr-5'>+ Create New Logo</Button>
    </div>
    </div>
  )
}

export default Header