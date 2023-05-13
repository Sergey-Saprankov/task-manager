import React, { ChangeEvent, FC, memo, useState } from 'react'

import Image from 'next/image'

import cls from './CheckBox.module.scss'

import check from '@/public/checkbox.svg'
import { classNames } from '@/shared/lib/classNames'

interface CheckBoxProps {
  className?: string
  label: string
  width: string
  height: string
  value: boolean
  onChangeChecked: (value: boolean) => void
}

export const CheckBox: FC<CheckBoxProps> = memo(
  ({ className = '', label, width, height, value, onChangeChecked }) => {
    const onClickHandler = () => {
      onChangeChecked(!value)
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChangeChecked(e.currentTarget.checked)
    }

    return (
      <div className={cls.container}>
        <div
          onClick={onClickHandler}
          style={{ width: width, height: height }}
          className={classNames(cls.CheckBox, {}, [className])}
        >
          {value && <Image src={check} alt={'check'} width={10} height={10} />}
        </div>
        <label className={cls.label}>
          {label}

          <input
            checked={value}
            onChange={onChange}
            className={cls.input}
            id={'check'}
            type="checkbox"
          />
        </label>
      </div>
    )
  }
)
