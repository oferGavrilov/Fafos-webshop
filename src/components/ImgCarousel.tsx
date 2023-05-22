import React from 'react'
import Link from 'next/link'
import "react-multi-carousel/lib/styles.css"
import Carousel from 'react-multi-carousel'
import { productService } from '../services/product.service'
import { Product } from '../models/products.model'

function ImgCarousel() {
      const products = productService.getAllProducts()
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
                        {products.map((product: Product) => (
                              <div key={product.id} className='flex flex-col text-center font-mono'>
                                    <Link href={`/product/${product.id}?item=${product.inventory[0].id}`}>
                                          <img src={`/${  product.inventory[0].imgUrl[0]}`} alt={product.title} className='w-full shadow-gray-300 shadow-xl' />
                                    </Link>
                                    <p className='uppercase py-2'>{product.title} {product.inventory[0].color} {product.category}</p>
                                    <p className='text-lg'>₪ {product.price}</p>
                              </div>
                        ))}
                  </Carousel>
            </>
      )
}

export default ImgCarousel