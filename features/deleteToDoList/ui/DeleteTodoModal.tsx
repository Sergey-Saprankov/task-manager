import React, { useCallback } from 'react'

import { useDeleteTodoListMutation } from '../api/deleteTodoApi'

import {
  getErrorTitle,
  getTitle,
  setErrorTitle,
  setSuccess,
  setTitle,
} from '@/features/addTodoList'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { useAppSelector } from '@/shared/hooks/useAppSelector'
import { Button, ButtonThemeColor, ButtonThemeSize } from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'
import { Text, TextColorTheme, TextFontTheme } from '@/shared/ui/Text/Text'
import cls from 'features/deleteToDoList/ui/DeleteTodoModal.module.scss'

export const DeleteTodoModal = () => {
  const [addTodoList, { isSuccess, isError, error, isLoading }] = useDeleteTodoListMutation()
  const dispatch = useAppDispatch()
  const title = useAppSelector(getTitle)
  const titleError = useAppSelector(getErrorTitle)

  return <div></div>
}
