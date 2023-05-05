import { ShoppingCartProvider } from '@/context/ShoppingCart'
import '@/styles/globals.css'
import '@/styles/login-page.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ShoppingCartProvider>
        <Component {...pageProps} />
      </ShoppingCartProvider>
  )
}
