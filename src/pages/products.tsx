import Layout from '@/components/Layout'
import ProductFilter from '@/components/ProductFilter'
import ProductList from '@/components/ProductList'
import { Filter } from '@/models/filter.model'
import { Product } from '@/models/products.model'
import { productService } from '@/services/product.service'
import { SelectChangeEvent } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function Product() {
      const [filterBy, setFilterBy] = useState<Filter>(productService.getEmptyFilter())
      const [sort, setSort] = React.useState('none')
      const [products, setProducts] = useState<Product[]>([])
      const category = useRouter().asPath.split('=')[1]

      useEffect(() => {
            console.log('render')
            loadProducts()
      }, [sort])

      async function loadProducts() {
            let data = productService.getAllProducts({ ...filterBy, category: category }, sort)
            setProducts([...data])
      }

      const handleSort = (event: SelectChangeEvent) => {
            console.log(event)
            setSort(event.target.value as string)

      }

      if (!products || !products?.length) return <div>Loading...</div>
      return (
            <Layout page='Products'>
                  <ProductFilter category={category} handleSort={handleSort} sort={sort} />
                  <ProductList products={products} />
            </Layout>
      )
}

export default Product