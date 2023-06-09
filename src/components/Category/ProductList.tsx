import React from 'react'
import { Product } from '../../models/products.model'
import ProductPreview from './ProductPreview'

interface Props {
  products: Product[]
}

function ProductList({ products }: Props) {

  return (
    <section className='gap-4 custom-grid mx-10'>
      {products.map(product => (
        <ProductPreview product={product} key={product.id} />
      ))}
    </section>
  )
}

export default ProductList

// grid gap-4 mx-10 grid-cols-1   sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4