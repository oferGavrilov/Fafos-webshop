import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Swiper, SwiperSlide } from 'swiper/react'

import Layout from '@/components/Layout'
import { Product } from '@/models/products.model'
import { productService } from '@/services/product.service'

import "swiper/css"
import "swiper/css/pagination"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Pagination } from 'swiper'
import { BiShekel } from 'react-icons/bi'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { Carousel } from 'react-responsive-carousel'

function ProductDetails() {
      const [product, setProduct] = useState<Product>()
      const id = useRouter().query.id as string
      const { item } = useRouter().query
      const data = product?.inventory.filter(type => type.id === item).map(item => item.imgUrl).flat()

      const pagination = {
            clickable: true,
            renderBullet: function (index: number, className: string) {
                  return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
      }

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
                  <div className='mt-24 mx-16 md:mx-24'>
                        <Carousel showIndicators={false} showStatus={false} >
                              {data && data.map((item, idx) => (
                                    <>
                                          < img src={'/' + item} className='w-full' alt="" />
                                          <div className='flex flex-col mt-5 text-center gap-4'>
                                                <span className='main-text text-xl'>{product.title}</span>
                                                <span className='flex items-center justify-center text-lg'><BiShekel />{product.price.toFixed(2)}</span>
                                          </div>
                                    </>
                              ))}
                        </Carousel>
                       
                  </div>
            </Layout>
            // <Layout page='Product'>
            //       <div className='mt-24 mx-16 md:mx-24'>
            //             <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper" >
            //                   {data && data.map((item, idx) => (
            //                         <SwiperSlide key={idx}>
            //                               < img src={'/' + item} className='w-full' alt="" />
            //                               <div className='flex flex-col mt-5 text-center gap-4'>
            //                                     <span className='main-text text-xl'>{product.title}</span>
            //                                     <span className='flex items-center justify-center text-lg'><BiShekel />{product.price.toFixed(2)}</span>
            //                                     <FormControl className='!mx-auto !my-5'>
            //                                           <FormLabel id="demo-row-radio-buttons-group-label">Size</FormLabel>
            //                                           <RadioGroup
            //                                                 row
            //                                                 aria-labelledby="demo-row-radio-buttons-group-label"
            //                                                 name="row-radio-buttons-group"
            //                                                 className='mx-auto mt-4'

            //                                           >
            //                                                 <FormControlLabel defaultChecked={true}  className='border border-blue-500 w-20 rounded' value="female" control={<Radio />} label="XL" />
            //                                                 <FormControlLabel className='border border-blue-500 w-20 rounded' value="male" control={<Radio />} label="M" />
            //                                                 <FormControlLabel className='border border-blue-500 w-20 rounded' value="other" control={<Radio />} label="S" />
            //                                                 {/* <FormControlLabel
            //                                                       value="disabled"
            //                                                       disabled
            //                                                       control={<Radio />}
            //                                                       label="other"
            //                                                 /> */}
            //                                           </RadioGroup>
            //                                     </FormControl>
            //                               </div>
            //                         </SwiperSlide>
            //                   ))}
            //             </Swiper>
            //       </div>
            // </Layout>
      )
}

export default ProductDetails