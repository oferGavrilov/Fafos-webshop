import React from 'react'

import "react-multi-carousel/lib/styles.css"
import Carousel from 'react-multi-carousel'
import { productService } from '@/services/product.service'
import { CarouselData } from '@/models/products.model'
import Link from 'next/link'

function ImgCarousel() {
      const carouselData = productService.getCarouselData()
      const responsive = {
            superLargeDesktop: {
                  breakpoint: { max: 3000, min: 1600 },
                  items: 4
            },
            desktop: {
                  breakpoint: { max: 1600, min: 1024 },
                  items: 3
            },
            tablet: {
                  breakpoint: { max: 1024, min: 464 },
                  items: 2
            },
            mobile: {
                  breakpoint: { max: 464, min: 0 },
                  items: 1
            }
      }

      return (
            <>
                  <div className='font-fuzzy text-center mb-4 tracking-wider'>
                        <h2 className='text-4xl mb-4'>Just Landed</h2>
                        <Link href="/products" className='uppercase underline underline-offset-2 font-mono'>Shop 23' Collection</Link>
                  </div>
                  <Carousel itemClass='px-4' centerMode={false} responsive={responsive} infinite={true} className='mb-[85px] sm:mx-10'>
                        {carouselData.map((carousel: CarouselData) => (
                              <div key={carousel.id} className='flex flex-col text-center font-mono'>
                                    <img src={carousel.img} alt="" />
                                    <p className='uppercase py-1'>{carousel.title}</p>
                                    <p className='text-lg'>₪ {carousel.price}</p>
                              </div>
                        ))}
                  </Carousel>
            </>
      )
}

export default ImgCarousel