import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@models/products.model'
import { productService } from '@services/product.service'
import  formantCurrency  from '../../helpers/formatCurrency'

interface Pair {
      image: string
      title: string
      price: string
      category: string

}

export default function ProductPair ({ product }: { product: Product }) {
      const [pair, setPair] = useState<Pair>(null)

      useEffect(() => {
            if (!product?.pairs) return
            getPairs()
      }, [])

      async function getPairs () {
            const productPair = await productService.getProductPair(product?.pairs.id, product?.pairs.itemId)
            setPair(productPair)
      }
      if (!pair) return null
      return (
            <section className='mt-10 text-center border border-gray-300 transition-all duration-300 shadow-gray-100 hover:shadow-lg hover:opacity-80'>
                  <h2 className='uppercase font-montserrat tracking-tighter py-4 text-xl border-b border-gray-300'>Pairs well with</h2>
                  <Link href={`/product/${product?.pairs.id}?item=${product?.pairs.itemId}`} className='flex p-4 flex-1'>
                        <div className='flex flex-col gap-y-4 mt-6 text-2xl flex-1'>
                              <h4 className=' uppercase font-semibold'>{pair.title} - {pair.category}</h4>
                              <span className='text-xl'>{formantCurrency(+pair.price)}</span>
                        </div>
                        <Image src={`/${pair.image}`} alt={pair.title} width={120} height={200} style={{width:'auto' , height:'auto'}}/>
                  </Link>
            </section>
      )
}
