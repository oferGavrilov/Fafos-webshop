import { Product } from '@/models/products.model'
import Link from 'next/link'
import React from 'react'
// import Carousel from 'react-responsive-carousel'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import "swiper/css";
import "swiper/css/pagination";
interface Props {
  product: Product
}

function ProductPreview({ product }: Props) {
  const data = product.inventory.map(item => item.imgUrl)

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      console.log(product.inventory[index].color)
      return `<span class="swiper-pagination-bullet !bg-${product.inventory[index].color}"></span>`;
    },
  };
  console.log(data)
  return (
    <article className='card'>
      <Link href={`/product/${product.id}`}>
        <Swiper  pagination={pagination} modules={[Pagination]} className='mySwiper'>
          {data.map((item, idx) => (
            <SwiperSlide key={product.inventory[idx].id}><img className='rounded relative shadow w-[100%]' src={'/' + item} alt={item} /></SwiperSlide>
          ))}
          <div className='flex flex-col items-center gap-4 p-5'>
            <Link href={`/product/${product.id}`} className='hover:underline underline-offset-2 cursor-pointer'>{product.title}</Link>
            <span className='text-lg'>₪{product.price}</span>
            <button className='primary-button '>
              Add to cart
            </button>
          </div>
        </Swiper>
      </Link>
    </article>
  )
}

export default ProductPreview