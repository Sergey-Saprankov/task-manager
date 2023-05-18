import React, { FC, memo, MouseEvent, ReactNode, useEffect, useState } from 'react'

import cls from '@/entities/TodoList/ui/Modal/Modal.module.scss'
import { getAddToDoSuccess } from '@/features/addTodoList'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { useAppSelector } from '@/shared/hooks/useAppSelector'
import useDebounce from '@/shared/hooks/useDebounce'
import { classNames } from '@/shared/lib/classNames'
import { Button, ButtonThemeSize } from '@/shared/ui/Button/Button'

interface ModalProps {
  children: ReactNode
  isOpen: boolean
  callBack: (value: boolean) => void
}

export const Modal: FC<ModalProps> = memo(({ children, isOpen, callBack }) => {
  const addToDoSuccess = useAppSelector(getAddToDoSuccess)
  const dispatch = useAppDispatch()
  const [isClosing, setIsClosing] = useState(false)
  const debouncedValue = useDebounce<boolean>(isClosing, 500)

  useEffect(() => {
    if (debouncedValue) {
      setIsClosing(false)
      callBack(false)
    }
  }, [debouncedValue])

  const mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing || addToDoSuccess,
  }

  const onClickContentHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return (
    <div className={classNames(cls.Modal, mods, [])}>
      <div onClick={() => setIsClosing(true)} className={cls.overlay}>
        <div onClick={onClickContentHandler} className={cls.content}>
          {children}
          <Button size={ButtonThemeSize.CLEAR} onClick={() => setIsClosing(true)}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  )
})
