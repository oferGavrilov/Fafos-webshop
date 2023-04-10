import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import AboveHeader from './AboveHeader'
import { useRouter } from 'next/router'

interface Props {
      children?: React.ReactNode
}

function Layout({ children, ...props }: Props) {
      const [isScrolled, setIsScrolled] = useState(false)
      const router = useRouter()
      useEffect(() => {
            const handleScroll = () => {
                  if (window.scrollY > 33) setIsScrolled(true)
                  else setIsScrolled(false)
            }
            addEventListener('scroll', handleScroll)

            return () => window.removeEventListener('scroll', handleScroll)
      }, [])
      return (
            <>
                  <Head>
                        <title>Webshop</title>
                        <meta name="description" content="Ecommerce Website" />
                        <link rel="icon" href="/favicon.ico" />
                  </Head>
                  <AboveHeader />
                  <AppHeader isScrolled={isScrolled} />
                  <main {...props} className={`${router.asPath === "/products" ? 'container m-auto mt-4 px-4' : ''}`}>
                        {children}
                  </main>
                  <AppFooter />
            </>
      )
}

export default Layout