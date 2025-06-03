"use client"

import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import LogoTitle from './LogoTitle'
import LogoDesc from './LogoDesc'
import LogoColourPalette from './LogoColourPalette'
import LogoDesign from './LogoDesign'
import LogoIdea from './LogoIdea'
import PricingPlan from './PricingPlan'

const page = () => {

    const [step, setstep] = useState(1)

    const [formData, setformData] = useState([])

    const handleInputChange = (field,value) => {
       setformData(prev=>({
        ...prev,
        [field]:value
       }))
    }

   console.log(formData)

    return (

        <div className='w-full'>
            <Navbar />

            <Card className="w-[45%] mx-auto mt-[13rem] mb-[8rem]">
                {step == 1 ?
                    <LogoTitle handleInputChange={(value)=>handleInputChange('title',value)}/> :
                step == 2 ?
                  <LogoDesc handleInputChange={(value)=>handleInputChange('description',value)} formDesc={formData.description}/> :
                step == 3 ?
                 <LogoColourPalette handleInputChange={(value)=>handleInputChange('palette',value)} formPalette={formData.palette}/> :
                step == 4 ?
                 <LogoDesign handleInputChange={(value)=>handleInputChange('design',value)} formDesign={formData.design}/>:
                step == 5 ?
                 <LogoIdea handleInputChange={(value)=>handleInputChange('idea',value)} formData={formData}/>:
                step == 6 ?
                <PricingPlan formData={formData}/>:
                 null
                }
                <CardContent className="flex justify-between">
                    <div className="flex flex-wrap items-center gap-2">
                      {step!=1 && <Button onClick={()=>{setstep(step-1)}} variant="outline" className="hover:cursor-pointer">Previous</Button>}
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <Button onClick={()=>{setstep(step+1)}} className="hover:cursor-pointer">Next</Button>
                    </div>
                </CardContent>
            </Card>

        </div>
    )
}

export default page