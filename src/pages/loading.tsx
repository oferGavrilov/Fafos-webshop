import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function Loader() {
      const router = useRouter()
      const [loading, setLoading] = useState(false)
      useEffect(() => {
        console.log(router.asPath)
        const handleStart = (url: string) => (url !== router.asPath) && setLoading(true)
        const handleComplete = (url: string) => (url === router.asPath) && setTimeout(() => { setLoading(false), 5000 })
        router.events.on('routeChangeStart', () => handleStart)
        router.events.on('routeChangeComplete', () => handleComplete)
        router.events.on('routeChangeError', () => handleComplete)
    
        return () => {
          router.events.off('routeChangeStart', () => handleStart)
          router.events.off('routeChangeComplete', () => handleComplete)
          router.events.off('routeChangeError', () => handleComplete)
        }
      })
      return loading && (
        <Loader />
      )
}
