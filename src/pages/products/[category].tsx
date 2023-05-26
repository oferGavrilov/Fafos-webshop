import React from 'react'
import { useRouter } from 'next/router'
import { SelectChangeEvent } from '@mui/material'

import ProductFilter from '../../components/ProductFilter'
import ProductList from '../../components/ProductList'
import { Product } from '../../models/products.model'

export default function ProductPage ({ productsFromServer }: { productsFromServer: Product[] }) {
      const { category } = useRouter().query
      const [sort, setSort] = React.useState('none')

      const handleSort = (event: SelectChangeEvent) => {
            setSort(event.target.value as string)
      }

      // TODO: ADD SKELTON LOADER
      if (!productsFromServer || !productsFromServer?.length) {
            console.log('loading')
            return (
                  <div>Loading...</div>
                  )
      }
      return (
            <>
                  <ProductFilter category={category} handleSort={handleSort} sort={sort} />
                  <ProductList products={productsFromServer} />
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
