import React from 'react'
import { getAuth } from 'firebase/auth'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { useAuth } from '@context/AuthContext'

export default function user (): JSX.Element {
      const auth = getAuth()
      const router = useRouter()
      const {currentUser , loading , signOut} = useAuth()
      console.log(currentUser)

      if (loading) return <h1>Loading...</h1>
      
      if (!currentUser) {
            router.push('/login')
            return <h1>Not logged in</h1>
      }

      function onSignOut () {
            signOut()
            toast.success('Sign out success')
      }
      return (
            <section className='h-screen mt-16'>
                  <h1 className='text-center font-pangolin text-2xl'>Welcome back {currentUser?.displayName}</h1>
                  <button type='button' onClick={() => onSignOut()}>Sign Out</button>
            </section>
      )
}
