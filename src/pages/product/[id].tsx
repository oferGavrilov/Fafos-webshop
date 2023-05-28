import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

import 'react-multi-carousel/lib/styles.css'

import { IoClose } from 'react-icons/io5'
import RelativeProducts from 'src/components/Product/RelativeProducts'
import SingleCarousel from 'src/components/SingleCarousel'
import ProductForm from 'src/components/Product/ProductForm'
import Loader from 'src/components/Loader'
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
      const id = useRouter().query.id as string
      const { item } = useRouter().query
      const images = product?.inventory.filter(type => type.id === item).map(item => item.imgUrl).flat()
      const data = product?.inventory.find(type => type.id === item)
      const { increaseItemQuantity } = useShoppingCart()


      useEffect(() => {
            loadProduct()
      }, [id])

      async function loadProduct (): Promise<void | JSX.Element> {
            if (!id || !item) return <NoSuchItem />
            setLoader(true)
            const product = await productService.getProductById(id)
            loadRelativeProducts(product?.category)
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
            const { color, imgUrl, bulletColor, id: itemId } = data
            const { title, price, id } = product
            const productToAdd = { color, id, imgUrl, size, title, price, bulletColor, itemId }
            increaseItemQuantity(productToAdd)
      }

      return loader ? <Loader page='product' /> : (
            <section className='relative'>
                  <div className='pt-24 pb-16 mt-8  md:max-w-[75rem]  mx-auto justify-between items-center md:px-20 flex flex-col lg:flex-row-reverse' >
                        <SingleCarousel images={images} />
                        <div className='flex flex-col w-full py-6 '>
                              <div className='flex flex-col mt-5 md:mt-1 text-center gap-4'>
                                    <span className='!font-rubik main-text text-4xl ' style={{ textShadow: `-2px 2px 5px ${data?.bulletColor}` }}>{product?.title}</span>
                                    <span className='flex items-center justify-center text-xl font-rubik'>{formatCurrency(+product.price.toFixed(2))}</span>
                              </div >
                              <ProductForm product={data} handleChange={handleChange} />
                              <button type='button' onClick={onAddToCart} className='bg-[#212529] text-white py-2 w-full max-w-xs self-center transition duration-200 hover:bg-white hover:text-[#212529] border-[#212529] border-2'>Add to cart</button>
                              <span className='text-center main-text mt-1'>✦ Free Shipping On Orders Above 600₪ ✦</span>
                        </div>
                  </div>
                  <IoClose className='absolute top-12 right-4 text-3xl cursor-pointer' onClick={() => router.back()} />
                  {relativeProducts?.length > 0 && <RelativeProducts relativeProducts={relativeProducts} />}
            </section>
      )
}

export default ProductDetails
