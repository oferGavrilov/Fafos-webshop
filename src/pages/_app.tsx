import dynamic from 'next/dynamic'

import '../styles/globals.css'
import '../styles/login-page.css'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/checkout-modal.css'

import type { AppProps } from 'next/app'

import NextNProgress from 'nextjs-progressbar'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from '../context/AuthContext'
import { ShoppingCartProvider } from '../context/ShoppingCart'

const Layout = dynamic(() => import('../components/Layout'), { ssr: false })

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ShoppingCartProvider>
        <NextNProgress />
        <Layout page=''>
          <Component {...pageProps} />
        </Layout>
        <ToastContainer />
      </ShoppingCartProvider>
    </AuthProvider>
  )
}
