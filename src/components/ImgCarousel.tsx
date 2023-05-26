import React from 'react'
import Link from 'next/link'
import "react-multi-carousel/lib/styles.css"
import Carousel from 'react-multi-carousel'
import formatCurrency from '@utils/formatCurrency'
import carouselData from '../carousel-data.json'
import { ICarousel} from '../models/products.model'
import { shuffle } from '../utils/util.service'

function ImgCarousel() {
      const carousel = shuffle(carouselData)
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
                        <h2 className='text-4xl mb-4 font-rubik'>Just Landed</h2>
                        <Link href="/collections" className='uppercase underline underline-offset-2 font-mono'>Shop 23' Collection</Link>
                  </div>
                  <Carousel itemClass='px-4' centerMode={false} responsive={responsive} infinite className='mb-[85px] sm:mx-10'>
                        {carousel.map((item: ICarousel) => (
                              <div key={item.itemId} className='flex flex-col text-center font-mono'>
                                    <Link href={`/product/${item.id}?item=${item.itemId}`}>
                                          <img src={item.imgUrl} alt={item.title} className='w-full shadow-gray-300 shadow-xl' />
                                    </Link>
                                    <p className='uppercase py-2'>{item.title} {item.color} {item.category}</p>
                                    <p className='text-lg'>{formatCurrency(item.price)}</p>
                              </div>
                        ))}
                  </Carousel>
            </>
      )
}

export default ImgCarousel