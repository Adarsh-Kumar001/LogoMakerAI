"use client"

import React, { useContext, useState, useEffect } from 'react'
import { UserDetailsContext } from '../_context/UserDetailsContext'
import { db } from '@/firebaseConnect'
import { collection, getDocs } from 'firebase/firestore'
import { BeatLoader } from 'react-spinners'

const LogoList = () => {

    const { userDetails, setuserDetails } = useContext(UserDetailsContext);

    const [userLogos, setuserLogos] = useState()

    const getUserLogos = async () => {
        const querySnapshot = await getDocs((collection(db, "Users", userDetails?.email, "logos")))
        const logos = [];
        querySnapshot.forEach((doc) => {
            logos.push({ ...doc.data() });
        })
        setuserLogos(logos);
        console.log(logos)
    }

    useEffect(() => {
        userDetails && getUserLogos();
    }, [userDetails])

    const handleDownload = async({ image }) => {
    try {
    const response = await fetch(image);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "logo.png";
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Download failed:", error);
  }
    }

    return (
        <div className='mt-8 mb-8 flex flex-wrap w-[100%] min-h-[15rem] p-2.5'>
            {userLogos?userLogos.map((logos, index) => (
                <div className='flex flex-wrap gap-2 mx-auto' key={index}>
                    <img onClick={() => handleDownload({image:logos.image})} className='md:w-[14rem] w-[12rem] mx-auto rounded-sm hover:cursor-pointer hover:border-2 border-gray-700 m-1.5' src={logos.image} />
                </div>
            )):
            <div className='h-[14rem] w-[100%] flex justify-center items-center'>
                <BeatLoader />
            </div>
            }
        </div>
    )
}

export default LogoList