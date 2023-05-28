import React, {  useState } from 'react'
import { useRouter } from 'next/router'
import { TextField } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useAuth } from '@context/AuthContext'
import { toast } from 'react-toastify'
import LockIcon from '@mui/icons-material/Lock'
import { IUser } from '../../models/user.model'
import Button from '../custom/Button'

interface Props {
      data: IUser
}

function AccountForm ({ data }: Props) {
      const [isLogin, setIsLogin] = useState(true)
      const router = useRouter()
      const { signInWithCredentials, signupWithCredentials } = useAuth()

      const validationSchema = yup.object({
            email: yup.string()
                  .email('Invalid email address')
                  .required('Email is required'),
            password: yup.string()
                  .min(6, 'Password must be at least 6 characters')
                  .required('Password is required'),
      })

      const formik = useFormik({
            initialValues: {
                  email: data.email,
                  password: data.password,
            },
            validationSchema,
            onSubmit: values => {
                  onSubmit(values)
            }
      })

      function onSubmit (data: IUser) {
            if (isLogin) return signIn(data)
            return signUp(data)
      }

      async function signIn (data: IUser) {
            try {
                  await signInWithCredentials(data)
                  router.push('/user')
                  toast.success("Login success.")
            } catch (error) {
                  toast.error('Incorrect email or password. Please try again.')
                  console.log(error)
            }
      }

      async function signUp (data: IUser) {
            try {
                  await signupWithCredentials(data)
                  router.push('/user')
                  toast.success("Signup success.")
            } catch (error) {
                  toast.error('Signup failed. Please try again.')
                  console.log(error)
            }
      }


      return (
            <form onSubmit={formik.handleSubmit} className=' max-w-3xl  pt-2 pb-6 px-6 m-3 md:mx-auto rounded-3xl'>
                  <LockIcon style={{ fontSize: 100 , display:'block', margin:'auto' , color:'#242424' }} />
                  <h2 className='text-center font-pangolin text-2xl md:text-3xl tracking-wide py-4'>{isLogin ? 'Login' : 'Signup'}</h2>
                  <TextField fullWidth id='email' name='email' label='Email' margin='normal' variant='filled'  className='mb-4' value={formik.values.email} onChange={formik.handleChange} error={formik.touched.email && Boolean(formik.errors.email)} helperText={formik.touched.email && formik.errors.email} />
                  <TextField fullWidth id='password' type='password' name='password' label='Password' margin='normal' variant='filled' className='mb-4' value={formik.values.password} onChange={formik.handleChange} error={formik.touched.password && Boolean(formik.errors.password)} helperText={formik.touched.password && formik.errors.password} />
                  {/* <button type='submit' className='flow-btn w-full mt-4 mb-2 !border-2 !border-dark-gray before:!bg-dark-gray transition-colors duration-200 hover:!text-white'>Submit</button> */}
                  <Button buttonType='submit' backgroundColor='bg-dark-gray' width='100%' margin='12px 0' borderWidth='2px' borderColor='#6c757d' color='white' text='Submit' />
                  <div className='text-center my-2'>{!isLogin ? 'Already have account ?' : 'Not a member yet ? '} <span role='presentation' onClick={() => setIsLogin(!isLogin)} className='cursor-pointer underline underline-offset-2 text-sm text-[#726e6e] hover:text-[#242424] px-1'>{!isLogin ? 'Login Here' : 'Sign up Here'}</span> </div>
            </form>
      )
}

export default AccountForm