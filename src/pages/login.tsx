import React from 'react'
import { useRouter } from 'next/router'

import EasyLogin from 'src/components/Auth/EasyLogin'
import { useAuth } from '@context/AuthContext'
import AccountForm from '../components/Auth/AccountForm'

function Login () {
  const { loading, currentUser } = useAuth()
  const router = useRouter()

  if (currentUser && !loading) {
    router.push('/user')
  }

  if (loading) return <h1>Loading...</h1>

  return (
    <section className=' h-screen pt-12'>
      <div className='animate-wrapper text-[#242424] relative pb-20'>
        <AccountForm />
        <div className='flex items-center justify-center gap-4 my-6'>
          <div className='bg-gray-300 w-full h-[1px]' />
          <span className='whitespace-nowrap'>Or sign in with</span>
          <div className='bg-gray-300 w-full h-[1px]' />
        </div>
        <EasyLogin />
      </div>
    </section>
  )
}

export default Login
