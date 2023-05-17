import React from 'react'

import Image from 'next/image'

import cls from './Header.module.scss'

import { User } from '@/entities/User/ui/User'
import calendar from '@/public/calendar-2.svg'
import icon from '@/public/icon.png'
import message from '@/public/message-question.svg'
import notification from '@/public/notification.svg'
import { classNames } from '@/shared/lib/classNames'
import { SearchInput } from '@/shared/ui/SearchInput/SearchInput'
import { Text, TextColorTheme, TextFontTheme } from '@/shared/ui/Text/Text'

export const Header = () => {
  return (
    <header className={cls.Header}>
      <div className={cls.innerWrapper}>
        <div className={classNames(cls.logoContainer, {}, [cls.mr146])}>
          <Image className={cls.mr9} width={24} height={24} alt={'icon'} src={icon} />
          <Text tag={'p'} color={TextColorTheme.DARK} font={TextFontTheme.FONT_SEMI_BOLD_L}>
            Project M.
          </Text>
        </div>
        <SearchInput placeholder={'Search for anything...'} />
        <div className={cls.userContainer}>
          <ul className={cls.notifications}>
            <li>
              <Image className={cls.mr24} src={calendar} alt={'calendar'} width={24} height={24} />
            </li>
            <li>
              <Image className={cls.mr24} src={message} alt={'message'} width={24} height={24} />
            </li>
            <li>
              <Image src={notification} alt={'notification'} width={24} height={24} />
            </li>
          </ul>

          <User />
        </div>
      </div>
    </header>
  )
}
