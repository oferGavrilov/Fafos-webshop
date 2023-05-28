import React, { FormEvent, useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

import EasyLogin from 'src/components/Auth/EasyLogin'
import { useAuth } from '@context/AuthContext'
import AccountForm from '../components/Auth/AccountForm'
import { IUser } from '../models/user.model'

import { useMultiStepForm } from '../hooks/useMultiStepForm'
import { userService } from '../services/user.service'

function Login () {
  const [credentials, setCredentials] = useState<IUser>(userService.getEmptyUser())
  const { loading, signInWithCredentials, signupWithCredentials, currentUser } = useAuth()
  const router = useRouter()

  
  // const { step, currentStep, steps, isFirstStep, isLastStep, onBack, onNext } = useMultiStepForm(isLogin ?
  //   [<AccountForm key={1} data={credentials} updateFields={updateFields} />] :
  //   [<AccountForm key={2} data={credentials} updateFields={updateFields} />])


  if (currentUser && !loading) {
    router.push('/user')
  }

  if (loading) return <h1>Loading...</h1>
  





  return (
    <section className=' h-screen pt-12'>
      <div className='animate-wrapper text-[#242424] relative pb-20'>
        <AccountForm data={credentials}  />
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
