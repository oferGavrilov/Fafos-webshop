import { Product } from '../models/products.model'
import Link from 'next/link'
import React from 'react'
import { useShoppingCart } from '../context/ShoppingCart'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import "swiper/css"
import "swiper/css/pagination"
import { formatCurrency } from '../services/formatCurrency'
interface Props {
  product: Product
}

function ProductPreview({ product }: Props) {
  const { removeItem, getItemQuantity, increaseItemQuantity, decreaseItemQuantity } = useShoppingCart()
  const data = product.inventory.map(item => item.imgUrl)
  const pagination = {
    clickable: true,
    renderBullet: function (index: number) {
      return `<span class="swiper-pagination-bullet" style="background:${product.inventory[index].bulletColor}"></span>`
    },
  }

  return (
    <article className='card'>
      <Swiper pagination={pagination} modules={[Pagination]} className='mySwiper'>
        {data.map((item, idx) => (
          <SwiperSlide key={product.inventory[idx].id}>
            <Link href={`/product/${product.id}?item=${product.inventory[idx].id}`}>
              <img className='rounded relative shadow w-[100%]' src={'/' + item[idx]} alt={item[idx]} />
            </Link>
            <div className='flex flex-col items-center gap-4 p-5'>
              <Link href={`/product/${product.id}`} className='hover:underline underline-offset-2 h-12 cursor-pointer uppercase'>{product.title} {product.inventory[idx].color} {product.category}</Link>
              <span className='text-lg'>{formatCurrency(product.price)}</span>
              <Link href={`/product/${product.id}?item=${product.inventory[idx].id}`}>
                <button className='primary-button'>
                  More Details
                </button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </article >
  )
}

export default ProductPreview