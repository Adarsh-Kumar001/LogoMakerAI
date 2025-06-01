"use client"

import Image from "next/image"

import * as React from "react"
import { useState, useEffect } from "react"
import Autoplay from "embla-carousel-autoplay"

import exImageOne from '../public/images/example-logos/1.png'
import exImageTwo from '../public/images/example-logos/2.png'
import exImageThree from '../public/images/example-logos/3.png'
import exImageFour from '../public/images/example-logos/4.png'
import exImageFive from '../public/images/example-logos/5.png'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselPlugin() {

  const [exampleimagesList, setexampleimagesList] = useState([])

  useEffect(() => {
    const images = [exImageOne, exImageTwo, exImageThree, exImageFour, exImageFive];
    setexampleimagesList(images);
  }, []);

  console.log(exampleimagesList)

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs mt-[8rem] ml-4"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {exampleimagesList.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image key={index} src={image} alt={`example ${index + 1}`} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
