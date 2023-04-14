import Layout from '@/components/Layout'
import { Product } from '@/models/products.model'
import { productService } from '@/services/product.service'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { BiShekel } from 'react-icons/bi'
import Swiper, { Pagination } from 'swiper'
import { SwiperSlide } from 'swiper/react'

function ProductDetails() {
      const id = useRouter().query.id as string
      const [product, setProduct] = useState<Product>()
      console.log(id)
      useEffect(() => {
            loadProduct()
      }, [id])

      function loadProduct() {
            if (!id) return <Layout page=''><div>No such product</div></Layout>
            const data = productService.getProductById(id)
            setProduct(data)
      }

      if (!product) return <div>loading...!</div>
      return (
            <Layout page='Product'>
                  <div className='flex flex-col my-20 mx-10'>
                        {/* <Swiper >
                              <SwiperSlide>
                                    {product.inventory}
                              </SwiperSlide>
                        </Swiper> */}
                        <div className='flex flex-col mt-5 text-center gap-4'>
                              <span className='main-text text-xl'>{product.title}</span>
                              <span className='flex items-center justify-center text-lg'><BiShekel />{product.price.toFixed(2)}</span>
                        </div>
                  </div>
            </Layout>
      )
}

export default ProductDetails