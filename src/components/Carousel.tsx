import React from 'react'
import { Carousel as MainCarousel } from 'react-responsive-carousel'

export default function Carousel ({ images }: { images: string[] }) {
      return (
            <MainCarousel showIndicators={false} showArrows={false} showStatus={false} className='max-w-lg px-4' >
                  {images && images.map((item, idx) => (
                        <div key={item + idx} className='flex flex-col'>
                              < img src={`/${item}`} className='w-full ' alt={item} />
                        </div>
                  ))}
            </MainCarousel>
      )
}
