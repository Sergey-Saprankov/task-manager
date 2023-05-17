import React, { FC, ReactElement, ReactNode } from 'react'

import cls from './BaseLayout.module.scss'

import { StoreProvider } from '@/app/providers/storeProvider'
import { Header } from '@/widgets/Header/Header'
import { Sidebar } from '@/widgets/Sidebar/Sidebar'

interface BaseLayoutProps {
  children: ReactNode
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={cls.flex}>
        <Sidebar />
        {children}
      </div>
    </>
  )
}

export const getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>
}
