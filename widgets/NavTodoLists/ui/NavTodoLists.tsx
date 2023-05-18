import React, { FC, memo, useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import { getTodos, useGetTodosQuery } from '../api/todoListsApi'

import cls from './NavTodoLists.module.scss'

import { rtkApi } from '@/api/rtkApi'
import { Modal } from '@/entities/TodoList/ui/Modal/Modal'
import { AddTodoModal } from '@/features/addTodoList'
import add from '@/public/add-square.svg'
import { useAppSelector } from '@/shared/hooks/useAppSelector'
import { classNames } from '@/shared/lib/classNames'
import { Button, ButtonThemeSize } from '@/shared/ui/Button/Button'
import { NavLink } from '@/shared/ui/NavLInk/NavLink'
import { Text, TextColorTheme, TextFontTheme } from '@/shared/ui/Text/Text'

interface NavTodoListsProps {
  className?: string
}

export const NavTodoLists: FC<NavTodoListsProps> = memo(({ className = '' }) => {
  const { data } = useGetTodosQuery()
  const { asPath } = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <ul className={classNames(cls.NavTodoLists, {}, [className])}>
        <div className={cls.addToDoContainer}>
          <Text tag={'span'} font={TextFontTheme.BOLD} color={TextColorTheme.GREY}>
            my project
          </Text>
          <Button onClick={() => setIsOpen(true)} size={ButtonThemeSize.CLEAR}>
            <Image src={add} alt={'icon add todo list'} />
          </Button>
        </div>
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
      <Modal callBack={setIsOpen} isOpen={isOpen}>
        <AddTodoModal />
      </Modal>
    </>
  )
})
