import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { SelectChangeEvent } from '@mui/material'

import ProductFilter from '../../components/ProductFilter'
import ProductList from '../../components/ProductList'
// import { Filter } from '../../models/filter.model'
import { Product } from '../../models/products.model'
import { productService } from '../../services/product.service'

export default function ProductPage ({ productsFromServer }) {
      console.log('props', productsFromServer)
      const { category } = useRouter().query
      // const [filterBy, setFilterBy] = useState<Filter>(productService.getEmptyFilter())
      const [sort, setSort] = React.useState('none')
      const [products, setProducts] = useState<Product[]>([])

      useEffect(() => {
            loadProducts()
      }, [sort, category])

      function loadProducts () {
            if(!productsFromServer?.length) productService.getProductsFromJson()
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

export async function getServerSideProps () {
      try {
            let response = await fetch('http://localhost:3000/api/products')
            let data = await response.json()
            return { props: { productsFromServer: data } }
      } catch (error) {
            console.log(error)
            return { props: { products: [] } }
      }
}
