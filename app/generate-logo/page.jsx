"use client"
import React, { useContext, useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import { UserDetailsContext } from '../_context/UserDetailsContext'
import Prompt from '../Lookup/Prompt'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { ScaleLoader } from 'react-spinners'
import { getDoc, setDoc, doc } from 'firebase/firestore'
import { db } from '@/firebaseConnect'
import Footer from '@/components/Footer'

const page = () => {

  const { userDetails, setuserDetails } = useContext(UserDetailsContext)

  const [formData, setformData] = useState()

  const [imageUrl, setimageUrl] = useState()
  const [secondimageUrl, setsecondimageUrl] = useState()

  useEffect(() => {

    if (userDetails?.email && typeof window != undefined) {
      const storage = localStorage.getItem('formData')
      if (storage) {
        setformData(JSON.parse(storage))
        console.log(JSON.parse(storage))
      }
    }

  }, [userDetails])

  useEffect(() => {
    if (
      formData?.title &&
      formData?.description &&
      formData?.palette &&
      formData?.idea &&
      formData?.design?.title &&
      formData?.design?.prompt
    ) {
      generateAILogo();
    }
  }, [formData])


  const generateAILogo = async () => {
    try {
      const PROMPT = Prompt.LOGO_PROMPT
        .replace('{logoTitle}', formData?.title)
        .replace('{logoDesc}', formData?.description)
        .replace('{logoColor}', formData?.palette)
        .replace('{logoIdea}', formData?.idea)
        .replace('{logoDesign}', formData?.design.title)
        .replace('{logoPrompt}', formData?.design.prompt)

      //generate prompt by gemini
      const result = await axios.post('./api/geminiPrompt', {
        prompt: PROMPT
      });

      const AIprompt = result?.data?.prompt

      console.log(AIprompt)

      //generate logo hugging face
      const res = await axios.post('/api/generateLogo', { prompt: AIprompt });
      if (res.data.error) {
        console.error(res.data.error);
        return;
      }
      else {
        console.log(res)
        const imgUrl = res.data.data[0][0].image.url;
        const imgUrlTwo = res.data.data[0][1].image.url;
        console.log("Generated Image URL:", imgUrl, imgUrlTwo);
        setimageUrl(imgUrl)
        setsecondimageUrl(imgUrlTwo)

        //save image to firestore
        saveImagesToDB({ imgUrl, imgUrlTwo });
      }

    }
    catch (err) {
      console.error("Error in generateAILogo:", err.message || err);
    }
  }

  const saveImagesToDB = async ({ imgUrl, imgUrlTwo }) => {
    console.log(imgUrl)
    try {
      await setDoc(doc(db, "Users", userDetails.email, "logos", Date.now().toString()), {
        image: imgUrl,
        secondImage: imgUrlTwo,
        title: formData?.title,
        desc: formData?.description
      })
    }
    catch (e) {
      console.log(e)
    }
  }

  const handleDownload = async ({ image }) => {
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
  };

  return (
    <div>
      <Navbar />
      <div className="mx-auto md:w-[65%] w-[90%] mb-[8rem] mt-[8rem] bg-gray-100 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-sm flex flex-col justify-center">
        <h6 className="mx-auto capitalize text-xl mt-5">YOUR LOGO</h6>
        <p className="mx-auto capitalize text-sm text-gray-600 italic mt-1 mb-5">Your logo is {imageUrl || secondimageUrl ? 'generated' : 'generating, please wait'}</p>
        <div className='w-[100%] flex md:flex-row flex-col'>
          <div className='flex flex-col md:w-[50%] w-full mx-auto items-center'>
            <div className='md:w-[25rem] md:h-[25rem] w-[80%] flex justify-center mx-auto'>
              {imageUrl ? <img className='md:w-[25rem] md:h-[25rem] w-[80%]' src={imageUrl} /> : <div className="w-[25rem] h-[25rem] flex justify-center items-center">
                <ScaleLoader />
              </div>}
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-5">
              <Button onClick={() => { handleDownload(imageUrl) }} className={`hover:cursor-pointer md:mt-0 mt-2 opacity-0 ${imageUrl && 'opacity-100'}`}>Download</Button>
            </div>
          </div>
          <div className='flex flex-col md:w-[50%] w-full mx-auto md:mt-0 mt-3 items-center'>
            <div className='md:w-[25rem] md:h-[25rem] w-[80%] flex justify-center mx-auto'>
              {secondimageUrl ? <img className='md:w-[25rem] md:h-[25rem] w-[80%]' src={secondimageUrl} /> : <div className="w-[25rem] h-[25rem] flex justify-center items-center">
                <ScaleLoader />
              </div>}
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-5">
              <Button onClick={() => { handleDownload(secondimageUrl) }} className={`hover:cursor-pointer md:mt-0 mt-2 opacity-0 ${secondimageUrl && 'opacity-100'}`}>Download</Button>
            </div>
          </div>
        </div>
        <div className="w-[100%] flex md:flex-row flex-col justify-center gap-2 md:mb-0 mb-5 mt-5 md:p-0 p-2">
          <Button variant='outline' onClick={() => { window.location.reload() }} className={`hover:cursor-pointer opacity-0 ${imageUrl && 'opacity-100'}`}> &#8635; Generate Again</Button>
          <Button onClick={() => { window.location.href = '/' }} className={`hover:cursor-pointer opacity-0 ${imageUrl && 'opacity-100'}`}>Generate Another Logo</Button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page