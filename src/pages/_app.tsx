import { AuthProvider } from '../context/AuthContext'
import { ShoppingCartProvider } from '../context/ShoppingCart'
import '../styles/globals.css'
import '../styles/login-page.css'
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { ToastContainer } from 'react-toastify';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ShoppingCartProvider>
        <NextNProgress />
        <Component {...pageProps} />
        <ToastContainer />
      </ShoppingCartProvider>
    </AuthProvider>
  )
}
