import { useAuth } from '@context/AuthContext'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function Admin () {
  const { isAdmin } = useAuth()
  const router = useRouter()
  useEffect(() => {
    if (!isAdmin()) router.push('/')
  },[])
  return (
    <div>Admin</div>
  )
}
