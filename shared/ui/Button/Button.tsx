import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC, memo } from 'react'

import cls from './Button.module.scss'

import { classNames } from '@/shared/lib/classNames'

export enum ButtonThemeSize {
  CLEAR = 'clear',
  EXTRA_LARGE = 'extraLarge',
  LARGE = 'large',
  Medium = 'medium',
  SMALL = 'small',
}

export enum ButtonThemeColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size?: ButtonThemeSize
  className?: string
  color?: ButtonThemeColor
}
export const Button: FC<ButtonProps> = memo(
  ({ className = '', size = 'medium', color = '', type = 'button', ...otherProps }) => {
    return (
      <button
        {...otherProps}
        className={classNames(cls.Button, {}, [cls[size], cls[color], className])}
      ></button>
    )
  }
)
