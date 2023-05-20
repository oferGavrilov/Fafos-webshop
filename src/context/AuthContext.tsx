import React, { ReactNode, useContext, useEffect, useMemo, useState } from 'react'
import { createContext } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth'
import {  } from '../firebase/firebase'

interface AuthContextProps {
      currentUser: User | null,
      // createUser: (email: string, password: string) => Promise<any>
}

const AuthContext = createContext<AuthContextProps>({
      currentUser: null,
      // createUser: async () => { }
})

export function useAuth () {
      return useContext(AuthContext)
}

export function AuthProvider ({ children }: { children: ReactNode }) {
      const [currentUser, setCurrentUser] = useState<User | null>(null)
      
      // useEffect(() => {
      //       const unsubscribe = onAuthStateChanged(auth, user => {
      //             if (user) setCurrentUser(user)
      //             else setCurrentUser(null)
      //       })
      //       return () => unsubscribe
      // }, [])

      const memoedValue = useMemo(
            () => ({
                  currentUser,
            }),
            [currentUser]
      )



      return (
            <AuthContext.Provider value={memoedValue}>
                  {children}
            </AuthContext.Provider>
      )
}
