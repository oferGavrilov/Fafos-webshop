import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import Link from 'next/link'

import 'react-multi-carousel/lib/styles.css'

import { IoClose } from 'react-icons/io5'

import RelativeProducts from 'src/components/Product/RelativeProducts'
import SingleCarousel from 'src/components/SingleCarousel'
import ProductForm from 'src/components/Product/ProductForm'
import Loader from 'src/components/SkeletonLoader'
import ProductInfo from 'src/components/Product/ProductInfo'
import formatCurrency from '../../helpers/formatCurrency'
import NoSuchItem from '../../components/Product/NoSuchItem'
import { useShoppingCart } from '../../context/ShoppingCart'

import { Product } from '../../models/products.model'
import { productService } from '../../services/product.service'

import "react-responsive-carousel/lib/styles/carousel.min.css"


function ProductDetails () {
      const [product, setProduct] = useState<Product>()
      const [loader, setLoader] = useState<boolean>(true)
      const [relativeProducts, setRelativeProducts] = useState<Product[]>([])
      const [size, setSize] = useState<string>('')

      const router = useRouter()
      const id = router.query.id as string
      const { item } = router.query

      const { increaseItemQuantity } = useShoppingCart()

      useEffect(() => {
            loadProduct()
      }, [id, item])

      async function loadProduct (): Promise<void | JSX.Element> {
            setLoader(true)
            const product = await productService.getProductByIdAndItem(id, item as string)
            await loadRelativeProducts(product?.category)
            setProduct(product)
            setLoader(false)
      }

      const loadRelativeProducts = async (category: string) => {
            const data = await productService.getProducts(category)
            const products = data.filter((item: { id: string }) => item.id !== id)
            setRelativeProducts([...products])
      }

      const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
            setSize(e.target.value)
      }, [setSize])

      function onAddToCart (): void {
            if (!size) {
                  toast.error('You must choose a size')
                  return
            }
            const { title, price, color, images, bulletColor, id: itemId } = product
            const productToAdd = { color, id, images, size, title, price, bulletColor, itemId }
            increaseItemQuantity(productToAdd)
      }

      if (!product) return <NoSuchItem />
      console.log(product)
      return loader ? <Loader page='product' /> : (
            <section className='relative'>
                  <div className='fade pt-24 pb-16 mt-8  md:max-w-[75rem] items-center lg:items-start mx-auto gap-x-[2rem] xl:gap-x-[12rem]  flex flex-col lg:flex-row-reverse' >
                        <SingleCarousel images={product?.images} />
                        <div className='flex flex-col w-[70%] lg:w-[40%] py-6 '>
                              <div className='flex flex-col mt-5 md:mt-1 text-center gap-4'>
                                    <span className='!font-rubik main-text text-[1.75rem] md:text-3xl uppercase ' style={{ textShadow: `-2px 2px 5px ${product?.bulletColor}` }}>{product?.title} {product.color} - {product.category}</span>
                                    <span className='flex items-center md:items-start justify-center text-2xl font-montserrat'>{formatCurrency(+product.price.toFixed(2))}</span>

                                    <div className='flex items-center justify-center gap-4 '>
                                          {product.inventory.map(color => (
                                                <Link key={color.id} href={`/product/${id}?item=${color.id}`} className={`rounded-full ${item === color.id ? 'color-active' : ''}`}>
                                                      <div className={`border-spacing-2 border-gray-300 border-2 rounded-full h-7 w-7 `} style={{ background: `${color.bulletColor}` }} />
                                                </Link>
                                          ))}
                                    </div>

                              </div >
                              <ProductForm product={product} handleChange={handleChange} />
                              <button title='Add To Cart' aria-label='add-to-cart' type='button' onClick={onAddToCart} className='bg-[#212529] text-white py-2 w-full self-center transition duration-200 hover:bg-white hover:text-[#212529] border-[#212529] border-2'>Add to cart</button>
                              <span className='text-center main-text mt-1'>✦ Free Shipping On Orders Above 600₪ ✦</span>

                              <ProductInfo product={product} />

                        </div>
                  </div>

                  <IoClose className='absolute top-12 right-4 text-3xl cursor-pointer' onClick={() => router.back()} />
                  {relativeProducts?.length > 0 && <RelativeProducts relativeProducts={relativeProducts} />}
            </section>
      )
}

export default ProductDetails
