/* eslint-disable react/no-array-index-key */
import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { IoClose } from 'react-icons/io5'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { Carousel } from 'react-responsive-carousel'
import formatCurrency from '@services/formatCurrency'
import NoSuchItem from '../../components/NoSuchItem'
import { useShoppingCart } from '../../context/ShoppingCart'

import { Product } from '../../models/products.model'
import { productService } from '../../services/product.service'

import "react-responsive-carousel/lib/styles/carousel.min.css"

function ProductDetails () {
      const [product, setProduct] = useState<Product>()
      const [size, setSize] = useState<string>('')
      const router = useRouter()
      const id = useRouter().query.id as string
      const { item } = useRouter().query
      const images = product?.inventory.filter(type => type.id === item).map(item => item.imgUrl).flat()
      const data = product?.inventory.find(type => type.id === item)
      const { increaseItemQuantity } = useShoppingCart()

      useEffect(() => {
            loadProduct()
      }, [id])

      function loadProduct (): void {
            if (!id) return
            const data = productService.getProductById(id)
            setProduct(data)
      }

      const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
            setSize(e.target.value)
      } , [setSize]) 

      function onAddToCart () {
            if (!size) return toast.error('You must choose a size')
            const { color, id, imgUrl, bulletColor } = data
            const { title, price } = product
            const productToAdd = { color, id, imgUrl, size, title, price, bulletColor }
            increaseItemQuantity(productToAdd)
            return toast.success('Item added to cart')
      }

      if (!product) return <NoSuchItem />
      console.log(product)
      console.log(data)
      return (
            <>
                  <div className='py-24 px-16 md:px-20 flex flex-col md:flex-row-reverse' >
                        <Carousel showIndicators={false} showArrows={false} showStatus={false} className='max-w-lg' >
                              {images && images.map((item, idx) => (
                                    <div key={item + idx} className='flex flex-col'>
                                          < img src={`/${  item}`} className='w-full ' alt={item} />
                                    </div>
                              ))}
                        </Carousel>
                        <div className='flex flex-col w-full mr-5'>
                              <div className='flex flex-col mt-5 md:mt-1 text-center gap-4'>
                                    <span className='!font-rubik main-text text-4xl ' style={{ textShadow: `-2px 2px 5px ${data.bulletColor}` }}>{product.title}</span>
                                    <span className='flex items-center justify-center text-xl font-marker'>{formatCurrency(+product.price.toFixed(2))}</span>
                              </div >
                              {data && <FormControl className='!mx-auto !my-5'>
                                    <FormLabel id="demo-row-radio-buttons-group-label" className='!text-xl !text-gray-400'>Size</FormLabel>
                                    <RadioGroup
                                          row
                                          aria-labelledby="demo-row-radio-buttons-group-label"
                                          name="row-radio-buttons-group"
                                          className='mx-auto gap-6 mt-2'
                                    >
                                          {data.quantity.map((item, idx) => (
                                                <FormControlLabel key={item.size + idx} disabled={!!(!item.amount)} onChange={handleChange} defaultChecked className='border !mx-0  border-blue-500 w-16 md:w-20 rounded uppercase' value={item.size} control={<Radio />} label={item.size} />
                                          ))}
                                    </RadioGroup>
                              </FormControl>}
                              <button type='button' onClick={onAddToCart} className='bg-[#212529] text-white py-2 w-full max-w-xs self-center transition duration-200 hover:bg-white hover:text-[#212529] border-[#212529] border-2'>הוספה לסל</button>
                              <span className='text-center main-text mt-1'>✦ Free Shipping On Orders Above 600₪ ✦</span>
                        </div>
                  </div>
                  <IoClose className='absolute top-24 right-4 text-3xl cursor-pointer' onClick={() => router.back()} />
            </>

      )
}

export default ProductDetails