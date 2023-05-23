import React, { FormEvent, useCallback, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

import { useAuth } from '@context/AuthContext'
import { IUser } from '../models/user.model'
import AccountForm from '../components/login/AccountForm'
// import AddressForm from '../components/login/AddressForm'
// import UserForm from '../components/login/UserForm'
// import { useAuth } from '../context/AuthContext'
import { useMultiStepForm } from '../hooks/useMultiStepForm'
import { userService } from '../services/user.service'

function Login () {
  const [isLogin, setIsLogin] = useState(true)
  const [credentials, setCredentials] = useState<IUser>(userService.getEmptyUser())
  const { loading, googleSignIn, signInWithCredentials, signupWithCredentials, currentUser } = useAuth()
  const router = useRouter()

  const updateFields = useCallback((fields: Partial<IUser>) => {
    setCredentials(prev => ({ ...prev, ...fields }))
  }, [])

  const { step, currentStep, steps, isFirstStep, isLastStep, onBack, onNext } = useMultiStepForm(isLogin ?
    [<AccountForm key={1} data={credentials} updateFields={updateFields} />] :
    [<AccountForm key={2} data={credentials} updateFields={updateFields} />])


  if (currentUser && !loading) {
    router.push('/user')
  }

  if (loading) return <h1>Loading...</h1>
  async function signInWithGoogle () {
    try {
      await googleSignIn()
      toast.success("Login with google success.")
      router.push('/user')
    } catch (err) {
      toast.error("Login with google failed, please try again.")
    }
  }

  function onSubmit (e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return onNext()
    if (isLogin) return signIn()
    return signUp()
  }

  async function signIn () {
    try {
      await signInWithCredentials(credentials)
      router.push('/user')
      toast.success("Login success.")
    } catch (error) {
      console.log(error)
    }
  }

  async function signUp () {
    try {
      await signupWithCredentials(credentials)
      router.push('/user')
      toast.success("Signup success.")
    } catch (error) {
      console.log(error)
    }
  }

  // [<UserForm data={credentials} updateFields={updateFields} />, <AddressForm data={credentials} updateFields={updateFields} />,
  return (
    <section className='login-page'>
      <div className='animate-wrapper max-w-3xl w-[90%] text-[#242424] mt-10 relative mx-auto'>
        <form onSubmit={onSubmit} className=''>
          <h2 className='text-center font-pangolin text-xl tracking-wide py-4'>{isLogin ? 'Login' : 'Signup'}</h2>
          {step}
          {!isLogin && <div className='absolute top-2 right-2'>
            {currentStep + 1} / {steps.length}
          </div>}
          <div className='h-full w-full px-6 pt-12 pb-3 flex items-end relative'>
            {!isFirstStep && <button type='button' className='login-btn left-7' onClick={onBack}>Back</button>}
            <button type='submit' className='login-btn right-9'>{!isLastStep ? 'Next' : 'Submit'}</button>
          </div>
          <div className='text-center'>{!isLogin ? 'Already have account ?' : 'Not a member yet ? '} <span role='presentation' onClick={() => setIsLogin(!isLogin)} className='cursor-pointer underline underline-offset-2 text-sm text-[#726e6e] hover:text-[#242424]'>{!isLogin ? 'Login Here' : 'Sign up Here'}</span> </div>
        </form>
        <div className='flex items-center justify-center gap-4 my-12'>
          <div className='bg-gray-300 w-full h-[1px]' />
          <span className='whitespace-nowrap'>Or sign in with</span>
          <div className='bg-gray-300 w-full h-[1px]' />
        </div>
        <div className='flex gap-x-6 mx-auto justify-center'>
          <div role='presentation' onClick={signInWithGoogle} className='social-icons'>
            <Image src='/imgs/etc/google.png' width={40} height={40} alt='google' />
          </div>
          <div className='social-icons'>
            <Image src='/imgs/etc/facebook.png' width={40} height={40} alt='google' />
          </div>
          <div className='social-icons'>
            <Image src='/imgs/etc/apple.png' width={40} height={40} alt='google' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
