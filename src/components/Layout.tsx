import Head from 'next/head'
import React from 'react'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import AboveHeader from './AboveHeader'
import { useRouter } from 'next/router'

interface Props {
      children?: React.ReactNode
}

function Layout({ children, ...props }: Props) {
      const router = useRouter()
      console.log(router)
      return (
            <>
                  <Head>
                        <title>Webshop</title>
                        <meta name="description" content="Ecommerce Website" />
                        <link rel="icon" href="/favicon.ico" />
                  </Head>
                  <div>
                        <AboveHeader />
                        <AppHeader />
                        <main {...props} className={`${router.asPath === "/products" ? 'container m-auto mt-4 px-4' : ''}`}>
                              {children}
                        </main>
                        <AppFooter />
                  </div>
            </>
      )
}

export default Layout