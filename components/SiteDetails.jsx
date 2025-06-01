import React from 'react'
import { Card, CardContent, CardTitle } from "@/components/ui/card"

const SiteDetails = () => {
    
   const logoMakerFeatures = [
  {
    title: "100% Free Logo Maker",
    description: "Start designing without spending a dime. Our AI Logo Maker is completely free to use — no subscriptions, no watermarks, no catch. Get full access to all features and export high-quality logos at no cost."
  },
  {
    title: "Pick Your Style, Let AI Do the Rest",
    description: "From minimalist to bold, vintage to modern — select from a variety of design styles tailored to your brand. Our AI adapts instantly to your choice and delivers logos that match your vibe."
  },
  {
    title: "Crystal-Clear, High-Resolution Logos",
    description: "Say goodbye to pixelated designs. Generate professional, high-resolution logos perfect for websites, business cards, social media, and more — all ready for download in multiple formats."
  },
  {
    title: "From Idea to Identity in One Click",
    description: "Have a brand name or concept? Thats all you need. Logo Maker AI turns your idea into a visual identity instantly — powered by smart design techniques"
  }
];

  return (
    <div className='w-full mt-[12rem] bg-white border-t-2 border-black flex flex-col'>
        <h1 className='text-black font-extrabold text-3xl mx-auto mt-[2rem]'>Logo Maker AI</h1>
        <div className='w-full flex flex-wrap mt-5'>
         {logoMakerFeatures.map((item, index)=>(
            <Card key={index} className="w-[20rem] h-[15rem] flex flex-col m-7 bg-gradient-to-r from-[#f9e1e3]  to-[#d0faf1] shadow-[5px_5px_0px_0px_rgba(0,_0,_0,_0.5)]">
            <CardTitle className="mx-auto font-bold">
                {item.title}
            </CardTitle>
            <CardContent>
                <p className='text-justify text-sm'>{item.description}</p>
            </CardContent>
         </Card>
         ))}
        </div>
    </div>
  )
}

export default SiteDetails