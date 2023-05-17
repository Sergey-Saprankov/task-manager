import React, { FC, memo } from 'react'

import { useRouter } from 'next/router'

import { useGetTodosQuery } from '../api/todoListsApi'

import cls from './NavTodoLists.module.scss'

import { classNames } from '@/shared/lib/classNames'
import { NavLink } from '@/shared/ui/NavLInk/NavLink'

interface NavTodoListsProps {
  className?: string
}

export const NavTodoLists: FC<NavTodoListsProps> = memo(({ className = '' }) => {
  const { data } = useGetTodosQuery()
  const { asPath } = useRouter()

  return (
    <ul className={classNames(cls.NavTodoLists, {}, [className])}>
      {data?.map(t => {
        const mods = {
          [cls.isActive]: `/${t.id}` === asPath,
        }

        return (
          <li className={classNames(cls.item, mods, [])} key={t.id}>
            <NavLink href={`/${t.id}`} text={t.title} />
          </li>
        )
      })}
    </ul>
  )
})
