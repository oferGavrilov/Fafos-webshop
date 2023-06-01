/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import { Suspense, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import AboveHeader from '../components/AboveHeader'

interface Props {
      children?: React.ReactNode
      page: string
}

function Layout ({ children, ...props }: Props) {
      const [title, setTitle] = useState<string>('Home')
      const router = useRouter()

      useEffect(() => {
            getTitle()
      }, [router.asPath])

      function getTitle () {
            setTitle(() => {
                  const path = router.asPath.split('/')
                  if (path[1] === '') return 'Home'
                  if (/\d/.test(path[path.length - 1])) path.pop()
                  return path[path.length - 1].charAt(0).toUpperCase() + path[path.length - 1].slice(1)
            })
      }

      return (
            <>
                  <Head>
                        <title>{title} - Fafos</title>
                        <meta name="description" content="Ecommerce Website" />
                        <link rel="icon" href="/favicon.ico" />
                  </Head>
                  <AboveHeader />
                  <AppHeader page={router.pathname} />
                  <Suspense fallback={<div>Loading...</div>}>
                        <main className='min-h-screen' {...props} >
                              {children}
                        </main>
                  </Suspense>
                  <AppFooter />
            </>
      )
}

export default Layout