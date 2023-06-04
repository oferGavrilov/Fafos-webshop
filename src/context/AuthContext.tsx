import React, { ReactNode, useContext, useEffect, useMemo, useState, createContext } from 'react'

import {
      onAuthStateChanged, signInWithPopup, User, getAuth,
      GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword,
      FacebookAuthProvider
} from 'firebase/auth'

import { toast } from 'react-toastify'
import { useAuthState } from 'react-firebase-hooks/auth'
import { IUser } from '@models/user.model'
import { initFirebase } from '../firebase/firebase'

interface AuthContextProps {
      currentUser: User | null,
      loading: boolean,
      socialSignIn: (platform: string) => Promise<void>,
      signOut?: () => void,
      isAdmin: () => boolean,
      signupWithCredentials?: ({ email, password }: IUser) => Promise<void>,
      signInWithCredentials?: ({ email, password }: IUser) => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({
      currentUser: null,
      loading: true,
      signOut: () => { },
      isAdmin: () => false,
      socialSignIn: async () => { },
      signupWithCredentials: async () => { },
      signInWithCredentials: async () => { }
})

export function useAuth () {
      return useContext(AuthContext)
}

export function AuthProvider ({ children }: { children: ReactNode }) {
      const [currentUser, setCurrentUser] = useState<User | null>(null)
      initFirebase()
      const auth = getAuth()
      const googleProvider = new GoogleAuthProvider()
      const facebookProvider = new FacebookAuthProvider()
      const [user, loading] = useAuthState(auth)

      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, user => {
                  if (user) setCurrentUser(user)
                  else setCurrentUser(null)
            })
            return () => unsubscribe()
      }, [])

      async function socialSignIn (platform: string): Promise<void> {
            let res = null
            try {
                  switch (platform) {
                        case 'google':
                              res = await signInWithPopup(auth, googleProvider)
                              setCurrentUser(res.user)
                              break
                        case 'facebook':
                              res = await signInWithPopup(auth, facebookProvider)
                              setCurrentUser(res.user)
                              break
                        case 'apple':
                              break
                        default:
                              break
                  }
            } catch (error) {
                  console.log(error)
            }
      }

      function isAdmin (): boolean {
            const adminId = process.env.NEXT_PUBLIC_ADMIN_ID
            return currentUser?.uid === adminId
      }

      async function signupWithCredentials ({ email, password }: IUser) {
            await createUserWithEmailAndPassword(auth, email, password)
      }

      async function signInWithCredentials ({ email, password }: IUser) {
            await signInWithEmailAndPassword(auth, email, password)
      }

      function signOut (): void {
            try {
                  auth.signOut()
                  toast.success("Logout success.")
            } catch (error) {
                  toast.error("Sign out failed, please try again.")
                  console.log(error)
            }
      }

      const memoedValue = useMemo(
            () => ({
                  loading,
                  currentUser,
                  socialSignIn,
                  signOut,
                  isAdmin,
                  signupWithCredentials,
                  signInWithCredentials
            }),
            [currentUser, loading]
      )

      return (
            <AuthContext.Provider value={memoedValue}>
                  {children}
            </AuthContext.Provider>
      )
}
