"use client"
import React, { useContext } from 'react'
import Navbar from '@/components/Navbar'
import { UserDetailsContext } from '../_context/UserDetailsContext'

const page = () => {
    const {userDetails, setuserDetails} = useContext(UserDetailsContext)
     console.log(userDetails)
  
    return (
    <div>
        <Navbar/>
    </div>
  )
}

export default page