import React, { FormEvent, useCallback, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

import { User } from "firebase/auth";
import { useAuth } from '@context/AuthContext'
import AccountForm from '../components/login/AccountForm'
// import AddressForm from '../components/login/AddressForm'
// import UserForm from '../components/login/UserForm'
// import { useAuth } from '../context/AuthContext'
import { useMultiStepForm } from '../hooks/useMultiStepForm'
import { userService } from '../services/user.service'

function Login () {
  const [isLogin, setIsLogin] = useState(false)
  const [credentials, setCredentials] = useState(userService.getEmptyUser())
  const router = useRouter()
  
  const updateFields = useCallback((fields: Partial<User>) => {
    setCredentials(prev => ({ ...prev, ...fields }))
  }, [])

  const { step, currentStep, steps, isFirstStep, isLastStep, onBack, onNext } = useMultiStepForm(isLogin ?
    [<AccountForm key={1} data={credentials} updateFields={updateFields} />] :
    [<AccountForm key={2} data={credentials} updateFields={updateFields} />])

  const {loading , googleSignIn} = useAuth()

  if(loading) return <h1>Loading...</h1>
 
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
    console.log(credentials)
    if (!isLastStep) return onNext()
    if (isLogin) signIn()
    else signUp()
    return router.push('/')
  }

  async function signIn () {
    try {
      console.log('signIn', credentials)
      // await userService.signIn(credentials)
    } catch (error) {
      console.log(error)
    }
  }

  async function signUp () {
    try {
      console.log('signUp', credentials)
      // await createUser(credentials.email, credentials.password)
    } catch (error) {
      console.log(error)
    }
  }

  // function updateFields (fields: Partial<FormData>) {
  //   setCredentials(prev => ({ ...prev, ...fields }))
  // }
 


  // [<UserForm data={credentials} updateFields={updateFields} />, <AddressForm data={credentials} updateFields={updateFields} />,
  return (
    <section className='login-page'>
      <div className='animate-wrapper max-w-3xl w-[90%] text-[#242424] mt-10 relative mx-auto'>
        <form onSubmit={onSubmit} className=''>
          <h2 className='text-center font-pangolin text-xl tracking-wide py-4'>{isLogin ?'Login' : 'Signup' }</h2>
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
