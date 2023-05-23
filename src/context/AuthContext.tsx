/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode, useContext, useEffect, useMemo, useState, createContext } from 'react'

import { onAuthStateChanged, User, signInWithPopup, getAuth, GoogleAuthProvider } from 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { initFirebase } from '../firebase/firebase'

interface AuthContextProps {
      currentUser: User | null,
      loading: boolean,
      googleSignIn?: () => Promise<void>,
      signOut?: () => void
      // createUser: (email: string, password: string) => Promise<any>
}

const AuthContext = createContext<AuthContextProps>({
      currentUser: null,
      loading: true,
      googleSignIn: async () => {},
      signOut: () => {}
      // createUser: async () => { }
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

      async function googleSignIn() {
            try {
                  await signInWithPopup(auth, provider)
            } catch (error) {
                  console.log(error)
            }
      }

      function signOut() {
            auth.signOut()
      }

      const memoedValue = useMemo(
            () => ({
                  loading,
                  currentUser,
                  googleSignIn,
                  signOut
            }),
            [currentUser, loading]
      )

      return (
            <AuthContext.Provider value={memoedValue}>
                  {children}
            </AuthContext.Provider>
      )
}
