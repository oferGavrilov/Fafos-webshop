import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { SelectChangeEvent } from '@mui/material'

import ProductFilter from '../../components/ProductFilter'
import ProductList from '../../components/ProductList'
import { Product } from '../../models/products.model'
import { productService } from '../../services/product.service'

export default function ProductPage ({ productsFromServer }) {
      const { category } = useRouter().query
      const [sort, setSort] = React.useState('none')
      const [products, setProducts] = useState<Product[]>([])

      useEffect(() => {
            loadProducts()
      }, [sort, category])

      function loadProducts () {
            if (category !== 'all-swimwear') {
                  productsFromServer = productsFromServer.filter((product: Product) => product.category === category)
            }
            if (sort !== 'none') {
                  productsFromServer = productService.setSort(sort, productsFromServer)
            }
            setProducts([...productsFromServer])
      }

      const handleSort = (event: SelectChangeEvent) => {
            setSort(event.target.value as string)
      }

      if (!products || !products?.length) return <div>Loading...</div>
      return (
            <>
                  <ProductFilter category={category} handleSort={handleSort} sort={sort} />
                  <ProductList products={products} />
            </>
      )
}

export async function getServerSideProps (context) {
      const { category } = context.params
      const url = process.env.NODE_ENV === 'production' ? 'https://fafos-webshop.vercel.app/api/products' : 'http://localhost:3000/api/products'
      let res = await fetch(`${url}/?category=${category}`, {
            method: 'GET',
            headers: {
                  'Content-Type': 'application/json'
            }
      })
      let data = await res.json()
      return { props: { productsFromServer: data } }
}
