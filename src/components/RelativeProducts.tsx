import { Product } from '@models/products.model'
import formatCurrency from '@utils/formatCurrency'
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
                  breakpoint: { max: 4000, min: 3000 },
                  items: 5
            },
            desktop: {
                  breakpoint: { max: 3000, min: 1024 },
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
                        <h2 className='main-text text-center text-4xl underline underline-offset-4 py-8'>Relative Products</h2>
                        <Carousel responsive={responsive}  infinite>
                              {relativeProducts.map((item, idx) => (
                                    <div key={item.id + idx} className="p-4 mb-8 flex flex-col shadow-2xl gap-y-2 justify-center items-center" >
                                          <img src={`/${item.imgUrl}`} className='w-full  max-w-1/3' alt={item.title} />
                                          <span className='text-center main-text text-xl'>{item.title} </span>
                                          <span className='text-center main-text text-xl'>{formatCurrency(+item.price.toFixed(2))}</span>
                                          <Link href={`/product/${item?.id}?item=${item.inventory[0]?.id}`} className='py-2'><span className='bg-[#212529] text-white py-2 px-4 rounded-lg font-bold w-full max-w-xs self-center transition duration-200 hover:bg-white hover:text-[#212529] border-[#212529] border-2'>View Product</span></Link>
                                    </div>
                              ))}
                        </Carousel>
                  </div>
      )
}
