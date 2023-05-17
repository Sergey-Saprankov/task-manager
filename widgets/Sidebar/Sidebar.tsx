import React from 'react'

import cls from './Sidebar.module.scss'

import { NavigatePanel } from '@/widgets/NavigatePanel/NavigatePanel'
import { NavTodoLists } from '@/widgets/NavTodoLists'

export const Sidebar = () => {
  return (
    <aside className={cls.Sidebar}>
      <NavigatePanel />
      <NavTodoLists />
    </aside>
  )
}
