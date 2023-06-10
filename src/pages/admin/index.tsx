'use client'

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAuth } from '@context/AuthContext'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function Admin () {
  const router = useRouter()
  const { isAdmin, currentUser } = useAuth()



  useEffect(() => {
    if (!isAdmin()) router.push('/')
  }, [])
  return (
    <section className='h-screen pt-24'>
      <h2 className='page-header text-center'>Admin page</h2>
      <div className='flex flex-col'>
        <Link href="/admin/edit-product">Add a product</Link>
        <Link href="/admin/edit-carousel">Edit carousel</Link>
      </div>
    </section>
  )
}

// export async function getServerSideProps (context) {
// }
