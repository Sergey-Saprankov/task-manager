import React, { FC, ReactNode } from 'react'

import { useRouter } from 'next/router'

import { useAuthMeQuery } from '../api/authMe'

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const router = useRouter()
  const { data, isLoading } = useAuthMeQuery()

  if (data && data.resultCode) {
    router.push('/login')
  }

  return <>{children}</>
}
