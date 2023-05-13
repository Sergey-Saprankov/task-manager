import React, { ChangeEvent, FC, InputHTMLAttributes, memo, ReactNode } from 'react'

import cls from './Input.module.scss'

import { classNames } from '@/shared/lib/classNames'
import { Text, TextColorTheme, TextFontTheme } from '@/shared/ui/Text/Text'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  children?: ReactNode
  value?: string
  onChange?: (value: string) => void
  error?: string | null
}

export const Input: FC<InputProps> = memo(
  ({
    className = '',
    children,
    value,
    onChange,
    error,
    title,
    placeholder = '',
    type = 'text',
    ...otherProps
  }) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.currentTarget.value)
    }

    return (
      <label className={classNames(cls.label, {}, [className])}>
        {title}

        <input
          autoComplete={'off'}
          placeholder={placeholder}
          value={value}
          type={type}
          className={classNames(cls.Input, {}, [])}
          onChange={onChangeHandler}
          {...otherProps}
        />
        {error && (
          <Text
            className={cls.error}
            tag={'span'}
            font={TextFontTheme.FONT_REG}
            color={TextColorTheme.ERROR}
          >
            {error}
          </Text>
        )}
      </label>
    )
  }
)
