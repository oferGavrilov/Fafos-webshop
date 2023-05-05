import AccountForm from '@/components/login/AccountForm'
import AddressForm from '@/components/login/AddressForm'
import UserForm from '@/components/login/UserForm'
import { useMultiStepForm } from '@/hooks/useMultiStepForm'
import { userService } from '@/services/user.service'
import { useRouter } from 'next/router'
import React, { FormEvent, useState } from 'react'

function login() {
  const [isLogin, setIsLogin] = useState(false)
  const [credentials, setCredentials] = useState(userService.getEmptyUser())

  const router = useRouter()

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    console.log(credentials)
    if (!isLastStep) return onNext()
    router.push('/')
  }

  function updateFields(fields: Partial<FormData>) {
    setCredentials(prev => ({ ...prev, ...fields }))
  }

  const { step, currentStep, steps, isFirstStep, isLastStep, onBack, onNext } = useMultiStepForm(isLogin ?
    [<AccountForm data={credentials} updateFields={updateFields} />] :
    [<UserForm data={credentials} updateFields={updateFields} />, <AddressForm data={credentials} updateFields={updateFields} />, <AccountForm data={credentials} updateFields={updateFields} />])

  return (
    <section className='login-page'>
      <div className='animate-wrapper max-w-3xl w-[90%] text-[#242424] relative mx-auto'>
        <form onSubmit={onSubmit} className=''>
          {step}
          {!isLogin && <div className='absolute top-2 right-2'>
            {currentStep + 1} / {steps.length}
          </div>}
          <div className='h-full w-full px-6 pt-12 pb-3 flex items-end relative'>
            {!isFirstStep && <button type='button' className='login-btn left-7' onClick={onBack}>Back</button>}
            <button className='login-btn right-10'>{!isLastStep ? 'Next' : 'Submit'}</button>
          </div>
          <div className='text-center'>{!isLogin ? 'Already have account ?' : 'Not a member yet ? '} <span onClick={() => setIsLogin(!isLogin)} className='cursor-pointer underline underline-offset-2 text-sm text-[#726e6e] hover:text-[#242424]'>{!isLogin ? 'Login Here' : 'Sign up Here'}</span> </div>
        </form>
      </div>
    </section>
  )
}

export default login