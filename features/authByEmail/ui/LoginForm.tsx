import React, { useCallback } from 'react'

import { is } from 'immutable'
import { useRouter } from 'next/router'

import cls from './LoginForm.module.scss'

import {
  getEmail,
  getPassword,
  setEmail,
  setErrorEmail,
  setErrorPassword,
  setPassword,
  getErrorEmail,
  getErrorPassword,
  getIsChecked,
  setChecked,
  useLoginMutation,
} from '@/features/authByEmail'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { useAppSelector } from '@/shared/hooks/useAppSelector'
import { Button, ButtonThemeColor, ButtonThemeSize } from '@/shared/ui/Button/Button'
import { CheckBox } from '@/shared/ui/CheckBox/CheckBox'
import { Input } from '@/shared/ui/Input/Input'
import { Text, TextColorTheme, TextFontTheme } from '@/shared/ui/Text/Text'

export const LoginForm = () => {
  const [login, { data, error, isSuccess, status }] = useLoginMutation()
  const router = useRouter()
  const dispatch = useAppDispatch()
  const email = useAppSelector(getEmail)
  const password = useAppSelector(getPassword)
  const errorPassword = useAppSelector(getErrorPassword)
  const errorEmail = useAppSelector(getErrorEmail)
  const isChecked = useAppSelector(getIsChecked)

  if (data && !data.resultCode) {
    router.replace('/')
  }

  const onChangeEmail = useCallback(
    (value: string) => {
      if (value.length >= 3) dispatch(setErrorEmail(null))
      dispatch(setEmail(value))
    },
    [dispatch, email]
  )

  const onChangePassword = useCallback(
    (value: string) => {
      if (value.length >= 3) dispatch(setErrorPassword(null))
      dispatch(setPassword(value))
    },
    [dispatch, password]
  )

  const onChangeChecked = useCallback(
    (value: boolean) => {
      dispatch(setChecked(value))
    },
    [dispatch, isChecked]
  )

  const onBlurPassword = useCallback(() => {
    if (password.length < 3) {
      dispatch(setErrorPassword('Invalid password'))
    } else {
      dispatch(setErrorPassword(null))
    }
  }, [dispatch, password])

  const onBlurEmail = useCallback(() => {
    if (email.length < 5) {
      dispatch(setErrorEmail('Invalid user name'))
    } else {
      dispatch(setErrorEmail(null))
    }
  }, [dispatch, email])
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!errorEmail && !errorPassword) {
      login({ email, password, rememberMe: isChecked })
    }
  }

  return (
    <div className={cls.LoginForm}>
      {/*<div className={cls.opacity}></div>*/}
      <form className={cls.form} onSubmit={handleSubmit}>
        <Text
          className={cls.mb20}
          tag={'h2'}
          color={TextColorTheme.DARK}
          font={TextFontTheme.FONT_SEMI_BOLD_XL}
        >
          Login
        </Text>
        <Text
          className={cls.mb50}
          tag={'p'}
          font={TextFontTheme.FONT_SEMI_BOLD_L}
          color={TextColorTheme.DARK}
        >
          Welcome onboard with us!
        </Text>
        <Input
          onChange={onChangeEmail}
          error={errorEmail}
          onBlur={onBlurEmail}
          value={email}
          title={'Email'}
          className={cls.input}
        />
        <Input
          onChange={onChangePassword}
          error={errorPassword}
          onBlur={onBlurPassword}
          value={password}
          title={'Password'}
          className={cls.input}
        />
        <CheckBox
          onChangeChecked={onChangeChecked}
          value={isChecked}
          height={'20px'}
          width={'20px'}
          label={'Remember me'}
        />
        <Button
          type={'submit'}
          className={cls.mt50}
          size={ButtonThemeSize.EXTRA_LARGE}
          color={ButtonThemeColor.PRIMARY}
        >
          <Text tag={'span'} font={TextFontTheme.FONT_SEMI_BOLD_L} color={TextColorTheme.LIGHT}>
            Log In
          </Text>
        </Button>
      </form>
    </div>
  )
}
