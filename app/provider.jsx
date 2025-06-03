"use client"

import {useUser} from '@clerk/nextjs'
import axios from "axios";
import React, { useEffect, useState } from "react";
import {UserDetailsContext} from './_context/UserDetailsContext';

const Provider = ({children}) => {
    
      const { user } = useUser();

      const [userDetails, setuserDetails] = useState()

       useEffect(() => {
        user&&CheckUserAuth()
      }, [user])

      //save user data
      const CheckUserAuth = async () => {
        //save user to db
        const result = await axios.post('/api/user', {
          userName: user?.fullName,
          userEmail: user?.primaryEmailAddress?.emailAddress
        });
        console.log(result.data)
        setuserDetails(result.data)
      }

  return (
    <div>
        <UserDetailsContext.Provider value={{userDetails, setuserDetails}}>
        {children}
        </UserDetailsContext.Provider>
    </div>
  )
}

export default Provider