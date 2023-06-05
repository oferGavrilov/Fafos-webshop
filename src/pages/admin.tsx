import { useAuth } from '@context/AuthContext'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function Admin () {
  const { isAdmin } = useAuth()
  const router = useRouter()
  useEffect(() => {
    if (!isAdmin()) router.push('/')
  },[])
  return (
    <section className='h-screen pt-24'>
      <h2>Admin page</h2>
      <form>
        <span>Add a product</span>

      </form>
    </section>
  )
}
