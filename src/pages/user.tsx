import React from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { useAuth } from '@context/AuthContext'
import Link from 'next/link'


export default function user (): JSX.Element {
      const router = useRouter()
      const { currentUser, loading, signOut, isAdmin } = useAuth()

      if (loading) return <h1>Loading...</h1>
      console.log(isAdmin())

      if (!currentUser) {
            router.push('/login')
            return <h1>Not logged in</h1>
      }

      function onSignOut () {
            signOut()
            toast.success('Sign out success')
      }

      return (
            <section className='h-screen pt-20 custom-gradient'>
                  <h1 className='animate-fade text-center font-montserrat text-3xl font-bold tracking-wider'>Welcome back {currentUser?.displayName}</h1>
                  <div className='flex flex-col w-max mx-auto gap-y-6 py-6'>
                        {isAdmin() &&<Link href='/admin' className='main-btn  shadow-lg'>Admin Page</Link>}
                        <button type='button' onClick={() => onSignOut()} className='main-btn'>Sign Out</button>
                  </div>
            </section>
      )
}
