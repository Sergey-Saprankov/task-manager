import React, { useCallback } from 'react'

import { useAddTodoListMutation } from '../api/addTodoApi'

import cls from './AddTodoModal.module.scss'

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

export const AddTodoModal = () => {
  const [addTodoList, { isSuccess, isError, error, isLoading }] = useAddTodoListMutation()
  const dispatch = useAppDispatch()
  const title = useAppSelector(getTitle)
  const titleError = useAppSelector(getErrorTitle)

  const onChangeTitle = useCallback(
    (value: string) => {
      if (title.length > 0) dispatch(setErrorTitle(null))
      dispatch(setTitle(value))
    },
    [dispatch, title]
  )

  const onBlurTitle = useCallback(() => {
    if (title.length < 1) {
      dispatch(setErrorTitle('Invalid title'))
    } else {
      dispatch(setErrorTitle(null))
    }
  }, [dispatch, title])
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addTodoList(title)
    dispatch(setSuccess(isSuccess))
  }

  return (
    <form className={cls.AddTodoModal} onSubmit={handleSubmit}>
      <Text
        className={cls.title}
        tag={'h2'}
        color={TextColorTheme.DARK}
        font={TextFontTheme.FONT_SEMI_BOLD_L}
      >
        Add new To do list
      </Text>
      <Input
        onChange={onChangeTitle}
        onBlur={onBlurTitle}
        value={title}
        error={titleError}
        title={'Title'}
        className={cls.input}
      />
      <Button
        disabled={!!titleError}
        className={cls.btn}
        size={ButtonThemeSize.EXTRA_LARGE}
        color={ButtonThemeColor.SECONDARY}
      >
        Send
      </Button>
      {error && (
        <Text
          className={cls.error}
          tag={'span'}
          color={TextColorTheme.ERROR}
          font={TextFontTheme.FONT_REG}
        >
          {String(error)}
        </Text>
      )}
    </form>
  )
}
