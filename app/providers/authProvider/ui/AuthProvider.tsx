import React, { FC, memo, ReactNode } from 'react'

import { useRouter } from 'next/router'

import { useAuthMeQuery } from '../api/authMe'

import { useLoginMutation } from '@/features/authByEmail'
import { Loader } from '@/shared/ui/Loader/Loader'

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const router = useRouter()
  const { data: authData, isLoading } = useAuthMeQuery()

  if (isLoading) {
    return <Loader />
  }
  if (authData && authData.resultCode) {
    router.replace('/login')
  }

  return <>{children}</>
}
