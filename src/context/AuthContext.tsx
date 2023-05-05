import React, { ReactNode, useContext, useState } from 'react'
import app, { auth } from '../../firebase'

const AuthContext = React.createContext({})

interface Props {
      children: ReactNode
}

export function useAuth() {
      return useContext(AuthContext)
}

export function AuthProvider({ children }: Props) {
      const [currentUser, setCurrentUser] = useState(null)

      const value = {
            currentUser
      }

    

      return (
            <AuthContext.Provider value={value}>
                  {children}
            </AuthContext.Provider>
      )
}
