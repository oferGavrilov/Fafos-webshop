import Image from 'next/image'
import { Inter } from 'next/font/google'
import AppHeader from '@/components/AppHeader'
import ProductFilter from '@/components/ProductFilter'
import ProductList from '@/components/ProductList'
import AppFooter from '@/components/AppFooter'
import { productService } from '@/services/product.service'
import { useEffect, useState } from 'react'
import { Product } from '../models/products.model'
import Head from 'next/head'
import Link from 'next/link'
import Home from './Home'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'

export default function Index() {

  return (
    <Layout >
      <Home />
    </Layout>
  )
}
