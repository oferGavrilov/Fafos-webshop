import { useAuth } from '@context/AuthContext'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { toast } from 'react-toastify'

export default function EasyLogin () {
      const router = useRouter()
      const { googleSignIn } = useAuth()

      async function signInWithGoogle () {
            try {
                  await googleSignIn()
                  toast.success("Login with google success.")
                  router.push('/user')
            } catch (err) {
                  toast.error("Login with google failed, please try again.")
            }
      }
      return (
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
      )
}
