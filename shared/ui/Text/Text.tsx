import { FC, memo, ReactNode } from 'react'

import cls from './Text.module.scss'

import { classNames } from '@/shared/lib/classNames'

export enum TextColorTheme {
  DARK = 'dark',
  LIGHT = 'light',
  ERROR = 'error',
}

export enum TextFontTheme {
  FONT_SEMI_BOLD_L = 'fontSemiBold-l',
  FONT_SEMI_BOLD_XL = 'fontSemiBold-xl',
  FONT_REG = 'regular',
}

interface TextProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p'
  children: ReactNode
  className?: string
  font?: TextFontTheme
  color?: TextColorTheme
}

export const Text: FC<TextProps> = memo(
  ({ children, tag, color = '', font = '', className = '' }) => {
    const Tag = tag

    return (
      <Tag className={classNames(cls.Text, {}, [className, cls[color], cls[font]])}>{children}</Tag>
    )
  }
)
