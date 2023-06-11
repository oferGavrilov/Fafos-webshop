import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { SelectChangeEvent } from '@mui/material'

import Loader from 'src/components/SkeletonLoader'
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
            loadProducts()
      }, [category])

      useEffect(() => {
            const sortValue = searchParams.split('sort=')[1] || 'none'
            setSortBy(sortValue)
            const sortedProducts = productService.setSort(sortValue, products)
            setProducts(sortedProducts)
      }, [initSort])


      async function loadProducts (): Promise<void> {
            setLoader(true)
            const products = await productService.getProducts(category as string)
            setProducts(products)
            setLoader(false)
      }

      const createQueryString = useCallback((key: string, value: string) => {
            const paramsI = new URLSearchParams(searchParams)
            paramsI.set(key, value)
            return paramsI.toString()
      }, [searchParams])


      const handleSort = (event: SelectChangeEvent) => {
            const sortValue = event.target.value as string
            router.push(`${pathname}?${createQueryString('sort', sortValue)}`)
            setSortBy(sortValue)
            const sortedProducts = productService.setSort(sortValue, products)
            setProducts(sortedProducts)
      }

      return (loader || !products?.length) ? <Loader page='category' count={18} /> : (
            <>
                  <ProductFilter category={category} handleSort={handleSort} sort={sortBy} />
                  <ProductList products={products} />
            </>
      )
}
