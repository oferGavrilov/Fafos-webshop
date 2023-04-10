import Layout from '@/components/Layout'
import ProductList from '@/components/ProductList'
import { productService } from '@/services/product.service'
import React, { useEffect, useState } from 'react'

function Product() {
      const [products, setProducts] = useState([])

      useEffect(() => {
            loadProducts()
      }, [])

      async function loadProducts() {
            let products = await productService.query()
            setProducts(products)
      }

      if (!products || !products?.length) return <div>Loading...</div>
      return (
            <Layout>
                  <ProductList products={products} />
            </Layout>
      );
}

export default Product