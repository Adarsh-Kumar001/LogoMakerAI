"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Prompt from '../Lookup/Prompt'

import {BeatLoader} from 'react-spinners'

const LogoIdea = ({ handleInputChange, formData }) => {

    const [ideas, setideas] = useState()

    const [selectedIdea, setselectedIdea] = useState()

    const [loader, setloader] = useState(false)

    useEffect(() => {
      generateLogoIdeas();
    }, [])


    const generateLogoIdeas= async ()=>{
        setloader(true)
        const PROMPT = Prompt.DESIGN_IDEA_PROMPT
        .replace('{logoType}', formData?.design.title )
        .replace('{logoTitle}', formData?.title)
        .replace('{logoDesc}',formData?.description)
        .replace('{logoPrompt}', formData?.design.prompt)
        const result = await axios.post('/api/gemini',{
            prompt: PROMPT
        })
        
        setideas(result.data.ideas)
        console.log(result.data)
        setloader(false)
    }

    return (
        <div className="mx-auto w-[92%]">
            <h6 className="mx-auto capitalize text-xl">Select a design idea</h6>
            <p className="mx-auto capitalize text-sm text-gray-600 italic mt-1">select an idea from the given list to better describe your logo</p>
            <div className='w-[90%] mt-3 flex flex-wrap gap-2'>
                {loader?<BeatLoader className='mx-auto mt-5'/>: 
                ideas?.map((item,index)=>(
                    <div key={index}
                     onClick={()=>{setselectedIdea(item);
                        handleInputChange(item)
                     }}
                    className={`bg-black text-white rounded-full border border-white p-3 hover:bg-gray-700 hover:border-red-500 hover:cursor-pointer ${selectedIdea==item&&'border border-red-500'}`}>
                        {item}
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default LogoIdea