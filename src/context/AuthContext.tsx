/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode, useContext, useEffect, useMemo, useState, createContext } from 'react'

import { onAuthStateChanged, signInWithPopup, User, getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { IUser } from '@models/user.model'
import { initFirebase } from '../firebase/firebase'

interface AuthContextProps {
      currentUser: User | null,
      loading: boolean,
      googleSignIn?: () => Promise<void>,
      signOut?: () => void,
      isAdmin : () => boolean,
      signupWithCredentials?: (user: IUser) => Promise<void>,
      signInWithCredentials?: (user: IUser) => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({
      currentUser: null,
      loading: true,
      googleSignIn: async () => { },
      signOut: () => { },
      isAdmin: () => false,
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
      const provider = new GoogleAuthProvider()
      const [user, loading] = useAuthState(auth)

      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, user => {
                  if (user) setCurrentUser(user)
                  else setCurrentUser(null)
            })
            return () => unsubscribe()
      }, [])

      async function googleSignIn () {
            try {
                  await signInWithPopup(auth, provider)
            } catch (error) {
                  console.log(error)
            }
      }

      function isAdmin (): boolean {
            const adminId = 'xWI6uTLBiDdmOxV8oTfmMtreNtG3'
            return currentUser?.uid === adminId
      }

      async function signupWithCredentials ({ email, password }: IUser) {
            await createUserWithEmailAndPassword(auth, email, password)
      }

      async function signInWithCredentials ({ email, password }: IUser) {
            await signInWithEmailAndPassword(auth, email, password)
      }

      function signOut () {
            auth.signOut()
      }

      const memoedValue = useMemo(
            () => ({
                  loading,
                  currentUser,
                  googleSignIn,
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
