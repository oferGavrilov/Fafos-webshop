import React from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@context/AuthContext'
import Link from 'next/link'


export default function user (): JSX.Element {
      const router = useRouter()
      const { currentUser, loading, signOut, isAdmin } = useAuth()

      if (loading) return <h1>Loading...</h1>

      if (!currentUser) {
            router.push('/login')
            return <h1>Not logged in</h1>
      }

      function onSignOut () {
            signOut()
      }

      return (
            <section className='h-screen pt-20'>
                  <h1 className='animate-fade text-center font-montserrat text-3xl font-bold tracking-wider'>Welcome back {currentUser?.displayName}</h1>
                  <div className='flex flex-col w-max mx-auto gap-y-6 py-6'>
                        {isAdmin() &&<Link href='/admin' aria-label='Move to admin page' className='main-btn  shadow-lg'>Admin Page</Link>}
                        <button title='Sign out' aria-label='Sign out' type='button' onClick={() => onSignOut()} className='main-btn'>Sign Out</button>
                  </div>
            </section>
      )
}
