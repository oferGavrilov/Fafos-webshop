import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { SelectChangeEvent } from '@mui/material'

import Loader from 'src/components/Loader'
import { usePathname, useSearchParams } from 'next/navigation'
import { productService } from '@services/product.service'
import ProductFilter from '../../components/Category/ProductFilter'
import ProductList from '../../components/Category/ProductList'
import { Product } from '../../models/products.model'

export default function ProductPage () {
      const searchParams = useSearchParams().toString()
      const initSort = searchParams.split('sort=')[1] || 'none'

      const [sortBy, setSortBy] = useState(initSort)
      const [products, setProducts] = useState<Product[]>([])
      const [loader, setLoader] = useState<boolean>(true)

      const router = useRouter()
      const pathname = usePathname()
      const { category } = router.query

      useEffect(() => {
            setLoader(true)
            const getProducts = async () => {
                  const products = await productService.getProducts(category as string)
                  setProducts(products)
            }
            getProducts()
            setLoader(false)
      }, [category])

      useEffect(() => {
            const sortValue = searchParams.split('sort=')[1] || 'none'
            setSortBy(sortValue)
            const sortedProducts = productService.setSort(sortValue, products)
            setProducts(sortedProducts)
      }, [initSort])


      const createQueryString = useCallback((key: string, value: string) => {
            const params = new URLSearchParams(searchParams)
            params.set(key, value)
            return params.toString()
      }, [searchParams])


      const handleSort = (event: SelectChangeEvent) => {
            const sortValue = event.target.value as string
            router.push(`${pathname}?${createQueryString('sort', sortValue)}`)
            setSortBy(sortValue)
            const sortedProducts = productService.setSort(sortValue, products)
            setProducts(sortedProducts)
      }

      return (loader || !products) ? <Loader page='category' count={4}/> : (
            <>
                  <ProductFilter category={category} handleSort={handleSort} sort={sortBy} />
                  <ProductList products={products} />
            </>
      )
}
