import React from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { useAuth } from '@context/AuthContext'


export default function user (): JSX.Element {
      const router = useRouter()
      const {currentUser , loading , signOut} = useAuth()
      
      if (loading) return <h1>Loading...</h1>
      const adminId = process.env.ADMIN_ID
      console.log(currentUser?.uid)
      console.log(adminId)

      if(currentUser?.uid == adminId) {
            console.log('is admin')
      }

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
