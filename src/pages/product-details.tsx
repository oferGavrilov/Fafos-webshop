import Layout from '@/components/Layout'
import { Product } from '@/models/products.model'
import { productService } from '@/services/product.service'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function ProductDetails() {
      const [product, setProduct] = useState<Product | undefined>(undefined)
      // const productId = useRouter().asPath.split('=')[1]
     

      useEffect(() => {
            // const product = productService.getProductById(productId)
            // setProduct(product)
      }, [])

      if(!product) return <div>Loading...</div>
      return (
            <Layout page={product.title}>
                  <img src={product.imgUrl} alt="" />
                  <span>{product?.title}</span>
            </Layout>
      )
}

export default ProductDetails