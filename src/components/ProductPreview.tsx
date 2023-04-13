import { Product } from '@/models/products.model'
import Link from 'next/link'
import React from 'react'

interface Props {
  product: Product
}

function ProductPreview({ product }: Props) {
  return (
    <article className='card'>
      <Link href={`/product/${product.id}`}>
        <img
          src={'/' + product.imgUrl}
          alt={product.title}
          className='rounded shadow w-[100%]'
        />
      </Link>
      <div className='flex flex-col items-center gap-4 p-5'>
        <Link href={`/product/${product.id}`} className='hover:underline underline-offset-2 cursor-pointer'>{product.title}</Link>
        <span className='text-lg'>₪{product.price}</span>
        <button className='primary-button '>
          Add to cart
        </button>
      </div>
    </article>
  )
}

export default ProductPreview