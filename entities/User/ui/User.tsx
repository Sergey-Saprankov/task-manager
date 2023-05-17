import React, { FC, memo } from 'react'

import Image from 'next/image'

import cls from './User.module.scss'

import { useAuthMeQuery } from '@/app/providers/authProvider'
import avatar from '@/public/userAvatar.png'
import { classNames } from '@/shared/lib/classNames'
import { Text, TextColorTheme, TextFontTheme } from '@/shared/ui/Text/Text'

interface UserProps {
  className?: string
}

export const User: FC<UserProps> = memo(({ className = '' }) => {
  const { data: authResponseData } = useAuthMeQuery()

  if (!authResponseData) return null
  const {
    data: { email, login, id },
  } = authResponseData

  return (
    <div className={classNames(cls.User, {}, [className])}>
      <Text tag={'p'} color={TextColorTheme.DARK} font={TextFontTheme.FONT_SEMI_BOLD_L}>
        {login}
      </Text>
      <Image src={avatar} alt={'user avatar'} width={38} height={38} />
    </div>
  )
})
