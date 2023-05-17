import React from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import cls from './Login.module.scss'

import { useAuthMeQuery } from '@/app/providers/authProvider'
import { LoginForm } from '@/features/authByEmail/ui/LoginForm'
import bg from '@/public/bg1.jpg'

const Login = () => {
  return (
    <div className={cls.Login}>
      <div className={cls.block}>
        <LoginForm />
      </div>
      <div style={{ width: '50vw', height: '100vh', position: 'relative' }}>
        <Image
          src={bg}
          alt={'background'}
          layout="fill"
          objectFit="cover"
          objectPosition="top left"
        />
      </div>
    </div>
  )
}

export default Login
