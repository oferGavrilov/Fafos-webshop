import Head from 'next/head'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import AboveHeader from './AboveHeader'
import { useRouter } from 'next/router'

interface Props {
      children?: React.ReactNode
      page: string
}

function Layout({ children, ...props }: Props) {
      const router = useRouter()

      return (
            <>
                  <Head>
                        <title>{props.page} - Fafos</title>
                        <meta name="description" content="Ecommerce Website" />
                        <link rel="icon" href="/favicon.ico" />
                  </Head>
                  <AboveHeader />
                  <AppHeader  page={props.page} />
                  <main {...props} className={`${router.asPath === "/products" ? 'container m-auto mt-4 px-4' : ''}`}>
                        {children}
                  </main>
                  <AppFooter />
            </>
      )
}

export default Layout