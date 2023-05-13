import React, { FC, memo, ReactNode } from 'react'

import Image from 'next/image'

import cls from './SearchInput.module.scss'

import search from '@/public/search.svg'
import { classNames } from '@/shared/lib/classNames'

interface SearchInputProps {
  className?: string
  placeholder: string
}

export const SearchInput: FC<SearchInputProps> = memo(({ className = '', placeholder = '' }) => {
  return (
    <div className={cls.inputContainer}>
      <Image className={cls.image} src={search} alt={'search icon'} width={22} height={22} />
      <input
        placeholder={placeholder}
        type="search"
        className={classNames(cls.SearchInput, {}, [className])}
      />
    </div>
  )
})
