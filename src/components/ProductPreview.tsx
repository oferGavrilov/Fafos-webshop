import { Product} from '@/models/products.model'
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
          src={product.imgUrl}
          alt={product.title}
          className='rounded shadow w-[100%]'
        />
      </Link>
      <div className='flex flex-col items-center p-5'>
        <span>{product.title}</span>
        <span className='text-lg'>₪ {product.price}</span>
        <button className='primary-button '>
          Add to cart
        </button>
      </div>
    </article>
  )
}

export default ProductPreview