/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import { Suspense, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import SpinnerLoader from 'src/components/SpinnerLoader'
import { usePathname } from 'next/navigation'
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
      const pathName = usePathname().split('/')[1]

      useEffect(() => {
            getTitle()
      }, [router.asPath])

      function getTitle () {
            setTitle(() => !pathName ? 'Home' : pathName.charAt(0).toUpperCase() + pathName.slice(1))
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
                  <Suspense fallback={<SpinnerLoader />}>
                        <main className='min-h-screen' {...props} >
                              {children}
                        </main>
                  </Suspense>
                  <AppFooter />
            </>
      )
}

export default Layout