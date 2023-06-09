import { Product } from '@models/products.model'
import formatCurrency from 'src/helpers/formatCurrency'
import Link from 'next/link'
import React from 'react'
import Carousel from 'react-multi-carousel'

interface Props {
      relativeProducts: Product[]
}

export default function RelativeProducts ({ relativeProducts }: Props) {

      const responsive = {
            superLargeDesktop: {
                  // the naming can be any, depends on you.
                  breakpoint: { max: 4000, min: 1400 },
                  items: 5
            },
            desktop: {
                  breakpoint: { max: 1400, min: 1024 },
                  items: 4
            },
            tablet: {
                  breakpoint: { max: 1024, min: 464 },
                  items: 3
            },
            mobile: {
                  breakpoint: { max: 600, min: 0 },
                  items: 2
            }
      }

      return (
            <div>
                        <h2 className='bg-[#dee2e6]  text-[#495057] text-center text-4xl underline underline-offset-4 py-8'>Relative Products</h2>
                        <Carousel responsive={responsive}  infinite className='bg-[#dee2e6]'>
                              {relativeProducts.map((item, idx) => (
                                    <div key={item.id + idx} className="bg-[#ced4da] rounded-md p-4 m-2 mb-8 flex flex-col  gap-y-2 justify-center items-center" >
                                          <img src={`/${item.imgUrl}`} className='w-full  max-w-1/3' alt={item.title} />
                                          <span className='text-center main-text text-xl'>{item.title} </span>
                                          <span className='text-center main-text text-xl'>{formatCurrency(+item.price.toFixed(2))}</span>
                                          <Link aria-label='Preview this product' href={`/product/${item?.id}?item=${item.inventory[0]?.id}`} className='py-2'><span className='bg-[#212529] text-white py-2 px-4 rounded-lg font-bold w-full max-w-xs self-center transition duration-200 hover:bg-white hover:text-[#212529] border-[#212529] border-2'>View Product</span></Link>
                                    </div>
                              ))}
                        </Carousel>
                  </div>
      )
}
