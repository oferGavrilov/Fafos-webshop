'use client'

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAuth } from '@context/AuthContext'
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
      <h2>Admin page</h2>
      <form>
        <span>Add a product</span>

      </form>
    </section>
  )
}

// export async function getServerSideProps (context) {
//   const session = await getIdTokenResult(context.req)
//   console.log(session)
// }
