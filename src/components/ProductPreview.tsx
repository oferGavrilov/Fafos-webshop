import { Product } from '@/models/products.model'
import Link from 'next/link'
import React from 'react'

interface Props {
  product: Product
}

function ProductPreview({ product }: Props) {
  return (
    <article className='card'>
      <Link href={`/product`}>
        <img
          src={`https://${product.imageUrl}`}
          alt={product?.name}
          className='rounded shadow w-[100%]'
        />
      </Link>
      <div className='flex flex-col items-center p-5'>
        <h2 className='text-lg'>{product.brandName}</h2>
        <p className='mb-2 h-[60px] text-gray-500'>{product.name}</p>
        <p className='pb-2 text-lg'>{product.price.current.text}</p>
        <button className='primary-button'>
          Add to cart
        </button>
      </div>
    </article>
  )
}

export default ProductPreview