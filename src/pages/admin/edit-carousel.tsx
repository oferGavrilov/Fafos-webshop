import { ICarousel } from '@models/products.model'
import { productService } from '@services/product.service'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function EditCarousel () {
      const [allProducts, setAllProducts] = useState<ICarousel[]>([])
      useEffect(() => {
            loadProducts()
            loadCarouselData()
      }, [])

      async function loadProducts () {
            const products = await productService.getProducts()
            const allProducts = products.map(product => product.inventory.flatMap(item => {
                  const { title, price, id , category } = product
                  const { id: itemId, imgUrl, color } = item
                  return [{ itemId, id, title, price, imgUrl, color, category }]
            })).flat()
            setAllProducts(allProducts)
      }

      async function loadCarouselData () {
            // const data = await productService.getCarouselData()
            // const products = data.map(product => product.inventory.flatMap(item => {
            //       const { title, price, id , category } = product
            //       const { id: itemId, imgUrl, color } = item
            //       return [{ itemId, id, title, price, imgUrl, color, category }]
            // })).flat()
            // setAllProducts(shuffle(products))
            const data = await productService.getCarouselData()
            console.log(data)
      }
      return (
            <section className='min-h-screen my-20 text-center mx-10'>
                  <h2 className='text-3xl my-8'>Edit Carousel Data</h2>
                  <ul className='flex flex-wrap gap-3  justify-center'>
                        {allProducts.map(product => (
                              <li className='h-max' key={product.id + product.itemId}>
                                    <Image priority width={200} height={150} src={`/${product.imgUrl[0]}`} alt={product.title} className='max-h-[220px] max-w-[200px] object-cover' style={{width:'auto', height:'auto'}} />
                                    <span>{product.title} - {product.color} - {product.category}</span>
                              </li>
                        ))}
                  </ul>
            </section>
      )
}
