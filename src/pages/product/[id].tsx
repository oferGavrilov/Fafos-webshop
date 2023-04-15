import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Layout from '@/components/Layout'
import { Product } from '@/models/products.model'
import { productService } from '@/services/product.service'

import "react-responsive-carousel/lib/styles/carousel.min.css"

import { BiShekel } from 'react-icons/bi'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { Carousel } from 'react-responsive-carousel'

function ProductDetails() {
      const [product, setProduct] = useState<Product>()
      const id = useRouter().query.id as string
      const { item } = useRouter().query
      const images = product?.inventory.filter(type => type.id === item).map(item => item.imgUrl).flat()
      const data = product?.inventory.find(type => type.id === item)

      useEffect(() => {
            loadProduct()
      }, [id])

      function loadProduct() {
            if (!id) return <Layout page=''><div>No such product</div></Layout>
            const data = productService.getProductById(id)
            setProduct(data)
      }

      if (!product) return <div>loading...</div>
      return (
            <Layout page='Product'>
                  <div className='my-24 mx-16 md:mx-20 flex  flex-col md:flex-row-reverse'>
                        <Carousel showIndicators={false} showArrows={false} showStatus={false} className='max-w-lg' >
                              {images && images.map((item, idx) => (
                                    <div className=' flex flex-col'>
                                          < img src={'/' + item} className='w-full' alt="" />
                                    </div>
                              ))}
                        </Carousel>
                        <div className='flex flex-col w-full mr-5'>
                              <div className='flex flex-col mt-5 md:mt-1 text-center gap-4'>
                                    <span className='main-text text-xl'>{product.title}</span>
                                    <span className='flex items-center justify-center text-lg'><BiShekel />{product.price.toFixed(2)}</span>
                              </div >
                              {data && <FormControl className='!mx-auto !my-5'>
                                    <FormLabel id="demo-row-radio-buttons-group-label">Size</FormLabel>
                                    <RadioGroup
                                          row
                                          aria-labelledby="demo-row-radio-buttons-group-label"
                                          name="row-radio-buttons-group"
                                          className='mx-auto mt-4 gap-2'
                                    >
                                          {data.quantity.map(item => (
                                                <FormControlLabel disabled={!!(!item.amount)} defaultChecked={true} className='border !ml-0 !mr-0 border-blue-500 w-16 md:w-20 rounded uppercase' value={item.size} control={<Radio />} label={item.size} />
                                          ))}
                                    </RadioGroup>
                              </FormControl>}
                              <button className='bg-[#212529] text-white py-2 w-full max-w-xs self-center transition duration-200 hover:bg-white hover:text-[#212529] border-[#212529] border-2'>הוספה לסל</button>
                              <span className='text-center main-text mt-1'>✦ משלוח חינם בהזמנה מעל ₪600 ✦</span>
                        </div>
                  </div>
            </Layout >

      )
}

export default ProductDetails