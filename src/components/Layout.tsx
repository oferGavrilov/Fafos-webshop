import Head from 'next/head'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import AboveHeader from './AboveHeader'
import { useRouter } from 'next/router'
import { Suspense, useEffect, useState } from 'react'

interface Props {
      children?: React.ReactNode
      page: string
}

function Layout({ children, ...props }: Props) {
      const [title, setTitle] = useState<string>('Home')
      const router = useRouter()

      useEffect(() => {
            getTitle()
      }, [router.asPath])

      function getTitle() {
            setTitle(() => {
                  const path = router.asPath.split('/')
                  if (path[1] === '') return 'Home'
                  if(/\d/.test(path[path.length - 1])) path.pop()
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
                  <AppHeader page={props.page} />
                  <Suspense fallback={<div>Loading...</div>}>
                        <main {...props} className={`${router.asPath === "/products" ? 'container m-auto mt-4 px-4' : ''}`}>
                              {children}
                        </main>
                  </Suspense>
                  <AppFooter />
            </>
      )
}

export default Layout