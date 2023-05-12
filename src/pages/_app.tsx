import { AuthProvider } from '../context/AuthContext'
import { ShoppingCartProvider } from '../context/ShoppingCart'
import '../styles/globals.css'
import '../styles/login-page.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ShoppingCartProvider>
        <NextNProgress />
        <Component {...pageProps} />
      </ShoppingCartProvider>
    </AuthProvider>
  )
}
