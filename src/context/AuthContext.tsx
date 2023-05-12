import React, { ReactNode, useContext, useMemo, useState } from 'react'
import { createContext } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth'
import { auth } from '../../firebase'

interface AuthContextProps {
      currentUser: User | null,
      createUser: (email: string, password: string) => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({
      currentUser : null,
      createUser: async () => {}
})

export function useAuth() {
      return useContext(AuthContext)
}

export function AuthProvider({ children }: { children: ReactNode }) {
      const [currentUser, setCurrentUser] = useState<any>(null)

      const memoedValue = useMemo(
            () => ({
                  currentUser,
                  createUser
            }),
            [currentUser]
      )

      async function createUser(email: string, password: string) {
            return createUserWithEmailAndPassword(auth, email, password)
      }

      return (
            <AuthContext.Provider value={memoedValue}>
                  {children}
            </AuthContext.Provider>
      )
}
