import React from 'react'

import Image from 'next/image'

import cls from './NavigatePanel.module.scss'

import home from '@/public/home.svg'
import members from '@/public/members.svg'
import messages from '@/public/messages.svg'
import setting from '@/public/setting.svg'
import tasks from '@/public/tasks.svg'
import { Text, TextColorTheme, TextFontTheme } from '@/shared/ui/Text/Text'

const items = [
  { id: 1, src: home, alt: 'home icon', title: 'home' },
  { id: 2, src: members, alt: 'members icon', title: 'members' },
  { id: 3, src: messages, alt: 'messages icon', title: 'messages' },
  { id: 4, src: tasks, alt: 'tasks icon', title: 'tasks' },
  { id: 5, src: setting, alt: 'setting icon', title: 'setting' },
]

export const NavigatePanel = () => {
  return (
    <nav className={cls.Nav}>
      <ul>
        {items.map(el => (
          <li className={cls.item} key={el.id}>
            <Image src={el.src} alt={el.alt} />
            <Text tag={'span'} font={TextFontTheme.MEDIUM} color={TextColorTheme.GREY}>
              {el.title}
            </Text>
          </li>
        ))}
      </ul>
    </nav>
  )
}
