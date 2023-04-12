import Layout from '@/components/Layout'
import ProductList from '@/components/ProductList'
import { Filter } from '@/models/filter.model'
import { Product} from '@/models/products.model'
import { productService } from '@/services/product.service'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function Product() {
      const [filterBy , setFilterBy] = useState<Filter>(productService.getEmptyFilter())
      const [products, setProducts] = useState<Product[]>([])
      const { category } = useRouter().query

      useEffect(() => {
            loadProducts()
      }, [])

      async function loadProducts() {
            let data = productService.getAllProducts({...filterBy , category:category})
            setProducts(data)
      }

      if (!products || !products?.length) return <div>Loading...</div>
      return (
            <Layout page='Products'>
                  <ProductList products={products} />
            </Layout>
      );
}

export default Product